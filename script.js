//NAV
let lastScrollTop = 0;
navbar = document.getElementById('.navbar');

window.addEventListener('scroll', function() {
    const [isNavBar, setIsNavBar] = useState(true);
    onScrolldown(setIsNavBar(false));
    onScrollUp(setIsNavBar(true));

    if (isNavbar) {
        rendernavbar();
    }
});

// TYPED
var typed = new Typed('.typed', {
    strings: ['Bonjour à tous, je me présente, je m’appelle Andrea Hosotte et j’ai', 'Bonjour, je m’appelle Andrea Hosotte, j’ai 18 ans et je suis étudiant en première année à l’école d’informatique Epitech. La majorité de ce que j’ai pu apprendre durant la première partie de mon apprentissage était en C mais j’ai quand même développé certaine connaissance dans différents langages comme le Javascript, le CSS ou encore l’HTML. Je suis quelqu’un de passionné par ce qu’il entreprend et qui n’hésite pas à se donner les moyens de ses ambitions. J’espère pouvoir poursuivre mon projet professionnel dans le domaine de l’informatique.'],
    typeSpeed: 20,
});

var typed2 = new Typed('.typed2', {
    strings: ['Lycéen à Joffre Montpellier', 'Etudiant Epitech Montpellier'],
    typeSpeed: 10,
});

var typed3 = new Typed('.typed3', {
    strings: ['Autres Compétences'],
    typeSpeed: 50,
});

var typed4 = new Typed('.typed4', {
    strings: ['Centres d’intêret'],
    typeSpeed: 50,
});
//AOS

AOS.init();
