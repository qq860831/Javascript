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

