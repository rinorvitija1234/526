
function validation(){

   var name = document.getElementById("name").value;

   var valid_name_regex = /^[A-Za-z]+$/;

   var age = document.getElementById("age").value;

   var valid_age_regex = /^[0-9]+$/;

   var city = document.getElementById("city").value;

   var school = document.getElementById("school").value;

  
  
if(!(school.match(valid_school_regex))){

         document.getElementById("school_error").style.visibility = "visible";
         document.getElementById("school").style.borderColor = "red";



      if(!(name.match(valid_name_regex)) || !(age.match(valid_age_regex)) || (city == "")){

        if(!(name.match(valid_name_regex))){

         document.getElementById("name_error").style.visibility = "visible";
         document.getElementById("name").style.borderColor = "red";
          
      }else{

         document.getElementById("name_error").style.visibility = "hidden";
         document.getElementById("name").style.borderColor = "black";

      }

      if(!(age.match(valid_age_regex))){

         document.getElementById("age_error").style.visibility = "visible";
         document.getElementById("age").style.borderColor = "red";
          
      }else{

         document.getElementById("age_error").style.visibility = "hidden";
         document.getElementById("age").style.borderColor = "black";

      }

       if(city == ""){

         document.getElementById("city_error").style.visibility = "visible";
         document.getElementById("city").style.borderColor = "red";
          
      }else{

         document.getElementById("city_error").style.visibility = "hidden";
         document.getElementById("city").style.borderColor = "black";

      }


      return false;


    }else{

       document.getElementById("name_error").style.visibility = "hidden";
       document.getElementById("name").style.borderColor = "black";
       document.getElementById("age_error").style.visibility = "hidden";
       document.getElementById("age").style.borderColor = "black";
       document.getElementById("city_error").style.visibility = "hidden";
       document.getElementById("city").style.borderColor = "black";
        document.getElementById("school_error").style.visibility = "hidden";
       return true;

    }

         


    



        
        

   


 }


 // var phone = document.getElementById("phone").value;

  // var validPhone = RegExp('[0-9]{9,14}');


  // || (validPhone.test(phone) == false)

   // if(validName.test(name) == false){


      //  if(validPhone.test(phone) == false){

      //    document.getElementById("phone_error").style.visibility = "visible";
      //    document.getElementById("phone_error").style.color = "red";
      //    document.getElementById("phone").style.borderColor = "red";

      // } else {
 
      //    document.getElementById("phone_error").style.visibility = "hidden";
      //    document.getElementById("phone").style.borderColor = "black";

      // }


       // }else{

        

     // }
