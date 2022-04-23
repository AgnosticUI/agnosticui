const selectElement = document.querySelector('.tennis-players');
selectElement.addEventListener('change', (event) => {
  console.log('in change event...')
  const select = event.target;
  const value = select.value;
  const description = select.selectedOptions[0].textContent;
  favorite.textContent = `${description} is your favorite tennis player.\n
    Also, your selected option's value attribute contained: ${value}`;
});
