let inputNumber = document.getElementById('number');
let submit = document.getElementById('submit');
let body = document.getElementById('body');

// console.log(submitNum);


submit.addEventListener('click', function() {

    // let number = inputNumber.value;
    // console.log(number + "px")
    // String Concatenation
    body.style.fontSize = inputNumber.value + "px";
    
    // number.textContent = submit.value;
    // body.style.fontSize = '5px';
    // body.style.backgroundColor = '#F9C51A';
    // body.flexDirection = 'row';
    // number.style.fontSize = '8px';
    // number.style.backgroundColor = '#F9C51A'
    // submit.style.fontSize = '5px';
})
// function execute();()