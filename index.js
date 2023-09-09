var imgs = document.getElementsByTagName("img");
for (var i = 0; i < imgs.length; i++ ) {
    img = imgs[i];
    realWidth = img.naturalWidth;
    realHeight = img.naturalHeight;
    img.style.width = realWidth / 20;
    img.style.height = realHeight / 20;
}