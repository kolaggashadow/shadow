// 加载时运行一下代码
window.onload = function() {
    const continer = document.querySelector('.container');
    const image = document.querySelector('.image');
    const preview = document.querySelector('.preview');
    const menu = document.querySelector('.menu');
    


  // 初始状态下隐藏预览和菜单
    continer.style.backgroundImage="url(image/1.jpg)";
    preview.style.display = 'none';
    menu.style.display = 'none';


    // 鼠标悬停在图片上时显示预览和菜单
    image.addEventListener('click', function() {
        preview.style.display = 'block';
        menu.style.display = 'block';
        preview.style.backgroundImage="url(image/1.jpg)";
    });
    

    // 创建一个数组
    var imgs =["image/1.jpg", "image/2.jpg", "image/3.jpg","image/4.jpg"
    ,"image/5.jpg","image/6.jpg","image/7.jpg","image/8.jpg"]; 
    // 获取数组中的元素
    for(var i=0;i<=imgs.length;i++){

        // 创建一个li元素
        var li = document.createElement('li');
        li.className = 'item';
        menu.appendChild(li);
        li.style.backgroundImage = 'url(' + imgs[i] + ')';
        li.addEventListener('click', function() {
            preview.style.backgroundImage = this.style.backgroundImage;
        });
    }
    
   
    //  时间循环类型
    
    var i = 0;
    continer.style.background="url(image/1.jpg)   center center no-repeat";   
            function time(){
                   i++;   
                   i=i%imgs.length;         
                   continer.style.background="url("+imgs[i]+")   center center no-repeat";   
            }
            setInterval(time,10000);
  
// 判断预览窗口为不可见来进行点击事件
if(preview.style.display == 'none'){
    image.addEventListener('click', function() {
        if(preview.style.display == 'block'){
            image.id = 'qiaoba';
        }
    });
    
}

    

 // 鼠标离开图片时隐藏预览和菜单
 preview.addEventListener('mouseup', function() {
    continer.style.backgroundImage=this.style.backgroundImage;
    preview.style.display = 'none';
    menu.style.display = 'none';
    image.id = '';
});

// 获取窗口大小
const getWindowInfo = () => {
	const windowInfo = {
		width: window.innerWidth,
		hight: window.innerHeight
	}
	// console.log(windowInfo);
    var w= continer.style.width=windowInfo.width;
	var h=continer.style.height=windowInfo.hight;

};
window.addEventListener('resize', getWindowInfo);


    }
