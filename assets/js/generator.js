//variable declarations:
var pwdNumberPrompt;
var hasNumericChar;
var hasUppercaseChar;
var hasLowercaseChar;
var hasSpecialChar;	
var characterCodes=[];
var pwdChoices=[];
var pwdCharacterHolder =[];

/*Set arrays for password selections for upper/lower case, number and special characters*/
const upperCaseChar= arrayAsciiCharCode(65,90)
const lowerCaseChar= arrayAsciiCharCode(97,122)
const numberChar= arrayAsciiCharCode(48,57)
const specialChar= arrayAsciiCharCode(33,47).concat(arrayAsciiCharCode(58,64)).concat(
arrayAsciiCharCode(91,96)).concat(arrayAsciiCharCode(123,126))

//This is the function that calls the generate password function once the button is clicked.
document.getElementById("button").onclick =function(){
	const securePwd= generateSecurePwd()
	//Two different message box's will appear. If your password is null, you will be prompted to try again. You will get a password if you are successful.
	if(securePwd== null)
		{
			alert("You did not recieve a password.  Click the 'generate password' button to try again. Make sure you follow the prompts!");
		} else{
			alert("Copy your password: " + securePwd);
		}
	window.location.reload();
}

//Function call to generate a secure password upon user selection criteria
function generateSecurePwd()
{
	//Initial call to user to input desired length of password.
	pwdNumberPrompt= parseInt(prompt("Passwords must have between 8 and 128 characters. How many characters would you like your password to have?", "Please enter a number..."));
	
	//Validation if user input is an acutal number, or if the user clicked the 'Cancel' button.
	if(Number.isNaN(pwdNumberPrompt))
		{
			alert("Password length must be a number.");
			return	null;
		} 
	//Validation if the user input length is the within the password length parameters 8 and 128 characters long.
	 if(pwdNumberPrompt < 8 || pwdNumberPrompt > 128)	{
		numberPrompt= parseInt(alert("Your password must be a lenghth between 8 and 128 characters"));
		  return null;
	   }
			var userInputChars;
			//Validate user prompt choices: User has a choice to include numbers, UPPER CASE letters, lower case letters and special characters.
			hasNumericChar= confirm("Would you like to include numbers in your password?");
			hasUppercaseChar= confirm("Would you like to include 'UPPER CASE' letters in your password?");
			hasLowercaseChar= confirm("Would you like to include 'lower case' letters in your password?");
			hasSpecialChar= confirm("Would you like to include special characters in your password?");
			console.log(hasNumericChar +" "+hasUppercaseChar +" "+ hasLowercaseChar +" " + hasSpecialChar);
			
//      If the user has not chosen any criteria (number, upper/ lower or special char)
    if (!hasNumericChar && !hasUppercaseChar && !hasLowercaseChar && !hasSpecialChar) 
	{
        pwdChoices = alert("You must choose selection criteria to generate a password!");
		return null
    }

//		Validation on if password is to include numbers	
  	if (hasNumericChar){	
		pwdChoices = pwdChoices.concat(numberChar);
		userInputChars="Numbers/ "
	}
	
//		Validate on if password is to include special characters	
	if (hasSpecialChar){
		pwdChoices= pwdChoices.concat(specialChar);
		userInputChars+="Special characters/"
 	}
	
//		Validation on if password is to include 'UPPER CASE' characters	
	if (hasUppercaseChar){
		pwdChoices= pwdChoices.concat(upperCaseChar);
		userInputChars+= "Upper case characters/ "
	}
	
//   	Validation on if password is to include 'lower case' characters
	if(hasLowercaseChar){
		pwdChoices= pwdChoices.concat(lowerCaseChar);
		userInputChars+='lower case characters/ '
	}
	//Confirm user selections
	alert("Your password will contain "+ userInputChars);
	
//		Calculations to generate the password to include password lenght, selection criteria, 			and validations
	for (var i = 0; i < pwdNumberPrompt; i++) {
		 console.log(pwdNumberPrompt);
		 characterCodes = pwdChoices[Math.floor(Math.random() * pwdChoices.length)];
	     pwdCharacterHolder.push(String.fromCharCode(characterCodes));
	}
		 return pwdCharacterHolder.join('')	
}

// Function that interprets ASCII char codes to text/number/special chars
function arrayAsciiCharCode(lowVal, highVal)
{
	const convertArray= [];
	for(let i=lowVal; i<=highVal; i++){
		convertArray.push(i)
	}
	return convertArray;	
}


