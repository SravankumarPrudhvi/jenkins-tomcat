var settingsmenu = document.querySelector(".settings-menu")
var darkBtn = document.getElementById("dark-btn")

function SettingsMenuToggle(){
    settingsmenu.classList.toString(".settings-menu-height")
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on")
}