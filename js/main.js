/* =====================================================
   MAIN.JS - CONTROLES GERAIS DO PORTFÓLIO
===================================================== */


/* =====================================================
   MENU MOBILE
===================================================== */


const menuIcon = document.querySelector(".menu-mobile");

const menu = document.querySelector(".menu");



if(menuIcon){


    menuIcon.addEventListener("click",()=>{


        menu.classList.toggle("active");


        menuIcon.classList.toggle("active");


    });


}



/* =====================================================
   FECHAR MENU AO CLICAR NO LINK
===================================================== */


const menuLinks = document.querySelectorAll(".menu a");



menuLinks.forEach(link => {


    link.addEventListener("click",()=>{


        menu.classList.remove("active");


        menuIcon.classList.remove("active");


    });


});






/* =====================================================
   SCROLL SUAVE
===================================================== */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){



        const target = document.querySelector(
            this.getAttribute("href")
        );



        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});






/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */


const topButton = document.getElementById("topButton");


if(topButton){

    window.addEventListener("scroll",()=>{


        if(window.scrollY > 400){

            topButton.classList.add("show");


        }else{

            topButton.classList.remove("show");

        }


    });



    topButton.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}



if(topButton){


    topButton.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}






/* =====================================================
   ANIMAÇÃO REVEAL NO SCROLL
===================================================== */


const revealElements = document.querySelectorAll(".reveal");



const revealObserver = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("active");


        }


    });


},


{

    threshold:0.15

}


);



revealElements.forEach(element=>{


    revealObserver.observe(element);


});







/* =====================================================
   ANO AUTOMÁTICO FOOTER
===================================================== */


const year = document.getElementById("year");



if(year){


    year.textContent = new Date().getFullYear();


}