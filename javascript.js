//JSON - JavaScript Object Notation
/** */
const input = document.querySelector('input');
const h2 = document.querySelector('h2');
const saveBtn = document.querySelector('button');

const array = [];

input.addEventListener('keyup', () => {
  h2.textContent = input.value;
})

saveBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    array.push(input.value);
    
     const stringify = JSON.stringify(array);
    
    localStorage.setItem('text', stringify);
    
    const result = JSON.parse(localStorage.getItem('text') || []);
    console.log(result);
 
  const randNumb = Math.floor(Math.random() * result.length);
  console.log(randNumb);
  h2.textContent = result[randNumb];

})