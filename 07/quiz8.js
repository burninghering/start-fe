function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; 
}

function animateRand(result, btn, val) {
  let min = val - 50;
  const max = val;
  const interval = setInterval(() => {
    min += 1;
    result.innerHTML = String(min);
    if (min === max) {
      btn.disabled = false;
      clearInterval(interval);
    }
  }, 10);
}
window.onload = function () {
  const minText = document.getElementById('min');
  const maxText = document.getElementById('max');
  const result = document.getElementById('box');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    btn.disabled = true;
    animateRand(result, btn, getRandomInt(minText.value, maxText.value));
  });
};