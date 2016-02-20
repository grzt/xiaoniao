window.onload=function(){
	var bird={
		x:140,
		y:284,
		w:40,
		h:40,

	}

var guandao=[
{
   top:{ x:300,y:0,w:80,h:300},
   bottom:{x:300,y:380,w:80,h:188}
},{
	top:{x:510,y:0,w:80,h:300},

	bottom:{x:180,y:370,w:80,h:300}
}
]
	


	var canvas=document.querySelector('#canvas');
	var ctx=canvas.getContext('2d');
	 var r;
    //var a=1;
	var draw=function(){
		bird.y+=1;
		ctx.clearRect(0,0,320,600);
		/*a+=0.05;
		bird.y+=a*a;*/
		ctx.fillRect(bird.x,bird.y,bird.w,bird.h);

// 检测矩形之间的碰撞 
   var recvsrec =  function(rect0,rect1){ 
     if (rect0.x >= rect1.x && rect0.x >= rect1.x + rect1.w) { 
       return false; 
     } else if (rect0.x <= rect1.x && rect0.x + rect0.w <= rect1.x) { 
       return false; 
     } else if (rect0.y >= rect1.y && rect0.y >= rect1.y + rect1.h) { 
       return false; 
     } else if (rect0.y <= rect1.y && rect0.y + rect0.h <= rect1.y) { 
       return false; 
     } 
     return true; 
   }; 

        //管道
        var vs;
        for (var i = 0; i < guandao.length; i++) {
        var d=guandao[i];
        d.top.x-=3;
        d.bottom.x-=3;
        /*if (d.x<=0) {
           d.x=320;
        }*/
ctx.fillRect(d.top.x,d.top.y,d.top.w,d.top.h);
ctx.fillRect(d.bottom.x,d.bottom.y,d.bottom.w,d.bottom.h);
if (recvsrec(bird,d.top)||recvsrec(bird,d.bottom)) {
   vs=true;
}
if (d.top.x<=-d.top.w) {
   d.top.x=320;
   d.bottom.x=320;
   d.top.h=Math.random()*390+10;
   d.bottom.y=d.top.h+120;
   d.bottom.h=568-d.top.h-120;
}

   }
        if (vs) {
	return;
}
      
		//ctx.fillRect(guandao.x,guandao.y,guandao.w,guandao.h);


		if (bird.y>=568-40) {
			//cancelAnimationFrame(r);
			//ctx.fillRect(0,0,bird.w,bird.h);
			//return;
			ctx.fillRect(140,528,bird.w,bird.h);
		}else if(bird.y<0){
           ctx.fillRect(bird.x,0,bird.w,bird.h);
		}else{
			window.requestAnimationFrame(draw);
		}

		//r=requestAnimationFrame(draw);
		/*ctx.clearRect(0,0,320,600);
		ctx.fillRect(bird.x,bird.y,bird.w,bird.h);*/
		//requestAnimationFrame(draw);
	}
	
	canvas.onclick=function(){
    bird.y-=10;
}
requestAnimationFrame(draw);



}
