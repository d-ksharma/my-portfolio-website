function circlemove(){
    window.addEventListener("mouseover",function(details){
        document.querySelector("#minicircle").style.transform=`translate(${details.clientX}px,${details.clientY}px)`;
    })
}
circlemove();