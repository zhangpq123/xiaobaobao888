// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("给你洗内衣");
	   }else if(Dianji==2){
		   		alert("家务全包");
		   		
	   }else if(Dianji==3){
		   		alert("房产证写你的名字");
		   		
	   }else if(Dianji==4){
		   		alert("不要嘛");
		   		
	  }else if(Dianji==5){
		   		alert("不藏私房钱");
	  }else if(Dianji==6){
		   		alert("你给囤好多好吃的");
	  }else if(Dianji==7){
		   		alert("工资全上交");
		  		Dianji=1;
	  }else if(Dianji==8){
	   			alert("给你做饭饭吃");
	   }

	}
	hao.onclick=function(){
		alert("真的吗？你答应了？");
                                alert("略略略，谁让你答应啦！哼！");
	}
	

}