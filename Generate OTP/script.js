function generateOTP() {
    return Math.floor(Math.random() * 1000000);
}

// Get the button element
var btn = document.getElementById('btn');

// Add click event listener to the button
btn.addEventListener('click', function() {
    // Call the generateOTP function and display the generated OTP
    var otp = generateOTP();
    document.getElementById('otpDisplay').innerText = 'Generated OTP: ' + otp;
});
