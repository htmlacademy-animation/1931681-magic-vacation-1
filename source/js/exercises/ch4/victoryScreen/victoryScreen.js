import { scene } from './animation';

const FPS = 60;
let FPS_INTERVAL = 1000 / FPS;

function animationTick() {
    let isActive = true;

    function animationTickContent(drawCallback) {
        let start = Date.now();
        let then = Date.now();
    
        function tick(draw) {  
            if (isActive) {
                requestAnimationFrame(() => tick(draw));
            }
    
            const now = Date.now();
            const elapsed = now - then;
        
            if (elapsed > FPS_INTERVAL) {
                then = now - (elapsed % FPS_INTERVAL);
                draw(now - start);
            }
        }

        tick(drawCallback);
    }

    function cancelTimer() {
        isActive = false;
    }

    return {
        start: (drawCallback) => animationTickContent(drawCallback),
        stop: cancelTimer
    };
}


function startVictoryScreenAnimation() {
    const { start, stop } = animationTick();

    scene(start);

    return stop;
}

export { startVictoryScreenAnimation };
