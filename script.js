const skill = document.querySelector('.skills')
const tag = document.querySelector('.skills-a')

tag.addEventListener('mouseenter', (e) => {
    e.preventDefault()
    skill.classList.add('show')
})
tag.addEventListener('mouseleave', (e) => {
    e.preventDefault()
    skill.classList.remove('show')
})