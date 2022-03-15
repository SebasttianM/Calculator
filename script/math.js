const n1= document.getElementById('1')
const n2= document.getElementById('2')
const n3= document.getElementById('3')
const n4= document.getElementById('4')
const n5= document.getElementById('5')
const n6= document.getElementById('6')
const n7= document.getElementById('7')
const n8= document.getElementById('8')
const n9= document.getElementById('9')
const n0= document.getElementById('0')
const resultado= document.getElementById('resultado')
const sum = document.getElementById('+')
const sub = document.getElementById('-')
const dot= document.getElementById('.')
const mult= document.getElementById('X')
const div= document.getElementById('/')
const reset= document.getElementById('reset')
const calc = document.getElementById('calculator')
const equal = document.getElementById('=')

reset.addEventListener('click',()=>{
    resultado.value=''
})

document.addEventListener('DOMContentLoaded',()=>{
    resultado.value=''
})
const hacerOperacion= ()=>{
    equal.addEventListener('click',()=>{
        let result = resultado.value
        console.log(result);
        let operacion= eval(result)
        console.log(operacion);
        resultado.value= operacion
    })
}
hacerOperacion()

const recibirValor= (numero)=>{
    numero.addEventListener('click',()=>{
        resultado.value+= numero.value;
    })
}

recibirValor(n1)
recibirValor(n2)
recibirValor(n3)
recibirValor(n4)
recibirValor(n5)
recibirValor(n6)
recibirValor(n7)
recibirValor(n8)
recibirValor(n9)
recibirValor(n0)

recibirValor(sum)











const body= document.querySelector('body')
const tema1= document.getElementById('t1')
const tema2= document.getElementById('t2')
const tema3= document.getElementById('t3')

tema1.addEventListener('click',()=>{
    body.classList.add('active1')
    body.classList.remove('active2')
    body.classList.remove('active3')
})
tema2.addEventListener('click',()=>{
    body.classList.add('active2')
    body.classList.remove('active1')
    body.classList.remove('active3')
})
tema3.addEventListener('click',()=>{
    body.classList.add('active3')
    body.classList.remove('active1')
    body.classList.remove('active2')
})