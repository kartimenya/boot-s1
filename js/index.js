let menuToggle = document.getElementById('menuToggle'),
    menu = document.getElementsByClassName('classy-menu')[0];

menuToggle.onclick = () => {
  menu.classList.toggle ('menu-active')
}
