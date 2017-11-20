window.onload = function () {
    document.getElementById("anniu").onclick = function () {
        main();
    };
};

function main() {
    let sum = calc1()+calc2()+calc3()+calc4()+calc5();
    let res = document.getElementsByName("name").value + '本次测验的得分是：' + sum.toString() + "分";
    alert(res);
}

function calc1() {
    let sum = 0;
    if(document.getElementById("first1").value === "统一建模语言"){
        sum += 5;
    }
    if(document.getElementById("first2").value === "封装性"){
        sum += 5;
    }
    if(document.getElementById("first3").value === "继承性"){
        sum += 5;
    }
    if(document.getElementById("first4").value === "多态性"){
        sum += 5;
    }
    return sum;
}

function calc2() {
    let sum = 0;
    if (document.getElementsByName("a")[1].checked === true){
        sum +=10;
    }
    if (document.getElementsByName("b")[0].checked === true){
        sum +=10;
    }
    return sum;
}

function calc3() {
    let sum = 0;
    let checkboxlist = document.getElementById("disanti").getElementsByTagName("input");
    if (checkboxlist[0].checked === true && checkboxlist[1].checked === true && checkboxlist[2].checked===false && checkboxlist[3].checked===true){
        sum += 10;
    }
    if (checkboxlist[4].checked === true && checkboxlist[5].checked === true && checkboxlist[6].checked===true && checkboxlist[7].checked===false){
        sum += 10;
    }
    return sum;
}

function calc4() {
    let sum = 0;
    if(document.getElementById("fouth1").checked === false){
        sum += 10;
    }
    if(document.getElementById("fouth2").checked === true){
        sum += 10;
    }
}

function calc5() {
    let sum = 0;
    const str = '模型是对现实世界是简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。';
    if(document.getElementById("fifth1").value = str){
        sum += 20;
    }
    return sum;
}


