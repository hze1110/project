function animate(obj,target){
    clearInterval(obj.timer);
    var speed=target>obj.offsetLeft? 50 : -50;
    obj.timer=setInterval(function(){
        var result=target-obj.offsetLeft;
        obj.style.left=obj.offsetLeft+speed+"px";
        if(Math.abs(result)<=100){
            clearInterval(obj.timer);
            obj.style.left=target+"px";
        }
    },10);
       
}  

    

window.onload=function(){
   var slider=document.getElementById("_slider");
   var ul=slider.children[0];
    var ulLis=ul.children;
    ul.appendChild(ulLis[0].cloneNode(true));
    var ol=document.createElement('ol');
    slider.appendChild(ol);
    for(var i=0; i<ulLis.length-1;i++){
        var li=document.createElement('li');
        li.innerHTML=i+1;
        ol.appendChild(li);
    }
    ol.children[0].className="current";
    var olLis=ol.children;

    for(var i=0; i<olLis.length; i++){
        olLis[i].index=i;
        olLis[i].onmouseover=function(){
            for(var j=0; j<olLis.length; j++){
                olLis[j].className="";

            }
            this.className="current";
            animate(ul,-(this.index)*730);
            // console.log(i);
            key=span=this.index;
        }
    }
    
    
   

   

    var key=0,timer=null;
    var span=0;
    timer=setInterval(fn,1500);
    function fn(){
        key++;
        //console.log(key);

        if(key>ulLis.length-1){
       // console.log(key);
           //clearInterval(timer);
           console.log(key);
           ul.style.left=0;
            key=1;
        }
        animate(ul,-730*key);

        span++;
        if(span>olLis.length-1){
            span=0;
        }
        for(var i=0; i<olLis.length; i++){
          olLis[i].className="";

        }
        olLis[span].className="current";
            
        
    }
    
   
    slider.onmouseover=function(){
        clearInterval(timer);
    }
    slider.onmouseout=function(){
        timer=setInterval(fn,1500);
    }
    
}