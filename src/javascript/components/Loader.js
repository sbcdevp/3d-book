import { TimelineMax as Timeline, Power1, Power2, Power3 } from 'gsap';
window.experience = window.experience || {};
window.experience.loader = {
    initLoader: function () {
        'use strict';
        this.loader = document.querySelector('.loader');
        this.text = this.loader.querySelector('.loader-text')
        this.count = this.loader.querySelector('.js-loader span');
        this.firstTime = Date.now();
        window.addEventListener('DOMContentLoaded', this.updateLoader.bind(this))

    },
    updateLoader: function () {
        'use strict';
        this.time = (Date.now()-this.firstTime) / 5;
        var count = 0;
        var that = this;
        this.set = setInterval(function(){
        if(count < 101) {
            that.count.innerHTML = count;
            count++
        } else {
            clearInterval(that.set)
            that.hideLoader();
        }
    }, this.time);
    },
    hideLoader: function () {
        'use strict';
        let progressLine = new TimelineMax();
        progressLine
            .to(this.text, 1, {autoAlpha: 0, ease: Power2.easeIn})
            .to(this.count, 0.3, {autoAlpha: 0, ease: Power2.easeIn})
        if (window.innerWidth < 720) {
            progressLine.to(this.loader, 1, {height: "20px", ease: Power2.easeOut})
        } else {
            progressLine.to(this.loader, 1, {height: "15px", ease: Power2.easeOut})
        }
    },
    invoke: function () {
        'use strict';
        return {
            initLoader: this.initLoader.bind(this)
        };
    }
}.invoke();
