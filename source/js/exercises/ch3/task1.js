window.addEventListener('hashchange', animationStarter);
window.addEventListener('load', animationStarter);

function animationStarter() {
    switch(document.location.hash) {
        case '#prizes':
            const svg = document.getElementById('primaryAwardAnimation');
            const animation = document.getElementById('primaryAwardAnimationStart');
            if (svg && animation) {
                animation.endElement();
                svg.setCurrentTime(0);
                animation.beginElement();
            }
            break;
        default:
            break;
    }
}