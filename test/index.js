const image = document.getElementById('image');
const generateBtn = document.getElementById('generateBtn');

// इमेज URLs की एक सूची
const images = [
    'https://via.placeholder.com/300/FF5733',
    'https://via.placeholder.com/300/33FF57',
    'https://via.placeholder.com/300/5733FF',
    'https://via.placeholder.com/300/FF33A1',
    'https://via.placeholder.com/300/33A1FF'
];

// बटन क्लिक करने पर नई इमेज दिखाना
generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];
});