document.addEventListener('DOMContentLoaded', (event) => {
    const textPreview = document.getElementById('textPreview');
    const textFull = document.getElementById('textFull');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        if (textFull.style.display === 'none' || textFull.style.display === '') {
            textFull.style.display = 'block';
            textPreview.style.display = 'none';
            toggleButton.textContent = 'بستن همه';
        } else {
            textFull.style.display = 'none';
            textPreview.style.display = 'block';
            toggleButton.textContent = 'مشاهده همه';
        }
    });
});
