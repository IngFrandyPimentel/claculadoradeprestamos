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

        //aplicamos clases a la alerta
        alerta.classList.remove("desaparece","alert-danger");
        alerta.classList.add("alert-primary","aparece");
        alerta.innerHTML=`La cuota mensual es de RD$ <b>${cuota.toFixed(2)}</b>`;
    }
    else{
        alerta.classList.remove("desaparece","alert-primary");
        alerta.classList.add("aparece","alert-danger");
        alerta.innerHTML="Todos los campos son nesesarios";
    }

   
}

btn.addEventListener('click', calcular);








/*         
                   (1+interes)^n.interes
    cuota=monto.    ____________________ 
                    (1+interes)-1
    
*/