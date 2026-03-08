document.getElementById('login-btn').addEventListener('click',function(){
    const userName = document.getElementById('user-name');
    const name = userName.value;

    console.log(name)


    const userPin = document.getElementById('user-pin');
    const pin = userPin.value;
    console.log(pin)

    if(name=='admin' && pin=='admin123'){
        alert ('login successfully')
        window.location.assign("/home.html");

    }
    else{
        alert('login failed')
        return
    }
})