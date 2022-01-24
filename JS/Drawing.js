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
		ctx.moveTo(0,500);
		ctx.quadraticCurveTo(100,600,200,500);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(200,500);
		ctx.quadraticCurveTo(300,600,400,500);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(400,500);
		ctx.quadraticCurveTo(500,600,600,500);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(600,500);
		ctx.quadraticCurveTo(700,600,800,500);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(800,500);
		ctx.quadraticCurveTo(900,600,1000,500);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(1000,500);
		ctx.quadraticCurveTo(1100,600,1200,500);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(1200,500);
		ctx.quadraticCurveTo(1300,600,1400,500);
		ctx.stroke();

		//päikse stiilid

		ctx.fillStyle="#FF0";
		ctx.strokeStyle="#FF0";

		//päike

		ctx.beginPath();
		ctx.arc(900,100,50,0,Math.PI/180,true);
		ctx.stroke();
		ctx.fill();

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
