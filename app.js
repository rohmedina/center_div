const check1 = document.getElementById('check-1')
const check2 = document.getElementById('check-2')
const check3 = document.getElementById('check-3')
const check4 = document.getElementById('check-4')
const check5 = document.getElementById('check-5')
const check6 = document.getElementById('check-6')
const check7 = document.getElementById('check-7')
const check8 = document.getElementById('check-8')
const check9 = document.getElementById('check-9')
const check10 = document.getElementById('check-10')
const check11 = document.getElementById('check-11')
const check12 = document.getElementById('check-12')


const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')





// funcion reconoce si el check cambia de estado
check1.addEventListener('click', ()=>{
 aplicarFlex()
 console.log('aplica flex')
})
check2.addEventListener('click', ()=>{
 aplicarJustify()
 console.log('aplica justify')
})
check3.addEventListener('click', ()=>{
 aplicarAlign()
 console.log('aplica align')
})

check4.addEventListener('click', ()=>{
 aplicarGrid()
 console.log('aplica grid')
})
check5.addEventListener('click', ()=>{
 aplicarJustify2()
 console.log('aplica justify')
})
check6.addEventListener('click', ()=>{
 aplicarAlign2()
 console.log('aplica align')
})

check7.addEventListener('click', ()=>{
 aplicarGrid2()
 console.log('aplica grid')
})
check8.addEventListener('click', ()=>{
 aplicarPlace()
 console.log('aplica place')
})

check9.addEventListener('click', ()=>{
 aplicarPosition()
 console.log('aplica Position')
})
check10.addEventListener('click', ()=>{
 aplicarTop()
 console.log('aplica top')
})
check11.addEventListener('click', ()=>{
 aplicarLef()
 console.log('aplica left')
})
check12.addEventListener('click', ()=>{
 aplicarTransform()
 console.log('aplica transform')
})


function aplicarFlex(){
  box1.classList.toggle('aplicarFlex')
}
function aplicarJustify(){
  box1.classList.toggle('aplicarJustify')
}
function aplicarAlign(){
  box1.classList.toggle('aplicarAlign')
}

function aplicarGrid(){
  box2.classList.toggle('aplicarGrid')
}
function aplicarJustify2(){
  box2.classList.toggle('aplicarJustify')
}
function aplicarAlign2(){
  box2.classList.toggle('aplicarAlign')
}

function aplicarGrid2(){
  box3.classList.toggle('aplicarGrid')
}
function aplicarPlace(){
  box3.classList.toggle('aplicarPlace')
}

function aplicarPosition(){
  box4.classList.toggle('aplicarPosition')
}
function aplicarTop(){
  box4.classList.toggle('aplicarTop')
}
function aplicarLef(){
  box4.classList.toggle('aplicarLeft')
}
function aplicarTransform(){
  box4.classList.toggle('aplicarTransform')
}