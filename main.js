
// ========================================================TIMER==================================================
// ===================1=======================
// function printMyName() {
//     console.log("ysfit");
// }
// window.setInterval(()=>{printMyName()},3000)
// ===================1=======================
// function printMyLastName() {
//    alert("samuel");
// }
// window.setInterval(()=>{printMyLastName()},4000)

// ===================3=======================
// function printMyFullName() {
//     document.write("yafitsamuel");
//  }
//  window.setInterval(()=>{printMyFullName()},2000)
// ===================4=======================
// var counetr=0
//  function printMyFullName() {
//         document.write("yafitsamuel:"+counetr);
//         counetr++
//      }
//      window.setInterval(()=>{printMyFullName()},1000)

// ===================5=======================

// function printp() {
//     document.write(`<p>yafittttt</p>`);
//     }
//     window.setInterval(()=>{printp() },2000)

// ===================6=======================

//   function printpid() {
//         document.write(`<p id="pid">yafit</p>`);
//         }
//         window.setInterval(()=>{printpid()},2000)

// ===================7=======================

// function printp() {
//     document.write(`<div>njsxkcd</div>`);
//     }
//     window.setInterval(()=>{printp() },2000)

// ===================8=======================

// function printp() {
//     document.write(`<div><p id"as">hjbjbjh</p></div>`);
//     }
//     window.setInterval(()=>{printp() },2000)

// ===================9=======================

// function print() {
//     var counetr=0
//     var intervalId = window.setInterval(() => {  document.write(counetr++); 
//     if (counetr == 7) {
//         clearInterval(intervalId)
//     }
// }, 1000)
// }
// print()

// ===================10=======================

// function printElenent() {
//     console.log('yafit');
// }
// window.setTimeout(() => { printElenent() }, 4000)


// ===================11=======================


// function printMyLastName() {
//     alert('samuel');
// }
// window.printMyLastName(() => { printElenent() }, 3000)


// ===================12=======================
// function fullName() {
//     document.write('yafitsamuel');
// }
// window.fullName(() => { printElenent() }, 2000)

//   ===================13=======================
// function fullName() {
//     alert('yafitsamuel');
// }
//  var y= window.setTimeout(() => { fullName() }, 4000)

// btnstop.onclick = () => {

//     clearTimeout(y)
// }

// // ===================14=======================





// // ===================15=======================
// div5
// btnstop
// btnplay
// div6

// var size = 0;
// var width = 0;
// var size = 0;
// var hight = 0;
// var x;

// btnplay.onclick = () => {
//     x = window.setInterval(() => {
//         div5.style.left = `${size++}px`
//         if (size > 70) {
//             clearInterval(x)
//             x = window.setInterval(() => {
//                 div5.style.top = `${hight++}px`
//                 if (hight > 70) {
//                     clearInterval(x)

//                 }
//             }, 50)
//         }
//     }, 50)
// }
// btnstop.onclick = () => {
//     clearInterval(x)
// }

// ===================16=======================
// 16.	צרו אלמנט של טקסט, שהטקסט "hello timers" מופיע בו אות אחר אות
// var print = "hello timers"
// var len = print.length - 1
// var counter = 0;
// function printpid() {
//     document.write(`${print[counter++]}`);
// }
//    window.setInterval(() => { printpid() }, 2000)
// if(len>counter){
//    clearInterval( window.setInterval(() => { printpid() }, 2000))
// }

// ===================17=======================

// window.setInterval(() => {
//     var dateOb = new Date();
//     divTime.innerHTML = `${dateOb.getHours()}:${dateOb.getMinutes()}:${dateOb.getSeconds()}`
//     divTime.style.color = "red";


// }, 1000)


// =============================================תרגיל animation=============================================


// ============================================1==========================================
// 1.	הוסיפו כפתור שמזיז את האלמנט הקטן חזרה שמאלה.
// var move=0;
// bi.onclick=()=>{

