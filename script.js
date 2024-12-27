var settingsmenu = document.querySelector('.settings-menu');
var darkBtn= document.querySelector('.dark-btn')

function settingsMenuToggle(){
    settingsmenu.classList.toggle('settings-menu-height');
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle('btn-on')
}
settingsMenuToggle()
