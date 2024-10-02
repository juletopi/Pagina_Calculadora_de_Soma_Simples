document.getElementById('current-year').textContent = new Date().getFullYear();

$(document).ready(function() {
    $('#botao-somar').on('click', function() {
        // Obtendo os valores dos inputs
        let valor1 = $('#input-valor1').val();
        let valor2 = $('#input-valor2').val();
        // Convertendo os valores para o tipo número
        let num1 = parseFloat(valor1);
        let num2 = parseFloat(valor2);

        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor, insira números válidos!');
        } else {

            let soma = num1 + num2;

            alert('A soma dos números é: ' + soma);
        }
    });
});
