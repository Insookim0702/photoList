const photoCard = document.querySelector('.photoCard');
const loading = document.querySelector('.loading');

function handleClickPhotoAlbum(event) {
    loading.classList.replace('displayNone', 'displayGrid');
}

function init() {
    photoCard.addEventListener('click', handleClickPhotoAlbum);
}

init();
