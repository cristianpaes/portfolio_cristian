/* =====================================================
   CONTADOR ANIMADO - RESULTADOS
===================================================== */


const counters = document.querySelectorAll(".counter");


const speed = 200;



function startCounter(counter){


    const target = +counter.getAttribute("data-target");


    let current = 0;


    const increment = target / speed;



    function updateCounter(){


        current += increment;



        if(current < target){


            counter.innerText = Math.ceil(current);


            requestAnimationFrame(updateCounter);


        }else{


            counter.innerText = target;


        }


    }



    updateCounter();


}





function counterObserver(){


    const section = document.querySelector("#resultados");



    if(!section){

        return;

    }



    const observer = new IntersectionObserver(

        entries => {


            entries.forEach(entry => {



                if(entry.isIntersecting){



                    counters.forEach(counter => {


                        startCounter(counter);


                    });



                    observer.disconnect();


                }



            });



        },


        {

            threshold:0.5

        }


    );



    observer.observe(section);


}





document.addEventListener(

"DOMContentLoaded",

counterObserver

);