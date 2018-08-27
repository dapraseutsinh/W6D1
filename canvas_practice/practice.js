document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;


  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  ctx.strokeStyle = 'purple';
  ctx.linewidth = 3;
  ctx.stroke();
  



});
