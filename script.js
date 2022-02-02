// COUNTTO

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    var CountTo = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
        this.init();
    };

    CountTo.DEFAULTS = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    CountTo.prototype.init = function() {
        this.value = this.options.from;
        this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
        this.loopCount = 0;
        this.increment = (this.options.to - this.options.from) / this.loops;
    };

    CountTo.prototype.dataOptions = function() {
        var options = {
            from: this.$element.data('from'),
            to: this.$element.data('to'),
            speed: this.$element.data('speed'),
            refreshInterval: this.$element.data('refresh-interval'),
            decimals: this.$element.data('decimals')
        };

        var keys = Object.keys(options);

        for (var i in keys) {
            var key = keys[i];

            if (typeof(options[key]) === 'undefined') {
                delete options[key];
            }
        }

        return options;
    };

    CountTo.prototype.update = function() {
        this.value += this.increment;
        this.loopCount++;

        this.render();

        if (typeof(this.options.onUpdate) == 'function') {
            this.options.onUpdate.call(this.$element, this.value);
        }

        if (this.loopCount >= this.loops) {
            clearInterval(this.interval);
            this.value = this.options.to;

            if (typeof(this.options.onComplete) == 'function') {
                this.options.onComplete.call(this.$element, this.value);
            }
        }
    };

    CountTo.prototype.render = function() {
        var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(formattedValue);
    };

    CountTo.prototype.restart = function() {
        this.stop();
        this.init();
        this.start();
    };

    CountTo.prototype.start = function() {
        this.stop();
        this.render();
        this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
    };

    CountTo.prototype.stop = function() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };

    CountTo.prototype.toggle = function() {
        if (this.interval) {
            this.stop();
        } else {
            this.start();
        }
    };

    function formatter(value, options) {
        return value.toFixed(options.decimals);
    }

    $.fn.countTo = function(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('countTo');
            var init = !data || typeof(option) === 'object';
            var options = typeof(option) === 'object' ? option : {};
            var method = typeof(option) === 'string' ? option : 'start';

            if (init) {
                if (data) data.stop();
                $this.data('countTo', data = new CountTo(this, options));
            }

            data[method].call(data);
        });
    };
}));

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
    typeSpeed: 35,
});

var typed3 = new Typed('.typed3', {
    strings: ['Autres Compétences'],
    typeSpeed: 50,
});

var typed4 = new Typed('.typed4', {
    strings: ['Centres d’intêret'],
    typeSpeed: 50,
});

// COMPTEUR
let count = 0;

$(window).scroll(function() {

    const top = $('.counter').offsett().top - window.innerHeight;

    if (count == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this);
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 10000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum))
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        count = 1;
    }

});

//AOS

AOS.init();