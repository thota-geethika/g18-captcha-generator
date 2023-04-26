
function generateCaptcha()
{
    document.getElementById("statusText").innerHTML = "";

    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let uniquechar = "";
    
    // Generate captcha for length of
    // 5 with random character
    for (let i = 0; i < 6; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length);
    }

    document.getElementById("actualCaptchaValue").innerText = uniquechar;
    document.getElementById("enteredCaptchaValue").focus();
}

function checkCaptcha()
{

    let actualCaptcha = document.getElementById("actualCaptchaValue").innerText;

    let enteredCaptcha = document.getElementById("enteredCaptchaValue").value;

    document.getElementById("enteredCaptchaValue").value = "";
    
    if(enteredCaptcha == actualCaptcha)
    {
        document.getElementById("statusText").innerHTML = "Captcha matched!";
    }

    else{
        document.getElementById("statusText").innerHTML = "Captcha not matched. Please try again!";
    }

    document.getElementById("enteredCaptchaValue").focus();
}