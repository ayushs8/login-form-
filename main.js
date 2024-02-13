
let username=document.getElementById("username")
let password=document.getElementById("password")
let flag = 1;
function validateForm(){

  if(username.value == "")
  {
    document.getElementById("userError").innerHTML="USER NAME IS EMPTY";
    flag=0;
  }
  else if(username.value.lenght<3)
  {
    document.getElementById("userError").innerHTML="USER NAME REQUIRED MIN 3 CHAR";
    flag=0;
  }
  else{
    document.getElementById("userError").innerHTML="";
    flag=1;
  }
  if(password.VALUE == "" )
  {
    document.getElementById("passError").innerHTML="password is empty";
    flag=0;
  }
  else{
    document.getElementById("passError").innerHTML="";
    flag=1;
  }
  if(flag)
  {
    return true;
  }
  else{
    return false;
  }
}