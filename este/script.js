var d=document.querySelector('.form');
d.addEventListener('click', ()=>{
    d.classList.add('trans')
    d.classList.remove('form')
})
let a=document.getElementById('data').value;
function cli() {
    alert(a)
        for (let i = 0; i < a.length; i++) {
        alert(a.split("-"))   
    }
}