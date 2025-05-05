<div align="center">
<a href="https://shuninyu.github.io/SmooScroll">
  <img src="https://ik.imagekit.io/shunin/SmooScroll/smooscroll-logo.svg" height="150px" />
</a>

# SmooScroll

**基于原生滚动条的平滑滚动JS**<br>**Smooth Scrolling JS based on native scrollbar**

*平滑滚动页面 / Smooth your scroll*
</div>

---
#### [English version](https://github.com/ShuninYu/SmooScroll/blob/main/docs/README-en.md)
SmooScroll是一个免费开源、体积小、部署简单的平滑滚动JS，基于原生JavaScript所以不需要任何依赖（比如jQuery、Vue等等）。
SmooScroll的效果基于原生滚动条，不会屏蔽默认滚动条或创建假滚动条，同时包含非常简单就能使用的回到顶部按钮功能。
#### 观看[示例网页](https://shuninyu.github.io/SmooScroll/)

### 为什么使用SmooScroll？
如果需要给网页整体添加一个平滑滚动效果，SmooScroll会是一个不错的选择，SmooScroll体积小、简单易用。要使用SmooScroll，你只需要导入SmooScroll到你的网页就可以让它工作！<br>SmooScroll会自动将你的网页内容包裹进SmooScroll容器，让你的网页拥有平滑滚动效果。

或许你已经了解过类似的网页滚动JS，比如[Lenis](https://github.com/darkroomengineering/lenis)或[GSAP ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)。

与Lenis不同的一点是，SmooScroll的页面滚动效果是与滚动条脱耦的。最直观的区别就是，当使用键盘方向键或直接拖拽滚动条时，页面仍然会平滑的滚动，而不是与滚动条的移动直接绑定。<br>（2025年5月1日更新：GSAP被webflow收购，宣布全部插件免费）ScrollSmoother的优势是结合GSAP强大的插件库制作丰富且复杂的网页动画，如果只需要即插即用的页面平滑滚动效果和回到顶部按钮，SmooScroll也会是一个不错的选择。

---
# 选择版本
>SmooScroll目前有四个不同版本，你可以根据你的需要选择最适合你的版本！

|版本后缀|自动包裹全部页面|自带回到顶部按钮|
|:---|:---:|:---:|
|auto|✅|✅|
|auto-lite|✅|❌|
|manual|❌|✅|
|manual-lite|❌|❌|

>可以看出，四个版本就是 auto、manual 和 lite 的不同组合，下面会更详细的解释这三个后缀的含义。

### auto
带有```auto```的版本会自动将整个页面内容包裹进SmooScroll容器，适合没有任何相对浏览器窗口固定位置（```position: fixed;```）的元素（比如固定的导航栏、按钮等）的页面。<br>这个版本的部署非常简单，只需要引入SmooScroll并做一些参数修改即可生效。<br>如果是```auto-lite```版本，你甚至只需要引入SmooScroll就可以了！

### manual
带有```manual```的版本需要你手动将页面内需要平滑滚动的内容包裹进SmooScroll容器（```<div class="smooth-content"></div>```）中，适合页面内有相对浏览器窗口固定位置（```position: fixed;```）的元素（比如固定的导航栏、按钮等）的页面。<br>不用担心自己会忘记添加包裹层，如果你没有创建包裹层，SmooScroll会在页面刷新时提醒你。

### lite
带有```lite```的版本不包含SmooScroll的回到顶部按钮，如果你的页面已经有了回到顶部按钮，且部署了lite版本以后这个按钮仍然完美工作，那么就可以放心的使用lite版本。<br>如果使用lite版本的SmooScroll以后，你的回到顶部按钮失效了，那么建议使用不带```lite```的版本。

---
# 如何使用SmooScroll？
## 一、添加SmooScroll到你的网页
### 本地部署
#### 1.下载SmooScroll并存储在你的网站目录中
#### 2.在HTML文件中引入SmooScroll
```html
<!--记得替换路径和文件名为你自己的路径和对应版本文件名-->
<script src="your/path/to/smooscroll-1.1.0-auto-lite.js"></script>
```
⚠️请注意文件名称，不同版本会有不同的文件名
## 二、配置SmooScroll
>SmooScroll的```auto-lite```版本只需要导入就可以工作，如果要使用```manual```版本或非```lite```版本的SmooScroll，请做一些必要的调整。
### 创建包裹层（仅manual版本）
在你的HTML文件中添加 ```<div class="smooth-content"></div>``` ，并将所有需要滚动的内容包裹进这个div内，例如：
```html
<body>
    <!-- ↓↓↓不需要滚动的元素↓↓↓ -->
    <div class="topbar">
        <h1>固定的标题</h1>
    </div>
    <!-- ↓↓↓创建包裹层并将需要滚动的内容包裹进去↓↓↓ -->
    <div class="smooth-content">
        <!-- ↓↓↓需要滚动的元素↓↓↓ -->
        <div class="article">
            <p>需要滚动的内容</p>
        </div>
    </div>
</body>
```
### 调整滚动效果（所有版本通用）
在SmooScroll开头中的 ```const config``` 中修改参数，参考：
|参数|默认值|效果|
|:---|:---:|:---:|
|scrollStepDuration|```1```|每步平滑滚动效果时长（单位秒）|
|bezier|```.35 , .73 , .69 , 1```|平滑滚动的贝塞尔曲线值（⚠️如果你不知道这是什么，那别动它就完事了）|

### 自定义回到顶部按钮样式
>⚠️如果```lite```版本和你自己的回到顶部按钮不兼容，请更换成非```lite```版本使用SmooScroll自带的回到顶部按钮。

在SmooScroll开头中的 ```const config```中修改参数，参考：
|参数|默认值|效果|
|:---|:---:|:---:|
|buttonImage|-|按钮图片路径|
|renderStyle|```normal```|如果你的按钮图片是原尺寸像素图，把它改为```pixelated```，否则不需要改动|
|buttonWidth|```90px```|按钮的宽度（如果需要按照窗口比例定位可以将单位从px改为vw，即窗口宽度，1vw = 窗口宽度1%）|
|buttonHeight|```90px```|按钮的高度，单位也可以改为vw|
|positionRight|```20px```|按钮距离页面窗口右端的距离，单位也可以改为vw|
|positionBottom|```20px```|按钮距离页面窗口底端的距离，单位也可以改为vw|
|showAtPosition|```80```|滚动多少像素后回到顶部按钮才会出现|