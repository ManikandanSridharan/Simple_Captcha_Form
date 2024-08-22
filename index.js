function generateCaptcha() {
    const charsArray =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$*%";
    const lengthOtp = 6;
    let captcha = [];

    for (let i = 0; i < lengthOtp; i++) {
        const index = Math.floor(Math.random() * charsArray.length);
        captcha.push(charsArray[index]);
    }

    document.getElementById("captcha").innerHTML = captcha.join("");
    document.getElementById("message").innerHTML = "";
}

function validateCaptcha() {
    const userInput = document.getElementById("userInput").value;
    const captchaText = document.getElementById("captcha").innerHTML;

    if (userInput === captchaText) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "CAPTCHA matched!";
        // Submit the form or further validation here
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "CAPTCHA did not match!";
    }
}

window.onload = function () {
    generateCaptcha();
};

