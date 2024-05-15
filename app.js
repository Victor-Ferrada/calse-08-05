// funciones

function mensaje(){
    console.log('Buenas Tardes')
}

mensaje()

apellido='Montt'
//funciones con parametros
function saludo(nombre){
    console.log("hola ", nombre ,apellido)
    console.log(`hola ${nombre}`)
}

saludo("Carlos")

function es_par(numero){
    if(numero%2==0){
        console.log("Es par")
    }else{
        console.log("Es Impar")
    }
}

es_par(3)


// //cree un programa que permita generar los números 
// //desde el 0 y el 25
// // - muestre cuantos números son pares
// //- muestre cuantos números son impares
// // -utilice una función para saber si son pares o no


function par_impar(numero){
    if(numero%2==0){
     return true
    }else{
     return false
    }
}
contPar=0
contImp=0
for(i=0;i<=25;i++){
     resultado=par_impar(i)
     if(resultado){
        contPar=contPar+1
     }else{
        contImp=contImp+1
     }
}

console.log("La cantidad de Pares es ",contPar)
console.log("La cantidad de Impares es ",contImp)

//array
let array=[]

for(i=0;i<=20;i++){
    array.push(i)
}
console.log(array)


// // crear una funcion que permita mostrar 
// // el contenido de un arreglo


let arr=[2,6,8,33,56,78]
let arry=["Pablo","Ana","Carlos","Veronica"]

function datosArray(arreglo){
    // for(i=0;i<arreglo.length;i++){
    //     console.log(arreglo[i])
    // }
    console.log(arreglo)
}

datosArray(arr)
datosArray(arry)

// metodo ForEach

let numeros=[2,4,6]

numeros.forEach(function(elemento,i,arreglo){
    arreglo[i]=Math.pow(elemento,2)
})

console.log(numeros)

let suma=0
let numbers=[65,44,12,4]

numbers.forEach(myFunction)

function myFunction(item){
  suma=suma+item
  document.write("<br>"+ "valor : "+item + " Total : "+suma)
}

// cree un arreglo con elementos Aleatorios
// Muestre el promedio de los valores del arreglo
// Muestre el mayor y el menor elemento del arreglo

let numAleatorio=[]
let sum=0
let max=0
let min=0
for(i=0;i<10;i++){
    numAleatorio[i]=Math.ceil(Math.random()*10)
    sum=sum+numAleatorio[i]
    if(i==0){
        min=numAleatorio[i]
        max=numAleatorio[i]
    }else{
        if(numAleatorio[i]>max){
            max=numAleatorio[i]
        }
        if(numAleatorio[i]<min){
            min=numAleatorio[i]
        }

    }
    
}
console.log("El promedio es ",sum/numAleatorio.length)
console.log(numAleatorio)
console.log("Mayor ", max)
console.log("minimo ",min)

// cree un arreglo con 5 nombres de alumnos 
// y para cada alumno en otro arreglo sus notas

//Muestre el nombre del alumno con la nota Mayor

//nombres de alumnos
let nombresDeAlumnos = ['Juan', 'Ana', 'Carlos', 'Maria', 'Pedro'];
//notas de alumnos
let notasDeAlumnos = [35, 45, 28, 12, 48];

//encontrar nota más alta
let indiceDeNotaMayor = notasDeAlumnos.indexOf(Math.max(...notasDeAlumnos));

//encontrar el nombre del alumno
let nombreDeAlumnoConNotaMayor = nombresDeAlumnos[indiceDeNotaMayor];

// Mostrar el nombre del alumno
console.log(nombreDeAlumnoConNotaMayor);

document.write("<br>"+"La persona con la nota mas alta es = "+nombreDeAlumnoConNotaMayor+"con un = "+Math.max(...notasDeAlumnos))