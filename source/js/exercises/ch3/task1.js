window.addEventListener('hashchange', animationStarter);
window.addEventListener('load', animationStarter);

function animationStarter() {
    switch(document.location.hash) {
        case '#prizes':
            initAnimation('primaryAward');

            setTimeout(() => initAnimation('secondaryAward'), 3800);

            break;
        default:
            break;
    }
}

function initAnimation(objectWrapperSelector) {
    const objectWrapper = document.getElementById(objectWrapperSelector);

    if (objectWrapper) {
        const svg = objectWrapper.contentDocument.getElementById('animation');
        const animation = objectWrapper.contentDocument.getElementById('animationStart');

        if (svg && animation) {
            animation.endElement();
            svg.setCurrentTime(0);
            animation.beginElement();
        }
    }
}