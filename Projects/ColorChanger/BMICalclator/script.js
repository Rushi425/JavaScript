const form = document.querySelector('form')

form.addEventListener('submit',function (e){
    e.preventDefault();  //for stopping the values to get in url or anywhere

    //to get values from form
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const resultElement =document.querySelector('#result');


    //checks
    if(height ===" " || height <= 0 || isNaN(height)){
        // innerHTML : to append result inplace of result
        resultElement.innerHtml="Please Enter a Valid Height.";
        return;
    }
    else if(weight ===" " || weight < 0 || isNaN(weight)){
        result.innerHtml="Please Enter a Valid Weight.";
        return;
    }
    else{
        const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
        //show the result
        resultElement.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }
});











