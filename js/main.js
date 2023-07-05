function suma(){
    let a=0;
    let b=0;
    let s=0;

    alert("Por favor ingrese el primer valor");
    a = parseInt(prompt(""));
    alert("Por favor ingrese el segundo valor"); //Alert no permite saltos de línea en el texto
    b = parseInt(prompt(""));
    s = a+b;
    let r=a-b;
    let m=a*b;
    let d=a/b;
    alert("La suma es: "+s);
}

function operaciones(){
    let a=parseInt(prompt("Por favor ingrese el primer valor"));
    let b=parseInt(prompt("Por favor ingrese el segundo valor"));
    let s=a+b;
    let r=a-b;
    let m=a*b;
    let d=a/b;
    alert("La Suma es: "+s+"\nLa Resta es: "+r+"\nLa Multiplicación "+m+"\nLa División es: "+d);
}

function mayor(){
    let a=parseInt(prompt("Por favor ingrese el primer valor"));
    let b=parseInt(prompt("Por favor ingrese el segundo valor"));
    if (a>b){
        alert("EL número mayor es: "+a);
    }
    else if (b>a){
        alert("EL número mayor es: "+b);
    }
    else{
        alert("Los números son iguales");
    }
}

function menor(){
    let a=parseInt(prompt("Por favor ingrese el primer valor"));
    let b=parseInt(prompt("Por favor ingrese el segundo valor"));
    let c=parseInt(prompt("Por favor ingrese el tercer valor"));
    let m;
    if (a>=b){
        m=b;
    }
    else {
        m=a;
    }
    if (c<m){
        m=c;
    }
    alert("El número menor es "+m);
}

function par(){
    let a=parseInt(prompt("Por favor ingrese número"));
    if (a==0){
        alert("El número cero no es par ni impar");
    }
    else if (a%2){
        alert("El número es impar");
    }
    else{
        alert("El número es par");
    }
    alert("El número menor es "+m);
}

function cuadrado(){
    let a=parseInt(prompt("Ingrese el número"));
    alert("El cuadrado del número ingresado es: "+a**2);
}

function area(){
    let a=parseInt(prompt("Por favor ingrese la altura del triángulo"));
    let b=parseInt(prompt("Por favor ingrese la base del triángulo"));
    alert("El área del triángulo es: "+a*b/2);
}

function convercion(){
    let a=parseInt(prompt("Ingrese valor de la longitud en metros"));
    alert("El valor de la longitud en centímetros es : "+a*100+"\nEl valor de la longitud en pulgadas es: "+a*39.3701);
}

function bornYear(){
    let a=parseInt(prompt("Ingrese el año actual"));
    let b=parseInt(prompt("Ingrese su edad"));
    alert("Su año de nacimiento es: "+(a-b));
}

function renta(){
    let a=parseInt(prompt("Ingrese el capital a invertir"));
    let b=parseInt(prompt("Ingrese la cantindad de tiempo en años"));
    const c=0.017;
    alert("Los intereses rentados durante los "+b+" años fueron: "+(a*b*c*12).toFixed(2)+"\nEl valor total a pagar es: "+(a*(1+a*b*c*12)).toFixed(2));
}

function notas(){
    let a=prompt("Ingrese el nombre del estudiante");
    let b=prompt("Ingrese el nombre de la materia");
    var suma=0;
    for (var i = 1; i <= 7; i++) {
        var valida=true;
        while(valida){
            var lee=prompt("Ingrese la nota "+i);
            var c=parseFloat(lee);
            if(lee==undefined){
                valida=false;
            }
            if(c>=0 && c<=10){
                suma=suma+c;
                valida=false;
            }
        }
    }
    let prom=suma/7;
    if (prom<6.1){
        var estado="Reprobado"
    }
    else{
        var estado="Aprobado"
    }
    alert("El estudiante: "+a+"\nObtuvo un promedio de: "+prom.toFixed(2)+"\nPor lo tanto ha "+estado+" la asignatura de "+b);
}

function manzanas(){
    let a=parseFloat(prompt("Cuántos kilos de manzana desea comprar"));
    const precio=4500;
    if(a>0 && a<=2){
        let des=0;
        alert("El descuento fue del "+des*100+"%"+"\nTotal a pagar: "+precio*a*(1-des));
    }
    else if(a>2 && a<=5){
        let des=0.1;
        alert("El descuento fue del "+des*100+"%"+"\nTotal a pagar: "+precio*a*(1-des));
    }
    else if(a>5 && a<=10){
        let des=0.15;
        alert("El descuento fue del "+des*100+"%"+"\nTotal a pagar: "+precio*a*(1-des));
    }
    else if(a>10){
        let des=0.2;
        alert("El descuento fue del "+des*100+"%"+"\nTotal a pagar: "+precio*a*(1-des));
    }
    else{
        alert("Cantidad incorrecta")
    }   
}

function salario(){
    let a=parseInt(prompt("Cuantas horas laboró"));
    if(a>=0 && a<=40){
        let total=10000*a
        alert("El total devengado es: "+total)
    }
    else if(a>40){
        let total=40*10000+20000(40-a);
        alert("El total devengado es: "+total)
    }
    else{
        alert("Cantidad incorrecta")
    }
}