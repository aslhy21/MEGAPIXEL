/* ==========================================================
   MEGAPIXEL ESTUDIO GRÁFICO
   SCRIPT.JS
========================================================== */


/* ==========================================================
   01. ELEMENTOS
========================================================== */

const header =
    document.querySelector(".header");

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");

const reveals =
    document.querySelectorAll(".reveal");

const cursor =
    document.querySelector(".cursor");

const cursorFollow =
    document.querySelector(".cursor-follow");

const heroLogo =
    document.querySelector(".hero-logo img");

const featureImage =
    document.querySelector(".feature-image img");



/* ==========================================================
   02. HEADER AL HACER SCROLL
========================================================== */

window.addEventListener(
    "scroll",
    () => {

        if (!header) return;

        if (window.scrollY > 60) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);



/* ==========================================================
   03. MENÚ MÓVIL
========================================================== */

if (menuBtn && nav) {

    menuBtn.addEventListener(
        "click",
        () => {

            menuBtn.classList.toggle(
                "active"
            );

            nav.classList.toggle(
                "open"
            );

            document.body.classList.toggle(
                "menu-open"
            );

        }
    );


    const navLinks =
        nav.querySelectorAll("a");


    navLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    menuBtn.classList.remove(
                        "active"
                    );

                    nav.classList.remove(
                        "open"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        }
    );

}



/* ==========================================================
   04. ANIMACIONES AL HACER SCROLL
========================================================== */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {

            threshold: 0.12

        }

    );


reveals.forEach(
    element => {

        observer.observe(
            element
        );

    }
);



/* ==========================================================
   05. CURSOR PERSONALIZADO
========================================================== */

let mouseX = 0;
let mouseY = 0;

let followX = 0;
let followY = 0;


document.addEventListener(
    "mousemove",
    event => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        if (cursor) {

            cursor.style.left =
                `${mouseX}px`;

            cursor.style.top =
                `${mouseY}px`;

        }

    }
);



function animateCursor() {

    followX +=
        (mouseX - followX)
        * 0.12;

    followY +=
        (mouseY - followY)
        * 0.12;


    if (cursorFollow) {

        cursorFollow.style.left =
            `${followX}px`;

        cursorFollow.style.top =
            `${followY}px`;

    }


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();



/* ==========================================================
   06. CURSOR EN LINKS
========================================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .project-card, .portfolio-item"
    );


interactiveElements.forEach(
    element => {

        element.addEventListener(
            "mouseenter",
            () => {

                if (cursorFollow) {

                    cursorFollow.style.transform =
                        "translate(-50%, -50%) scale(1.8)";

                }

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                if (cursorFollow) {

                    cursorFollow.style.transform =
                        "translate(-50%, -50%) scale(1)";

                }

            }
        );

    }
);



/* ==========================================================
   07. EFECTO 3D LOGO HERO
========================================================== */

if (heroLogo) {

    const hero =
        document.querySelector(
            ".hero"
        );


    hero.addEventListener(
        "mousemove",
        event => {

            const rect =
                hero.getBoundingClientRect();


            const x =
                event.clientX
                - rect.left;


            const y =
                event.clientY
                - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateY =
                (x - centerX)
                / centerX
                * 6;


            const rotateX =
                (centerY - y)
                / centerY
                * 6;


            heroLogo.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.03)
                `;

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            heroLogo.style.transform =
                `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
                `;

        }
    );

}



/* ==========================================================
   08. PARALLAX IMAGEN GRANDE
========================================================== */

window.addEventListener(
    "scroll",
    () => {

        if (!featureImage) return;


        const section =
            document.querySelector(
                ".feature-image"
            );


        const rect =
            section.getBoundingClientRect();


        if (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        ) {

            const movement =
                rect.top * 0.08;


            featureImage.style.transform =
                `translateY(${movement}px)`;

        }

    }
);



/* ==========================================================
   09. EFECTO MAGNÉTICO EN BOTONES
========================================================== */

const magneticButtons =
    document.querySelectorAll(
        ".circle-button, .cta-button"
    );


magneticButtons.forEach(
    button => {

        button.addEventListener(
            "mousemove",
            event => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX
                    - rect.left
                    - rect.width / 2;


                const y =
                    event.clientY
                    - rect.top
                    - rect.height / 2;


                button.style.transform =
                    `
                    translate(
                        ${x * .12}px,
                        ${y * .12}px
                    )
                    `;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0,0)";

            }
        );

    }
);



/* ==========================================================
   10. FORMULARIO
========================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const button =
                contactForm.querySelector(
                    ".form-button"
                );


            const originalText =
                button.innerHTML;


            button.innerHTML =
                "MENSAJE ENVIADO ✓";


            setTimeout(
                () => {

                    button.innerHTML =
                        originalText;

                    contactForm.reset();

                },

                2500
            );

        }
    );

}



/* ==========================================================
   11. EFECTO PARALLAX GENERAL
========================================================== */

window.addEventListener(
    "scroll",
    () => {

        const scrollY =
            window.scrollY;


        const glowOrange =
            document.querySelector(
                ".glow-orange"
            );


        const glowBlue =
            document.querySelector(
                ".glow-blue"
            );


        if (glowOrange) {

            glowOrange.style.transform =
                `
                translateY(
                    ${scrollY * .15}px
                )
                `;

        }


        if (glowBlue) {

            glowBlue.style.transform =
                `
                translateY(
                    ${scrollY * -.1}px
                )
                `;

        }

    }
);



/* ==========================================================
   12. CARGA INICIAL
========================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );


        const firstElements =
            document.querySelectorAll(
                ".hero .reveal, .page-hero .reveal"
            );


        firstElements.forEach(
            (element, index) => {

                setTimeout(
                    () => {

                        element.classList.add(
                            "visible"
                        );

                    },

                    150 * index
                );

            }
        );

    }
);