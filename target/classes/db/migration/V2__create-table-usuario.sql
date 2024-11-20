-- Tabela de usuários
CREATE TABLE usuario (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    tipo_usuario VARCHAR(20) CHECK (tipo_usuario IN ('ADM', 'Coordenador'))
);

-- Tabela de coordenadores
CREATE TABLE coordenador (
    id SERIAL PRIMARY KEY,
    nomeco VARCHAR(255) NOT NULL,
    numero_contato VARCHAR(15) NOT NULL CHECK (numero_contato ~ '^\d{10,15}$'), -- Apenas números com 10 a 15 dígitos
    foto VARCHAR(255),
    modelo VARCHAR(50) NOT NULL,
    onibus_placa VARCHAR(20) UNIQUE NOT NULL,
    numero_assentos VARCHAR(255) NOT NULL
 
    
 
);

-- Tabela de assentos
CREATE TABLE assento (
    id SERIAL PRIMARY KEY,
    onibus_placa VARCHAR(20) NOT NULL,
    assento VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('disponivel', 'ocupado', 'pendente')),
    FOREIGN KEY (onibus_placa) REFERENCES coordenador(onibus_placa)
);

-- Tabela de compras
CREATE TABLE compra (
    id SERIAL PRIMARY KEY,
    nomec VARCHAR(255) NOT NULL,
    email VARCHAR(40) NOT NULL,
    contato VARCHAR(40) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    assento VARCHAR(255) NOT NULL,
    metodo_pagamento VARCHAR(50) NOT NULL,
    nome_vendedor VARCHAR(255) NOT NULL,
    data_compra DATE NOT NULL,
    horario_compra TIME NOT NULL,
    valor_pago NUMERIC(10, 2) NOT NULL CHECK (valor_pago > 0), -- Valor positivo
    cpf VARCHAR(14) NOT NULL,
    cep VARCHAR(8) NOT NULL,
    onibus VARCHAR(20) NOT NULL, -- Referência à placa do ônibus
    numero VARCHAR(15) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('pago', 'cancelado','pendente' ))
    
    
);

-- Funcoes e Triggers

CREATE OR REPLACE FUNCTION inserir_assentos_para_coordenador() 
RETURNS TRIGGER AS $$
BEGIN
  -- Loop para criar os assentos
  FOR i IN 1..NEW.numero_assentos LOOP
    INSERT INTO assento (onibus_placa, assento, status)
    VALUES (NEW.onibus_placa, i, 'disponivel');
  END LOOP;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

--Trigger

CREATE TRIGGER trigger_inserir_assentos
AFTER INSERT ON coordenador
FOR EACH ROW
EXECUTE FUNCTION inserir_assentos_para_coordenador();


--funcao

CREATE OR REPLACE FUNCTION atualizar_assento_ocupado()
RETURNS TRIGGER AS $$
BEGIN
    -- Atualiza o status do assento para 'ocupado' na tabela 'assento'
    UPDATE assento
    SET status = 'ocupado'
    WHERE assento.onibus_placa = NEW.onibus AND assento.assento = NEW.assento;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


--Trigger

CREATE TRIGGER trigger_atualizar_assento_ocupado
AFTER INSERT ON compra
FOR EACH ROW
EXECUTE FUNCTION atualizar_assento_ocupado();
