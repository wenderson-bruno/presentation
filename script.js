const skill = document.querySelector('.skills')
const tag = document.querySelector('.skills-a')

const section_de_contacts = document.querySelector('.contacts-section')
const contact = document.querySelector('.contacts')


/* skills */
tag.addEventListener('mouseenter', (e) => {
    e.preventDefault()
    skill.classList.add('show')
})
tag.addEventListener('mouseleave', (e) => {
    e.preventDefault()
    skill.classList.remove('show')
})

/* contact */

contact.addEventListener('mouseenter', (e) => {
    e.preventDefault()
    section_de_contacts.classList.add('visible')
})
contact.addEventListener('mouseleave', (e) => {
    e.preventDefault()
    section_de_contacts.classList.remove('visible')
})
