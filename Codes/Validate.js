function Validate(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    if(fname == "" || lname == ""){
        alert("name field cant be empty");
        return;
    }

    var isSelected;

    var gender_male = document.getElementById("male");
    if(male.checked) isSelected= "Male";

     var gender_female = document.getElementById("female");
    if(female.checked) isSelected= "Female";
//alert(isSelected);


    if(isSelected == false) alert("Choose Your Gender");

    var applying;
    var honors = document.getElementById("hns");
    if(honors.checked) applying = "Honors";

    var ms = document.getElementById("ms");
    if(ms.checked) applying = "Masters";

    var phd = document.getElementById("phd");
    if(phd.checked) applying = "Phd";

  // alert(applying)

  var passed = document.getElementById("hsc-passing-year");
  var passingYear = passed.options[passed.selectedIndex].text;
 // alert(passingYear);

 var dept = document.getElementById("dept");
  var department = dept.options[dept.selectedIndex].text;
 //alert(department);

 
  

}