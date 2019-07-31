window.experience = window.experience || {};
window.experience.background = {
    initBackground: function () {
        'use strict';
        this.imgTab = [];
        for (var i = 0; i < 3; i++) {
            this.img = new Image();
            this.img.src = "images/"+ i +".png";
            this.img.onload = this.setValues.bind(this, i);
        };

    },
    setValues: function (i){
        this.canvas = document.querySelector('.images-background');
        this.context = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.imgProps = {
            img: this.img,
            src: this.img.src,
            speed: Math.random() * 2,
            xPos: Math.random() * this.canvas.width,
            yPos: Math.random() * this.canvas.height,
            imgWidth: this.img.width / 16,
            imgHeight: this.img.height / 16
        };
        this.imgTab.push(this.imgProps);
        this.animate();
    },
    animate: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        window.requestAnimationFrame(this.animate.bind(this));
        this.drawImage();

    },
    drawImage: function () {
        for (var i = 0; i < this.imgTab.length; i++) {
            this.context.drawImage(this.imgTab[i].img, this.imgTab[i].xPos, this.imgTab[i].yPos - this.imgTab[i].imgHeight, this.imgTab[i].imgWidth, this.imgTab[i].imgHeight);
            this.imageSpeed(i)
            this.imageReset(i);
        }
    },
    imageSpeed: function (i) {
        this.imgTab[i].yPos += this.imgTab[i].speed;
    },
    imageReset: function (i) {
        if (this.imgTab[i].yPos - this.imgTab[i].imgHeight > this.canvas.height) {
            this.imgTab[i].yPos = (this.imgTab[i].yPos - this.imgTab[i].imgHeight) - this.canvas.height;
        }
    },
    invoke: function () {
        'use strict';
        return {
            initBackground: this.initBackground.bind(this)
        };
    }
}.invoke();
