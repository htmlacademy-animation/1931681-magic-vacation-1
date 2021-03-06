// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import menu from "./modules/menu.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import FullPageScroll from "./modules/full-page-scroll";

// chapter exercises
import runChapter1Task2 from "./exercises/ch1/task2";
import "./exercises/ch2/task2";
import "./exercises/ch3/task1";
import "./exercises/ch4/chapter4";
import "./exercises/ch5/task1";

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

runChapter1Task2();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
