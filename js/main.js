const main_img = document.querySelector ( '.main_img ')
const img_select = document.querySelectorAll (' .img_select ')
img_select.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector ('.active ')
        active.classList.remove('active')
        this.classList.add('active')
    })
})