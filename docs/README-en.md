<div align="center">
<a href="https://shuninyu.github.io/SmooScroll">
  <img src="https://ik.imagekit.io/shunin/SmooScroll/smooscroll-logo.svg" height="150px" />
</a>

# SmooScroll

**基于原生滚动条的平滑滚动JS**<br>**Smooth Scrolling JS based on native scrollbar**

*平滑滚动页面 / Smooth your scroll*
</div>

---
SmooScroll is a free, open-source, lightweight, and easy-to-deploy smooth scrolling JavaScript library. It is based on native JavaScript, so it does not require any dependencies (such as jQuery, Vue, etc.).

SmooScroll's effect is based on the native scrollbar; it does not hide the default scrollbar or create a fake scrollbar. It also includes a very easy-to-use "Back to Top" button functionality.

#### Visit the [SmooScroll Official Website (Chinese)](https://smooscroll.js.org) for deployment guides, FAQs, and more support.

### Why Use SmooScroll?
If you need to add a smooth scrolling effect to an entire webpage, SmooScroll is an excellent choice. It is lightweight and simple to use. To use SmooScroll, you only need to import it into your webpage, and it will work!
SmooScroll will automatically wrap your webpage content into its container, giving your page a smooth scrolling effect.

You might already be familiar with similar webpage scrolling libraries, such as [Lenis](https://github.com/darkroomengineering/lenis) or [GSAP ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/).

One key difference from Lenis is that SmooScroll's page scrolling effect is decoupled from the scrollbar's movement. The most intuitive difference is that when using keyboard arrow keys or dragging the scrollbar directly, the page will still scroll smoothly instead of moving rigidly with the scrollbar.
(Update: May 1, 2025: GSAP, acquired by Webflow, announced all plugins are now free.) ScrollSmoother's strength lies in creating rich and complex webpage animations combined with GSAP's powerful plugin library. If you only need a plug-and-play page smooth scrolling effect and a "Back to Top" button, SmooScroll is also a great choice.

---
# Choose a Version
>SmooScroll currently comes in four different types. You can choose the version that best suits your needs!

| Version Suffix | Wraps Entire Page | Includes Back-to-Top Button | *Pseudo-sticky Effect |
| :--- | :---: | :---: | :---: |
| auto | Automatically wraps all page content | ✅ | ❌ |
| auto-lite | Automatically wraps all page content | ❌ | ❌ |
| manual | Manually wraps selected content | ✅ | ✅ |
| manual-lite | Manually wraps selected content | ❌ | ✅ |

*If you need a version without the pseudo-sticky effect, please use v1.1.5.

>As you can see, the four types are different combinations of auto, manual, and lite. The meanings of these three suffixes are explained in more detail below.

### auto
Versions with the ```auto``` suffix automatically wrap the entire page content into the SmooScroll container. They are suitable for pages that do not have any elements with a position fixed relative to the browser window (```position: fixed;```), such as fixed navigation bars, buttons, etc.
Deploying this version is very simple; you only need to import SmooScroll and make some parameter modifications for it to take effect.
If using the ```auto-lite``` version, you might only need to import SmooScroll!

### manual
Versions with the ```manual``` suffix require you to manually wrap the content that needs smooth scrolling into the SmooScroll container (```<div class="smooth-content"></div>```). They are suitable for pages that have elements with a position fixed relative to the browser window (```position: fixed;```), such as fixed navigation bars, buttons, etc.
Don't worry about forgetting to add the wrapper. If you don't create it, SmooScroll will remind you when the page refreshes.

### lite
Versions with the ```lite``` suffix do not include SmooScroll's "Back to Top" button. If your page already has a "Back to Top" button and it still works perfectly after deploying the lite version, then you can confidently use the lite version.
If your "Back to Top" button stops working after using the lite version of SmooScroll, it is recommended to use a version without the ```lite``` suffix.

### Pseudo-sticky Effect
Note: This effect is currently experimental (v1.2.0).
The way SmooScroll works causes ```position: sticky;``` within the page to fail. Therefore, a feature that achieves a visually similar sticky effect has been added to implement a sticky positioning effect.
Currently, the pseudo-sticky feature only supports top attachment, and a page can have at most one pseudo-sticky element. However, this pseudo-sticky element can have an unlimited number of child elements.

---
# How to Use SmooScroll?
## I. Adding SmooScroll to Your Webpage
### Local Deployment
#### 1. Download SmooScroll and store it in your website directory.
#### 2. Import SmooScroll into your HTML file.
```html
<!-- Remember to replace the path and filename with your own path and the corresponding version's filename -->
<script src="your/path/to/smooscroll-1.2.0-auto-lite.min.js"></script>
```
⚠️ Please note the filename, as different versions will have different filenames.
## II. Configuring SmooScroll
>The ```auto-lite``` version of SmooScroll only requires importation to work (provided your page has no elements that need to be fixed relative to the window, including sticky elements). To use the ```manual``` version or non-```lite``` versions of SmooScroll, you need to make some necessary configurations.
### Create the Wrapper (Manual versions only)
In your HTML file, add ```<div class="smooth-content"></div>``` and wrap all content that needs to scroll inside this div. For example:
```html
<body>
    <!-- ↓↓↓ Elements that do NOT need to scroll ↓↓↓ -->
    <div class="topbar">
        <h1>Fixed Header</h1>
    </div>
    <!-- ↓↓↓ Create the wrapper and put scrollable content inside ↓↓↓ -->
    <div class="smooth-content">
        <!-- ↓↓↓ Elements that need to scroll ↓↓↓ -->
        <div class="article">
            <p>Content to be scrolled</p>
        </div>
    </div>
</body>
```
### Setting Up the Pseudo-sticky Effect (Manual versions only, v1.2.0+)
>If you have elements that need to be sticky at the top of the window (e.g., a top navigation bar), you can set up the pseudo-sticky effect.

The following HTML snippet will be used as an example. Assume ```<div class="topbar"></div>``` is the element that needs sticky positioning, **and its layout is ```display: flex;```**.
```html
<body>
    <div class="smooth-content">
        <div>Top Element</div>
        <div class="topbar"><!-- Top navigation bar, needs sticky positioning -->
            <a>Button 1</a>
            <a>Button 2</a>
        </div>
        <div class="article">
            <p>Main Content</p>
        </div>
    </div>
</body>
```
Locate the element that needs sticky positioning. Copy it and paste the copy outside the SmooScroll container. Add ```id="smoosticky"``` to the original element and ```id="smoosticker"``` to the copy.
```html
<body>
    <div class="smooth-content">
        <div>Top Element</div>
        <div class="topbar" id="smoosticky"><!-- Top navigation bar, needs sticky positioning -->
            <a>Button 1</a>
            <a>Button 2</a>
        </div>
        <div class="article">
            <p>Main Content</p>
        </div>
    </div>
    <div class="topbar" id="smoosticker"><!-- Copy of the top navigation bar -->
        <a>Button 1</a>
        <a>Button 2</a>
    </div>
</body>
```
Create and assign a custom class to the copy. Style this class to make the copy a ```position: fixed;``` element and adjust the CSS so that it completely overlaps the original (its z-index must be higher than the original's).
```html
<body>
    <div class="smooth-content">
        <div>Top Element</div>
        <div class="topbar" id="smoosticky"><!-- Top navigation bar, needs sticky positioning -->
            <a>Button 1</a>
            <a>Button 2</a>
        </div>
        <div class="article">
            <p>Main Content</p>
        </div>
    </div>
    <div class="topbar sticky-element" id="smoosticker"><!-- Copy of the top navigation bar -->
        <a>Button 1</a>
        <a>Button 2</a>
    </div>
    <style>
        .sticky-element {
            position: fixed;
        }
    </style>
</body>
```
In the SmooScroll file, find ```var stickyDisplay``` located under ```const config```. Change its assigned value to the layout of the original sticky element. In this example, the topbar's layout is ```display: flex;```.
```CSS
var stickyDisplay = "flex"; /* Please modify according to your situation */
```
This completes the setup of the pseudo-sticky effect.
From this example, you should understand the principle of this pseudo-sticky effect. It is quite simple: a fixed-position copy is pre-placed at the top of the window. When the window top starts to cover the sticky element, the original element is hidden, and the fixed copy is shown. When the original element fully re-enters the viewport from the top, the copy is hidden, and the original is shown.
Because this pseudo-sticky effect hides the original element by adjusting its opacity, the space it occupies does not disappear, thus not altering the page's original layout.
### Adjusting the Scrolling Effect (Applicable to all versions)
Modify the parameters within ```const config``` at the beginning of the SmooScroll file. Reference:
| Parameter | Default Value | Effect |
| :--- | :---: | :--- |
| scrollStepDuration | ```0.8``` | Duration for each step of the smooth scroll effect (in seconds) |
| bezier | ```.35 , .73 , .5 , 1``` | Bezier curve values for smooth scrolling (⚠️ If you don't know what this is, it's best to leave it unchanged) |

### Customizing the Back-to-Top Button Style (Non-lite versions only)
>⚠️ If the ```lite``` version is incompatible with your own "Back to Top" button, please switch to a non-```lite``` version and use SmooScroll's built-in button.

Modify the parameters within ```const config``` at the beginning of the SmooScroll file. Reference:
| Parameter | Default Value | Effect |
| :--- | :---: | :--- |
| buttonImage || Path to the button image |
| renderStyle | ```normal``` | If your button image is a pixel art image at its original size, change this to ```pixelated```. Otherwise, no change is needed. |
| buttonWidth | ```90px``` | Width of the button (To position proportionally to the viewport, you can change the unit from px to vw, i.e., viewport width, where 1vw = 1% of viewport width) |
| buttonHeight | ```90px``` | Height of the button. The unit can also be changed to vw. |
| positionRight | ```20px``` | Distance of the button from the right edge of the viewport. The unit can also be changed to vw. |
| positionBottom | ```20px``` | Distance of the button from the bottom edge of the viewport. The unit can also be changed to vw. |
| showAtPosition | ```80``` | Number of pixels scrolled before the "Back to Top" button appears |

### Pseudo-sticky Effect Parameters (Manual versions only, v1.2.0+)
| Parameter | Default Value | Effect |
| :--- | :---: | :--- |
| stickyDisplay | ```flex``` | Default display mode for the sticky element. Modify according to your sticky element's settings. |