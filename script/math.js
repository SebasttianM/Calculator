const n7= document.getElementById('7')
const resultado= document.getElementById('resultado')
const sum = document.getElementById('+')
const equal= document.getElementById('=')
const reset= document.getElementById('reset')

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
    })
}
hacerOperacion()

const recibirValor= (numero)=>{
    numero.addEventListener('click',()=>{
        resultado.value+= numero.value;
    })
}
recibirValor(n7)
recibirValor(sum)










const body= document.querySelector('body')
const tema1= document.getElementById('tema1')
const tema2= document.getElementById('tema2')
const tema3= document.getElementById('tema3')

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