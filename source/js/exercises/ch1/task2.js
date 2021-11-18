export default function() {
    window.addEventListener('load', function() {
        // small timeout to solve firefox laggy animation
        this.setTimeout(() => document.body.classList.add('loaded'), 200);
    });
}