//     window.setInterval(()=>{
//         po.style.left=`${move++}px`
//     },50)

// }
// ============================================2============================================


// 2.	צרו מערך של תמונות.
// 3.	צרו סליידר שהתמונות בו מתחלפות כל 2 שניות בצורה אוטומטית.
// 4.	צרו כפתור "next" שמביא את התמונה הבאה וכפתור "previous" לתמונה הקודמת.

var images = document.getElementById("images")
var next = document.getElementById("next")
var bifor = document.getElementById("bifor")

var arrayimg = [
    "https://cdn.pixabay.com/photo/2017/07/07/04/09/girl-2480361__340.jpg",
    "https://cdn.pixabay.com/photo/2017/08/06/09/52/black-and-white-2590810__340.jpg",
    "https://cdn.pixabay.com/photo/2016/02/11/19/14/couple-1194312__340.jpg",
    "https://cdn.pixabay.com/photo/2018/01/24/19/49/people-3104635__480.jpg",
   " https://cdn.pixabay.com/photo/2015/11/07/11/01/couple-1030744__480.jpg"
]

// ============================================3============================================

// 3.	צרו סליידר שהתמונות בו מתחלפות כל 2 שניות בצורה אוטומטית.

let index =0;

function img() {
    images.src= arrayimg[index];
    images.src=(arrayimg[index++] );
 
    if(index==arrayimg.length){
        index=0;
        }
}
var x =window.setInterval(()=>{img()},2000)

 

// ============================================4============================================

// 4.	צרו כפתור "next" שמביא את התמונה הבאה וכפתור "previous" לתמונה הקודמת.
//  index=0;
// images.src= arrayimg[index];

// next.onclick=()=>{
//     images.src= arrayimg[index++]


//     if(index==arrayimg.length){
//         index=0;
//         }
// }

// bifor.onclick=()=>{
//     images.src= arrayimg[index--]
// }
    
// ============================================5============================================

// 5.	צרו כפתור שמתחיל את המעברים וכפתור שעוצר את המעברים.

// var nextb = document.getElementById("nextb")
// var stopb = document.getElementById("stopb")

// stopb.onclick=()=>{
//     clearInterval(x)
// }
// nextb.onclick=()=>{
//     window.setInterval(()=>{img()},2000)
// }


// / ============================================6============================================

// 6.	צרו כפתור שמשנה את סוג האנימציה במעברים.

// var anim = document.getElementById("anim")
// var move=0;
// anim.onclick=()=>{
//     index.style.left=`${move++}px`
//     window.setInterval(()=>{img()},2000)
// }
   
// ============================================7==============================================
            
































// ===============15=תשובה של יונתן====================

// var text="hello timers"
// var i=(text.length)-1
// var a=0;
// function helloTime(){
// document.write(text[a])
// console.log(text[a]);
//  a++

// }
//  var stopWord =window.setInterval(()=>{
//     helloTime();
//     if (a>i) {
//        window.clearInterval(stopWord)
//     }
// },1000)
// From Yonatan Tagania to Everyone:  09:48 AM
// var move = 0;

// function moveBox() {
//     intervalId = setInterval(() => {
//         boxDiv.style.left = `${move++}px`
//         if (move > 150) {
//             clearMove();
//             move = 0;
//             intervalId = setInterval(() => {
//                 boxDiv.style.top = `${move++}px`
//                 if (move > 150) {
//                     clearMove();
//                     move = 150;
//                     intervalId = setInterval(() => {
//                         boxDiv.style.left = `${move--}px`
//                         if (move < 0) {
//                             clearMove();
//                             move = 150;
//                             intervalId = setInterval(() => {
//                                 boxDiv.style.top = `${move--}px`
//                                 if (move < 0) {
//                                     clearMove();
//                                 }
//                             })
//                         }
//                     }, 3)
//                 }
//             }, 3)
//         }
//     }, 3)
// }
// moveBox();
