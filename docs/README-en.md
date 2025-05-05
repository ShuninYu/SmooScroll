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
# Choose a version
>SmooScroll has 4 different versions, you can chose the version you need.

|version suffix|auto pack whole page|has go-to-top button|
|:---|:---:|:---:|
|auto|✅|✅|
|auto-lite|✅|❌|
|manual|❌|✅|
|manual-lite|❌|❌|

>As you can see, these four versions are different combinds of auto/manual/lite, watch explanations below.

### auto
Version with suffix ```auto``` will automatically wrap the entire page into the SmooScroll container, making it suitable for pages without any fixed (```position: fixed;```) elements realative to the browser window (such as navigator, buttons, etc.).<br>This version is really easy to deploy, just need to add SmooScroll into your page and do some simple modifications.<br>If you use ```auto-lite``` version, you only need to add SmooScroll and it will work!

### manual
Version with suffix ```manual``` needs you to wrap the contents manualy. Create a SmooScroll container (```<div class="smooth-content"></div>```) and wrap contents-you-want-to-scroll into it. This version suits pages that have fixed (```position: fixed;```) elements realative to the browser window (such as navigator, buttons, etc.).<br>Don't worry about forgetting to wrap the contents, SmooScroll will warn you every time you refresh the page if you forgot to create the SmooScroll container.

### lite
Version with suffix ```lite``` doesn't has SmooScroll back-to-top button. If your page already has a back-to-top button and it still woks fine after deploying the ```lite``` version of SmooScroll, then you can use the ```lite``` version with confidence.<br>If youe back-to-top button doesn't works fine after deploying the ```lite``` version of SmooScroll, it is reecommended to use the non lite version.

---
## How to use
## First, Add SmooScroll to your webpage
### Deploy locally
#### 1.Download SmooScroll and store it in your website directory
#### 2.Import SmooScroll in HTML document
```html
<!--Remember to change the path and filename with yours-->
<script src="your/path/to/smooscroll-1.1.0-auto-lite.js"></script>
```
⚠️Please remind the filename, different version has different filename
## Then, Set up SmooScroll
>SmooScroll's ```auto-lite``` version will work by just import it into your page. If you use ```manual``` version or non ```lite``` version, please make some necessary modifications.
### Create SmooScroll container (manual versions only)
Add ```<div class="smooth-content"></div>``` into your HTML, and wrap all the contents that need to scroll into this div, for example:
```html
<body>
    <!-- ↓↓↓elements don't need to scroll↓↓↓ -->
    <div class="topbar">
        <h1>Fixed header</h1>
    </div>
    <!-- ↓↓↓create wrapper and wrap scrolling contents into it↓↓↓ -->
    <div class="smooth-content">
        <!-- ↓↓↓elements need to scroll↓↓↓ -->
        <div class="article">
            <p>scrolling contents</p>
        </div>
    </div>
</body>
```
### Adjust scrolling effect
#### Customize ```const config``` in the head of SmooScroll, reference:

|name|default value|effect|
|:---|:---:|:---:|
|scrollStepDuration|```1```|Smooth scrolling effect duration per step (in seconds)|
|bezier|```.35 , .73 , .69 , 1```|Smooth scrolling Bezier curve value (⚠️ If you don't know what this is, just don't touch it)|
### Customize back-to-top button
>⚠️If ```lite``` version doesn't compatible with your back-to-top button, please switch to non lite version and use SmooScroll's back-to-top button instead.

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