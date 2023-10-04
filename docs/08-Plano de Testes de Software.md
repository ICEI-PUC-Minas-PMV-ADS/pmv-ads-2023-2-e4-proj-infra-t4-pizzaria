# Plano de Testes de Software



| Caso de teste 001 |Verificar rota da API para exibir as pizzas disponíveis |
|------|----------------------------------------------------------------------|
|Requisito Associado |RF-001 O sistema deverá exibir todas as pizzas disponíveis para compra. |
| Passos | Ultizando o insomnia informar o metodo get com a rota definida pela API. Clicar em "send" e verificar se o retorno do status code foi 200 e as informações da pizza foram retornadas |
| Critérios de êxito | O cardápio de pizza foi retornado com sucesso|

| Caso de teste 002 | Verificar rota CRUD do carrinho |  
|--------|-----------------------------------------|
|Requisito Associado| RF- 002 O sistema deverá ter um carrinho de compras para que o usuário possa adicionar, remover itens, e, além disso seja possível exibir o resumo do pedido, assim como o total a pagar  |
| Passos |  Ultizando o insomnia informar os metodos: post; get; put; delete.  |
| Critérios de êxito | O usuário consegue inserir, editar e deletar produtos do carrinho|

| Caso de teste 003 |Verificar rota de realizar cadastro |  
|-------|-----------------------------------------|
|Requisito Associado| RF- 003 O sistema deverá permitir ao usuário realizar seu cadastro informando: usuário, email e senha |
| Passos | Ultizando o insomnia informar o metodo post com a devida rota, passar um body json com as informações de usuário; email e senha, clicar em send. |
| Critérios de êxito | Verificar se o Status Code 201 foi retornado e o objeto que informa email; usuário e senha no padrão hash |

| Caso de teste 004| Verificar poup-up  envio de pedido concluído |  
|--------|-----------------------------------------|
|Requisito Associado| RF- 004 O sistema deverá informar ao cliente que seu pedido foi concluido com sucesso.   |
| Passos | Clicar no botão realizar pedido. |
| Critérios de êxito | poup-up aparecer em tela informando que o pedido foi concluido com sucesso |

| Caso de teste 005| Verificar se as informações de cada pizza está correta|  
|--------|-----------------------------------------|
|Requisito Associado| RF- 005 O sistema deverá informar ao usuário os ingredientes de cada pizza   |
| Passos | entrar no site e verificar abaixo da pizza seus ingredientes |
| Critérios de êxito | ingredientes completos|

| Caso de teste 006 | Verificar se o usuário consegue a informação da localização da pizzaria |  
|------|-----------------------------------------|
|Requisito Associado| RF- 006 O sistema deverá permitir ao usuário acessar o mapa com a localização da pizzaria  |
| Passos | Entrar no site, localizar no fim da pagina "onde estamos" e clicar no "mini mapa" onde informa a localização da pizzaria. |
| Critérios de êxito | cliente conseguir acessar o endereço da pizzaria |

| Caso de teste 007 | Verificar disponibilidade do ebook |  
|------|-----------------------------------------|
|Requisito Associado| RF- 007 O sistema deverá permitir ao usuário baixar um e-book com as receitas de algumas pizzas disponibilizadas   |
| Passos | Entrar no site, clicar no link de baixar ebook|
| Critérios de êxito | Cliente conseguir fazer o download e ler a informações|


| Caso de teste 008 | Verificar o email da pizzaria recebeu a solicitação de reserva|  
|---------|-----------------------------------------|
|Requisito Associado| RF- 009 O sistema deverá enviar as solicitações das reservas para o email da pizzaria, com os dados informados pelo cliente. RF- 008 O sistema deverá permitir ao usuario solicitar reserva de mesa caso ele queira consumir no local, informando:n nome quantidade de pessoas, data, horário da reserva e dados para contato (telefone e email)    |
| Passos | Abrir o email da pizzaria e verificar se o email de solicitação de reserva foi recebido |
| Critérios de êxito | Pizzaria recebeu o email com a solicitação de reserva da mesa |

| Caso de teste 009 | Verificar a disponibilidade das pizzas favoritas |  
|---------|-----------------------------------------|
|Requisito Associado| RF- 010 O sistema deverá permitir ao usuário selecionar suas pizzas favoritas, colocando-as em uma guia separada para que possa acessa-las com maior facilidade   |
| Passos | Acessar o site e clicar em pizzas favoritas. |
| Critérios de êxito | Cliente conseguir acessar as pizzas disponíveis. |


| Caso de teste 010 | Verificar solicitação de reserva do espaço da pizzaria |  
|-----------|-----------------------------------------|
|Requisito Associado| RF- 011 O sistema deverá permitir ao usuário solicitar reserva de uma area do estabelecimento, para confraternização, seja para empresa, aniversário e/ou casamento. Informando: nome, quantidade de pessoas, tipo de evento, data, horário da reserva e dados para contato (telefone e email).  |
| Passos | Abrir o email da pizzaria e verificar se o email de solicitação de reserva foi recebido |
| Critérios de êxito | Pizzaria recebeu o email com a solicitação de reserva da mesa. |

