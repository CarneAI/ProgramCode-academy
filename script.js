document.addEventListener('DOMContentLoaded', () => {
    // Aseguramos que la página inicie en la parte superior
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const indicador = document.getElementById('indicador-gratis');
    const targetSection = document.getElementById('cursos');

    if (!indicador || !targetSection) return;

    // Configuración inicial: oculto para el efecto de entrada
    indicador.style.opacity = '0';

    // El indicador aparece después de un breve retraso
    setTimeout(() => {
        indicador.style.opacity = '1';
    }, 1000);

    // Funcionalidad: scroll suave al hacer clic en la cápsula
    indicador.addEventListener('click', () => {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Lógica para ocultar el indicador cuando se llega a la sección de cursos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Desvanecimiento suave
                indicador.style.opacity = '0';
                indicador.style.pointerEvents = 'none';

                // Eliminación definitiva tras la transición
                setTimeout(() => {
                    if (indicador.parentNode) {
                        indicador.remove();
                    }
                }, 600);

                // Dejar de observar una vez activado
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% de la sección es visible
    });

    observer.observe(targetSection);
});
