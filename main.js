console.log("hello")

// DOM 文件物件模式
// 文件.透過ID搜尋元素("元素名稱").插入HTML="文字訊息";
document.getElementById("box1").innerHTML="哈囉";


// 變數 variable
// 用於儲存資料
// 資料類型
var a= 10;     //整數
var b= 1.5;    //浮點數
var c= "文字"  //字串
var d= true   //布林值 true 是、false 否


// 運算子
// 數學運算:+ - * / %(加減乘除餘)
// 程式的=指定符號
// =右邊先執行再指定給左邊
a =a+3;
console.log(a);

// ++遞增1  --遞減1
var e = 7;
e++;
console.log(e);

// ES6 指定符號
var f = 5;
f= f**3;
console.log(f);

// 指定運算子 適用於+ - * / % **
var numl= 10;
// numl=numl+5;
numl**=5;
console.log("指定運算子:"+numl);

//自訂函式(方法) function、method
//語法:
//函式 函式名稱(參數1、參數2){程式內容}
function functionA(){
    console.log("我是函式 A");
}

// 需要呼叫才能執行
functionA();

function addTen(number){
    number+= 10;
    console.log("加十:"+number);
}

addTen(7);
addTen(100);

function mul(a,b){
    console.log("數字相乘的結果:"+(a*b));
}
mul(99,7);

//物件 {物件資料名稱:物件資料庫}
var car={
    brand:"BMW",
    cc:2000,
    color:"gold",
    drive:function() {
        console.log("開車中...");
    }
}

console.log("汽車的牌子:"+car.brand);

car.drive();

// 練習事件
var box2= document.getElementById("box2");
box2.onclick= ()=> {
    console.log("點擊");
}

box2.onmouseenter= ()=> {
    console.log("滑入");
}

box2.onmouseleave= ()=> {
    console.log("滑出");
}

// 陣列 Array

var numberA=10;
var numberB=100;
var numberC=30;

var numberObject={
    A:10,
    B:100,
    C:30
}

// 陣列資料
var numbers=[10,100,30,4];
console.log("陣列第三筆資料:"+numbers[2]);
numbers[0]=999;
console.log("陣列第一筆資料:"+numbers[0]);
console.log("陣列的數量:"+numbers.length);

// 比較運算子 > < >= <= == !=
var testA=100;
var testB=50;
console.log(testA !=testB);

// == ===差異
var testC=7;
var testD="7";

console.log("==的結果:"+(testC==testD));  //比較值
console.log("===的結果:"+(testC===testD)); //比較值與類型

var testE= true;
console.log("顛倒:"+!testE);

//並且&&
//只要有一個false結果就是false
console.log(true&&true);  //t
console.log(true&&false);  //f
console.log(false&&true);  //f
console.log(false&&false);  //f

//或者
// 只要有一個true結果就是true
console.log(true||true);  //t
console.log(true||false);  //t
console.log(false||true);  //t
console.log(false||false);  //f

// 判斷式
// 語法Syntax
// if(布林值) {當布林值為true會執行}
if(true){
   console.log("我是判斷式~"); 
}

// else 否則
// if(布林值) {當布林值為true會執行}
// else{當布林值為false會執行}

var boolTest = true;

if (boolTest) {
    console.log("布林值為true")
} else {
    console.log("布林值為false")
}

// 如果 分數>=60 :及格
// 如果 分數>=40 :補考
// 如果 分數 :被當
var score=document.getElementById("score");
var result=document.getElementById("result");

score.onchange=()=> {
    var s =parseInt(score.value); //parseInt取整數

    if(s>=60){
        result.innerText="分數:"+s+"-及格";
    }
    else if(s>=40){
        result.innerText="分數:"+s+"-補考";
    }
    else{
        result.innerText="分數:"+s+"-被當";
    }
}
// if一定要放第一個；else則要放最後一個；else if則可以在中間放無限多個


// 迴圈 for
// for(初始值； 條件-布林值； 迭代器-迴圈結束會執行的區塊){}

// 初始值:迴圈開始的值
// 條件:迴圈會執行的條件-當條件為true執行，false結束迴圈
// 迭代器:初始值處理-遞增++
for (let i = 0; i < 50; i++) {
    console.log("迴圈:"+i);   
}

// 陣列
var products=["冰美式" ,"冰紅茶", "冰奶茶"];
// products.length 陣列.長度(數量) 3

for(let i=0;i<products.length;i++){
    console.log(products[i]);
}
// getElementsByClassName: 透過類別取得複數元素 - 結果為陣列
var ps =document.getElementsByClassName("product");

console.log(ps);

for (let i = 0; i < ps.length; i++) {
    ps[i].innerText=products[i];
}

// 常數 const constant
// 不能變更
const pi=3.14159;

// pi=4.123546;
// pi=pi+10;

// let&var的差異
// let在同樣的區塊內不能重複-安全
// let只在區塊內有效  ex:{console.log(countA)}
var countA=10;
var countA=7;
// let countA=5; //重複瀏覽器顯示錯誤
{
    let countA=5;
    console.log(countA);
}
console.log(countA);

var countB=99;

{
    var countB=77;
}
console.log(countB);

let countC=99;

{
    let countC=77;
}
console.log(countC);