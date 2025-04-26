/*
SmooScroll.js
Author 孤灯从流Shuninyu
version 0.1.0 alpha
*/
document.addEventListener('DOMContentLoaded', function () {
    // 平滑滚动初始化函数
    function initSmoothScroll() {
        const scrollContainer = document.getElementById('scroll-container');
        const smoothContent = document.getElementById('smooth-content');

        const config = {
            friction: 0.04, //滚动惯性系数(平滑程度)，0.01最平滑但过渡最久 smoothness of movement, 0.01 for smoothest but longest transform
            threshold: 1 //停止动画的阈值（像素），当还剩多少像素时让滚动直接到位 threshold of movement, when gap is smaller than this number(px), scrolling will reach the target position rightaway
        };

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

        scrollContainer.addEventListener('scroll', () => {
            targetScroll.x = scrollContainer.scrollLeft;
            targetScroll.y = scrollContainer.scrollTop;
            scrollContainer.scrollLeft = targetScroll.x;
            scrollContainer.scrollTop = targetScroll.y;

            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(animate);
            }
        });

        applyTransform();
    }

    // 初始化平滑滚动
    initSmoothScroll();
});