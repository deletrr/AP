# aparecida

https://ap-lyart.vercel.app/#

-----------------------------------------------------------------------------------------------------------------
#
-----------------------------------------------------------------------------------------------------------------
#
---------------------------------------------------------------------------------------------------------------

Este projeto é uma API construída usando **Java, Java Spring, Migrações Flyway, PostgresSQL como banco de dados, e Spring Security e JWT para controle de autenticação.**

## Instalação

1. Instale as dependências com o Maven.
2. Instale o [PostgresSQL](https://www.postgresql.org/).

## Uso

1. Inicie a aplicação com o Maven.
2. A API estará acessível em http://localhost:8080.

## Endpoints da API
A API fornece os seguintes endpoints:

```markdown
GET /- Recupera uma lista de todos os *. (todos os usuários autenticados)

POST /Usuario - Registra um novo *, (acesso ADMIN requerido).
------------------------------------------------
{
    "nome": "João Silva",
    "email": "joao.silva@email.com",
    "senha": "minhaSenhacriptografada",
    "tipo_usuario": "ADM"
}

<<<<<<< HEAD
POST /Usuario/login - Realiza login no aplicativo.

=======
------------------------------------------------

POST /Usuario/login - Realiza login no aplicativo.


POST /Usuario - Registra um novo usuário no aplicativo.
```

## Autenticação
A API utiliza o Spring Security para controle de autenticação. As seguintes funções estão disponíveis:

```
USER -> Função padrão para usuários logados.
ADMIN -> Função de administrador para gerenciar parceiros (registrar novos parceiros).
```
## Banco de Dados
O projeto utiliza o [PostgresSQL](https://www.postgresql.org/) como banco de dados.
#
>>>>>>> mude as configuraçoes do banco em application.proerties
---------------------------------------------------------------------------------------------------------------


## Entidades e relacionamentos:

### Entidades (Tabelas)
- Usuario: Representa os usuários do sistema, que podem ser administradores ou coordenadores.
- Onibus: Representa os ônibus da frota.
- Poltrona: Representa as poltronas dentro de cada ônibus.
- Passageiro: Representa os passageiros que utilizam o serviço.
- Passagem: Representa as passagens compradas pelos passageiros.
- ListaEspera: Representa a lista de espera para as passagens.
- Embarque: Representa o processo de embarque dos passageiros.
### Relacionamentos
- usuario e Onibus: Um coordenador (tipo de usuário) é responsável por um ou mais ônibus. Relação de um para muitos.
- Onibus e Poltrona: Um ônibus possui muitas poltronas. Relação de um para muitos.
- Poltrona e Passagem: Uma poltrona pode ser reservada por uma única passagem. Relação de um para um.
- Passageiro e Passagem: Um passageiro pode comprar várias passagens. Relação de um para muitos.
- Passagem e ListaEspera: Uma passagem pode estar na lista de espera. Relação de um para muitos.
- Passagem e Embarque: Uma passagem pode ter um embarque associado. Relação de um para um.



---------------------------------------------------------------------------------------------------------------



## Formulario de pagamentos


## Endpoints

### **1. Criar uma nova venda (POST)**

**URL**: `localhost:8080/compras`

**Método HTTP**: `POST`

**Body da Requisição**:

```json
{
  "nomec": "professor filho da puta",
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


###Consultar, Atualizar ou Deletar uma venda (GET/PUT/DELETE)


URL: localhost:8080/compras/{id}

Método HTTP: GET, PUT, DELETE

Parâmetros:

{id}: ID único da venda, que pode ser obtido após a criação de uma nova venda.

GET: Consultar uma venda
Descrição: Recupera os detalhes da venda correspondente ao ID fornecido.

PUT: Atualizar uma venda
Descrição: Atualiza os detalhes de uma venda existente. Os parâmetros a serem atualizados devem ser passados no corpo da requisição.

DELETE: Deletar uma venda
Descrição: Remove o registro de venda correspondente ao ID fornecido.


------------------------------------------------------------------------------------

## Coordenador

## Endpoints

### 1. **Criar Coordenador (POST)**

**URL**: `/coordenadores`

**Método**: `POST`

**Descrição**: Cria um novo coordenador.

**Exemplo de Requisição (Body)**:

```json
{
    "nomeco": "João Silva",
    "numero_contato": "11123456789",
    "foto": "https://exemplo.com/foto_joao.jpg"
}
