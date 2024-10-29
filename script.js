// Lista de imágenes que deseas almacenar en caché
const imagesToCache = [
    './img/hugo-1.png',
    './img/hugo-2.png',
];

// Función para precargar imágenes en la caché
async function cacheImages() {
    // Verifica si la API de Cache Storage es compatible
    if ('caches' in window) {
        // Abre o crea una caché específica
        const cache = await caches.open('my-image-cache');

        // Agrega cada imagen a la caché
        try {
            await cache.addAll(imagesToCache);
            console.log('Imágenes almacenadas en la caché:', imagesToCache);
        } catch (error) {
            console.error('Error al almacenar imágenes en la caché:', error);
        }
    } else {
        console.warn('Cache Storage no es soportado en este navegador.');
    }
}

// Llama a la función al cargar la página
window.onload = cacheImages;
