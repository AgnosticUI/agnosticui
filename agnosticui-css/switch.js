// In React, Vue, or Svelte we can probably do without the data attribute and just
// scope this to the component without having to query all in the DOM
const switchesElements = document.querySelectorAll('[data-agnostic-switch]')
const handleClickEvent = (evt) => {
  const el = evt.target
  if (el.getAttribute('aria-pressed') == 'true') {
    el.setAttribute('aria-pressed', 'false')
  } else {
    el.setAttribute('aria-pressed', 'true')
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
