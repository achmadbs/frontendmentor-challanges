const fetchButton = document.getElementById('btn-action');

fetchButton.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice', {
    method: 'GET',
  })
    .then((value) => value.json())
    .then((data) => {
      document.getElementById('id-advice').textContent = data?.slip?.id;
      document.getElementById('text-advice').textContent = data?.slip?.advice;
    })
    .catch((error) => {
      console.log(error);
    });
});
