import createAndAppendTimeTag from './dom';
import animationTick from './animation';

const MAX_TIME = (5 * 60) * 1000 + 100;

export default function initTimer() {
    let timer;
    let timerStopper;

    function startTimer() {
        timer = Date.now();
        timerStopper = null;

        timerStopper = animationTick(function drawFrame() {
            const elapsed = Date.now() - timer;
            const timeVal = Math.max(MAX_TIME - elapsed, 0);

            if (!timeVal) {
                timerStopper();
            }

            createAndAppendTimeTag(timeVal);
        });
    }

    function cancelTimer() {
        if (timerStopper) {
            timerStopper();
        }
    }

    function onHashChange() {
        switch(document.location.hash) {
            case '#game':
                startTimer();
    
                break;
            default:
                cancelTimer();
                createAndAppendTimeTag(MAX_TIME);
                break;
        }
    }

    window.addEventListener('hashchange', onHashChange);

    onHashChange();

    return cancelTimer;
}
