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
#### 访问[SmooScroll官网](https://shuninyu.github.io/SmooScroll/)获取部署指南、常见问题等更多支持。

### 为什么使用SmooScroll？
如果需要给网页整体添加一个平滑滚动效果，SmooScroll会是一个不错的选择，SmooScroll体积小、简单易用。要使用SmooScroll，你只需要导入SmooScroll到你的网页就可以让它工作！<br>SmooScroll会自动将你的网页内容包裹进SmooScroll容器，让你的网页拥有平滑滚动效果。

或许你已经了解过类似的网页滚动JS，比如[Lenis](https://github.com/darkroomengineering/lenis)或[GSAP ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)。

与Lenis不同的一点是，SmooScroll的页面滚动效果是与滚动条脱耦的。最直观的区别就是，当使用键盘方向键或直接拖拽滚动条时，页面仍然会平滑的滚动，而不是与滚动条的移动直接绑定。<br>（2025年5月1日更新：GSAP被webflow收购，宣布全部插件免费）ScrollSmoother的优势是结合GSAP强大的插件库制作丰富且复杂的网页动画，如果只需要即插即用的页面平滑滚动效果和回到顶部按钮，SmooScroll也会是一个不错的选择。

---
# 选择版本
>SmooScroll目前有四个不同类型，你可以根据你的需要选择最适合你的版本！

|版本后缀|页面包裹|自带回到顶部按钮|*伪sticky效果|
|:---|:---:|:---:|:---:|
|auto|自动包裹全部页面内容|✅|❌|
|auto-lite|自动包裹全部页面内容|❌|❌|
|manual|手动包裹页面自选内容|✅|✅|
|manual-lite|手动包裹页面自选内容|❌|✅|

*如果需要不包含伪sticky效果的SmooScroll，请使用 v1.1.5 版本。

>可以看出，四个类型就是 auto、manual 和 lite 的不同组合，下面会更详细的解释这三个后缀的含义。

### auto
带有```auto```的版本会自动将整个页面内容包裹进SmooScroll容器，适合没有任何相对浏览器窗口固定位置（```position: fixed;```）的元素（比如固定的导航栏、按钮等）的页面。<br>这个版本的部署非常简单，只需要引入SmooScroll并做一些参数修改即可生效。<br>如果是```auto-lite```版本，你甚至只需要引入SmooScroll就可以了！

### manual
带有```manual```的版本需要你手动将页面内需要平滑滚动的内容包裹进SmooScroll容器（```<div class="smooth-content"></div>```）中，适合页面内有相对浏览器窗口固定位置（```position: fixed;```）的元素（比如固定的导航栏、按钮等）的页面。<br>不用担心自己会忘记添加包裹层，如果你没有创建包裹层，SmooScroll会在页面刷新时提醒你。

### lite
带有```lite```的版本不包含SmooScroll的回到顶部按钮，如果你的页面已经有了回到顶部按钮，且部署了lite版本以后这个按钮仍然完美工作，那么就可以放心的使用lite版本。<br>如果使用lite版本的SmooScroll以后，你的回到顶部按钮失效了，那么建议使用不带```lite```的版本。

### 伪 sticky 效果
注：该效果目前为实验性效果（v1.2.0）。
SmooScroll的工作原理会导致页面中的```position: sticky;```失效，所以添加了一个可以实现视觉上类似sticky效果的功能来实现粘性定位效果。
目前伪sticky功能只支持顶部附着，且一个页面内最多只能有一个伪sticky元素，但是该伪sticky元素可以有无限制的子元素。

---
# 如何使用SmooScroll？
## 一、添加SmooScroll到你的网页
### 本地部署
#### 1.下载SmooScroll并存储在你的网站目录中
#### 2.在HTML文件中引入SmooScroll
```html
<!--记得替换路径和文件名为你自己的路径和对应版本文件名-->
<script src="your/path/to/smooscroll-1.2.0-auto-lite.min.js"></script>
```
⚠️请注意文件名称，不同版本会有不同的文件名
## 二、配置SmooScroll
>SmooScroll的```auto-lite```版本只需要导入就可以工作（前提是你的页面中没有需要锁定窗口位置的元素，包括sticky元素）。如果要使用```manual```版本或非```lite```版本的SmooScroll，请对SmooScroll做一些必要的设置。
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
### 设置伪sticky效果（仅manual版本）
>如果有需要在窗口顶部粘性定位的元素（例如顶部导航栏），那么可以设置伪sticky效果。

接下来将以下面这个 HTML 片段为例，假设```<div class="topbar"></div>```是需要粘性定位的元素，**该元素的布局为 ```display: flex;```**。
```html
<body>
    <div class="smooth-content">
        <div>顶部元素</div>
        <div class="topbar"><!--顶部导航栏，需要粘性定位-->
            <a>按钮1</a>
            <a>按钮2</a>
        </div>
        <div class="article">
            <p>正文内容</p>
        </div>
    </div>
</body>
```
定位到需要粘性定位的元素，复制该元素，将副本粘贴在SmooScroll容器之外。并在该元素本体中添加 ```id="smoosticky"```，在副本中添加 ```id="smoosticker"```。
```html
<body>
    <div class="smooth-content">
        <div>顶部元素</div>
        <div class="topbar" id="smoosticky"><!--顶部导航栏，需要粘性定位-->
            <a>按钮1</a>
            <a>按钮2</a>
        </div>
        <div class="article">
            <p>正文内容</p>
        </div>
    </div>
    <div class="topbar" id="smoosticker"><!--顶部导航栏的副本-->
        <a>按钮1</a>
        <a>按钮2</a>
    </div>
</body>
```
给副本创建并添加一个自定义的class，将副本变为 ```position: fixed;``` 的元素，并且调整css，使其与本体完全重合（z-index一定要高于本体）。
```html
<body>
    <div class="smooth-content">
        <div>顶部元素</div>
        <div class="topbar" id="smoosticky"><!--顶部导航栏，需要粘性定位-->
            <a>按钮1</a>
            <a>按钮2</a>
        </div>
        <div class="article">
            <p>正文内容</p>
        </div>
    </div>
    <div class="topbar sticky-element" id="smoosticker"><!--顶部导航栏的副本-->
        <a>按钮1</a>
        <a>按钮2</a>
    </div>
    <style>
        .sticky-element {
            position: fixed;
        }
    </style>
</body>
```
在SmooScroll中，找到位于 ```const config``` 下面的 ```var stickyDisplay``` ，将其赋值改为粘性定位元素本体的布局。在这个例子中，topbar 本体的布局为 ```display: flex;``` 。
```CSS
var stickyDisplay = "flex"; /*请根据你的情况修改*/
```
这样就完成了伪sticky效果的设置。
通过这个例子，应该也能了解这个伪sticky效果的原理。其实很简单，就是在窗口顶部预先放置一个锁定窗口位置的副本，当窗口顶部开始覆盖粘性定位元素的瞬间，隐藏该元素本体并显示锁定位置的副本。当元素本体从顶部完整回到窗口内时，隐藏副本并显示本体。
这个伪sticky效果由于是通过调整元素本体透明度来隐藏本体，所以元素所占的空间并不会消失，从而不会改变页面原本的布局。
### 调整滚动效果（所有版本通用）
在SmooScroll开头中的 ```const config``` 中修改参数，参考：
|参数|默认值|效果|
|:---|:---:|:---:|
|scrollStepDuration|```0.8```|每步平滑滚动效果时长（单位秒）|
|bezier|```.35 , .73 , .5 , 1```|平滑滚动的贝塞尔曲线值（⚠️如果你不知道这是什么，那别动它就完事了）|

### 自定义回到顶部按钮样式（仅非lite版本）
>⚠️如果```lite```版本和你自己的回到顶部按钮不兼容，请更换成非```lite```版本使用SmooScroll自带的回到顶部按钮。

在SmooScroll开头中的 ```const config```中修改参数，参考：
|参数|默认值|效果|
|:---|:---:|:---:|
|buttonImage||按钮图片路径|
|renderStyle|```normal```|如果你的按钮图片是原尺寸像素图，把它改为```pixelated```，否则不需要改动|
|buttonWidth|```90px```|按钮的宽度（如果需要按照窗口比例定位可以将单位从px改为vw，即窗口宽度，1vw = 窗口宽度1%）|
|buttonHeight|```90px```|按钮的高度，单位也可以改为vw|
|positionRight|```20px```|按钮距离页面窗口右端的距离，单位也可以改为vw|
|positionBottom|```20px```|按钮距离页面窗口底端的距离，单位也可以改为vw|
|showAtPosition|```80```|滚动多少像素后回到顶部按钮才会出现|

### 伪sticky效果（仅v1.2.0以后的manual版）
|参数|默认值|效果|
|:---|:---:|:---:|
|stickyDisplay|```flex```|粘性定位元素的默认显示模式，根据你的粘性定位元素的设置来修改|