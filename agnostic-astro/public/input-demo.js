const inputElement = document.getElementById('inputTest');
inputElement.addEventListener('input', (event) => {
  const value = event.target.value;
  if (value) {
    inputResult.textContent = value;
  } else {
    // They may have cleared out the text so reset
    inputResult.textContent = 'Type in input below to see input events take me over 😎';
  }
});
