document.addEventListener("DOMContentLoaded",function(){
    const username = document.querySelector('input[name="username"]');
    const password = document.querySelector('input[name="password"]');
    const btn = document.querySelector('button[type="submit"]');
    const loginFailed = document.querySelector(".login-failed-msg");
    const inputEls = [username,password];
    const form = document.getElementById("login-form");


    function handleForm(event) { event.preventDefault();} 
    form.addEventListener('submit', handleForm);

    
    // to change the Login button color if username or PASWD are not valid
    inputEls.forEach((elem)=> {
        elem.addEventListener("input", ()=> {
                if(password.value.length >=6 && username.value.length > 0)
                    btn.style.backgroundColor   = "#0095F6";
                else btn.style.backgroundColor  = "#B2DFFC";
             
        });
    });

    // check login username and password
    btn.addEventListener('click', ()=>{
        if(username.value =="test" && password.value == "test123")
        alert("Welcome to Instagream!")
        else loginFailed.style.display = "block"; 
    })



});

   

