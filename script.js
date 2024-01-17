const publicKey = "Qd5iBPTV-SiEbzciD";
const serviceID = "service_qepq1ed";
const templateID = "template_v8ydk7q";

emailjs.init(publicKey);

var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');
    const inputFields = {
        to_name: "Deborah",
        from_name: name.value,
        reply_to: email.value,
        message: message.value,
        subject: subject.value
    }

emailjs.send(serviceID, templateID, inputFields)
.then(()=> {
    btn.innerText = "Message Sent Successfully.";
    name.value = "";
    email.value = "";
    message.value = "";
    subject.value = "";
    }, (error) => {
        console.log(error);
        submitBtn.innterText = "Something went wrong...";
    });

});