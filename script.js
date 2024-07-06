//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const line = document.getElementById('line');
  let angle = 0;

  function rotateLine() {
    angle = (angle + 2) % 360;
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  }

  setInterval(rotateLine, 20);
});
