/* Add your JavaScript to this file */
window.onload = function newsletter(){
    let form = document.forms[0];
    form.placeholder = "Enter your email address";
    let submit = document.querySelector(".newsletter").querySelector(".btn");
    let displaymsg = document.querySelector(".message");
    let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



    submit.addEventListener('click', function(){
        let email = form.elements["email"];
        let value =email.value;
        if (value.match(emailPattern)){
            console.log(true);
            displaymsg.textContent = 'Thank You! Your email address ' + email + ' has been added to our mailing list!';
            
        }
        else {
            console.log(false);
            displaymsg.textContent = 'Please enter a valid email address.';
        }
    })


  
      
      



}