window.addEventListener('scroll', function() {
    const indicador = document.getElementById('indicador-gratis');
    const seccionPython = document.querySelector('a[href*=".python/"]');
    
    // Si el indicador ya no existe en el DOM, no hacemos nada
    if (!indicador) return;

    // Obtenemos la posición de la sección de Python respecto a la pantalla
    const posicionPython = seccionPython.getBoundingClientRect().top;

    // Si la parte superior de la sección de Python entra en el campo de visión
    if (posicionPython < window.innerHeight) {
        // Aplicamos un efecto de desvanecimiento
        indicador.style.opacity = '0';
        
        // Lo eliminamos completamente después de la transición
        setTimeout(() => {
            if (indicador.parentNode) {
                indicador.parentNode.removeChild(indicador);
            }
        }, 500);
    }
});
