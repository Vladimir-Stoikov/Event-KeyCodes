const btnStart = document.querySelector('.btn.start');
const buttonKeys = document.querySelectorAll('.btn.keys');
const labels = document.querySelectorAll('label');

window.addEventListener('keydown', event => {
  btnStart.classList.remove('active');
  buttonKeys.forEach(button => {
    button.classList.add('active');
  });
  labels.forEach(label => {
    label.classList.add('active');
  });
  buttonKeys[0].textContent = `${event.key}`;
  buttonKeys[1].textContent = `${event.code}`;
  buttonKeys[2].textContent = `${event.keyCode}`;
});
