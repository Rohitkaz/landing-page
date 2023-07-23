 var image=document.getElementById("image");
 function imgchange1(){
    image.src="maldives.jpg";
 }
 function imgchange2(){
    image.src="hawaii.jpg";
 }
 function imgchange3(){
    image.src="japan.jpg";
 }
 function btndisplay(){
    var obj=document.getElementById("btnbox");
    var obj2=document.getElementById("button");
     var styles={
        display:'flex'
     };
     Object.assign(obj.style,styles);
     var styles1={
        display:'none'
     };
     Object.assign(obj2.style,styles1);

    }

    
 