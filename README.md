---

# Aparecida

Projeto disponível em: https://ap-lyart.vercel.app/  https://ap-lyart.vercel.app/administracao.html  

---

## Descrição do Projeto

Este projeto é uma API desenvolvida utilizando as seguintes tecnologias:

- **Java e Spring Boot**: Base do backend.
- **Flyway**: Gerenciamento de migrações de banco de dados.
- **MongoDB**: Banco de dados utilizado após migração.
- **Spring Security e JWT**: Controle de autenticação e autorização.

---

## Instalação e Configuração

### Pré-requisitos

1. Instale o [Java 17 ou superior](https://adoptium.net/).
2. Configure o Maven no ambiente.
3. Instale o [MongoDB](https://www.mongodb.com/try/download/community).

### Passos para Instalação

1. Clone o repositório.
2. Configure as propriedades do MongoDB no arquivo `application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/aparecida
   ```
3. Execute o comando do Maven para rodar a aplicação:
   ```bash
   mvn spring-boot:run
   ```
4. A aplicação estará disponível em [http://localhost:8080](http://localhost:8080).

---

## Endpoints

### **Usuário**

- **Registrar Usuário**  
  `POST /Usuario`  
  Descrição: Registra um novo usuário.  

- **Login**  
  `POST /Usuario/login`  
  Descrição: Realiza o login na aplicação.  

---

### **Assentos**

- **Listar Todos os Assentos**  
  `GET /assentos`  
  Descrição: Recupera a lista de todos os assentos disponíveis.

- **Reservar Assento**  
  `POST /assentos/{id}/reservar`  
  Descrição: Faz a reserva de um assento.

- **Excluir Assento**  
  `DELETE /assentos/excluir`  
  Descrição: Remove um assento.

- **Criar Assento**  
  `POST /assentos/criar`  
  Descrição: Adiciona um novo assento.

---

### **Compras**

- **Criar Compra**  
  `POST /compras`  
  Descrição: Cria um registro de compra.  

- **Listar Compras**  
  `GET /compras`  
  Descrição: Recupera todas as compras.  

- **Consultar Compra por ID**  
  `GET /compras/{id}`  
  Descrição: Recupera os detalhes de uma compra específica.  

- **Atualizar Compra**  
  `PUT /compras/{id}`  
  Descrição: Atualiza os dados de uma compra específica.  

- **Excluir Compra**  
  `DELETE /compras/{id}`  
  Descrição: Remove uma compra pelo ID.  

---

### **Coordenadores**

- **Listar Coordenadores**  
  `GET /coordenadores`  
  Descrição: Recupera a lista de coordenadores.  

- **Criar Coordenador**  
  `POST /coordenadores`  
  Descrição: Adiciona um novo coordenador.  

- **Consultar Coordenador por ID**  
  `GET /coordenadores/{id}`  
  Descrição: Obtém detalhes de um coordenador específico.  

- **Atualizar Coordenador**  
  `PUT /coordenadores/{id}`  
  Descrição: Atualiza as informações de um coordenador.  

- **Excluir Coordenador**  
  `DELETE /coordenadores/{id}`  
  Descrição: Remove um coordenador pelo ID.  

---

### **Ônibus**

- **Listar Ônibus**  
  `GET /onibus/onibus`  
  Descrição: Recupera todos os ônibus cadastrados.  

- **Consultar Ônibus por ID**  
  `GET /onibus/{id}`  
  Descrição: Obtém detalhes de um ônibus específico.  

- **Criar Ônibus**  
  `POST /onibus`  
  Descrição: Adiciona um novo ônibus.  

- **Atualizar Ônibus**  
  `PUT /onibus/{id}`  
  Descrição: Atualiza as informações de um ônibus.  

- **Excluir Ônibus**  
  `DELETE /onibus/{id}`  
  Descrição: Remove um ônibus pelo ID.  

---

### **Contato e Newsletter**

- **Criar Contato**  
  `POST /contato`  
  Descrição: Adiciona um novo registro de contato.

- **Excluir Contato por ID**  
  `DELETE /contato/{id}`  
  Descrição: Remove um contato pelo ID.

- **Criar Newsletter**  
  `POST /newsletter`  
  Descrição: Adiciona um novo cadastro para newsletter.

---

## Banco de Dados

A API migrou para o banco de dados **MongoDB**. Todas as configurações necessárias devem ser ajustadas no arquivo `application.properties`.

---

