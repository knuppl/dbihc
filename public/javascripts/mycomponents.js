AFRAME.registerComponent('audio', {
    init: function () {
        var cellg = new Audio('sounds/fightcell.mp3');
        cellg.id = 'cellg';
        document.body.appendChild(cellg);
    },
    events: {
        click: function () {
            let test = document.getElementById("som");
            test.setAttribute("src", "sounds/fightcell.mp3");

            const gokussj = document.getElementById('goku');
            const gokussj2 = document.getElementById('gokussj');

            if (gokussj.getAttribute('visible')) {
                gokussj2.setAttribute('visible', true);
                gokussj.setAttribute('visible', false);

                // Adicione uma condição para evitar a execução de ambos os eventos simultaneamente
                if (this.el.components.change) {
                    this.el.components.change.clicked = true;
                }

                // Redefina a propriedade clicked após a execução do evento 'click'
                setTimeout(() => {
                    if (this.el.components.change) {
                        this.el.components.change.clicked = false;
                    }
                }, 0);
            }
        }
    }
});

AFRAME.registerComponent('change', {
    init: function () {

        this.clicked = false;
    },
    events: {
        click: function () {
            if (!this.clicked) {
                const gokussj2 = this.el.sceneEl.querySelector('#gokussj');
                const gohanssj = this.el.sceneEl.querySelector('#gohan');

                if (gokussj2.getAttribute('visible')) {
                    gokussj2.setAttribute('position', '-5.696 0.232 17');
                    gohanssj.setAttribute('position', '-0.5 0.563 17.952');

                    this.clicked = true;
                }
            }
        }
    }
});

AFRAME.registerComponent('final', {
    init: function () {
        var gohanf = new Audio('sounds/gohanssjs.mp3');
        gohanf.id = 'gohanf';
        document.body.appendChild(gohanf);
    },
    events: {
        click: function () {
            let test = document.getElementById("som");
            test.setAttribute("src", "sounds/gohanssj2.mp3");

            const gohanssj2 = document.getElementById("gohanssj2");
            const gohanssj = document.getElementById("gohan");

            if (gohanssj.getAttribute('visible')) {
                gohanssj2.setAttribute('visible', true);
                gohanssj.setAttribute('visible', false);

                // Adicione uma condição para evitar a execução de ambos os eventos simultaneamente
                if (this.el.components.change) {
                    this.el.components.change.clicked = true;
                }

                // Redefina a propriedade clicked após a execução do evento 'click'
                setTimeout(() => {
                    if (this.el.components.change) {
                        this.el.components.change.clicked = false;
                    }
                }, 0);
            }
        }
    }
});

var gokuModel = document.getElementById('goku');
gokuModel.addEventListener('click', function () {
    console.log('click goku');
});

var gokuSSJModel = document.getElementById('gokussj');
gokuSSJModel.addEventListener('click', function () {
    console.log('click gokussj');
});

var gohanssj2Model = document.getElementById('gohanssj2');
gohanssj2Model.addEventListener('click', function () {
    console.log('click gohanssj2');
});
