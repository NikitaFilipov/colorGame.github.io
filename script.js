const board =document.querySelector('#board')
const colors= ['red','blue','green','yellow','orange','purple']
const SQUARE_NUMBERS =600

for(let i=0;i<SQUARE_NUMBERS;i++){
    const square =document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseleave",function(e){
        removeColor(square)
    })
    square.addEventListener('mouseover',()=>{
        console.log('false')
        setColor(square)
    })
    
    board.appendChild(square)
}

function setColor(elem){
    elem.style.backgroundColor =getRandomColor()
    elem.style.boxShadow =`0 0 2px ${getRandomColor()}`
}
function removeColor(elem){
    elem.style.backgroundColor ='#1d1d1d'
    elem.style.boxShadow =`0 0px 2px #000`
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}