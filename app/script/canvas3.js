// class Point {
//      constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.r = Math.random() * 10 ;
//         this._mx = Math.random() ;
//         this._my = Math.random() ;
//     }
//     drawCircle(ctx) {
//           ctx.beginPath();  
//           ctx.arc(this.x, this.y, this.r, 0, 360);
//           ctx.closePath();
//           ctx.fillStyle = 'rgba(0, 0, 0, 1)';
//           ctx.fill();
//           console.log(this.x);
//     }
// };

// window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// console.log(canvas);
// let w = canvas.width = canvas.offsetWidth;
// let h = canvas.height = canvas.offsetHeight;
// let points = [];
// let num = 1000;
// for (var i = 0; i < num; i++) {
//         // circles.push(new Circle(Math.random() * w, Math.random() * h));
//         points.push(new Point(100,100))
// }
// for (let i = 0; i < points.length; i++) {
//      points[i].drawCircle(ctx);
// }

//     canvas.style.display = "none";
//     ctx.beginPath();
//     ctx.arc(200, 300, 20, 0, 360);
//     ctx.closePath();
//     ctx.fillStyle = 'rgba(255, 77, 54, 0.6)';
//     ctx.fill();
//     console.log(this.x);

