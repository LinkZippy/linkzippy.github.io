let cloudsGenerated = false;

window.addEventListener('load', () => {
    document.querySelector(".horizontal-scroll").scrollTo({
        left: document.getElementById("intro").offsetLeft,
        behavior: "smooth"
    });

    const introSection = document.getElementById("intro");
    const bounding = introSection.getBoundingClientRect();
    const partiallyVisible = bounding.bottom > 0 && bounding.top < window.innerHeight;

    if (partiallyVisible) {
        if (!cloudsGenerated) {
            generateClouds();
            cloudsGenerated = true;
        }
        document.querySelector('header').classList.add('fadeIn');
        document.querySelector('.clouds').classList.add('fadeIn');
        document.querySelector('footer').classList.add('fadeIn');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    //intro section
    const introSection = document.getElementById("intro");
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
    //timeline elements
    const timeline1 = document.querySelector(".timeline1");
    const timeline2 = document.querySelector(".timeline2");
    const timeline3 = document.querySelector(".timeline3");
    const timeline4 = document.querySelector(".timeline4");
    //experiences elements
    const workTitle = document.querySelector(".work-title");
    const projectTitle = document.querySelectorAll(".project-title");
    const workBar = document.querySelector(".work::before");
    const projectBar = document.querySelectorAll(".project::before");
    const dartmouth = document.querySelector(".dartmouth img");
    const ivl = document.querySelector(".ivl img");
    const heng = document.querySelector(".heng img");
    const moxopal = document.querySelector(".moxopal img");
    const yacht = document.querySelector(".yacht img");
    const dartmouthText = document.querySelectorAll(".dartmouth h2, .dartmouth h3, .dartmouth p");
    const ivlText = document.querySelectorAll(".ivl h2, .ivl h3, .ivl p");
    const hengText = document.querySelectorAll(".heng h2, .heng h3, .heng p");
    const moxopalText = document.querySelector(".moxopal p");
    const yachtText = document.querySelector(".yacht p");

    let firstTime = true;
    let wasHidden = true;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                h1.classList.remove("hidden", "visible", "first-visible");
                h2.classList.remove("hidden", "visible", "first-visible");
                p.classList.remove("hidden", "visible", "first-visible");
                h1.offsetHeight; h2.offsetHeight; p.offsetHeight;

                if (firstTime) {
                    h1.classList.add("first-visible");
                    h2.classList.add("first-visible");
                    p.classList.add("first-visible");

                    setTimeout(() => {
                        if (!cloudsGenerated) {
                            generateClouds();
                            cloudsGenerated = true;
                        }
                        document.querySelector('header').classList.add('fadeIn');
                        document.querySelector('.clouds').classList.add('fadeIn');
                        document.querySelector('footer').classList.add('fadeIn');
                    }, 1500);

                } else if (wasHidden) {
                    h1.classList.add("visible");
                    h2.classList.add("visible");
                    p.classList.add("visible");

                    if (!cloudsGenerated) {
                        generateClouds();
                        cloudsGenerated = true;
                    }
                    document.querySelector('.clouds').classList.add('fadeIn');
                    document.querySelector('header').classList.add('fadeIn');
                    document.querySelector('footer').classList.add('fadeIn');
                }

                introImgContainer.classList.remove("hidden", "visible", "first-visible");
                introImgContainer.offsetHeight;

                if (firstTime) {
                    introImgContainer.classList.add("first-visible");
                } else if (wasHidden) {
                    introImgContainer.classList.add("visible");
                }

                firstTime = false;
                wasHidden = false;

            } else {
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

                document.querySelector('.clouds').innerHTML = '';
                cloudsGenerated = false;

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

                timeline1.classList.remove('hidden');
                timeline1.offsetHeight;
                timeline1.classList.add('visible');

                timeline2.classList.remove('hidden');
                timeline2.offsetHeight;
                timeline2.classList.add('visible');

                timeline3.classList.remove('hidden');
                timeline3.offsetHeight;
                timeline3.classList.add('visible');

                timeline4.classList.remove('hidden');
                timeline4.offsetHeight;
                timeline4.classList.add('visible');

            } else {
                aboutSection.classList.
                    remove("visible");

                abh2.classList.remove("visible");
                abh2.offsetHeight;
                abh2.classList.add("hidden");

                abp.classList.remove("visible");
                abp.offsetHeight;
                abp.classList.add("hidden");

                timeline1.classList.remove('visible');
                timeline1.offsetHeight;
                timeline1.classList.add('hidden');

                timeline2.classList.remove('visible');
                timeline2.offsetHeight;
                timeline2.classList.add('hidden');

                timeline3.classList.remove('visible');
                timeline3.offsetHeight;
                timeline3.classList.add('hidden');

                timeline4.classList.remove('visible');
                timeline4.offsetHeight;
                timeline4.classList.add('hidden');
            }
        });
    }, { threshold: 0.5 });

    //allow scrolling horizontally and vertically

    aboutObserver.observe(aboutSection);

    const horizontalScroll = document.querySelector('.horizontal-scroll');

    let currentIndex = 0;
    let scrollLocked = false;
    let lastScrollTime = 0;

    horizontalScroll.addEventListener('wheel', (e) => {
        e.preventDefault();

        const now = Date.now();

        if (scrollLocked || now - lastScrollTime < 600) return;

        const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
        if (Math.abs(delta) < 30) return;

        const direction = delta > 0 ? 1 : -1;

        currentIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
        scrollLocked = true;
        lastScrollTime = now;

        horizontalScroll.scrollTo({
            left: currentIndex * window.innerWidth,
            behavior: 'smooth'
        });

        setTimeout(() => {
            scrollLocked = false;
        }, 700);
    }, { passive: false });

    //experiences animantions

    const experiencesSection = document.getElementById("experiences");

    const applyAnimation = (el, removeClasses, addClass) => {
        el.classList.remove(...removeClasses, "hidden");
        void el.offsetHeight;
        el.classList.add(addClass);
    };

    const applyAnimationToAll = (elements, removeClasses, addClass) => {
        elements.forEach(el => applyAnimation(el, removeClasses, addClass));
    };

    const experiencesObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                workTitle.classList.remove("hidden");
                applyAnimation(workTitle, ["slide-out-up"], "slide-in-down");

                dartmouth.classList.remove("hidden");
                applyAnimation(dartmouth, ["slide-out-right"], "slide-in-left");

                ivl.classList.remove("hidden");
                applyAnimation(ivl, ["slide-out-right"], "slide-in-left");

                heng.classList.remove("hidden");
                applyAnimation(heng, ["slide-out-right"], "slide-in-left");

                setTimeout(() => {
                    applyAnimationToAll(dartmouthText, ["slide-out-right"], "slide-in-left");
                    applyAnimationToAll(ivlText, ["slide-out-right"], "slide-in-left");
                    applyAnimationToAll(hengText, ["slide-out-right"], "slide-in-left");
                }, 600);

                yacht.classList.remove("hidden");
                applyAnimation(yacht, ["slide-out-left"], "slide-in-right");

                moxopal.classList.remove("hidden");
                applyAnimation(moxopal, ["slide-out-down"], "slide-in-up");

                setTimeout(() => {
                    yachtText.classList.remove("hidden");
                    applyAnimation(yachtText, ["slide-out-up"], "slide-in-down");

                    moxopalText.classList.remove("hidden");
                    applyAnimation(moxopalText, ["slide-out-up"], "slide-in-down");
                }, 600);

                applyAnimationToAll(projectTitle, ["slide-out-up"], "slide-in-down");
                applyAnimationToAll(projectBar, ["slide-out-up"], "slide-in-down");

            } else {
                applyAnimation(workTitle, ["slide-in-down"], "slide-out-up");
                workTitle.classList.add("hidden");

                applyAnimation(dartmouth, ["slide-in-left"], "slide-out-right");
                dartmouth.classList.add("hidden");

                applyAnimation(ivl, ["slide-in-left"], "slide-out-right");
                ivl.classList.add("hidden");

                applyAnimation(heng, ["slide-in-left"], "slide-out-right");
                heng.classList.add("hidden");

                applyAnimationToAll(dartmouthText, ["slide-in-left"], "slide-out-right");
                dartmouthText.forEach(el => el.classList.add("hidden"));

                applyAnimationToAll(ivlText, ["slide-in-left"], "slide-out-right");
                ivlText.forEach(el => el.classList.add("hidden"));

                applyAnimationToAll(hengText, ["slide-in-left"], "slide-out-right");
                hengText.forEach(el => el.classList.add("hidden"));

                applyAnimation(yacht, ["slide-in-right"], "slide-out-left");
                yacht.classList.add("hidden");

                applyAnimation(moxopal, ["slide-in-up"], "slide-out-down");
                moxopal.classList.add("hidden");

                applyAnimation(yachtText, ["slide-in-down"], "slide-out-up");
                yachtText.classList.add("hidden");

                applyAnimation(moxopalText, ["slide-in-down"], "slide-out-up");
                moxopalText.classList.add("hidden");

                applyAnimationToAll(projectTitle, ["slide-in-down"], "slide-out-up");
                projectTitle.forEach(el => el.classList.add("hidden"));

                applyAnimationToAll(projectBar, ["slide-in-down"], "slide-out-up");
                projectBar.forEach(el => el.classList.add("hidden"));
            }
        });
    }, { threshold: 0.5 });

    experiencesObserver.observe(experiencesSection);

    experiencesObserver.observe(experiencesSection);

    const dots = document.querySelectorAll('.dot');

    function updateDotsAndNav() {
        const scrollLeft = document.querySelector('.horizontal-scroll').scrollLeft;
        const index = Math.round(scrollLeft / window.innerWidth);

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    document.querySelector('.horizontal-scroll').addEventListener('scroll', updateDotsAndNav);
    window.addEventListener('load', updateDotsAndNav);

    // clouds

    const cloudContainer = document.querySelector('.clouds');
    const cloudImages = [
        'images/cloud1.png',
        'images/cloud2.png',
        'images/cloud3.png',
        'images/cloud4.png'
    ];
    function generateClouds() {
        const numClouds = 6;


        for (let i = 0; i < numClouds; i++) {
            const img = document.createElement('img');
            img.src = cloudImages[Math.floor(Math.random() * cloudImages.length)];
            img.classList.add('cloud');

            const top = Math.random() * 10;
            img.style.top = `${top}%`;

            const left = -30 + Math.random() * 130;
            img.style.left = `${left}vw`;

            const width = 250 + Math.random() * 100;
            img.style.width = `${width}px`;

            const duration = 40 + Math.random() * 40;
            img.style.animationDuration = `${duration}s`;
            img.style.animationDelay = `0s`;

            const scale = 0.9 + Math.random() * 0.3;
            img.style.transform = `scale(${scale})`;

            cloudContainer.appendChild(img);
        }
    }

    //swapping words

    const words = ["coder.", "photographer.", "learner.", "sports fanatic.", "enthusiast."];
    let current = 0;
    const swapWord = document.getElementById("swap-word");

    setInterval(() => {
        swapWord.classList.remove("fadeIn");
        current = (current + 1) % words.length;
        swapWord.textContent = words[current];
        void swapWord.offsetWidth;
        swapWord.classList.add("fadeIn");
    }, 2500);

});
