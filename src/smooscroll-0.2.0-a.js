/*
SmooScroll.js
Author 孤灯从流Shuninyu
version 0.2.0 alpha
*/
document.addEventListener('DOMContentLoaded', function () {
    // 配置参数
    const config = {
        backToTopImage: '/path/to/your/button/image', // 返回顶部按钮图片路径 path to your button image
        showAtPosition: 80, // 显示按钮的滚动距离 show backtotop button when this far(px) you scroll
        scrollDuration: 800, // 返回顶部动画时长 duration of back to top movement
        friction: 0.04, //滚动惯性系数(平滑程度)，0.01最平滑但过渡最久 smoothness of movement, 0.01 for smoothest but longest transform
        threshold: 1 //停止动画的阈值（像素），当还剩多少像素时让滚动直接到位 threshold of movement, when gap is smaller than this number(px), scrolling will reach the target position rightaway
    };

    function initSmoothScroll() {
        const scrollContainer = document.getElementById('scroll-container');
        const smoothContent = document.getElementById('smooth-content');

        // 创建返回顶部按钮
        const backToTopBtn = document.createElement('img');
        backToTopBtn.src = config.backToTopImage;
        //返回顶部按钮样式，可自定义
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
            image-rendering: pixelated;
            `;
        document.body.appendChild(backToTopBtn);

        let targetScroll = { x: 0, y: 0 };
        let currentScroll = { x: scrollContainer.scrollLeft, y: scrollContainer.scrollTop };
        let animationFrameId = null;

        function applyTransform() {
            smoothContent.style.transform = `translate(
            ${-currentScroll.x}px,
            ${-currentScroll.y}px
            )`;
        }

        function animate() {
            const dx = targetScroll.x - currentScroll.x;
            const dy = targetScroll.y - currentScroll.y;

            currentScroll.x += dx * config.friction;
            currentScroll.y += dy * config.friction;

            if (Math.abs(dx) < config.threshold && Math.abs(dy) < config.threshold) {
                currentScroll.x = targetScroll.x;
                currentScroll.y = targetScroll.y;
                animationFrameId = null;
            } else {
                animationFrameId = requestAnimationFrame(animate);
            }

            applyTransform();
        }

        // 返回顶部功能
        function scrollToTop() {
            targetScroll.y = 0;
            scrollContainer.scrollTop = 0;
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(animate);
            }
        }

        // 事件监听
        scrollContainer.addEventListener('scroll', () => {
            targetScroll.x = scrollContainer.scrollLeft;
            targetScroll.y = scrollContainer.scrollTop;
            scrollContainer.scrollLeft = targetScroll.x;
            scrollContainer.scrollTop = targetScroll.y;

            // 控制按钮显示
            backToTopBtn.style.opacity = targetScroll.y > config.showAtPosition ? 1 : 0;
            backToTopBtn.style.pointerEvents = targetScroll.y > config.showAtPosition ? 'auto' : 'none';

            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(animate);
            }
        });

        backToTopBtn.addEventListener('click', scrollToTop);
        applyTransform();
    }

    initSmoothScroll();
});