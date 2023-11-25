document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form")[0];
    let name = document.getElementById("name");
    let password1 = document.getElementById("password-1");
    let password2 = document.getElementById("password-2");
    let btn = document.getElementById("button");
    let email = document.getElementById("email")

    let token = "";
    const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()";
    for(let i=0;i<16;i++){
        token+= keys.charAt(Math.floor(Math.random()*keys.length));
    }

    let userdata = {};
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        if (password1.value !== password2.value) {
            let error = document.getElementById("error");
            error.innerHTML = "Error: PASSWORD NOT MATCHING!!";
        }else if(name.value.length ==0 || password1.value.length ==0 || email.value.length ==0){
            error.innerHTML = " Error: All fields are mandatory!";
        } else {
            userdata.name = name.value,
                userdata.email = email.value,
                userdata.password = password1.value,
               userdata.token = token,
                localStorage.setItem("userData", JSON.stringify(userdata))
            window.location.href = "./profile.html"
        }
    });
    

    let c = 0; // Initial angle
    const rotationIncrement = 1; // Incremental angle change
    const intervalTime = 50; // Interval time in milliseconds (1 second in this example)
    let x=0;
    function rotateWave() {
        let waveElement = document.querySelector('body');
    
       // if (waveElement) {
            x=25;
           if(c<200){
           waveElement.style.backgroundColor = `rgb(${50},${50},${c})`
            c += rotationIncrement;
            console.log(`rgb(${x},${c},${c})`);
            //x++;
        }else{
            c=0;
        }
    }
    
    // Set up the interval to call the rotateWave function
    setInterval(rotateWave, intervalTime);
    





});
