import Controls from "./Controls.js";

const d = document;
let controls = new Controls
export default class Video {
    
    player = d.getElementById("video");
    title = d.getElementById("vidTitle");
    time = d.getElementById("time");
    volume = d.getElementById("volume");
    progressBar = d.getElementById("progressBar");

/**
 * método que permite iniciar el vídeo
 */
    playVideo() {
        console.log(controls.btnPlay)
        controls.btnPlay.addEventListener("click", () => {
            this.player.play()
            controls.btnPlay.style.display = "none";
            controls.btnPause.style.display = "";
        })
        this.timer()
    }

/**
 * método que permite parar el vídeo
 */
    stopVideo() {
        controls.btnStop.addEventListener("click", () => {
            this.player.currentTime = 0;
            this.player.pause()
            controls.btnPlay.style.display = "";
            controls.btnPause.style.display = "none";
        })
    }

/**
 * método que permite pausar el vídeo
 */
    pauseVideo() {
        controls.btnPause.addEventListener("click" , () => {
            this.player.pause()
            controls.btnPlay.style.display = "";
            controls.btnPause.style.display = "none";
        })
    }

/**
 * método que establece el tiempo que pasa en segundos, que controla la barra de progreso
 * del vídeo , y que permite parar el vídeo una vez finaliza
 */
    timer() {
        setInterval(() => {
            this.time.textContent = `0 / ${Math.round(this.player.currentTime)}`
            this.progressBar.style.width = parseInt(this.player.currentTime * 100 / this.player.duration) + "%"
            this.progressBar.textContent = this.progressBar.style.width
            this.player.volume = this.volume.value
            if (this.player.ended) stop();

        }, 1000);
    }
    
/**
 * método que permite Expandir el vídeo a pantalla completa
 */
    expandVideo() {
        controls.btnExpand.addEventListener("click", () => {
            this.player.style.width = "100vw";
            this.player.style.height = "100vh";
            d.getElementsByTagName('html')[0].style.overflow = "hidden"
            if (d.querySelector("html").style.overflow === "hidden") this.mouseEvents()
        })
    }
    
/**
 * método donde se encuentra el evento del mouse de movimiento
 */
    mouseEvents() {
        this.player.addEventListener("mousemove", (e) => {
            if (this.player.style.width === "100vw") controls.btnContract.style.display = ""
            setTimeout(() => {

                controls.btnContract.style.display = "none"
            }, 2000);
        })
    }

/**
 * método que permite devolver el vídeo a tamaño normal
 */
    contractVideo() {
        controls.btnContract.addEventListener("click", () => {
            this.player.style.width = "30vw";
            this.player.style.height = "30vh";
            d.getElementsByTagName('html')[0].style.overflow = "auto"
        })

    }
    
/**
 * método que permite atrasar el vídeo
 */
    backwardVideo() {
        controls.btnBackward.addEventListener("click", () => {
            this.player.currentTime -= 3
        })
    }
    
/**
 * método que permite adelantar el vídeo
 */
    forwardVideo() {
        controls.btnForward.addEventListener("click", () => {
            this.player.currentTime += 3
        })
    }
    
/**
 * cuando estamos a pantalla completa, si se presiona el botón escape, el vídeo
 * vuelve a tamaño normal
 */
    pressEscape() {
        d.addEventListener("keydown", (e) => { if (e.key === "Escape") this.contractVideo() })

    }


}
