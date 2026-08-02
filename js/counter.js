/* =====================================================
   CONTADOR ANIMADO - RESULTADOS
   Cristian Camargo Portfolio
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) {
        return;
    }


    function startCounter(counter) {

        if (counter.dataset.started === "true") {
            return;
        }

        counter.dataset.started = "true";


        const target = Number(
            counter.getAttribute("data-target")
        );


        if (isNaN(target)) {
            return;
        }


        let current = 0;

        const duration = 1800;

        const startTime = performance.now();


        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(
                elapsed / duration,
                1
            );


            /*
             * Easing:
             * começa rápido e desacelera no final
             */
            const easedProgress =
                1 - Math.pow(1 - progress, 3);


            current =
                Math.floor(target * easedProgress);


            counter.textContent = current;


            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target;

            }

        }


        requestAnimationFrame(updateCounter);

    }


    /*
     * Observa cada contador individualmente.
     *
     * Isso funciona melhor no celular porque
     * não depende de 50% da seção inteira estar visível.
     */

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.15,

            rootMargin: "0px 0px -50px 0px"

        }

    );


    counters.forEach(counter => {

        observer.observe(counter);

    });

});