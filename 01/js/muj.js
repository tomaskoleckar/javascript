/*alert('Toto pochází z externího souboru');*/
// var nadpis - starší deklarace proměnné v JS 
// proměnná v nových verzích JS
let nadpis = document.getElementById('nadpis');
let header = document.getElementById('header');
let img = document.getElementById('img');
nadpis.addEventListener('click', function(){
    nadpis.innerText = 'Ahoj Karle';
    nadpis.style.color = 'blue';
    nadpis.style.fontFamily = 'serif';
    nadpis.classList.add('text-right');
    nadpis.classList.remove('text-uppercase');
});
header.addEventListener('mouseover', function(){
    nadpis.style.fontSize = '50px';
    header.classList.remove('jumbotron');
    header.classList.remove('bg-danger');
    header.classList.add('bg-dark')
});
img.addEventListener('mouseover', function(){
img.src = "js/spongebob.jpg"
});
img.addEventListener('mouseleave', function(){
    img.src = "js/spongebob2.jpg"
    });

