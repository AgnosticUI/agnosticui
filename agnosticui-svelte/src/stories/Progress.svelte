<script>
  export let value = 0;
  export let max;
  export let css = "";

  let klasses = ["progressBar", css ? `${css}` : ""];
  klasses = klasses.filter(klass => klass.length);
  klasses = klasses.join(" ");
  /*
  TODO -- do we want to even offer all this??

  const progressElement = document.querySelector(".progressBar");
  const playButton = document.querySelector(".runProgress");
  const stopButton = document.querySelector(".stopProgress");
  let requestAnimationID;
  let progress = 0;

  const step = () => {
    playButton.disabled = true;
    stopButton.disabled = false;
    progress += 1;
    progressElement.setAttribute("value", `${progress}`);
    if (progress === 100) {
      playButton.disabled = false;
      stopButton.disabled = true;
    } else if (progress < 100) {
      requestAnimationID = requestAnimationFrame(step);
    }
  };
  requestAnimationID = requestAnimationFrame(step);
  playButton.addEventListener("click", () => {
    if (progress >= 100) {
      progress = 0;
    }
    requestAnimationID = requestAnimationFrame(step);
  });
  stopButton.addEventListener("click", () => {
    if (requestAnimationID) {
      cancelAnimationFrame(requestAnimationID);
      requestAnimationID = undefined;
      // Re-enable the Play button
      playButton.disabled = false;
      stopButton.disabled = true;
    }
  });
  */
</script>

<style>
  /* https://stackoverflow.com/questions/45507970/how-can-i-change-the-color-of-a-progress-bar-value-in-html */
  :root {
    --agnostic-default-progress-fill-color: #1087db;
    --agnostic-default-progress-background: #ededed;
    --agnostic-default-progress-radius: 10px;
    --agnostic-default-progress-height: 10px;
  }

  progress {
    -webkit-appearance: none;
    height: var(
      --agnostic-progress-height,
      var(--agnostic-default-progress-height)
    );
    width: 100%;
    border: none;
    /* Next couple of rules are required to be here for FF (but not chrome) */
    background-color: var(
      --agnostic-progress-background,
      var(--agnostic-default-progress-background)
    );
    border-radius: var(
      --agnostic-progress-radius,
      var(--agnostic-default-progress-radius)
    );
  }

  progress[value]::-webkit-progress-bar {
    /* In my tests chrome requires this whereas FF wants it on the progress {} rule */
    background-color: var(
      --agnostic-progress-background,
      var(--agnostic-default-progress-background)
    );
    border-radius: var(
      --agnostic-progress-radius,
      var(--agnostic-default-progress-radius)
    );
  }

  progress[value]::-webkit-progress-value {
    background-color: var(
      --agnostic-progress-fill-color,
      var(--agnostic-default-progress-fill-color)
    );
    border-radius: var(
      --agnostic-progress-radius,
      var(--agnostic-default-progress-radius)
    );
  }

  progress[value]::-moz-progress-bar {
    background-color: var(
      --agnostic-progress-fill-color,
      var(--agnostic-default-progress-fill-color)
    );
    border-radius: var(
      --agnostic-progress-radius,
      var(--agnostic-default-progress-radius)
    );
  }

  progress[value]::-ms-fill {
    background-color: var(
      --agnostic-progress-fill-color,
      var(--agnostic-default-progress-fill-color)
    );
    border-radius: var(
      --agnostic-progress-radius,
      var(--agnostic-default-progress-radius)
    );
  }
</style>

<progress class={klasses} {value} {max} />
