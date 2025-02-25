function add (a, b){ //função nomeada
}

const subtract = function (a, b) { //função anônima
    return a - b;
};

const multiply = (a, b) => a * b; //arrow function - define a resposta mais facilmente, usado em função mais curta

const divide = (a, b) => a / b;


module.exports = { add, subtract, multiply, divide }; //exporta essa funçao para qlqr arquivo, ou seja é publica 