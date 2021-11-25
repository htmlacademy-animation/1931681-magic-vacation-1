import throttle from 'lodash/throttle';

export default class FullPageScroll {
  constructor() {
    this.THROTTLE_TIMEOUT = 1000;
    this.PAGE_CHANGE_TRANSITION_TIME = 700;
    this.PAGE_ACTIVE_DELAY = 100;
    this.scrollFlag = true;
    this.timeout = null;

    this.screenElements = document.querySelectorAll(`.screen:not(.screen--result)`);
    this.menuElements = document.querySelectorAll(`.page-header__menu .js-menu-link`);
    this.transitions = [ { from: 1, to: 2 } ] // story -> prizes transition

    this.activeScreen = 0;
    this.previousScreen = 0;
    this.onScrollHandler = this.onScroll.bind(this);
    this.onUrlHashChengedHandler = this.onUrlHashChanged.bind(this);
  }

  init() {
    document.addEventListener(`wheel`, throttle(this.onScrollHandler, this.THROTTLE_TIMEOUT, {trailing: true}));
    window.addEventListener(`popstate`, this.onUrlHashChengedHandler);

    this.onUrlHashChanged();
  }

  onScroll(evt) {
    if (this.scrollFlag) {
      this.reCalculateActiveScreenPosition(evt.deltaY);
      const currentPosition = this.activeScreen;
      if (currentPosition !== this.activeScreen) {
        this.changePageDisplay();
      }
    }
    this.scrollFlag = false;
    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.timeout = null;
      this.scrollFlag = true;
    }, this.THROTTLE_TIMEOUT);
  }

  onUrlHashChanged() {
    const newIndex = Array.from(this.screenElements).findIndex((screen) => location.hash.slice(1) === screen.id);
    this.previousScreen = this.activeScreen;
    this.activeScreen = (newIndex < 0) ? 0 : newIndex;
    this.changePageDisplay();
  }

  changePageDisplay() {
    this.changeVisibilityDisplay();
    this.changeActiveMenuItem();
    this.emitChangeDisplayEvent();
  }

  changeVisibilityDisplay() {
    const addChangeTransition = this.addPageChangeTransition();

    this.screenElements.forEach((screen, i) => {
      if (addChangeTransition && i === this.previousScreen) {
        screen.classList.add('exiting');
      } else {
        screen.classList.add(`screen--hidden`);
      }
      
      screen.classList.remove(`active`);
    });
    
    if (addChangeTransition) {

      setTimeout(() => {
        this.screenElements[this.activeScreen].classList.remove(`screen--hidden`);
        this.screenElements[this.activeScreen].classList.add(`active`);

        this.screenElements[this.previousScreen].classList.remove('exiting');
        this.screenElements[this.previousScreen].classList.add(`screen--hidden`);
      }, this.PAGE_CHANGE_TRANSITION_TIME);
    } else {
      this.screenElements[this.activeScreen].classList.remove(`screen--hidden`);  
      setTimeout(() => {
        this.screenElements[this.activeScreen].classList.add(`active`);
      }, this.PAGE_ACTIVE_DELAY);
    }
  }

  changeActiveMenuItem() {
    const activeItem = Array.from(this.menuElements).find((item) => item.dataset.href === this.screenElements[this.activeScreen].id);
    if (activeItem) {
      this.menuElements.forEach((item) => item.classList.remove(`active`));
      activeItem.classList.add(`active`);
    }
  }

  emitChangeDisplayEvent() {
    const event = new CustomEvent(`screenChanged`, {
      detail: {
        'screenId': this.activeScreen,
        'screenName': this.screenElements[this.activeScreen].id,
        'screenElement': this.screenElements[this.activeScreen]
      }
    });

    document.body.dispatchEvent(event);
  }

  reCalculateActiveScreenPosition(delta) {
    this.previousScreen = this.activeScreen;
    if (delta > 0) {
      this.activeScreen = Math.min(this.screenElements.length - 1, ++this.activeScreen);
    } else {
      this.activeScreen = Math.max(0, --this.activeScreen);
    }
  }

  addPageChangeTransition() {
    return this.previousScreen !== this.activeScreen &&
      this.transitions.some(
        transition => this.previousScreen === transition.from && this.activeScreen === transition.to
      );
  }
}
