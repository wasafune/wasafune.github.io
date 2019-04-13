console.log('expect(earth()).toBe(42)')

const { body } = document
const style = window.getComputedStyle(body)
const bgSrc = style.backgroundImage
const bgUrl = bgSrc.match(/\((.*?)\)/)[1].replace(/('|")/g,'')
const img = new Image()
img.onload = () => {
  body.setAttribute('class', 'fade-in-element')
  setTimeout(() => {
    randomInterval(runGlitch, 3600, 16000)
  }, 2400)
}
img.src = bgUrl
if (img.complete) {
  img.onload()
}

const projectLink = document.getElementById('project-scroll')
const projectContainer = document.getElementById('project-container')

projectLink.addEventListener('click', () => {
  const options = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  }
  if (projectContainer.className.includes('hidden')) {
    projectContainer.setAttribute('class', 'fade-in-element')
  }
  projectContainer.scrollIntoView(options)
})

// glitch logic
const welcomeTextCont = document.getElementById('welcome-text-container')
const name = document.getElementById('name')

welcomeTextCont.addEventListener('mouseover', () => {
  toggleGlitch()
})
welcomeTextCont.addEventListener('mouseleave', () => {
  toggleGlitch('reset')
})

const limit = (func, ...args) => {
  let count = 0
  return (reset) => {
    if (reset) {
      count = 0
      func(...args, reset)
    } else if (!count) {
      func(...args)
      count += 1
    }
  }
}

const toggleClass = (ele, className, delay, reset) => {
  if (reset) {
    setTimeout(() => ele.classList.remove(className), delay)
  } else {
    ele.setAttribute('class', className)
  }
}

const toggleGlitch = limit(toggleClass, name, 'glitch', 2400)
const runGlitch = () => {
  toggleGlitch()
  toggleGlitch('reset')
}

const randomInterval = (func, min, max, ...args) => {
  func(...args)
  setTimeout(() => randomInterval(func, min, max, ...args), genRand(min, max))
}

const genRand = (min, max) => Math.floor(Math.random() * max) + min
