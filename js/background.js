const images = ["sky1.jpg","sky2.jpg","sky3.jpg","sky4.jpg","sky5.jpg"];

const nowimage = images[Math.floor(Math.random()*images.length)];
const bgImage=document.createElement("img");
bgImage.src=`img/${nowimage}`;
document.body.appendChild(bgImage)