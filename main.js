//DOM Elements
let kgInput = document.getElementById('kgInput');

//Listening to events
//e = event
kgInput.addEventListener('input', e => {
    let kg = e.target.value;
    console.log(kg);
});