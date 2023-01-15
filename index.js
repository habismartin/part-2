
// function sendMail(){
//     var params = {
//         email: document.getElementById("email").value,
//         password: document.getElementById("password").value,
//     };

//     var serviceID = "service_1av3ras";
//     var templateID = "template_etskfp6";
    
//     emailjs
//     .send(serviceID,templateID,params)
//     .then((res) => {
//         document.getElementById("email").value = "";
//         document.getElementById("password").value = "";
//         console.log(res);
//         alert("sign in successful");
//     })
//     .catch((err) => console.log(err));
//     console.log("worked")
// }

window.addEventListener("DOMContentLoaded", function(){
    var form = document.getElementById("my-form");
    var Status = document.getElementById("status");

    function success(){
       form.reset();
       Status.style.display = "block"
       Status.classList.add('success');
       Status.innerHTML = "Signed in successfully";
    }

    function error(){
       Status.style.display = "block"
       Status.classList.add('error');
       Status.innerHTML = "Oops! there was a problem.";
    }
    
    form.addEventListener("submit", function(ev){
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});


function ajax(method, url, data, success, error){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function(){
        if (xhr.readyState !==XMLHttpRequest.DONE) return;
        if (xhr.status === 200){
            success(xhr.response, xhr.responseType);
        }else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}