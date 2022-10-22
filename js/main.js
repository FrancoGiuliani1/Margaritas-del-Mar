const main_img = document.querySelector ( '.main_img ')
const thumbnails = document.querySelectorAll (' .thumbnails ')


thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector ('.active ')
        active.classList.remove('active')
        this.classList.add('active')
    })
})