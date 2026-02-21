document.addEventListener('DOMContentLoaded', () => {
    const indicador = document.getElementById('indicador-gratis');
    const seccionPython = document.querySelector('a[href*=".python/"]');

    if (!indicador || !seccionPython) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aplicamos un efecto de desvanecimiento
                indicador.style.opacity = '0';

                // Lo eliminamos completamente después de la transición
                setTimeout(() => {
                    indicador.remove();
                }, 500);

                // Dejamos de observar una vez que se ha activado
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando al menos el 10% del elemento es visible
    });

    observer.observe(seccionPython);
});
