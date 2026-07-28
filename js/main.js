/* ======================================================
   PORTFÓLIO CRISTIAN CAMARGO
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       MENU MOBILE
    =============================== */

    const menu = document.querySelector(".menu");
    const menuButton = document.querySelector(".menu-mobile");

    if (menuButton) {

        menuButton.innerHTML = '<i class="bi bi-list"></i>';

        menuButton.addEventListener("click", () => {

            menu.classList.toggle("active");

            const icon = menuButton.querySelector("i");

            if (menu.classList.contains("active")) {

                icon.classList.remove("bi-list");
                icon.classList.add("bi-x-lg");

            } else {

                icon.classList.remove("bi-x-lg");
                icon.classList.add("bi-list");

            }

        });

    }

    /* ===============================
       FECHAR MENU
    =============================== */

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

            const icon = menuButton.querySelector("i");

            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");

        });

    });

    /* ===============================
       BOTÃO TOPO
    =============================== */

    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ===============================
       REVEAL
    =============================== */

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.15

    });

    reveals.forEach(el => observer.observe(el));

    /* ===============================
       ANO FOOTER
    =============================== */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});

/* ===============================
   PROGRESS BAR
=============================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / total) * 100;

    progressBar.style.width = progress + "%";

});