function verificarCalc() {
    let numX = Number(document.getElementById("numX").value)
    let numY = Number(document.getElementById("numY").value)
    let calc = document.getElementById("calc").value
    let resultado
    switch(calc){
        case "soma":
            resultado = numX + numY
            break
        case "sub":
            resultado = numX - numY
            break
        case "divi":
            resultado =  numX / numY
            break
        case "multi":
            resultado =  numX * numY
            break
    }
    document.getElementById("resp").innerText = resultado
}


function verificarSal() {
    let salar = Number(document.getElementById("salar").value)
    let senio = document.getElementById("calcSal").value
    let aumento
    switch(senio){
        case "jun":
            aumento = (salar + (salar * 10/100) )
            break
        case "ple":
            aumento = (salar + (salar * 7.5/100) )
            break
        case "sen":
            aumento = (salar + (salar * 5/100) )
            break
    }
    document.getElementById("sal").innerText = `Seu novo salário é R$${aumento},00`
}


 function calcularTotal() {

    const pedido = document.getElementById("pedido").value.split(',');

    let total = 0;

    pedido.forEach(codigo => {
        codigo = codigo.trim();
        switch (codigo) {
            case "001":
                total += 30.00;
                break;
            case "002":
                total += 45.00;
                break;
            case "003":
                total += 60.00;
                break;
            case "004":
                total += 7.00;
                break;
            case "005":
                total += 10.00;
                break;
            case "006":
                total += 14.00;
                break;
            case "007":
                total += 18.00;
                break;
            default:
                alert(`O item de código ${codigo} não existe no cardápio.`);
        }
    });

    document.getElementById("total").innerText = "R$ " + total.toFixed(2);
}