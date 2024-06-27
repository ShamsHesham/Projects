//to make input appears on credit card

document.querySelector('.cardholdername-input').oninput = () =>{
    document.querySelector('.cardholder-name').innerText = document.querySelector('.cardholdername-input').value;
  }
  
  document.querySelector('.cardnumber-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.cardnumber-input').value;
  }
  
  document.querySelector('.month-input').oninput = () =>{
    const expMonth = document.querySelector('.month-input').value.padStart(2, '0');
    const expYear = document.querySelector('.year-input').value.slice(-2);
    document.querySelector('.exp-date').innerText = expMonth + '/' + expYear;
  }
  
  document.querySelector('.year-input').oninput = () =>{
    const expMonth = document.querySelector('.month-input').value.padStart(2, '0');
    const expYear = document.querySelector('.year-input').value.slice(-2);
    document.querySelector('.exp-date').innerText = expMonth + '/' + expYear;
  }
  
  document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvc').innerText = document.querySelector('.cvv-input').value;
  }

//validation 
document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.querySelector('.cardholdername-input');
  const nameError = document.getElementById('nameError');
  const cardNumberInput = document.querySelector('.cardnumber-input');
  const cardNumberError = document.getElementById('cardNumberError');
  const monthInput = document.querySelector('.month-input');
  const monthError = document.getElementById('month-alert');
  const yearInput = document.querySelector('.year-input');
  const yearError = document.getElementById('year-alert');
  const cvvInput = document.querySelector('.cvv-input');
  const cvvError = document.getElementById('cvv-alert');
  
///checking if any field is empty to prevent submission
  function isAnyFieldEmpty() {
    return (
      nameInput.value.trim() === '' ||
      cardNumberInput.value.trim() === '' ||
      monthInput.value.trim() === '' ||
      yearInput.value.trim() === '' ||
      cvvInput.value.trim() === ''
    );
  }

  function validateInputFields() {
    if (/\d/.test(nameInput.value)) {
      nameError.style.display = 'block';
      nameInput.style.border = '2px solid red';
    } else {
      nameError.style.display = 'none';
      nameInput.style.border = '2px solid #ccc';
    }

    //16 number only
    const cardNumber = cardNumberInput.value.replace(/\s/g, ''); 
    if (!/^\d{16}$/.test(cardNumber)) {
      cardNumberError.style.display = 'block';
      cardNumberInput.style.border = '2px solid red';
    } else {
      cardNumberError.style.display = 'none';
      cardNumberInput.style.border = '2px solid #ccc';
    }
//month not less than 1 and not exceed 12
    const month = parseInt(monthInput.value);
    if (isNaN(month) || month < 1 || month > 12) {
      monthError.style.display = 'block';
      monthInput.style.border = '2px solid red';
    } else {
      monthError.style.display = 'none';
      monthInput.style.border = '2px solid #ccc';
    }

    //year not less than current year(year of creating website ) and not exceeding 10 years later(expiration not more than 10 years)
    const year = parseInt(yearInput.value);
    const currentYear = new Date().getFullYear();
    if (isNaN(year) || year < currentYear || year > currentYear + 10) {
      yearError.style.display = 'block';
      yearInput.style.border = '2px solid red';
    } else {
      yearError.style.display = 'none';
      yearInput.style.border = '2px solid #ccc';
    }

    const cvv = cvvInput.value;
    if (!/^\d{3}$/.test(cvv)) {
      cvvError.style.display = 'block';
      cvvInput.style.border = '2px solid red';
    } else {
      cvvError.style.display = 'none';
      cvvInput.style.border = '2px solid #ccc';
    }
  }

  // Event listeners for input validation
  nameInput.addEventListener('input', validateInputFields);
  cardNumberInput.addEventListener('input', validateInputFields);
  monthInput.addEventListener('input', validateInputFields);
  yearInput.addEventListener('input', validateInputFields);
  cvvInput.addEventListener('input', validateInputFields);

  document.getElementById('card-form').addEventListener('submit', function(event) {
    
    event.preventDefault();

//Preventing from submission if form is empty
    if (isAnyFieldEmpty()) {
      alert('Please fill in all the fields to Submit.');
      return;
    }

    validateInputFields();

    // Preventing from submission if errors exist
    if (nameError.style.display === 'block' ||
        cardNumberError.style.display === 'block' ||
        monthError.style.display === 'block' ||
        yearError.style.display === 'block' ||
        cvvError.style.display === 'block') {
      alert('Error! Please correct the errors in the form.');
      return;
    }

    // ASk the user if he is sure he wants to submit the form if yes then it will submit ,,if no he stays on same page
    var reply= "Are you Sure You Want To Submit the form?";
  if(confirm(reply)==true)
  {
  document.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Congratulations! Your Credit Card is Submitted Successfully");
    document.querySelector('.form-container').style.display = 'none';
    document.querySelector('.confirmation-container').style.display = 'block';
  });}
  else{

document.addEventListener('submit', function (e) {
    e.preventDefault()});
    alert("Form is Discarded");
}
  });
});



const cardNumberInput = document.querySelector('.cardnumber-input');

cardNumberInput.addEventListener('input', function() {
    let value = this.value.replace(/\s/g, ''); // Remove existing spaces
    value = value.replace(/\D/g, ''); // Remove non-numeric characters

    if (value.length > 16) {
        value = value.substr(0, 16); //  16 only
    }

    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' '; //  space after every 4 numbers
        }
        formattedValue += value[i];
    }

    this.value = formattedValue;
});

//event for continue button to continue to another website
function continueShopping() {
  alert("You Can Now Continue Your Request");
}