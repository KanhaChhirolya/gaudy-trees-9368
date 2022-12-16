let ls = JSON.parse(localStorage.getItem("signin")) || []
let form2= document.querySelector("form")
form2.addEventListener("submit",function (event) {
    event.preventDefault()
    let flag= false
    let mail1=form2.mail.value;
    let password1=form2.password.value;
    ls.forEach(element => {
        if(element.emailId==mail1 && password1==element.password){
            flag=true
        }
    });
    if(flag==true){
        alert("login successful.")
    }else{
        alert("wrong credentials")
    }
})