/*
SmooScroll.js
Author @孤灯从流Shuninyu
version 0.3.0 alpha
*/
document.addEventListener('DOMContentLoaded', function () {
    const config = {
        backToTopImage: '/path/to/your/button/image', // 返回顶部按钮图片路径 path to your scroll-to-top button image
        showAtPosition: 80, // 显示按钮的滚动距离 show scroll-to-top button when this far(px) you scroll
        friction: 0.04, //滚动惯性系数(平滑程度)，0.01最平滑但过渡最久 smoothness of movement, 0.01 for smoothest but longest transform
        threshold: 0.5 //停止动画的阈值（像素），当还剩多少像素时让滚动直接到位 threshold of movement, when gap is smaller than this number(px), scrolling will reach the target position rightaway
    };

    function initSmoothScroll() {
        const scrollContainer = document.getElementById('scroll-container') || document.scrollingElement;
        const smoothContent = document.getElementById('smooth-content');

        const style = document.createElement('style');
        style.textContent = `
        html { overflow: hidden !important; }
        #smooth-content { position: relative; }
        `;
        document.head.appendChild(style);

        const backToTopBtn = document.createElement('img');
        backToTopBtn.src = config.backToTopImage;
        
        //↓↓↓ 返回顶部按钮样式，可自定义 scroll-to-top button style, you can customize it ↓↓↓
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 90px;
            height: 90px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
            z-index: 1000;
            background-size: contain;
            `;
        document.body.appendChild(backToTopBtn);

        let targetY = 0, currentY = 0, animating = false;

        function update() {
            smoothContent.style.transform = `translateY(${-currentY}px)`;
            requestAnimationFrame(animate);
        }

        function animate() {
            const dy = targetY - currentY;
            currentY += dy * config.friction;

            if (Math.abs(dy) > config.threshold) {
                update();
            } else {
                currentY = targetY;
                animating = false;
            }

            backToTopBtn.style.opacity = targetY > config.showAtPosition ? '1' : '0';
            backToTopBtn.style.pointerEvents = targetY > config.showAtPosition ? 'auto' : 'none';
        }

        (scrollContainer === document.scrollingElement ? window : scrollContainer)
            .addEventListener('scroll', () => {
                targetY = scrollContainer.scrollTop;
                if (!animating) {
                    animating = true;
                    update();
                }
            }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    initSmoothScroll();
});