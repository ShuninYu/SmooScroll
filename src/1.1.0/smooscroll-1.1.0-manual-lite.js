/*
SmooScroll.js
Author 孤灯从流ShuninYu @https://github.com/ShuninYu
version manual lite 1.1.0
*/

document.addEventListener('DOMContentLoaded', function () {

    // 配置参数
    const config = {
        //平滑滚动效果配置
        scrollStepDuration: "1",  // 每步平滑滚动效果时长（单位秒）
        bezier: ".35 , .73 , .69 , 1", // 平滑滚动的贝塞尔曲线值（如果你不知道这是什么，那别动它就完事了）
    };

    (function injectStyles() {
        const styleTag = document.createElement('style');

        const cssContent = `
            /* SmooScroll stylesheet */
            
            .scroll-container {
                position: fixed;
                top: 0;
                width: 100vw;
                height: 100vh;
                overflow: hidden;
            }

            .smooth-content {
                position: relative;
                width: 100%;
                transition: ${config.scrollStepDuration}s cubic-bezier(${config.bezier});
            }
        `;

        if (styleTag.styleSheet) {
            styleTag.styleSheet.cssText = cssContent;
        } else {
            styleTag.appendChild(document.createTextNode(cssContent));
        }

        document.head.appendChild(styleTag);
    })();

    document.body.appendChild(document.createElement('div')).id = 'gotop';

    let viewbox = document.getElementsByClassName("scroll-container")[0];
    if (!viewbox) {
        var newElement2 = document.createElement('div');
        newElement2.className = 'scroll-container';
        newElement2.id = 'scroll-container';
        document.body.appendChild(newElement2);
        viewbox = document.getElementsByClassName("scroll-container")[0];
    }

    let scrollbox = document.getElementsByClassName("smooth-content")[0];
    if (scrollbox) {
        viewbox.appendChild(scrollbox);
    }
    else if (!scrollbox) {
        alert("没有检测到smooth-content！\n页面效果无法生效！\n请参考官方文档在HTML中添加smooth-conten包裹层\n或者更换为自动部署版本的SmooScroll！");
    }

    const bodyChildren = Array.from(document.body.children);
    const elementsToMove = bodyChildren.filter(child => {
        return child !== viewbox && child !== scrollbox && child !== gotop;
    });

    elementsToMove.forEach(element => {
        scrollbox.appendChild(element);
    });

    function resize_body() {
        let height = scrollbox.offsetHeight;
        document.body.style.height = `${height}px`;
    };
    function scroll() {
        scrollbox.style.transform = `translateY(${-scrollY}px)`;
    };
    window.addEventListener("scroll", scroll);
    window.addEventListener("load", resize_body);
    window.addEventListener("resize", resize_body);
});