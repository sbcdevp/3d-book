window.experience = window.experience || {};
window.experience.background = {
    initBackground: function () {
        'use strict';
        this.canvas = document.querySelector('.images-background');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.imgTab = [];
        for (var i = 0; i < 96; i++) {
            var img = "img" + i;
            img = new Image();
            img.src = "images/img-0"+ i +".jpg";
            img.onload = this.setValues.bind(this, img);
        };
    },
    setValues: function (img){
        'use strict';
        this.context = this.canvas.getContext("2d");
        this.imgProps = {
            img: img,
            src: img.src,
            speed: Math.random() * 0.04,
            xPos: Math.random() * this.canvas.width - 100,
            yPos: Math.random() * this.canvas.height * 4,
            imgWidth: img.width / 16,
            imgHeight: img.height / 16
        };
        this.imgTab.push(this.imgProps);
        this.animate()
    },
    animate: function () {
        'use strict';
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        window.requestAnimationFrame(this.animate.bind(this));
        this.drawImage();

    },
    drawImage: function () {
        'use strict';
        for (var i = 0; i < this.imgTab.length; i++) {
            this.context.drawImage(this.imgTab[i].img, this.imgTab[i].xPos, this.imgTab[i].yPos, this.imgTab[i].imgWidth, this.imgTab[i].imgHeight);
            this.imageSpeed(i)
            this.imageReset(i);
        }
    },
    imageSpeed: function (i) {
        'use strict';
        this.imgTab[i].yPos += this.imgTab[i].speed + 0.004;
    },
    imageReset: function (i) {
        'use strict';
        if (this.imgTab[i].yPos - this.imgTab[i].imgHeight > this.canvas.height) {
            this.imgTab[i].yPos = (this.imgTab[i].yPos - this.imgTab[i].imgHeight) - this.canvas.height * 6;
        }
    },
    invoke: function () {
        'use strict';
        return {
            initBackground: this.initBackground.bind(this)
        };
    }
}.invoke();
