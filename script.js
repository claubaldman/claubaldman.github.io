const buttons = document.querySelectorAll('.open-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const square = button.parentElement;
    square.style.height = '0';
  });
});