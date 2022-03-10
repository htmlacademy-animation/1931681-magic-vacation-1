function initAnimation() {
    let animationStart;
    let animationTime;
    let tickCallback;

    function restartAnimation(tick) {
        animationStart = Date.now();
        animationTime = 0;
        tickCallback = tick;
    }

    function animationTick() {
        animationTime = Date.now() - animationStart;

        if (tickCallback) {
            tickCallback(animationTime);
        }

        window.requestAnimationFrame(animationTick);
    }

    restartAnimation();
    animationTick();

    return { restartAnimation };
}

export { initAnimation };
