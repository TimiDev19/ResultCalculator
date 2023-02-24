function show_result(){
    let re = document.querySelector("#re").value;
    let me = document.querySelector("#me").value;
    let ve = document.querySelector("#ve").value;
    let vi = document.querySelector("#vi").value;

    let to = parseFloat(re) + parseFloat(me) + parseFloat(ve) + parseFloat(vi)
    let per = (to/4)
    document.querySelector(".to").innerHTML = to;
    document.querySelector(".per").innerHTML = per;
    if(per >= 40){
        document.querySelector(".resulth2").innerHTML = "You Passed!"
    }
   if(per < 40){
        document.querySelector(".resulth2").innerHTML = "You Passed!"
   }
}