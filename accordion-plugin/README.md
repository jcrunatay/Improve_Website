# jQuery serialtabs - Responsive tabs to accordion

## About jQuery serialtabs
As tabs are usually too large to be displayed on mobile, this plugin provides an easy way to switch from tabs layout to accordion layout based on an autodetection (tabs width). Note that jQuery serialtabs is shared for inspirational and development purpose.


## Demonstration
See the [project page](https://github.meunierkevin.com/jquery-serialtabs/) for a demonstration.


## Compatibility
jQuery serialtabs has been tested in: IE, Edge, Chrome (mobile included), Firefox (mobile included), and Safari (mobile included).


## Self-Hosted
[Download](https://github.com/kevinmeunier/jquery-serialtabs/archive/master.zip) and save one of two available files to include serialtabs to your page, either the [development](https://github.com/kevinmeunier/jquery-serialtabs/blob/main/dist/jquery.serialtabs.js) or the [minified](https://github.com/kevinmeunier/jquery-serialtabs/blob/main/dist/jquery.serialtabs.min.js) version. Also, you can visit the [project page](https://github.meunierkevin.com/jquery-serialtabs/) to copy what you need.
```HTML
<script src="jquery.serialtabs.min.js"></script>
<link href="jquery.serialtabs.css" rel="stylesheet">
```
Due to the lightweight CSS code, it's recommended to copy/paste the CSS code into your general stylesheet.

Make sure [jQuery](http://jquery.com) is properly loaded before using jQuery serialtabs. 


## Basic Usage
The basic usage of serialtabs is pretty easy, just start using jQuery serialtabs by calling it after page load. It works form radio, checkbox, and select.
```HTML
<ul class="serialtabs-nav">
  <li data-serialtabs="#tabs-nav-1">Section 1</li>
  <li data-serialtabs="#tabs-nav-2">Section 2</li>
  <li data-serialtabs="#tabs-nav-3">Section 3</li>
</ul>
<div id="tabs-nav-1">Section 1</div>
<div id="tabs-nav-1">Section 2</div>
<div id="tabs-nav-3">Section 3</div>
```
```JS
$(document).ready(function(){
  // jquery.serialtabs initialisation
  $('.serialtabs-nav').serialtabs();
});
```

  
## Configuration Parameters
The following configurations is available by default:

Name               | Type       | Default                             | Description
------------------ | ---------- | ----------------------------------- | -----------
mode               | *string*   | *'click'*                           | 'auto' for autodetection, 'tabs to force tabs mode, and 'accordion' to force accordion mode
event              | *string*   | *'click'*                           | Event to display the target
getTrigger         | *function* | See [jquery.serialtabs.js](https://github.com/kevinmeunier/jquery-serialtabs/blob/main/dist/jquery.serialtabs.js) | Get the trigger element based on the list
getTarget          | *function* | See [jquery.serialtabs.js](https://github.com/kevinmeunier/jquery-serialtabs/blob/main/dist/jquery.serialtabs.js) | Get the target element based on the trigger element
fxIn               | *string*   | *'slideDown'*                       | Show animation based on jQuery (additional options: fadeIn, show)
fxOut              | *string*   | *'slideUp'*                         | Hide animation based on jQuery (additional options: fadeOut, hide)


## Bugs / Feature request
Please [report](http://github.com/kevinmeunier/jquery-serialtabs/issues) bugs and feel free to [ask](http://github.com/kevinmeunier/jquery-serialtabs/issues) for new features directly on GitHub.


## License
jQuery serialtabs is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php) license.
