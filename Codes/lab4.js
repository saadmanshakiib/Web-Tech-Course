function onSubmitForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    console.log({name, email});
    if(!name){
        document.getElementById("nameError").innerHTML = "Name is required";
    }else if (name.length<6){
      document.getElementById("nameError").innerHTML = "Name should be at least 6 char long";  
    }
    if(!email){
        document.getElementById("emailError").innerHTML = "Email is required";
    }else if (email.length<10){
      document.getElementById("emailError").innerHTML = "Email should be at least 10 char long";  
    }
    return false;
}

function handleClick(){
    alert("hehehehe")
}