var number =5;

function eleMaker (name,val){
    var ele = document.createElement("div");
    ele.innerHTML=name;
    ele.addEventListener("click", function () {
        increase(val);
    })
    document.body.querySelector(".main").appendChild(ele);
}

function increase (val){
    number=number+val;
    document.body.querySelector(".number").innerHTML=number;
}

document.body.querySelector(".clicker").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML="";
    eleMaker("kariem", 2);
    eleMaker("is",3);
    eleMaker("great",5);
});

document.body.querySelector(".clicker2").addEventListener("click",function () {
    document.body.querySelector(".main").innerHTML="";
    eleMaker("lol",1);
    eleMaker(":))",2);
    eleMaker("great",4);
});