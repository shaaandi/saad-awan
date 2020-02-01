document.addEventListener('DOMContentLoaded', () => {
    let maxWidth = window.innerWidth;
    let helloFont = 50;
    let helloTranslation = `translateX(500px)`;
    if (maxWidth < 1030) {
        helloFont = 40;
    }
    if (maxWidth < 800) {
        helloTranslation = `translateX(300px)`;
        helloFont = 35;
    }

    if (maxWidth < 500) {
        helloTranslation = `translateY(-100px)`;
    }

    let body = document.querySelector('body');
    let hello = document.querySelector('#hello');
    let hello1 = document.querySelector('#hello1');
    let hello2 = document.querySelector('#hello2');
    let hello3 = document.querySelector('#hello3');
    let links = document.querySelector('#profilePic');
    let nav = document.querySelector('nav');

    let animate = 1000;
    setTimeout(() => {
        hello.style.position = 'fixed';
        body.style.opacity = 1;
        hello1.style.opacity = 1;
        setTimeout(() => {
            hello2.style.opacity = 1;

            setTimeout(() => {
                hello3.style.opacity = 1;

                setTimeout(() => {
                    hello.style.fontSize = helloFont;
                    hello.style.zIndex = -1;

                    // est

                    setTimeout(() => {
                        hello.style.transform = helloTranslation;
                        links.style.top = '50%';
                        links.style.position = 'fixed';
                        links.style.zIndex = 2;
                        links.style.opacity = 1;
                        // hello.style.right = 0;
                        setTimeout(() => {}, animate);
                    }, animate);
                    //

                    // nav.style.opacity = 1;
                }, animate);
            }, animate);
        }, animate);
    }, animate);
});
