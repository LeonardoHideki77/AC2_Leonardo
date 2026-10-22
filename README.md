# API de Clientes e Pedidos

API REST desenvolvida com Node.js e Express. Os dados ficam em arrays e objetos em memória e voltam ao estado inicial quando o servidor é reiniciado.

## Como executar

1. Abra o terminal nesta pasta.
2. Execute `npm install`.
3. Execute `npm start`.
4. A API ficará disponível em `http://localhost:3000`.

## Rotas

| Método | Endpoint | Ação |
| --- | --- | --- |
| GET | `/clientes` | Lista todos os clientes |
| GET | `/clientes/:id` | Busca um cliente pelo ID |
| GET | `/clientes/:id/pedidos` | Lista os pedidos de um cliente |
| PUT | `/clientes/:id` | Atualiza nome, idade e/ou cidade |
| POST | `/clientes/:id/pedidos` | Adiciona um pedido |
| GET | `/clientes/cidade/:cidade` | Lista clientes da cidade |
| DELETE | `/clientes/:id` | Remove um cliente |

Para atualizar, envie JSON, por exemplo: `{"nome":"Ana Souza","idade":29,"cidade":"São Paulo"}`.

Para adicionar pedido, envie JSON, por exemplo: `{"codigo":"P003","produto":"Mouse","quantidade":1}`.

## Testes no Postman ou Thunder Client

Com o servidor em execução, faça estas requisições e capture a tela mostrando método, URL e resposta:

1. `GET http://localhost:3000/clientes` — lista os clientes.
2. `GET http://localhost:3000/clientes/1` — busca o cliente de ID 1.
3. `GET http://localhost:3000/clientes/1/pedidos` — lista os pedidos do cliente 1.
4. `GET http://localhost:3000/clientes/cidade/São%20Paulo` — lista clientes de São Paulo.
5. `POST http://localhost:3000/clientes/1/pedidos` — em Body → raw → JSON, envie `{"codigo":"P003","produto":"Mouse","quantidade":1}`. Depois consulte novamente os pedidos para ver a inclusão.

Salve as capturas em uma pasta `prints` no projeto antes de publicá-lo no GitHub.

## Perguntas técnicas

1. **Qual é a função dos métodos HTTP utilizados?** GET consulta dados, POST cria/adiciona dados, PUT atualiza dados existentes e DELETE remove dados.
2. **Por que os dados em memória são temporários?** Porque ficam armazenados somente durante a execução do processo; ao encerrar ou reiniciar o servidor, o array volta ao estado inicial. Um banco de dados seria necessário para persistência.
