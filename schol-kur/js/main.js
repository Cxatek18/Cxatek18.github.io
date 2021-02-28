var i = 0;

document.querySelector('.btn-prev').addEventListener('click', () => {
  i = i + 235;
  if (i > (235*3)) {
    i = 0;
  }
  document.querySelector('.polosa').style.left = i + 'px';
});

document.querySelector('.btn-next').addEventListener('click', () => {
  i = i - 235;
  if (i < (-235*3)) {
    i = 0;
  }
  document.querySelector('.polosa').style.left = i + 'px';
});