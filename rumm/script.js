const carImages = [
    { src: "ferrari.jpg.jpeg", name: "Ferrari", message: "Eres como un Ferrari, pura velocidad y elegancia en cada paso que das yujuuy." },
    { src: "lambo.jpg.jpeg", name: "Lamborghini", message: "Si fueras un Lamborghini, tendrías la capacidad de deslumbrar a todos con tu belleza y poder.    " },
    { src: "porshe.jpg.jpeg", name: "Porsche", message: "Tu sonrisa es como un Porsche: rápida, deslumbrante y siempre tann lindo bb!!    " },
    { src: "mclaren.jpg.jpeg", name: "McLaren", message: "McLaren - Ingeniería superior. Eres como un McLaren, un diseño tan impresionante que nadie puede ignorarte.    " },
    { src: "bugatti.jpg.jpeg", name: "Bugatti", message: "Tu personalidad es un Bugatti: único y con un rendimiento que me deja sin aliento." },
    { src: "aston.jpg.jpeg", name: "Aston Martin", message: "Eres un Aston Martin: sofisticado y lleno de clase" },
    { src: "koe.jpg.jpeg", name: "Koenigsegg", message: "Si fueras un Koenigsegg, estarías en la cima de todas las listas de deseos." },
    { src: "nissan.jpg.jpeg", name: "Nissan GT-R", message: "Tienes la esencia de un Nissan GT-R: una mezcla perfecta de fuerza y agilidad que atrapa la atención." }
];

let currentIndex = 0;

function updateImage() {
    const carImage = document.getElementById("carImage");
    const leftText = document.getElementById("leftText");
    const rightText = document.getElementById("rightText");
    const carCaption = document.getElementById("carCaption");

    carImage.src = carImages[currentIndex].src; 
    carCaption.textContent = carImages[currentIndex].message;

    const name = carImages[currentIndex].name;
    const middleIndex = Math.ceil(name.length / 2);
    
    leftText.textContent = name.substring(0, middleIndex); // Texto a la izquierda
    rightText.textContent = name.substring(middleIndex); // Texto a la derecha

    // Asignar clases para cambiar el color
    leftText.className = "car-name " + name.toLowerCase(); // Asigna clase basada en el nombre
    rightText.className = "car-name " + name.toLowerCase(); // Asigna clase basada en el nombre
}

function nextImage() {
    currentIndex = (currentIndex + 1) % carImages.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + carImages.length) % carImages.length;
    updateImage();
}

function goToCar(index) {
    currentIndex = index;
    updateImage();
}

document.addEventListener('DOMContentLoaded', () => {
    updateImage();
});