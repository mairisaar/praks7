//DOM Elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');

//Listening to events
//e = event
kgInput.addEventListener('input', e => {
    let kg = e.target.value;
    
    gramOutput.innerHTML = `${kg * 1000} g`; //grammid on kg korda 1000, lausena kuvatakse ühikud ka
});

