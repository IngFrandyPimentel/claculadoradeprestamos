var btn = document.querySelector('[data-boton]'); 

function calcular(){
    
    var monto= document.querySelector('[data-monto]').value;
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

btn.addEventListener('click', calcular);





/*         
                   (1+interes)^n.interes
    cuota=monto.    ____________________ 
                    (1+interes)^n-1
    
*/