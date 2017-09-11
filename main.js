let one = document.querySelector('#one'),
    two = document.querySelector('#two'),
    three = document.querySelector('#three'),
    four = document.querySelector('#four'),
    five = document.querySelector('#five'),
    six = document.querySelector('#six'),
    seven = document.querySelector('#seven'),
    eight = document.querySelector('#eight'),
    nine = document.querySelector('#nine'),
    zero = document.querySelector('#zero'),
    ravno = document.querySelector('#ravno'),
    minus = document.querySelector('#minus')
    plus = document.querySelector('#plus'),
    delit = document.querySelector('#delit'),
    umnoj = document.querySelector('#umnoj'),
    percent = document.querySelector('#percent'),
    dot = document.querySelector('#dot'),
    input = document.querySelector('input');
console.log(ravno.textContent === '=');

let arr = [one,two,three,four,five,six,seven,eight,nine,zero,minus,plus,delit,umnoj,percent,dot];

arr.forEach((val) => {
    val.addEventListener('click', function (e) {
        if (input.value === '' || input.value === '0')
            input.value = val.textContent;
        else {
            input.value += val.textContent;
        }

    });
});

ravno.addEventListener('click', (e) => {
            console.log(input.value);
            input.value = eval(input.value);
        
});




