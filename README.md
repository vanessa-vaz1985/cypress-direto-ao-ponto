# Sobre o projeto
Este projeto foi desenvolvido através da refatoração de um projeto já existente, o qual utilizava a versão "6.7.0" do Cypress. Aproveitei para verificar o comportamento dos testes, ao efetuar o update para versão "12.5.0" do Cypress.

O projeto original foi desenvolvido através do Treinamento Gratuito de Cypress, "Agilizei Spark", ministrado pelo Samuel Lucas.
A playlist pode ser acessada em https://www.youtube.com/watch?v=oqR2qySVVS8&list=PLnUo-Rbc3jjztMO4K8b-px4NE-630VNKY&index=4.

Além da versão do Cypress, também incluí na refatoração os novos aprendizados do "Cypress Direto ao Ponto", também do Samuel.
A playlist pode ser acessada em https://www.youtube.com/playlist?list=PLnUo-Rbc3jjy314Ik21RJvYaCoPRHyG9O.
Outra opção é acessar o curso em https://app.agilizei.com/pt/cursos/cypress-direto-ao-ponto.

Durante este projeto, utilizei uma máquina com Windows 11, e todas as instalações/execuções foram feitas com o WSL 2, permitindo utilizar o Ubuntu 22.04 no próprio Windows.

## Mapa Mental Cypress
    https://github.com/samlucax/cypress-essencial-mindmap

## Update para versão "12.5.0" do Cypress
1. No diretório do projeto, executar o comando (ao final da execução, verifique que a versão do cypress foi atualizada no arquivo package.json como dependência). O comando abaixo instala uma versão específica do Cypress, a qual foi utilizada durante o curso:
    npm install cypress@12.5.0 --save-dev

2. Iniciar o Cypress:
    npx cypress open

3. Na tela aberta, aceitar as alterações exibidas pelo Cypress.

4. Ao final das alterações, executar todos os testes novamente, para verificar se continuam passando. No nosso teste, não tivemos problema nenhum.

## Implementando o teste
1. Iniciar o Cypress (ao final da execução, verifique que foi criada a pasta cypress, com a estrutura inicial do projeto):
    npx cypress open

2. Aplicação que utilizaremos nos testes deste curso:
    https://devfinance-agilizei.netlify.app/

3. Comando para executar o teste, redimensionando a tela (para validar responsividade):
    npx cypress open --config viewportWidth=411,viewportHeight=823

4. Comando para executar em modo headless:
    npx cypress run --config viewportWidth=411,viewportHeight=823

5. É possível configurar os comandos no arquivo package.json. E para executá-los no terminal, informamos desta forma:
    npm run cypress:run:mobile