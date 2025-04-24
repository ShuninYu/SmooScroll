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
SmooScroll is a smooth scrolling JS for static HTML web pages, based on native JavaScript so it doesn't require any dependencies (such as jQuery, Vue, etc.).
The effect of SmooScroll is based on native scrollbar and win't block the default scrollbar or creating a fake scrollbar.
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
<script src="your/path/to/smooscroll-0.2.0-a.js"></script>
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

✅v0.2.0 alpha added totop button support，is using SmooScroll makes your totop button invalid, you can try this vesion with SmooScroll totop button.
|parameter|default value|effect|
|:---|:---:|:---:|
|friction|0.04|smoothness of movement, 0.01 for smoothest but longest transform|
|threshold|1|threshold of movement, when gap is smaller than this number(px), scrolling will reach the target position rightaway|
|showAtPosition(仅v0.2.0-a only)|80|show backtotop button when this far(px) you scroll|
|scrollDuration(仅v0.2.0-a only)|800|duration of back to top movement|
|backToTopImage(仅v0.2.0-a only)|-|path to your totop button image|

---
### Current issues
Since I'm not a professional front-end developer and have a shallow grasp of JavaScript, SmooScroll currently has some problems.
#### bug
⚠️Currently, if a large height value is defined inside the scroll-container, it will cause scrollbar errors. Specifically, the scrollbar position does not match the page position and scrolling over-limit. For example, when you only drag the scrollbar halfway, the page has already scrolled to the bottom, and you can still scroll the page. Usually this will cause a blank area at the bottom of the page that should not exist, and the higher the height value of the element, the larger of ​​the blank area. This problem is only triggered by height, and neither margin nor padding will trigger this problem.

🔎Based on observation, it can be determined that this is a problem of scrolling distance. When the page is actually scrolled down 84px, the transform.translate value in smoothContent is -42px, when it is actually scrolled down 200px, this value is -100px, which is obviously inconsistent with the actual scrolling distance. So when the page has scrolled to the bottom, the scroll bar has not actually reached the bottom and can still scrolling down. Then when you scroll down further, the displayed area will be just a space with nothing in it.

💉The current temporary solution is to avoid defining a height value too high, including SmooScroll containers.

If you need more blank space(or just space for relative/absolute layout) in the webpage, you can use an empty div with a larger margin value to create the space for the page.