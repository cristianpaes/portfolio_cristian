/* =====================================================
   EFEITO DE DIGITAÇÃO - HERO
===================================================== */


const typingElement = document.getElementById("typing-text");


const words = [

    "Database Administrator",

    "Analista de Dados",

    "Especialista em T-SQL",

    "Performance Tuning",

    "Automação com Python"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typingEffect(){


    if(!typingElement){

        return;

    }



    const currentWord = words[wordIndex];



    if(!deleting){


        typingElement.textContent =

        currentWord.substring(0,charIndex + 1);


        charIndex++;



        if(charIndex === currentWord.length){


            deleting = true;


            setTimeout(typingEffect,1500);


            return;

        }


    }else{


        typingElement.textContent =

        currentWord.substring(0,charIndex - 1);



        charIndex--;



        if(charIndex === 0){


            deleting = false;


            wordIndex++;



            if(wordIndex === words.length){


                wordIndex = 0;


            }


        }


    }



    setTimeout(

        typingEffect,

        deleting ? 60 : 120

    );


}





document.addEventListener(

"DOMContentLoaded",

typingEffect

);