document.getElementById('current-year').textContent = new Date().getFullYear();

$(document).ready(function() {
    $('#input-valor1, #input-valor2').on('input', function() {
        this.value = this.value.replace(/[^0-9.-]/g, ''); // <-- Permite apenas números negativos e um único ponto decimal
        
        // Impede múltiplos pontos decimais
        let partes = this.value.split('.');
        if (partes.length > 2) {
            this.value = partes[0] + '.' + partes[1]; // <-- Mantém apenas um ponto decimal
        }
        
        // Impede múltiplos sinais de menos em qualquer lugar que não seja no início
        let menosIndex = this.value.indexOf('-');
        if (menosIndex > 0) {
            this.value = this.value.replace('-', ''); // <-- Remove qualquer "-" que não esteja no início
        }
    });

    $('#botao-somar').on('click', function() {
        // Obtendo os valores dos inputs
        let valor1 = $('#input-valor1').val();
        let valor2 = $('#input-valor2').val();
        // Convertendo os valores para o tipo número
        let num1 = parseFloat(valor1);
        let num2 = parseFloat(valor2);

        // Verifica se os valores são válidos
        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor, insira números válidos!');
        } else {
            // Realiza a soma
            let soma = num1 + num2;
            alert('A soma dos números é: ' + soma);
        }
    });
});
