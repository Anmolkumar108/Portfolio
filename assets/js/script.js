window.addEventListener("scroll",()=>{

    const header=document.getElementById("header");

    if(window.scrollY>50){

        header.style.background="rgba(5,8,22,.92)";

    }

    else{

        header.style.background="rgba(5,8,22,.65)";

    }

    const winScroll=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const scrolled=(winScroll/height)*100;

    document.getElementById("progress-bar").style.width=scrolled+"%";

});

/*==================================
        EMAIL JS
==================================*/

emailjs.init({
    publicKey: "3sHymfO2y8zllXZ_G",
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_uzy3khp",
        "template_16s0grs",
        this
    ).then(() => {

        alert("✅ Message sent successfully!");

        contactForm.reset();

    }).catch((error) => {

        alert("❌ Failed to send message.");

        console.error(error);

    });
});