<div align="center">
<a href="https://shuninyu.github.io/SmooScroll">
  <img src="https://ik.imagekit.io/shunin/SmooScroll/smooscroll-logo.svg" height="150px" />
</a>

# SmooScroll

**基于原生滚动条的平滑滚动JS**<br>**Smooth Scrolling JS based on native scrollbar**

*平滑滚动页面 / Smooth your scroll*
</div>

---
SmooScroll is a free-open-source, light weighted, easy deploying smooth scrolling JS, based on native JavaScript so it doesn't require any dependencies (such as jQuery, Vue, etc.).
The effect of SmooScroll is based on native scrollbar and it won't block the default scrollbar or creating a fake scrollbar, it also have scroll-to-top button that very easy to setup.
#### Visit [sample page](https://shuninyu.github.io/SmooScroll/)

### Why SmooScroll？
If you need to add a smooth scrolling effect to the webpage, SmooScroll would be a good choice. SmooScroll is small size and very easy to deploy. You just need to import SmooScroll into your webpage to make it work!<br>SmooScroll will automatically wrap your webpage content into the SmooScroll container, giving your webpage a smooth scrolling effect.

Maybe you already know some similar smooth scrolling JS like[Lenis](https://github.com/darkroomengineering/lenis)or[GSAP ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/).

Unlike Lenis, SmooScroll' s smooth scrolling effect is decoupled from the scrollbar. The most intuitive difference is that when pressing keyboard arrow keys or dragging scrollbar, the webpage will still scroll smoothly, rather than being directly bounding to scrollbar's movement.<br>(Updated 5/1/2025: GSAP is now 100% free)ScrollSmoother's advantage is that it can combines GSAP's powerful plugin library to create complex web animations. If you only need a plug and play page smooth scrolling effect & back-to-top button, SmooScroll would also be a good choice.

---
## How to use
## Add SmooScroll to your webpage
### Deploy locally
#### 1.Download SmooScroll and store it in your website directory
#### 2.Import SmooScroll in HTML document
```html
<!--Remember to change the path and filename with yours-->
<script src="your/path/to/smooscroll-1.0.0.js"></script>
```
⚠️Please remind the filename, different version has different filename
## Set up SmooScroll
>Although SmooScroll can works by only importing, we still recommend you to make some necessary adjustments, such as mark out the contents that you don't want to scroll, and defining the image path of the back-to-top button
### Mark elements you don't want to scroll
In HTML file, add ```id="donotscrollthis"``` into elements you don't want to scroll, for example:
```html
<body>
    <!-- ↓↓↓contents don't need to scroll↓↓↓ -->
    <div id="donotscrollthis" class="topbar"></div>
    <h1 id="donotscrollthis">Not scrolling title</h1>
    <!-- ↓↓↓scrolling contents↓↓↓ -->
    <div class="contents">
        <p>texts</p>
    </div>
</body>
```
### Adjust scrolling effect
#### Customize ```const config``` in the head of SmooScroll, reference:

|name|default value|effect|
|:---|:---:|:---:|
|scrollStepDuration|```1```|Smooth scrolling effect duration per step (in seconds)|
|bezier|```.06 , .08 , 0 , .91```|Smooth scrolling Bezier curve value (⚠️ If you don't know what this is, just don't touch it)|
### Customize back-to-top button
>⚠️We suggest using SmooScroll's back-to-top button to prevent button failure caused by conflicting working modes

#### Customize ```const config``` in the head of SmooScroll, reference:
|name|default value|effect|
|:---|:---:|:---:|
|backToTopImage|-|path to your scroll-to-top button image|
|renderStyle|```normal```|if your image is small size raw pixel art file，change it to```pixelated```|
|buttonWidth|```90px```|width of the button(if you need to locate according to the window ratio, you can change the unit from px to vw, which is the window width, 1vw = 1% of the window width)|
|buttonHeight|```90px```|height of the button，the unit can also be changed to vw|
|positionRight|```20px```|distance between the button and the right end of the window，the unit can also be changed to vw|
|positionBottom|```20px```|distance between the button and the bottom of the window，the unit can also be changed to vw|
|showAtPosition|80|show scroll-to-top button when this far(px) you scroll|