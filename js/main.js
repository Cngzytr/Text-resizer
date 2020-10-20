var textResize = {
textResizer:function(e) {
  
    let btn = document.querySelectorAll("#text-resize");
    let body = document.querySelectorAll("div[data-resizer] p");

    body.forEach(element => {
        element.style.fontSize = "17px";
        element.style.lineHeight = "1.6";
        var size = parseInt(element.style.fontSize);
        var lineHeight = parseInt(element.style.lineHeight) + 0.6;
        btn[0].addEventListener('click', function() {
            size = size - 1;
            lineHeight = lineHeight - 0.1;
            element.style.fontSize = size.toString() + "px";
            element.style.lineHeight = lineHeight.toString();
        })
        btn[1].addEventListener('click', function() {
            size = size + 1;
            lineHeight = lineHeight + 0.1;
            element.style.fontSize = size.toString() + "px";
            element.style.lineHeight = lineHeight.toString();
        })
    });
}  

}
textResize.textResizer({
    selector: '[data-resizer]'
});