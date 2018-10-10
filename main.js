//DOM Elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ounceOutput = document.getElementById('ounceOutput');

//Listening to events
//e = event
kgInput.addEventListener('input', e => {
    let kg = e.target.value;
    
    gramOutput.innerHTML = `${kg * 1000} g`; //grammid on kg korda 1000, lauses kuvatakse ühikud 
    
    poundOutput.innerHTML = `${kg * 2.205} lbs`; //naelad on kg korda 2.205, lauses kuvatakse ühikud 
    
    ounceOutput.innerHTML = `${kg * 35.274} oz`; //untsid on kg korda 2.205, lauses kuvatakse ühikud 
});

