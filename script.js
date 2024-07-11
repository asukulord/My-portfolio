// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone= document.getElementById("phone");
const subject= document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br>  Email: ${email.value}<br>
     Phone Number: ${phone.value}<br> Message: ${mess.value}`;

   Email.send({ 
    Host: "smtp.elasticemail.com",
    Username: "asukulord@gmail.com",
    Password:"325ADEFB71C0D57C977380CD382D33A4DF60",
    To: "asukulord@gmail.com",
    From: "asukulord@gmail.com",
    Subject: subject.value,
   Body: bodyMessage

   }).then(
    message =>{
        if (message=== "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent  Sucessfully!",
                icon: "success"
              });
        }
    }
   );
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    sendEmail();
});


// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');


//         if(top >= offset && top < offset + Height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a
//                     [href*=' + id + ' ]').classList.add?
//                     ('active') 
//                 )
//             })
//         }
//     })
// } 




// menuIcon.onclick =() =>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active')
// }

