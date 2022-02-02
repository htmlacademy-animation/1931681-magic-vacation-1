const FPS = 1;
let FPS_INTERVAL = 1000 / FPS;

export default function animationTick(drawCallback) {
    let then = Date.now();
    let isActive = true;

    function tick(draw) {
        if (isActive) {
            requestAnimationFrame(() => tick(draw));
        }

        const now = Date.now();
        const elapsed = now - then;
    
        if (elapsed > FPS_INTERVAL) {
            then = now - (elapsed % FPS_INTERVAL);
            draw();
        }
    }

    tick(drawCallback);

    return function cancelTimer() {
        isActive = false;
    }
}