import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const warehouseVideo = document.getElementById("warehouse");

if (!(warehouseVideo instanceof HTMLVideoElement)) {
    throw new Error(`Expected ${warehouseVideo} to be an HTMLVideoElement, was ${warehouseVideo && warehouseVideo.constructor && warehouseVideo.constructor.name || warehouseVideo}`);
}

ScrollTrigger.create({
    trigger: warehouseVideo,
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: true,
    markers: true,
    onUpdate: self => warehouseVideo.currentTime = warehouseVideo.duration * self.progress
});