var i=document.querySelector('#items')
//console.log(i.parentNode.parentNode.parentElement);
//i.parentNode.style.backgroundColor="yellow";

//console.log(i.previousElementSibling);

var newDiv= document.createElement('div');
 
newDiv.className='hey';

newDiv.id='hi';

newDiv.setAttribute('title','Hello');

var text=document.createTextNode('HEllo');

newDiv.appendChild(text);

var container=document.querySelector('header .container');

var h1=document.querySelector('header h1');
//console.log(newDiv);

container.insertBefore(newDiv,h1);

var n= document.createElement('div');
n.className='list-group';
n.id='items';
var t=document.createTextNode('HEllo');
n.appendChild(t);
var x=document.querySelector('.list-group')
var y=document.querySelector('li');
x.insertBefore(n,y);
//console.log(n);
























