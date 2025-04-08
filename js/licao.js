$("#licaoCalcular").click(function () {
    var valor1 = parseFloat($("#licaoValor1").val());
    var valor2 = parseFloat($("#licaoValor2").val());
    var valor3 = parseFloat($("#licaoValor3").val());

    // Alerta 1: Valores em ordem crescente
    var valores = [valor1, valor2, valor3];
    valores.sort(function(a, b) { return a - b; });
    alert("Valores em ordem crescente: " + valores.join(", "));

    // Alerta 2: Média
    var media = (valor1 + valor2 + valor3) / 3;
    alert("A média é: " + media);

    // Alerta 3: Loop e soma
    var loopCount = parseInt(valor2);
    var soma = 0;
    for (var i = 1; i <= loopCount; i++) {
        soma += i;
    }
    $("#txtOrdem")
        .text("Os valores em ordem crescente são: " + valores)
        .css({ 'font-weight': 'bold', 'font-size': '20pt', 'color': 'black' })
    $("#ordem")
        .removeClass("alert-warning")
        .addClass("alert-danger")
        .show();
    $("#txtMedia")
        .text("Soma dos loops: " + media)
        .css({ 'font-weight': 'bold', 'font-size': '20pt', 'color': 'black' })
    $("#media")
        .removeClass("alert-primary")
        .addClass("alert-danger")
        .show();
    $("#txtLoop")
        .text("Soma dos loops: " + soma)
        .css({ 'font-weight': 'bold', 'font-size': '20pt', 'color': 'black' })
    $("#loop")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .show();
    
});