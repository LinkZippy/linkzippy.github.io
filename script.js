window.addEventListener('load', () => {
    document.getElementById("intro").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
    const introSection = document.getElementById("intro");
    const hangers = document.querySelectorAll(".hanger");
    const introImgContainer = document.querySelector(".intro-img-container");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // intro in view
                hangers.forEach(hanger => {
                    hanger.classList.remove("hidden");
                    hanger.classList.add("visible");
                });
                introImgContainer.classList.remove("hidden");
                introImgContainer.classList.add("visible")
            } else {
                // away from intro
                hangers.forEach(hanger => {
                    hanger.classList.remove("visible");
                    hanger.classList.add("hidden");
                });
                introImgContainer.classList.remove("visible");
                introImgContainer.classList.add("hidden")
            }
        });
    }, { threshold: 0.75 });

    observer.observe(introSection);
});