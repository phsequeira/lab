const changeName = document.getElementById('changeName')
 
const newName = document.getElementById('newName')

const printName = document.getElementById('name')

changeName.addEventListener('click', () => {

    printName.textContent = newName.value;

} )
