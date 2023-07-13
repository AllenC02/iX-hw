function onButtonClicked() {
    console.log('Button was clicked');
}

//examine the DOM

let dom;
dom = document;
console.log(dom);
console.log(dom.all);
console.log(dom.all.length);
console.log(dom.all[9]);
// dom.all[9].innerHTML = 'Goodbye there';
console.log(dom.forms);

let button = dom.getElementById('button-1');
// button.innerHTML = 'This changed';
console.log(button);

//get things from element
console.log(button.id);
console.log(button.classList);
console.log(button.className);