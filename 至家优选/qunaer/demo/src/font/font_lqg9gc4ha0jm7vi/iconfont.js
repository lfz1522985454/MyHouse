(function(window){var svgSprite='<svg><symbol id="icon-sousuo" viewBox="0 0 1000 1000"><path d="M941.2204 854.4087 729.1415 637.7506c-3.5038-3.5796-7.5302-6.2927-11.8265-8.1565 45.562-61.1346 72.6167-137.4528 72.6167-220.2407 0-200.9657-159.4115-363.8363-356.0642-363.8363C237.2159 45.5171 77.8104 208.3887 77.8104 409.3535c0 200.9697 159.4055 363.8373 356.0582 363.8373 90.2555 0 172.664-34.3107 235.419-90.8634 1.7369 3.4746 4.0194 6.7354 6.8626 9.6405l212.0269 216.6571c14.6197 14.9419 38.3716 14.9419 53.0432 0C955.8401 893.6831 955.8401 869.3496 941.2204 854.4087zM433.8686 715.7717c-165.5905 0-299.865-137.2-299.865-306.4182 0-169.2702 134.2735-306.4123 299.865-306.4123 165.5965 0 299.865 137.142 299.865 306.4123C733.7336 578.5717 599.4641 715.7717 433.8686 715.7717z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)