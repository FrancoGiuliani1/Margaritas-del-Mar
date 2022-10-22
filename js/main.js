const main_img = document.querySelector ( '.main_img ')
const thumbnails = document.querySelectorAll (' .thumbnails ')
const activo = document.querySelector ('.activo ')

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        this.classList.add('activo')
    })
})