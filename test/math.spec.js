const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0

describe('Math class', function () {
    beforeEach(function () {
        value = 0;
    });

    it('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000);
        math.sum(value, 5, value => {
            expect(value).to.equal(5);
            done();
        });
    });

    it('Testing object', function () {
        const math = new Math();

        // usando 'expect' para validar um objeto
        const obj = {
            name: 'Nycolas Messias'
        };

        const obj2 = {
            name: 'Nycolas Messias'
        };

        expect(obj).to.deep.equal(obj2);
        //.to.have.property('name')
        //.equal('Nycolas Messias')
    });

    it('Calls res with sum and index values', function () {
        const req = {};
        const res = {
            load: sinon.spy()
        };



        const math = new Math();
        math.printSum(req, res, 5, 5);



        // substituindo o metodo e o uso do 'sinon.spy',
        // podendo gerar um retorno diferente:
        //sinon.stub(res, 'load').returns('Custom return');

        // restaurando o metodo
        //res.restore();

        expect(res.load.args[0][1]).to.be.equal(10);
    });
});

/* importando modulo nativo do node
const assert = require('assert');

// importando a classe a ser testada
const Math = require('../src/math.js');



let value = 0;

describe('Math class', function () {

    // hooks
    beforeEach(function(){
        value = 0;
    }); // outros exemplos sao 'before()', 'after()', 'afterEach()'

    // descreve o comportamento esperado da classe e testa
    it('Sum two numbers', function (done) {
        const math = new Math();
        // reconfigurando o valor max. do timeout
        this.timeout(3000);
        math.sum(value, 5, (value) => {
            assert.equal(value, 10);
            done();
        });
    });

    // teste pendente
    it('Multiply two  numbers', function() {
        const math = new Math();
        assert.equal(math.multiply(value, 5), 0);
    });

    // metodo only para focar na execucao de apenas um teste
    it.only('Divide two numbers', function () {
        const math = new Math();
        assert.equal(math.divide(value, 5), 0);
    });

    // teste pendente
    it('subtract one number from another');
    // ha tambem o metodo .skip, que deixa o teste pendente
});
*/