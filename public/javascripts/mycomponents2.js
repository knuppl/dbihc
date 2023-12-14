AFRAME.registerComponent('change', {
    init: function () {

    },
    events: {
        click: function (e) {
            const gokussj2 = document.getElementById('gokussj');
            const gohanssj = document.getElementById('gohan');

            if(gokussj2.getAttribute('visible') == true){
            gokussj2.setAttribute('position', "-5.696 0.232 17");
            gohanssj.setAttribute('position', "-0.5 0.563 17.952");
        }},
        }
});

var gokuModel = document.getElementById('gokussj');

gokuModel.addEventListener('click', function (e) {
    console.log('click gokussj');
});

AFRAME.registerComponent(
    
)
