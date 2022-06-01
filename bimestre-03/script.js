const checkbox1 = document.querySelector('body');
checkbox1.addEventListener('change', () => {
  const bg_body = document.body;
  bg_body.classList.toggle('dark-bg');
});
