import Video from "./classes/Video.js";
const d = document;
let video = new Video();
console.log(video)
let getTitle =d.querySelector("source").src.split("/")

d.getElementById("vidTitle").textContent = getTitle[getTitle.length-1]

d.addEventListener("DOMContentLoaded", ()=>{
    
    video.playVideo();
    video.pauseVideo();
    video.stopVideo();
    
    video.expandVideo();
    video.contractVideo();
    video.pressEscape();
    video.backwardVideo();
    video.forwardVideo();
 
});  
    
  

    
    
     
    
