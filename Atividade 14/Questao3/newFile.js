document.getElementById('payrollForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.getElementById('salario').value);

    var taxaINSS;
    var valorDesconto;

    if (salario <= 1000) {
        taxaINSS = 0.08;
    } else if (salario > 1000 && salario <= 1500) {
        taxaINSS = 0.085;
    } else {
        taxaINSS = 0.09;
    }


    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
});`;
});
