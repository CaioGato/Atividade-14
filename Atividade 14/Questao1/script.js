function calcular() {
    var varA = parseInt(document.getElementById("varA").value);
    var varB = parseInt(document.getElementById("varB").value);
 
    var diferenca = varA - varB;
    var soma = (2 * varA) + (3 * varB);
    var multiplicacao = varA * varB;
   
    var ordenado = "";
    if (varA > varB) {
        ordenado = varA + ", " + varB;
    } else {
        ordenado = varB + ", " + varA;
    }

    document.getElementById("diferenca").textContent = "Diferença entre as variáveis: " + diferenca;
    document.getElementById("soma").textContent = "O dobro da primeira mais o triplo da segunda variável: " + soma;
    document.getElementById("multiplicacao").textContent = "Multiplicação das variáveis: " + multiplicacao;
    document.getElementById("ordenado").textContent = "Variáveis ordenadas do maior para o menor: " + ordenado;
    document.getElementById("resultados").style.display = "block";
}
