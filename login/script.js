const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const pass=document.getElementById("pass");
const confpass=document.getElementById("confpass");
const myForm=document.getElementById("reg-form");
function OchangeName()
{
  const nameValue = nameInput.value.trim();
  if(nameValue=="" || nameValue.length<2 || nameValue.length>20)
  {
      document.getElementById("errorName").innerHTML="Name should be between 2-10 alphabets";
      document.getElementById("name").className = "error";
      return false;
  }
  else
  {
    document.getElementById("errorName").innerHTML="";
    document.getElementById("name").classList.remove("error");
    return true;
  }
}
function OchangeEmail()
{
  const emailValue = email.value.trim();
  if(emailValue.indexOf('@')<=0) //@ not at postion 0 ,-1(not present)
  {
      document.getElementById("errorEmail").innerHTML="Email should be in the format XXX@XX.com";
      document.getElementById("email").className = "error";
      return false;
  }
  if(emailValue.charAt(emailValue.length-4)!="." && emailValue.charAt(emailValue.length-3)!=".") // dot should be at 3rd or 4th position from last eg: .com , .in
  {
    document.getElementById("errorEmail").innerHTML="Email should be in the format XXX@XX.com";
    document.getElementById("email").className = "error";
    return false;
  }
  else
  {
    document.getElementById("errorEmail").innerHTML="";
    document.getElementById("email").classList.remove("error");
    return true;
  }
}
function OchangePass()
{
  const passValue = pass.value.trim();
  if(passValue.length<8 || passValue.search(/[0-9]/)==-1 || passValue.search(/[A-Z]/)==-1 || passValue.search(/[a-z]/)==-1 || passValue.search(/[!\@\#\$\%\^\&\*]/)==-1)
      {
          document.getElementById("errorPass").innerHTML="Password is not strong   eg:Abxkes12#";
          document.getElementById("pass").className = "error";
          return false;
      } 
      else
      {
        document.getElementById("errorPass").innerHTML="";
        document.getElementById("pass").classList.remove("error");
        return true;
      }
}
function OchangeConfPass()
{
  const passValue = pass.value.trim();
  const confpassValue = confpass.value.trim();
   
  if(confpassValue!=passValue)
  {
      document.getElementById("errorConfpass").innerHTML="Password doesnt match";
      document.getElementById("confpass").className = "error";
      return false;
  }
  else
  {
    document.getElementById("errorConfpass").innerHTML="";
    document.getElementById("confpass").classList.remove("error");
    return true;
  }
}


function  checkInputs()
{
  // for showing all errors in one submit click
  OchangeName();
  OchangeEmail();
  OchangePass();
  OchangeConfPass();
  //for returing true or false based on functions
  if(OchangeName()==true && OchangeEmail()==true && OchangePass()==true && OchangeConfPass()==true)
  {
    return true;
  }
  else
  {
    return false;
  }

}


