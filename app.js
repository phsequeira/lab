const changeName = document.getElementById('changeName')
 
const newName = document.getElementById('newName')

const printName = document.getElementById('name')

const newColorTop = document.getElementById('greeting')

const newColorMid = document.getElementById('intro')

const changeBlue = document.getElementById('changeBlue')
const changeRed = document.getElementById('changeRed')
const changeGreen = document.getElementById('changeGreen')

changeName.addEventListener('click', () => {

    printName.textContent = newName.value;

} )

changeBlue.addEventListener('click', () => {

    newColorTop.style.background = "blue";
    newColorMid.style.background = "blue";
    //printName.style.border-color = "blue";

})

changeRed.addEventListener('click', () => {

    newColorTop.style.background = "red";
    newColorMid.style.background = "red";
    //printName.style.border-bottom = "blue";

})

changeGreen.addEventListener('click', () => {

    newColorTop.style.background = "green";
    newColorMid.style.background = "green";
    //printName.style.border-bottom = "blue";

})