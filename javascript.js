var valor;
var resultado;
function botao(numero) {
    valor = document.calculadora.tela.value += numero;
}
function zerar() {
    document.calculadora.tela.value = " ";
}
function calcular() {
    resultado = eval(valor);
    document.calculadora.tela.value = resultado;

}