window.addEventListener('hashchange', onHashChange);
window.addEventListener('animationObjectLoad', onAnimationObjectLoad);

const animationDescriptors = {
    primaryAward: {
        id: null,
        delay: 0,
        duration: 5500
    },
    secondaryAward: {
        id: null,
        delay: 3800,
        duration: 1867
    }
};

function startAnimationsWithTimers(animationName) {
    switch(document.location.hash) {
        case '#prizes':
            animationDescriptors[animationName].id = setTimeout(() => {
                initAnimation(animationName);

                animationDescriptors[animationName].id = null;                
            }, animationDescriptors[animationName].delay);

            break;
        default:
            clearTimeout(animationDescriptors[animationName].id);
            animationDescriptors[animationName].id = null;
    }
}

function onAnimationObjectLoad(event) {
    console.log('load')
    const { animationName } = event.detail;

    startAnimationsWithTimers(animationName);
}

function onHashChange() {
    console.log('hashchange');
    setTimeout(() => {
        startAnimationsWithTimers('primaryAward');
        startAnimationsWithTimers('secondaryAward');
    }, 500);
}

function initAnimation(animationName) {
    const objectWrapper = document.getElementById(animationName);
    if (objectWrapper && objectWrapper.contentWindow) {
        const svg = objectWrapper.contentDocument.getElementById('animation');
        const animation = objectWrapper.contentDocument.getElementById('animationStart');

        if (svg && animation) {
            console.log('initing ' + animationName);
            svg.setCurrentTime(0);
            animation.endElement();
            animation.beginElement();
        }
    }
}
