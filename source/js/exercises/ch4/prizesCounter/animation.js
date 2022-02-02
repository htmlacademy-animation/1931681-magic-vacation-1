const FPS = 12;
const FPS_INTERVAL = 1000 / FPS;

export default function animationTick(drawCallback) {
    let isActive = true;

    function tick(then) {
        if (isActive) {
            requestAnimationFrame(() => tick(then));
        }

        const now = Date.now();
        const elapsed = now - then;
    
        if (elapsed > FPS_INTERVAL) {
            then = now - (elapsed % FPS_INTERVAL);
            drawCallback();
        }
    }

    tick(Date.now());

    return function cancelTimer() {
        isActive = false;
    }
}