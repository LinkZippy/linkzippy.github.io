window.addEventListener('load', () => {
    document.getElementById("intro").scrollIntoView({ behavior: "smooth" });
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

                h1.classList.remove("hidden");
                h2.classList.remove("hidden");
                p.classList.remove("hidden");
                h1.offsetHeight; h2.offsetHeight; p.offsetHeight;
                h1.classList.add("visible");
                h2.classList.add("visible");
                p.classList.add("visible");

                if (firstTime) {
                    introImgContainer.classList.add("first-visible");
                    setTimeout(() => {
                        introImgContainer.classList.add("first-visible");
                    }, 4000);
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

                h1.classList.remove("visible");
                h2.classList.remove("visible");
                p.classList.remove("visible");
                h1.offsetHeight; h2.offsetHeight; p.offsetHeight;
                h1.classList.add("hidden");
                h2.classList.add("hidden");
                p.classList.add("hidden");

                wasHidden = true;
            }
        });
    }, { threshold: 0.8 });

    observer.observe(introSection);
});
