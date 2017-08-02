// var canvas = document.querySelector("canvas");
// var c = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var particleCount = 1000;


// function LightParticle(x, y, radius, color) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;

//   this.update = function() {
//     this.draw();
//   };

//   this.draw = function() {
//     c.save();
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.shadowColor = this.color;
//     c.shadowBlur = 15;
//     c.shadowOffsetX = 0;
//     c.shadowOffsetY = 0;
//     c.fillStyle = this.color;
//     c.fill();
//     c.closePath();
//     c.restore();
//   };
// }

// var lightParticles = [];

// var timer = 0;
// var opacity = 1;
// var speed = 0.0005;
// var colors = ["#0952BD", "#A5BFF0", "#118CD6", "#1AAEE8", "#F2E8C9"];

// var initializeParticles;

// (initializeParticles = function() {
//   for (var i = 0; i < particleCount; i++) {
//     var randomColorIndex = Math.floor(Math.random() * 6);
//     var randomRadius = Math.random() * 2;

//     // Ensure particles are spawned past screen width and height so
//     // there will be no missing stars when rotating canvas
//     var x = Math.random() * (canvas.width + 200) - (canvas.width + 200) / 2;
//     var y = Math.random() * (canvas.width + 200) - (canvas.width + 200) / 2;
//     lightParticles.push(
//       new LightParticle(x, y, randomRadius, colors[randomColorIndex])
//     );
//   }
// })();

// function animate() {
//   window.requestAnimationFrame(animate);

//   c.save();

//   // Ease back to the original opacity
//   var originalOpacity = 1;
//   opacity += (originalOpacity - opacity) * 0.01;
//   c.fillStyle = "rgba(18, 18, 18, " + opacity + ")";

//   // Ease back to the original speed
//   var originalSpeed = 0.001;
//   speed += (originalSpeed - speed) * 0.01;
//   timer += speed;

//   c.fillRect(0, 0, canvas.width, canvas.height);
//   c.translate(canvas.width / 2, canvas.height / 2);
//   c.rotate(timer);

//   for (var i = 0; i < lightParticles.length; i++) {
//     lightParticles[i].update();
//   }

//   c.restore();
// }

// animate();



//portfolio slides
function openAboutMe() {
  document.getElementById("openAboutMe").style.width = "80%";
}
function openPortfolio() {
  document.getElementById("openPortfolio").style.width = "80%";
}
function openContact() {
  document.getElementById("openContact").style.width = "80%";
}

function closeNav() {
  document.getElementById("openAboutMe").style.width = "0%";
  document.getElementById("openPortfolio").style.width = "0%";
  document.getElementById("openContact").style.width = "0%";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
