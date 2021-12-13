function setBGC(){
	var x=prompt("请输入6位颜色代码")
	var BGC
	if(x!=null && x!=""){
		BGC="#"+x 
		document.getElementById("imgBg").style.background = BGC 
	}
}
