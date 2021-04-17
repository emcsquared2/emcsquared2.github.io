let submitButton = document.getElementById('submit-button');
let result = document.getElementById('result');
let checkIcon = document.getElementById('check-icon');
let validation = '';
  
const companies = {
    Amex: 3,
    Visa: 4,
    Mastercard: 5,
    Discover: 6
  };
    
  const convertStringToArray = s => s.split('').map(e => parseInt(e,10));
  
  const validateCred2 = arr => {
    let arr2 = [...arr];
    arr2.reverse();
  
    let sumElements = arr2.reduce((accum, curr, index) => {
      return accum + (index % 2 !== 0 ? (curr*2 > 9 ? (curr*2) - 9 : curr*2) : curr);
    });
    sumElements % 10 === 0 ? validation = 'VALID': validation ='INVALID';
  };
  
  
  const checkCompany = arr => {
    let companyMatch = ''; 
  for (let card in companies) {
    if (arr[0] == companies[card] && validation === 'VALID'){
    result.innerHTML = `This is a ${card} credit card number that is ${validation}`;
    checkIcon.style.display = "inline";
    companyMatch = card;
      } 
    }
   if (companyMatch === ''){
    result.innerHTML = 'Card Unrecognised';
   }
  }
  
  const runCheck = () => {
    let numString = document.getElementById('user-input').value;
    const convertedArray = convertStringToArray(numString);
    validateCred2(convertedArray);
    checkCompany(convertedArray);
        }
    
    submitButton.onclick = runCheck;