# Progress

`Progress` components can be used to show user progress, how far along a download is, etc.

<div class="mbs24"></div>

## Usage

To use AgnosticUI as a CSS only framework, you can simply link to the `common.min.css` and `components.min.css` files. These can be served from a CDN (as you'll see in the following example), or relative to your project.

::: warning
The <code>agnostic-css</code> will take care of styling while you will need to write your own JavaScript if you'd like dynamic progress functionality. See the naive example in code snippet.
:::

## Progress

<progress class="progress mbs32 mbe32" value="33" max="100"></progress>

<div class="mbe24"></div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```html
<progress class="progress mbe32" value="0" max="100"></progress>
<div class="btn-group">
    <!--  These would start / stop the progress animation respectively -->
    <button class="runProgress btn btn-rounded">Run</button>
    <button class="stopProgress btn btn-rounded">Stop</button>
</div>
<script>
    const progressElement = document.querySelector('.progress')
    const playButton = document.querySelector('.runProgress')
    const stopButton = document.querySelector('.stopProgress')
    let requestAnimationID
    let progress = 0
    const step = () => {
        playButton.disabled = true
        stopButton.disabled = false
        progress += 1
        progressElement.setAttribute('value', `${progress}`)
        if (progress === 100) {
            playButton.disabled = false
            stopButton.disabled = true
        } else if (progress < 100) {
            requestAnimationID = requestAnimationFrame(step)
        }
    }
    requestAnimationID = requestAnimationFrame(step)
    playButton.addEventListener('click', () => {
        if (progress >= 100) {
            progress = 0
        }
        requestAnimationID = requestAnimationFrame(step)
    })
    stopButton.addEventListener('click', () => {
        if (requestAnimationID) {
            cancelAnimationFrame(requestAnimationID)
            requestAnimationID = undefined
            // Re-enable the Play button
            playButton.disabled = false
            stopButton.disabled = true
        }
    })
</script>
```
</details>
