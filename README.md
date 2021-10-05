## Projeto de SpaceNaves
### Exibição do projeto no alert do Browser!
Consiste em um projeto básico onde ira perguntar nome da nave, quantidade de tripulantes, tipo de nave, e velocidade que deseja acelerar a nave. 
Escolhendo tipo de batalha terá a opção de dizer quantas armas sua nave de batalha possui, já no tipo de transporte pode informar quantos lugares a nave suporta.Após as escolhas ele ira voltar para uma caixa de mensagem perguntando se deseja acelerar novamente, trocar de nave e se quer sair/imprimir. Escolhendo sair ele mostrar o ultimo alet com os dados(nome, quantidade de tripulantes e velocidade atual).

### Objetivo do projeto:
    Foi um projeto para exercitar a utilização de classes no JavaScript.

### Tecnologias:
    - HTML5 (só para iniciar aplicação);
    - JavaScript.

### Arquivos:
- spaceShip.js
    
    Arquivo .js que tem um static get(sendo o desacelerador de 17% na velocidade da nave.). Possui o constructor que ira receber nome, quantidade de passageiro e a velocidade atual da  nave sendo =0;
    
    método speedUp ond eira pegar a velocidade atual += acceleration *(1-spaceship.DESECERATION_RATE).

- batle_spaceship.js

    herda do arquivo (extends spaceShip) (nome, quantidade de passageiro). No constutor é adicionado o parametro quantidade de armas que a nave possui.

- transport_spaceship.js

    herda do arquivo (extends spaceShip) (nome, quantidade de passageiro). No construtor é adicionado o parametro Quantidade de lugares na nave(sitsQuantity).

- App.js

    arquivo que irá possui todas as funcionalidades do projet.

- index.js
    arquivo que inicia o projeto.
