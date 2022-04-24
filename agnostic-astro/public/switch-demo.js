// In React, Vue, or Svelte we can probably do without the data attribute and just
// scope this to the component without having to query all in the DOM
const switchesElements = document.querySelectorAll('[data-agnostic-switch]')
console.log('IN HERE')
const handleClickEvent = (evt) => {
  const el = evt.target
  if (el.getAttribute('aria-checked') == 'true') {
    el.setAttribute('aria-checked', 'false')
  } else {
    el.setAttribute('aria-checked', 'true')
  }
}
for (let i = 0; i < switchesElements.length; i++) {
  switchesElements[i].addEventListener('click', handleClickEvent)

  switchesElements[i].addEventListener('keypress', function (ev) {
    const keyCode = ev.keyCode || ev.which
    switch (keyCode) {
      case 13:
        ev.preventDefault()
        ev.target.click()
        break
    }
  })
}
