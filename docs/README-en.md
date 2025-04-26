<div align="center">
<a href="https://shuninyu.github.io/SmooScroll">
  <img src="https://ik.imagekit.io/shunin/SmooScroll/smooscroll-logo.svg" height="150px" />
</a>

# SmooScroll*

**Smooth Scrolling JS base on native scrollbar**

*平滑滚动页面 / Smooth your scroll*

**alpha version, still in development*
</div>

---
SmooScroll is a free-open-source smooth scrolling JS for static HTML web pages, based on native JavaScript so it doesn't require any dependencies (such as jQuery, Vue, etc.).
The effect of SmooScroll is based on native scrollbar and it won't block the default scrollbar or creating a fake scrollbar, it also have scroll-to-top button that very easy to setup.
#### Visit[sample web page](https://shuninyu.github.io/SmooScroll/)

⚠️*SmooScroll is currently an early version，so it is not perfect yet.*

### Why SmooScroll？
Maybe you already know some similar smooth scrolling JS like[Lenis](https://github.com/darkroomengineering/lenis)or[GSAP ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/).

Unlike Lenis, SmooScroll' s smooth scrolling effect doesn't directly affect your scrollbar. The most intuitive difference is that when pressing keyboard arrow keys or dragging scrollbar, the webpage will still scroll smoothly, rather than being directly bounding to scrollbar's movement, the effect is more similar to ScrollSmoother.
Besides, ScrollSmoother is a paying customer only plugin, it needs a **150USD** /year subscription to get access of the plugin. If there is only a smooth scrolling effect needed, then this pricing is a little bit high cost for individual developer or amateur.

So, if the only need is to add a smooth scrolling effect to the entire webpage, SmooScroll would be a good choice.(after I fix the bug of course :P）
But if you don't need the smooth scrolling effect when dragging scrollbar or pressing kerboard arrow keys, then using Lenis is enough.

---
### How to use
#### Add SmooScroll to your webpage
SmooScroll is currently not available via CDN, will add CDN surpport after major bug fixed.

⚠️Due to the bug, it is not recommended to define the element height too large. The specific reasons will be given later.

##### 1.Download the version of SmooScroll you need and store it in your website directory
##### 2.Import SmooScroll in HTML document
```html
<!--Remember to change the path and filename with yours-->
<script src="your/path/to/smooscroll-0.3.0-a.js"></script>
```
⚠️Please remind the filename, different version has different filename
##### 3.Wrap your page content in the container
```html
<body>
    <!-- Scroll Container -->
    <div id="scroll-container">
        <!-- Content box -->
        <div id="smooth-content">
            <!-- webpage content in this div -->
        </div>
    </div>
</body>
```
##### 4.Add stylesheets in CSS file
```css
/*↓↓↓ SmooScroll ↓↓↓*/
#scroll-container {
    overflow: auto;
    width: 100vw;
    height: 100vh;
}
/*↑↑↑ SmooScroll ↑↑↑*/
```
Here is a simple html sample below(snippet)
##### index.html
```html
<body>
    <!-- Scroll Container -->
    <div id="scroll-container">
        <!-- Content box -->
        <div id="smooth-content">
            <!-- webpage content in this div -->
            <h1>Your Website Content</h1>
            <div class="your-existing-content">...</div>
        </div>
    </div>

    <!-- Those content that doesn't need to scroll, such as top bar -->
    <div class="fixed-header">...</div>
</body>
```

#### Adjust scrolling effect
If you think the scrolling movement is too fast/slow, you can adjust scrolling effect by editing parameter.

|parameter|default value|effect|
|:---|:---:|:---:|
|friction|0.04|smoothness of movement, 0.01 for smoothest but longest transform|
|threshold|1|threshold of movement, when gap is smaller than this number(px), scrolling will reach the target position rightaway|
|showAtPosition|80|show scroll-to-top button when this far(px) you scroll|
|backToTopImage|-|path to your scroll-to-top button image|

#### Customize scroll-to-top button
⚠️v0.2.0 alpha added scroll-to-top button support, we recommend you to use SmooScroll's scroll-to-top button, using SmooScroll may cause other scroll-to-top button invalid.

##### Find ```backToTopBtn.style.cssText``` in smooscroll, it should be like：
```js
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
```
##### Refer to the table below and modify the parameters according to your needs.
⚠️Please do not modify parameters didn't listed below, otherwise the button may became buggy.
|parameter|default value|effect|
|:---|:---:|:---:|
|bottom|20px|The distance between the button and the bottom of the window (if you need to position the button according to the window ratio, you can change px to vw (vw = width of the window), 1vw = 1% of the window width)|
|right|20px|The distance between the button and the right end of the window (the same method as above if proportional positioning is required)|
|width|90px|The width of the button. The unit can also be changed to vw|
|transition|0.3s|⚠️Please modify the number only⚠️Button fade-in and fade-out effect transition duration (seconds)|

---
### Current issues
Since I'm not a professional front-end developer and have a shallow grasp of JavaScript, SmooScroll currently has some problems.
#### bug
⚠️Currently, if a very heigh content is defined inside the scroll-container, it will cause scrollbar errors. Specifically, the scrollbar position does not match the page position and scrolling over-limit. For example, when you only drag the scrollbar halfway, the page has already scrolled to the bottom, and you can still scroll the page. Usually this will cause a blank area at the bottom of the page that should not exist, and the higher the height value of the element, the larger of ​​the blank area. This problem is triggered mostly by height, but sometimes margin or padding will trigger this problem too.

🔎Based on observation, it can be determined that this is a problem of scrolling distance. When the page is actually scrolled down 84px, the transform.translate value in smoothContent is -42px, when it is actually scrolled down 200px, this value is -100px, which is obviously inconsistent with the actual scrolling distance. So when the page has scrolled to the bottom, the scroll bar has not actually reached the bottom and can still scrolling down. Then when you scroll down further, the displayed area will be just a space with nothing in it.

💉The current temporary solution is to avoid defining a height value too high, including SmooScroll containers.

If you need more blank space(or just space for relative/absolute layout) in the webpage, you can use an empty div with a larger margin value to create the space for the page.