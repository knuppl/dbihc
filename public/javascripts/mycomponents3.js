AFRAME.registerComponent('final', {
    init: function () {
        
        var gohanf = new Audio('sounds/gohanssjs.mp3');
        gohanf.id = 'gohanf'; // Adicione um ID ao elemento de áudio
        document.body.appendChild(gohanf); // Adicione o elemento de áudio ao corpo do documento
    },
    events: {
        click: function (e) {
            let test = document.getElementById("som");
            test.setAttribute("src","sounds/gohanssj2.mp3")
            
            const gohanssj2 = document.getElementById("gohanssj2");
            const gohanssj = document.getElementById("gohan");

            if(gohanssj.getAttribute('visible') == true){
            gohanssj2.setAttribute('visible', true);
            gohanssj.setAttribute('visible', false);
            }
        }
    }
});

var gohanModel = document.getElementById('gohan');

gohanModel.addEventListener('click', function (e) {
    console.log('click gohan')
})