// Navbar
const navLarge = `<ul class="nav__list">
<li><a class="nav__link" href="#">Sobre</a></li>
<li><a class="nav__link" href="#">Plantas</a></li>
<li><a class="nav__link" href="#">Galeria</a></li>
<li><a class="nav__link" href="#">Contato</a></li>
</ul>`

// nav wrapper / botão
const navLocation = document.querySelector('nav .wrapper')
const navMobileButton = document.querySelector('.mobile__button')

let navStateLarge = false // True ativa o estado de barra larga (Desktop) // False inicialmente pois o design é mobile-first

function changeNavBar() {
  // Pegar width
  const windowSize = window.innerWidth
  // 1: add a barra larga, 2: remove a barra e ativa o menu mobile
  if (windowSize >= 1024 && !navStateLarge) {
    navLocation.insertAdjacentHTML('afterbegin', navLarge)
    navLocation.style.flexDirection = 'row-reverse'
    navMobileButton.style.display = 'none'
    navStateLarge = true
  } else if (windowSize < 1024 && navStateLarge) {
    navLocation.firstElementChild.remove()
    navLocation.style.flexDirection = 'row'
    navMobileButton.style.display = 'block'
    navStateLarge = false
  }
}
// Checa ao inicializar
changeNavBar()
// Executa ao dar resize
window.addEventListener('resize', changeNavBar)