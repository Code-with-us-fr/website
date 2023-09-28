const scrollToElement = function(id) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
}

const handleIntersection = function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('animate');
            observer.unobserve(entry.target)
        }
    })
}

document.documentElement.classList.add('animation-loaded')

window.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    })
    const targets = document.querySelectorAll('.animate')
    targets.forEach(el => {
        observer.observe(el);
    });
})
