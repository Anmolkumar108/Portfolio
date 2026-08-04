window.addEventListener("scroll",()=>{

    const header=document.getElementById("header");

    if(window.scrollY>50){

        header.style.background="rgba(5,8,22,.92)";

    }

    else{

        header.style.background="rgba(5,8,22,.65)";

    }

    