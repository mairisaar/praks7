//DOM Elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ozOutput = document.getElementById('ozOutput');
let output = document.getElementById('output');

output.style.visibility = 'hidden';

//Listening to events
//e = event
kgInput.addEventListener('input', e => {
    let kg = e.target.value;
    
    output.style.visibility = (kg === '0') ? 'hidden' : 'visible';
    
    gramOutput.innerHTML = `${kg * 1000} g`; //grammid on kg korda 1000, lauses kuvatakse ühikud 
    
    poundOutput.innerHTML = `${(kg * 2.20462262).toFixed(2)} lb`; //naelad on kg korda 2.205, lauses kuvatakse ühikud 
    
    ozOutput.innerHTML = `${(kg * 35.2739619).toFixed(2)} oz`; //untsid on kg korda 2.205, lauses kuvatakse ühikud 
});

