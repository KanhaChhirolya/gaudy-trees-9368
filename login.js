let arr=JSON.parse(localStorage.getItem("signin")) || [];
    let forms=document.querySelector("form");
    forms.addEventListener("submit",function(event){
        event.preventDefault()
        let obj={
            name: forms.name.value,
            emailId: forms.mail.value,
            password:forms.password.value,
        }
        arr.push(obj)
        localStorage.setItem("signin",JSON.stringify(arr))
        if(obj.emailId=="" || obj.password==""){
            return false
        }else{
            alert("successfully signed up")
        }
    })