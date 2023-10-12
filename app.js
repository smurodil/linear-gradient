// const inputText = document.getElementById('input-text')
// const text = document.getElementById('text')

// inputText.addEventListener('input', ()=>{
//     text.textContent = inputText.value
// })

const form = document.getElementById('form');
const colorDegree = document.getElementById('color-degree');
const result = document.getElementById('result')

let color1;
let color2;
let degree = 0;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    color1 = form['color-input-1'].value;
    color2 = form['color-input-2'].value;
    console.log(color1, color2);
    document.body.style.backgroundImage = `linear-gradient(${degree}deg, ${color1}, ${color2})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.height = '100vh'
    result.textContent = `linear-gradient(${degree}deg, ${color1}, ${color2})`
    result.style.textAlign = 'center'
    result.style.color = 'white'
})

colorDegree.addEventListener('input', ()=>{
    degree = colorDegree.value;
    document.body.style.backgroundImage = `linear-gradient(${degree}deg, ${color1}, ${color2})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    result.textContent = `linear-gradient(${degree}deg, ${color1}, ${color2})`
})




