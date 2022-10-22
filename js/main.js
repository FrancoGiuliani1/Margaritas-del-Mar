const main_img = document.querySelector ( '.main_img ')
const thumbnails = document.querySelectorAll (' .thumbnails ')
const active = document.querySelector ('.active ')

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        active.classList.remove('active')
        this.classList.add('active')
    })
})