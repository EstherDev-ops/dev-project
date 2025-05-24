document.addEventListener('DOMContentLoaded', function(){
    const signupBtn = document.getElementById('signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function (){
          window.location.href ='signup.html';
        });
    }
    const loginBtn = document.getElementById('login-btn');
    if(loginBtn){
        loginBtn.addEventListener('click', function (){
            window.location.href = 'login.html';
        });
    }
    const getstartedBtn = document.getElementById('get-started-btn');
    if (getstartedBtn){
        getstartedBtn.addEventListener('click', function(){
            window.location.href = 'signup.html';
        });
    }
});