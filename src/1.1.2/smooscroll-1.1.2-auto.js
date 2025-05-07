/*
SmooScroll.js
Author 孤灯从流ShuninYu @https://github.com/ShuninYu
version 1.1.2 auto
*/

document.addEventListener('DOMContentLoaded', function () {

    // 配置参数
    const config = {
        //平滑滚动效果配置
        scrollStepDuration: "1",  // 每步平滑滚动效果时长（单位秒）
        bezier: ".35 , .73 , .69 , 1", // 平滑滚动的贝塞尔曲线值（如果你不知道这是什么，那别动它就完事了）

        //回到顶部按钮配置
        buttonImage: "../smooscroll-logo.svg",  // 按钮图片路径
        renderStyle: "normal", // 如果你的按钮图片是原尺寸像素图 改为pixelated
        buttonWidth: "90px", // 按钮宽度
        buttonHeight: "90px", // 按钮高度
        positionRight: "20px", // 按钮定位 距离窗口右侧的宽度
        positionBottom: "20px", // 按钮定位 距离窗口底部的高度
        showAtPosition: 80,  // 显示按钮所需要的滚动距离
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

            #gotop{
                position: fixed;
                display: none;
                right: ${config.positionRight};
                bottom: ${config.positionBottom};
                z-index: 11111;
                width: ${config.buttonWidth};
                height: ${config.buttonHeight};
                background-image: url("${config.buttonImage}");
                background-size: contain;
                image-rendering: ${config.renderStyle};
            }
            
            #gotop:hover{
                cursor: pointer;
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
        var newElement = document.createElement('div');
        newElement.className = 'smooth-content';
        newElement2.id = 'smooth-content';
        viewbox.appendChild(newElement);
        scrollbox = document.getElementsByClassName("smooth-content")[0];
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

    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop >= config.showAtPosition) {
            gotop.style.display = "block";
        } else {
            gotop.style.display = "none";
        }
    }

    gotop.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});