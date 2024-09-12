const email=document.getElementById("email")
const password=document.getElementById("password")

email.addEventListener('input',()=>{
    const emailBox = document.querySelector('emailBox')
    const emaiText = document.querySelector('emailText')
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/

    if (email.ariaValueMax.match(emailPattern)) {
        emailBox.classList.add('valid')
        emailBox.classList.remove('invalid')
        emaiText.innerHTML="Your Email in valid"
    }

    else {
        emailBox.classList.add('valid')
        emailBox.classList.remove('invalid')
        emaiText.innerHTML="Your Email in not valid"
    }
});
