function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) 
        scrollTop.classList.add('show-scroll'); 
    else 
        scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', debounce(scrollTop, 200))