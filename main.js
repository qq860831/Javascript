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
