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
    
    if (kg === '0'){
        output.style.visibility = 'hidden';
    } else {
    output.style.visibility = 'visible';
    };
    
    gramOutput.innerHTML = `${kg * 1000} g`; //grammid on kg korda 1000, lauses kuvatakse ühikud 
    
    poundOutput.innerHTML = `${kg * 2.20462262} lb`; //naelad on kg korda 2.205, lauses kuvatakse ühikud 
    
    ozOutput.innerHTML = `${kg * 35.2739619} oz`; //untsid on kg korda 2.205, lauses kuvatakse ühikud 
});

