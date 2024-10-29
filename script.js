const image = document.getElementById('bouncingImage');
        let bounceInterval;
        let houverMaked;
        // Función para hacer "saltito"
        function startBouncing() {
            bounceInterval = setInterval(() => {
                image.style.animation = 'bounce 0.5s'; // Añade la animación de salto
                setTimeout(() => {
                    image.style.animation = ''; // Elimina la animación después de que termina
                }, 500);
            }, 3000);
        }

        // Detener el "saltito" al hacer hover
        image.addEventListener('mouseover', () => {
            clearInterval(bounceInterval);
            image.style.animation = '';
            houverMaked = true;
        });

        // Función para verificar soporte de hover y manejar el "saltito"
        function checkHoverSupport() {
            if (window.matchMedia('(hover: hover)').matches && !houverMaked) {
                startBouncing();
            } else {
                clearInterval(bounceInterval);
                image.style.animation = '';
            }
        }

        // Inicia la verificación al cargar la página
        window.onload = checkHoverSupport;
        window.addEventListener('resize', checkHoverSupport);