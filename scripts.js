/* Add your JavaScript to this file */
window.onload = function newsletter(){

    let email = document.getElementById("email").value;
    let submit = document.getElementsByTagName("button")[0];
    let displaymsg = document.getElementsByClassName("message");



    submit.addEventListener('click', function(){
        console.log(email);
        if (email == ""){
            displaymsg.innerHTML = 'Please enter a valid email address.';
        }
        else if (email != ""){
            displaymsg.innerHTML = 'Thank You! Your email address ' + email + ' has been added to our mailing list!';
        }
    })




}