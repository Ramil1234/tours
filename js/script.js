
let block = document.querySelector('.three-line-menu')
let block_2 = document.querySelector('.menu-list')

block.addEventListener('click', () => {
    block_2.classList.toggle('menu-list__active')
})
block.addEventListener('click', () => {
    block.classList.toggle('three-line-animation')
})