const photoCard = document.querySelector('.photoCard');
const loading = document.querySelector('.loading');

function handleClickPhotoAlbum(event) {
    loading.classList.replace('displayNone', 'displayGrid');
}

function init() {
    if ('1' === '1') {
    }
    photoCard.addEventListener('click', handleClickPhotoAlbum);
}

init();
