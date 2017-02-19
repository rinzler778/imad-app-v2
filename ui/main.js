console.log('Loaded!');

//Change main text
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//move image
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft='100px';
};
