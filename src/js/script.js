let mostrarLinks = document.querySelectorAll('.links')

mostrarLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('mostrar')
    })
    link.addEventListener('mouseout', () => {
        link.classList.remove('mostrar')
    })
})