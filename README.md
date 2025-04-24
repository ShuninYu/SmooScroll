<div align="center">
<a href="https://shuninyu.github.io/SmooScroll">
  <img src="https://ik.imagekit.io/shunin/SmooScroll/smooscroll-logo.svg" height="150px" />
</a>

# SmooScroll*

**基于默认滚动条的平滑滚动JS**

*平滑滚动页面 / Smooth your scroll*

**alpha版本，开发中*
</div>

---
#### [English version](https://github.com/ShuninYu/SmooScroll/blob/main/docs/README-en.md)
SmooScroll是一个用于静态HTML网页的平滑滚动JS，基于原生JavaScript所以不需要任何依赖（比如jQuery、Vue等等）。
SmooScroll的效果基于原生滚动条，不会屏蔽默认滚动条或创建假滚动条。
#### 观看[示例网页](https://shuninyu.github.io/SmooScroll/)

⚠️*SmooScroll目前还是非常早期的版本，所以它还并不完美。*

### 为什么使用SmooScroll？
或许你已经了解过类似的网页滚动JS，比如[Lenis](https://github.com/darkroomengineering/lenis)或[GSAP ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)。

与Lenis不同的一点是，SmooScroll的平滑滚动效果并不直接作用在滚动条上。最直观的区别就是，当使用键盘方向键或直接拖拽滚动条时，页面仍然会平滑的滚动，而不是与滚动条的移动直接绑定，效果更类似ScrollSmoother。
而ScrollSmoother是GSAP的一个付费用户组插件，使用它需要 **150USD（约1000CNY）** 一年的会员，如果只是想给网页添加平滑滚动效果，那么这个使用成本对于个人开发者/业余爱好者来说还是偏高。

所以如上所言，如果只需要给网页整体添加一个平滑滚动效果，对于爱好者的轻度应用场景来说，SmooScroll会是一个不错的选择（当然，是在我把bug修复以后:P）。
如果你不需要拖拽滚动条/键盘方向键控制时的平滑滚动效果，那么使用Lenis也足够了。

---
### 如何使用
#### 添加SmooScroll到你的网页
SmooScroll目前无法通过CDN提供，修复bug后将添加CDN支持。

⚠️由于目前存在的bug，不建议将元素height定义太大，具体原因会在后面给出。
##### 1.下载你需要的SmooScroll版本，并存储在你的网站目录中
##### 2.在HTML文件中引入SmooScroll
```html
<!--记得替换路径和文件名为你自己的路径和对应版本文件名-->
<script src="your/path/to/smooscroll-0.2.0-a.js"></script>
```
⚠️需要注意文件名，不同版本文件名有所不同
##### 3.将页面内容包裹在容器中
```html
<body>
    <!-- 滚动容器 -->
    <div id="scroll-container">
        <!-- 内容包裹层 -->
        <div id="smooth-content">
            <!-- 页面内容包裹在这个div内 -->
        </div>
    </div>
</body>
```
##### 4.在CSS中添加样式
```css
/*↓↓↓ SmooScroll ↓↓↓*/
#scroll-container {
    overflow: auto;
    width: 100vw;
    height: 100vh;
}
/*↑↑↑ SmooScroll ↑↑↑*/
```
下面是一个简单的html片段示例
##### index.html
```html
<body>
    <!-- 滚动容器 -->
    <div id="scroll-container">
        <!-- 内容包裹层 -->
        <div id="smooth-content">
            <!-- 原有页面内容移动到这里 -->
            <h1>你的原有内容</h1>
            <div class="your-existing-content">...</div>
        </div>
    </div>

    <!-- 不需要滚动的内容保持在外边 例如顶部固定导航栏 -->
    <div class="fixed-header">...</div>
</body>
```

#### 调整滚动效果
如果觉得滚动的太快/太慢，可以通过修改SmooScroll中的参数进行调整。

✅v0.2.0 alpha增加了回到顶部按钮的支持，如果使用SmooScroll让你原本的ToTop按钮失效，可以使用这个版本的SmooScroll。
|参数|默认值|效果|
|:---|:---:|:---:|
|friction|0.04|滚动惯性系数(平滑程度)，0.01最平滑但过渡最久|
|threshold|1|停止动画的阈值（像素），当还剩多少像素时让滚动直接到位|
|showAtPosition(仅v0.2.0-a)|80|滚动多少像素后回到顶部按钮才会出现|
|scrollDuration(仅v0.2.0-a)|800|返回顶部过渡时长|
|backToTopImage(仅v0.2.0-a)|-|回到顶部按钮的图片|

---
### 目前的问题
由于本人并不是专业前端，对于JavaScript掌握较浅，所以SmooScroll目前还有一些问题。
#### bug
⚠️目前在scroll-container内部，如果定义了较大的height值，则会造成滚动条的错误。具体表现为滚动条位置与页面位置的不匹配/超限滚动，比如当你的滚动条只拖动了一半的时候，页面已经滚动到底部了，而这时候你仍然可以继续滚动页面。通常这会导致页面像是底部出现一片本不应该存在的空白区域，并且元素的height值越高，这个空白区域就越大。这个问题只会由height触发，margin和padding均不会触发这个问题。

🔎根据观察，暂时可以确定的是这是滚动距离的问题，当页面实际向下滚动了84px时，smoothContent中的transform.translate值为-42px，当实际向下滚动了200px时，这个值为-100px，这明显与实际滚动距离不符。所以当页面已经滚动到底部时，滚动条实际上还没有到达底部，仍然可以继续向下滚动，那么接着滚动显示的页面区域就只能是什么都没有的空间了。

💉目前的临时解决方法是，避免给元素定义过高的height值，包括SmooScroll容器。

如果你需要网页中更多的空白空间（或者给relative/absolute布局的空间），可以使用具有较大边margin的空div来为页面创造空间。