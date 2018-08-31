import inViewport from 'in-viewport'

setTimeout(() => {
  checkViewport()
  window.addEventListener('scroll', checkViewport)
}, 200)

function checkViewport () {
  const elements = document.querySelectorAll('[data-inview="false"]');
  [].forEach.call(elements, element => {
    setTimeout(() => {
      element.setAttribute('data-inview', (inViewport(element) ? 'true' : 'false'))
    }, 50)
  })
}
