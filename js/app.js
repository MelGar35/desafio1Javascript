
//condicionales y ciclos

let nombre = prompt("Ingresá tu nombre")
alert("Bienvenid@ " + nombre + "!")

let clave = "Melisa1234"
let pass = prompt("Ingresá tu Password")

while(pass != clave) {   
    alert("contraseña invalida")
    pass = prompt("Ingresá tu password nuevamente")
}

alert("contraseña correcta , bienvenid@!")

let edad = prompt ("Cuantos años tenes? ingresá tu edad!")

if(edad>=18) {
    alert ("Tienes 18 años o más, puedes ingresar")
    prompt("Que bebida deseas comprar?. Escribe el numero de la opción 1.Vodka 2.Ron 3.Fernet")
}else if(edad<18) {
    alert ("Auch, tienes menos de 18 años, no puedes ingresar!")
} 


