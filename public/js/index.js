/*
// Sélection des éléments
const h1 = document.querySelector('.hero-left h1');
const text = "MakeUI est une boutique important pour vos sites web !";

// Créer un élément pour contenir le texte généré
const heroText = document.createElement('h1');
heroText.className = 'hero-text';

// Ajouter l'élément à la page
h1.parentNode.insertBefore(heroText, h1.nextSibling);
h1.style.display = 'none';

// Fonction Typping effect
function textTyppingEffect(element, text, i = 0) {
    if (i === text.length - 1) {
        // Créer un élément span pour le mot "important" si il existe dans le texte
        if (text.includes('important')) {
            const index = text.indexOf('important');
            element.innerHTML = text.substring(0, index) + `<span class="important">${text.substring(index, index + 9)}</span>` + text.substring(index + 9);
        } else {
            element.textContent = text;
        }
        return
    }
    element.textContent += text[i];
    if (i === text.length - 1) {
        return
    }
    setTimeout(() => textTyppingEffect(element, text, i + 1), 50);
}

// Appliquer les styles de h1 à l'élément texte généré
heroText.style.fontSize = '50px';
heroText.style.fontWeight = '800';
heroText.style.lineHeight = '1.4';
heroText.style.maxWidth = '35vw';
heroText.style.color = 'var(--text-300)';
heroText.style.animation = 'fadeIn 1s ease-out forwards';
heroText.style.animationDelay = '0.5s';

// Ajouter la classe important pour le mot "important"
const style = document.createElement('style');
style.innerHTML = '.hero-text .important { color: var(--primary-300); }';
document.head.appendChild(style);

// Appel de la fonction textTyppingEffect
textTyppingEffect(heroText, text)
*/
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.smart-nav > ul > li');
    const sections = document.querySelectorAll('.section');
    const progressLine = document.createElement('div');
    progressLine.className = 'smart-nav__progress-line';
    document.querySelector('.smart-nav ul').prepend(progressLine);

    let isScrolling = false;

    function updateNavigation() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveNavItem(index);
            }
        });

        updateProgressLine(); // Appel séparé
        isScrolling = false;
    }

    function updateProgressLine() {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / totalHeight) * 100;

        progressLine.style.height = `${Math.min(progress, 100)}%`;
        progressLine.style.width = scrolled > 100 ? '4px' : '2px';
    }

    // CORRECTION PRINCIPALE ICI
    function setActiveNavItem(index) {
        navItems.forEach((item, i) => {
            const subsections = item.querySelector('.subsections');
            const isActive = i === index;

            // Animation plus progressive
            if (subsections) {
                if (isActive) {
                    subsections.style.maxHeight = '1000px'; // Valeur plus grande que la hauteur maximale attendue
                    setTimeout(() => subsections.style.opacity = '1', 50);
                } else {
                    subsections.style.opacity = '0';
                    setTimeout(() => subsections.style.maxHeight = '0', 300);
                }
            }

            item.classList.toggle('active', isActive);
        });
    }


    document.querySelector('.smart-nav').addEventListener('click', (e) => {
        const target = e.target.closest('a');
        if (!target) return;
        e.preventDefault();

        const section = document.querySelector(target.hash);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    });

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(updateNavigation);
            isScrolling = true;
        }
    });

    updateNavigation();
});
