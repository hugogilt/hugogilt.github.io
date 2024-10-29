// Lista de imágenes que deseas almacenar en caché
const imagesToCache = [
    './img/hugo-1.png',
    './img/hugo-2.png'
];

// Función para precargar imágenes en la caché
async function cacheImages() {
    if ('caches' in window) {
        const cache = await caches.open('my-image-cache');
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

// Precargar la imagen de fondo
const backImage = new Image();
backImage.src = './img/hugo-2.png'; // Ruta de la imagen de fondo
backImage.onload = function() {
    console.log('La imagen de fondo se ha precargado correctamente');
};

// Llama a la función al cargar la página
window.onload = function() {
    cacheImages();
};
