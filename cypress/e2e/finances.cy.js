import {format, prepareLocalStorage} from '../support/utils'

describe('Transações', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/', {
            onBeforeLoad:(win) => {
                prepareLocalStorage(win)
            }
        });
        
    });
    it('Cadastrar entradas', () => {
        criarTransacao("Mesada", 45)

        cy.get('#data-table tbody tr')
            .should('have.length', 3)
            .should('contains.text', 'Mesada')
    });

    it('Cadastrar saídas', () => {
        criarTransacao('Cinema', -30)

        cy.get('#data-table tbody tr')
            .should('have.length', 3)
            .should('contains.text', 'Cinema')
    });

    it('Remover entradas e saídas', () => {
        criarTransacao('Cinema', -30)

        //estratégia 1: voltar para elemento pai e avançar para um td img attr
        cy.contains('.description', 'Mesada')
            .parent()
            .find('img[onclick*=remove]')
            .click()
        
        //estratégia 2: buscar todos os irmãos e buscar o que tem img + attr
        cy.contains('td.description', 'Suco Kapo')
            .siblings()
            .children('img[onclick*=remove]')
            .click()

        cy.get('tbody tr').should('have.length', 1)
    });

    it('Validar saldo com diversas transações', () => {

        let incomes = 0
        let expenses = 0

        cy.get('#data-table tbody tr')
            .each(($el, index, $list) => {
                cy.get($el).find('td.income, td.expense').invoke('text').then(text => {
                    //cy.log(text)
                    //cy.log(format(text))
                    if (text.includes('-')) {
                        expenses = expenses + format(text)
                    } else {
                        incomes = incomes + format(text)
                    }

                    cy.log('entradas', incomes)
                    cy.log('saidas', expenses)
                })
            })

            cy.get('#totalDisplay').invoke('text').then(text => {
                //cy.log('valor total', format(text))
                let formattedTotalDisplay = format(text)
                let expectedTotal = incomes + expenses
                
                expect(formattedTotalDisplay).to.eq(expectedTotal)
            });
    });
});

function criarTransacao(descricao, valor) {
    cy.contains("Nova Transação").click();
    cy.get('#description').type(descricao);
    cy.get('[name=amount]').type(valor);
    cy.get('[type=date]').type('2023-06-30');
    cy.contains('button', 'Salvar').click();

}