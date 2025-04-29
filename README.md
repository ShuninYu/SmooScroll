<div align="center">
<a href="https://shuninyu.github.io/SmooScroll">
  <img src="https://ik.imagekit.io/shunin/SmooScroll/smooscroll-logo.svg" height="150px" />
</a>

# SmooScroll

**基于默认滚动条的平滑滚动JS**
**Smooth Scrolling JS base on native scrollbar**

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

与Lenis不同的一点是，SmooScroll的页面滚动效果是与滚动条脱耦的。最直观的区别就是，当使用键盘方向键或直接拖拽滚动条时，页面仍然会平滑的滚动，而不是与滚动条的移动直接绑定。
而ScrollSmoother是GSAP的一个付费用户组插件，使用它需要 **150USD（约1000CNY）** 一年的会员，ScrollSmoother的优势是结合GSAP强大的插件库制作丰富且复杂的网页动画。但如果只是想给网页添加平滑滚动效果，那么这个使用成本对于个人开发者/业余爱好者来说还是偏高，并且部署使用要比SmooScroll复杂得多。

---
# 如何使用SmooScroll？
## 添加SmooScroll到你的网页
### 本地部署
#### 1.下载SmooScroll并存储在你的网站目录中
#### 2.在HTML文件中引入SmooScroll
```html
<!--记得替换路径和文件名为你自己的路径和对应版本文件名-->
<script src="your/path/to/smooscroll-1.0.0.js"></script>
```
⚠️请注意文件名称，不同版本会有不同的文件名
## 配置SmooScroll
>虽然SmooScroll只需要导入就可以工作，但是我们还是推荐您做一些必要的调整，比如定义不需要滚动的内容，以及设置回到顶部按钮的图片路径
### 标记不需要滚动的内容
在你的HTML文件中，为不需要滚动的元素添加 ```id="donotscrollthis"``` ，例如：
```html
<body>
    <!-- ↓↓↓不需要滚动的元素↓↓↓ -->
    <div id="donotscrollthis" class="topbar"></div>
    <h1 id="donotscrollthis">不需要移动的标题</h1>
    <!-- ↓↓↓需要滚动的元素↓↓↓ -->
    <div class="contents">
        <p>需要滚动的内容</p>
    </div>
</body>
```
### 调整滚动效果
在SmooScroll开头中的 ```const config```中修改参数，参考：
|参数|默认值|效果|
|:---|:---:|:---:|
|scrollStepDuration|```1```|每步平滑滚动效果时长（单位秒）|
|bezier|```.06 , .08 , 0 , .91```|平滑滚动的贝塞尔曲线值（⚠️如果你不知道这是什么，那别动它就完事了）|

### 自定义回到顶部按钮样式
>⚠️我们建议您使用SmooScroll的回到顶部按钮，以防工作方式冲突导致的按钮失效

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