import task1 from './gameTimer/gameTimer';
import task2 from './prizesCounter/prizesCounter';
import { startVictoryScreenAnimation } from './victoryScreen/victoryScreen';

window.stopTimer = task1();
task2();

window.addEventListener('contentAnimation', event => {
    const animationName = event.detail.animationName || '';

    switch(animationName) {
        case 'victoryScreen':
            initAnimation(startVictoryScreenAnimation);
            break;
        default:
            break;
    }
})

async function initAnimation(animationStarter) {
    const stopper = animationStarter();

    window.addEventListener('hashchange', () => stopper(), { once: true });
}