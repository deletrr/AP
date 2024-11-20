CREATE TABLE Usuario (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100) NOT NULL,
    tipo_usuario VARCHAR(20) CHECK (tipo_usuario IN ('ADM', 'Coordenador'))
);

CREATE TABLE Onibus (
    id_onibus SERIAL PRIMARY KEY,
    modelo VARCHAR(50),
    placa VARCHAR(20),
    coordenador_id INT,
    FOREIGN KEY (coordenador_id) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Poltrona (
    id_poltrona SERIAL PRIMARY KEY,
    numero INT NOT NULL,
    id_onibus INT,
    disponivel BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_onibus) REFERENCES Onibus(id_onibus)
);

CREATE TABLE Passageiro (
    id_passageiro SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    documento VARCHAR(50),
    tipo_documento VARCHAR(50) CHECK (tipo_documento IN ('RG', 'CNH', 'Passaporte', 'CarteiraTrabalho', 'CertidaoNascimento', 'AutorizacaoJudicial')) NOT NULL,
    data_nascimento DATE
);

CREATE TABLE Passagem (
    id_passagem SERIAL PRIMARY KEY,
    id_poltrona INT,
    data_viagem DATE,
    destino VARCHAR(100),
    origem VARCHAR(100),
    id_passageiro INT,
    FOREIGN KEY (id_poltrona) REFERENCES Poltrona(id_poltrona),
    FOREIGN KEY (id_passageiro) REFERENCES Passageiro(id_passageiro)
);

CREATE TABLE ListaEspera (
    id_espera SERIAL PRIMARY KEY,
    id_passagem INT,
    id_passageiro INT,
    prioridade INT,
    FOREIGN KEY (id_passagem) REFERENCES Passagem(id_passagem),
    FOREIGN KEY (id_passageiro) REFERENCES Passageiro(id_passageiro)
);

CREATE TABLE Embarque (
    id_embarque SERIAL PRIMARY KEY,
    id_passagem INT,
    id_viagem INT,
    qr_code VARCHAR(255) UNIQUE,
    embarque_confirmado BOOLEAN DEFAULT FALSE,
    retorno_confirmado BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_passagem) REFERENCES Passagem(id_passagem)
);