function init(){

    var canvas = document.getElementById("canvas")
    if(canvas.getContext){

        var ctx = canvas.getContext("2d")
		ctx.lineWidth=15;
		
		//Mere stiilid
		
		ctx.fillStyle="#09F";
		ctx.strokeStyle="#09F";
		ctx.lineCap = "round";

        //meri

        ctx.beginPath();
		ctx.moveTo(0,300);
		ctx.quadraticCurveTo(0,500,300,500);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(500,300);
		ctx.quadraticCurveTo(200,500,100,500);
		ctx.stroke();

        //Stiilid päikese ja selle kiirte jaoks
		
		ctx.fillStyle="#FF0";
		ctx.strokeStyle="#FF0";
		
		
		//Päike
		
		ctx.beginPath();
		ctx.arc(900,100,50,0,Math.PI/180,true);
		ctx.stroke();
		ctx.fill();
		
		//Päikesekiired
		
		ctx.beginPath();
		ctx.moveTo(900,50);
		ctx.lineTo(900,5);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(900,150);
		ctx.lineTo(900,195);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(850,100);
		ctx.lineTo(805,100);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(950,100);
		ctx.lineTo(995,100);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(900,100);
		ctx.lineTo(965,35);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(900,100);
		ctx.lineTo(965,175);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(900,100);
		ctx.lineTo(835,175);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(900,100);
		ctx.lineTo(835,35);
		ctx.stroke();
    }
}


onload=init;
