// Listening for submit 
document.getElementById('loan-form').addEventListener('submit', function(e){
    // hide result 
    document.getElementById('results').style.display = 'none'

    // shpw loader 
    document.getElementById('loading').style.display = 'block'

    setTimeout(calculate, 2000);
    
    e.preventDefault();
});

// calculate Result 
function calculate(){
    // console.log(x)
    // UI Vars 
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const Years = document.getElementById('Years');
    const monthlypayment = document.getElementById('monthly-payment');
    const totalpayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-Interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 /12;
    const calculatedPayment = parseFloat(Years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlypayment.value = monthly.toFixed(2);
        totalpayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment)-principal).toFixed(2);

        // show results 
        document.getElementById('results').style.display = 'block'

        // hide loading 
        document.getElementById('loading').style.display = 'none'
    } else {
        showError('please check your inputs');

        // hide loading 
        document.getElementById('loading').style.display = 'none'
    }

}

// show eror 
function showError(error){
    // create a div 
    const errorDiv = document.createElement('div');

    // Get elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class 
    errorDiv.className = 'alert alert-danger';

    // create text node and append to div 
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading 
    card.insertBefore(errorDiv, heading);

    // clear error after 3 secs 
    setTimeout(clearError, 3000)
    function clearError(){
        document.querySelector('.alert').remove();
    }
} 