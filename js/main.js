const main_img = document.querySelector (` .main_img `)
const img_select = document.querySelectorAll (` .img_select `)
const activo = document.querySelector (`.activo `)

img_select.forEach(selec => {
    selec.addEventListener(`click`, function(){
        this.classList.addEventListener(`activo`)
    })
})