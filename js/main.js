var btn = document.querySelector('[data-boton]'); 
var montoPrestamo= document.querySelector('[data-monto]');

//funcion que coloca la coma en la unidad de mil
function formatoSeparadorMiles() {
    // Obtener el valor del input

    let valor = montoPrestamo.value;

    // Remover comas existentes
    valor = valor.replace(/,/g, '');

    // Aplicar formato con comas para separar unidades de mil
    valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Actualizar el valor del input solo si hay un cambio
    if (montoPrestamo.value !== valor) {
        montoPrestamo.value = valor;
    }
}

montoPrestamo.addEventListener('input', formatoSeparadorMiles);

//funcion que calcula
function calcular(){
    let monto = parseInt(montoPrestamo.value.replace(/,/g, ''));//eliminamos la coma y lo pasamos a numero
    var interes= document.querySelector('[data-interes]').value;
    var tiempo= document.querySelector('[data-tiempo]').value;
    var alerta= document.querySelector('[data-alerta]');
    if(monto!=""&& interes!=""&& tiempo!=""){
        //calculos
        var interesMensual=interes/12;
        var iM=interesMensual/100;

        //formula
        var cuota= monto*Math.pow((1+iM),tiempo)*iM / (Math.pow((1+iM),tiempo) -1 );
        var interesCobrado=cuota*tiempo-monto;

        //aplicamos clases a la alerta
        alerta.classList.remove("desaparece","alert-danger");
        alerta.classList.add("alert-primary","aparece");

        //mostramos resultados
        alerta.innerHTML=`Cuota mensual estimada: <b>${cuota.toLocaleString('en-US', { style: 'currency', currency: 'DOP' })}</b><br> Total del interés pagado: <b>${interesCobrado.toLocaleString('en-US', { style: 'currency', currency: 'DOP' })}</b>`;
    }
    else{
        alerta.classList.remove("desaparece","alert-primary");
        alerta.classList.add("aparece","alert-danger");
        alerta.innerHTML="Todos los campos son requeridos";
    }

   
}

//funcion que valida que solo se introducan numero en el monto
function soloNumeros(event) {
    // Obtener el código de la tecla
    const codigoTecla = event.keyCode || event.which;

    // Permitir solo números (códigos ASCII 48-57 y códigos numéricos del teclado numérico)
    if ((codigoTecla >= 48 && codigoTecla <= 57) || (codigoTecla >= 96 && codigoTecla <= 105) || codigoTecla === 8 || codigoTecla === 9) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
}

btn.addEventListener('click', calcular);


/*         
                   (1+interes)^n.interes
    cuota=monto.    ____________________ 
                    (1+interes)^n-1
    
*/
