window.addEventListener('load', () => {
    document.querySelector(".horizontal-scroll").scrollTo({
        left: document.getElementById("intro").offsetLeft,
        // behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", () => {
    //intro section
    const introSection = document.getElementById("intro");
    //hangers from intro section
    const hangers = document.querySelectorAll(".hanger");
    //me2.png image
    const introImgContainer = document.querySelector(".intro-img-container");
    //intro section text elements
    const h1 = document.querySelector("#intro h1");
    const h2 = document.querySelector("#intro h2");
    const p = document.querySelector("#intro p")
    //about me section text elements
    const aboutSection = document.getElementById("about");
    const abh2 = document.querySelector("#about h2");
    const abp = document.querySelector("#about p");

    let firstTime = true;
    let wasHidden = true;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hangers.forEach(hanger => {
                    hanger.classList.remove("hidden", "visible", "first-visible");
                    hanger.offsetHeight;

                    if (firstTime) {
                        hanger.classList.add("first-visible");
                        setTimeout(() => {
                            hanger.classList.remove("first-visible");
                            hanger.classList.add("visible");
                        }, 4000);
                    } else {
                        hanger.classList.add("visible");
                    }
                });

                introImgContainer.classList.remove("hidden", "visible", "first-visible");
                introImgContainer.offsetHeight;

                h1.classList.remove("hidden", "visible", "first-visible");
                h2.classList.remove("hidden", "visible", "first-visible");
                p.classList.remove("hidden", "visible", "first-visible");
                h1.offsetHeight; h2.offsetHeight; p.offsetHeight;

                if (firstTime) {
                    h1.classList.add("first-visible");
                    h2.classList.add("first-visible");
                    p.classList.add("first-visible");
                } else if (wasHidden) {
                    h1.classList.add("visible");
                    h2.classList.add("visible");
                    p.classList.add("visible");
                }

                if (firstTime) {
                    introImgContainer.classList.add("first-visible");
                } else if (wasHidden) {
                    introImgContainer.classList.add("visible");
                }

                firstTime = false;
                wasHidden = false;
            } else {
                hangers.forEach(hanger => {
                    hanger.classList.remove("visible", "first-visible");
                    hanger.offsetHeight;
                    hanger.classList.add("hidden");
                });
                introImgContainer.classList.remove("visible", "first-visible");
                introImgContainer.offsetHeight;
                introImgContainer.classList.add("hidden");

                h1.classList.remove("visible", "first-visible");
                h2.classList.remove("visible", "first-visible");
                p.classList.remove("visible", "first-visible");
                h1.offsetHeight; h2.offsetHeight; p.offsetHeight;
                h1.classList.add("hidden");
                h2.classList.add("hidden");
                p.classList.add("hidden");

                wasHidden = true;
            }
        });
    }, { threshold: 0.5 });

    observer.observe(introSection);

    const aboutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("visible");

                abh2.classList.remove("hidden");
                abh2.offsetHeight;
                abh2.classList.add("visible");

                abp.classList.remove("hidden");
                abp.offsetHeight;
                abp.classList.add("visible");
            } else {
                aboutSection.classList.
                    remove("visible");

                abh2.classList.remove("visible");
                abh2.offsetHeight;
                abh2.classList.add("hidden");

                abp.classList.remove("visible");
                abp.offsetHeight;
                abp.classList.add("hidden");
            }
        });
    }, { threshold: 0.5 });

    aboutObserver.observe(aboutSection);

    const horizontalScroll = document.querySelector('.horizontal-scroll');

    horizontalScroll.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            horizontalScroll.scrollBy({
                left: e.deltaY,
            });
        }
    }, { passive: false });
});