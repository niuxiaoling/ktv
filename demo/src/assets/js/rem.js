
window.addEventListener('load',function(){
    // 移动端设计尺寸
    var dh=750;
    function resize(){
        var cw=document.documentElement.clientWidth;
        var bili=cw/dh*100;
        document.documentElement.style.fontSize=bili+"px";
    }
    window.addEventListener('resize',resize);
    resize();

},false);



