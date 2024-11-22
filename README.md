
---

# Aparecida

Acesse a aplicação: [Aparecida](https://ap-lyart.vercel.app/#)

---

## Sobre o Projeto

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Java** e **Spring Boot** como base.
- **Migrações Flyway** para controle de versionamento do banco de dados.
- **PostgreSQL** como banco de dados relacional.
- **Spring Security** e **JWT** para autenticação e autorização.

---

## Instalação

1. Certifique-se de ter o **Java** e o **Maven** instalados.
2. Instale o [PostgreSQL](https://www.postgresql.org/).
3. Configure o banco de dados no arquivo `application.properties`.

---

## Uso

1. Inicie a aplicação com o Maven:
   ```bash
   mvn spring-boot:run
   ```
2. A API estará acessível em: [http://localhost:8080](http://localhost:8080).

---

## Endpoints da API

### **1. Endpoints Gerais**

#### **Listar registros (GET)**  
- **Descrição:** Recupera uma lista de todos os registros.  
- **Acesso:** Usuários autenticados.  

#### **Criar registro de usuário (POST)**  
- **URL:** `/Usuario`  
- **Acesso:** Apenas administradores (ADMIN).  
- **Exemplo de Requisição:**
  ```json
  {
      "nome": "João Silva",
      "email": "joao.silva@email.com",
      "senha": "minhaSenhacriptografada",
      "tipo_usuario": "ADM"
  }
  ```

#### **Realizar Login (POST)**  
- **URL:** `/Usuario/login`  
- **Descrição:** Autentica o usuário no sistema.

---

## Autenticação

A API utiliza **Spring Security** com funções baseadas em papéis:

- **USER**: Padrão para usuários autenticados.  
- **ADMIN**: Administradores com permissões adicionais, como registrar parceiros.  

---

## Banco de Dados

O projeto usa [PostgreSQL](https://www.postgresql.org/). Certifique-se de configurar as credenciais no arquivo `application.properties`.

---

## Estrutura de Entidades e Relacionamentos

### **Entidades (Tabelas):**

1. **Usuario:** Representa usuários (administradores ou coordenadores).  
2. **Onibus:** Representa os ônibus da frota.  
3. **Poltrona:** Representa poltronas dos ônibus.  
4. **Passageiro:** Representa passageiros.  
5. **Passagem:** Representa as passagens adquiridas.  
6. **ListaEspera:** Gerencia passageiros em lista de espera.  
7. **Embarque:** Registra o processo de embarque.  

### **Relacionamentos:**

- **Usuário ↔ Ônibus:** Um coordenador gerencia um ou mais ônibus (1:N).  
- **Ônibus ↔ Poltronas:** Um ônibus possui várias poltronas (1:N).  
- **Poltrona ↔ Passagem:** Cada poltrona está associada a uma única passagem (1:1).  
- **Passageiro ↔ Passagem:** Um passageiro pode ter várias passagens (1:N).  
- **Passagem ↔ Lista de Espera:** Uma passagem pode estar em lista de espera (1:N).  
- **Passagem ↔ Embarque:** Cada passagem está associada a um único embarque (1:1).  

---

## Módulo de Pagamentos

### **1. Criar Venda (POST)**

- **URL:** `/compras`  
- **Exemplo de Requisição:**
  ```json
  {
      "nomec": "João",
      "endereco": "Rua das Flores, 123",
      "numero": "123",
      "cep": "12345678",
      "assento": "A12",
      "metodoPagamento": "Cartão de Crédito",
      "nomeVendedor": "Carlos Souza",
      "dataCompra": "2024-11-16",
      "horarioCompra": "14:30:00",
      "valorPago": 250.75,
      "cpf": "22345678901",
      "onibus": "22331dsd",
      "status": "cancelado"
  }
  ```

### **2. Gerenciar Vendas (GET/PUT/DELETE)**

- **URL:** `/compras/{id}`  
- **Parâmetros:**  
  - `{id}`: ID único da venda.  

#### Operações:
- **GET:** Consulta detalhes de uma venda.  
- **PUT:** Atualiza uma venda existente.  
- **DELETE:** Exclui uma venda pelo ID.  

---

## Coordenador

### **1. Criar Coordenador (POST)**

- **URL:** `/coordenadores`  
- **Descrição:** Registra um novo coordenador.  
- **Exemplo de Requisição:**
  ```json
  {
      "nomeco": "Ricardo",
      "numero_contato": "33333333333333",
      "foto": "/coordenadores_fotos/silhueta.jpg",
      "modelo": "Scania",
      "onibus_placa": "ABC5678",
      "numero_assentos": 50
  }
  ```

---
        "onibus_placa": "ABC5678",
        "numero_assentos": 50
    },
}
