// console.log(arrowTitle)
// /* START CODE UNDER THIS LINE */

const arr = [
  {
    name: "toshipa",
    img: "./images/toshipa.png",
    type: "laptop",
  },
  {
    name: "php",
    img: "./images/php.jpg",
    type: "laptop",
  },
  {
    name: "acer",
    img: "./images/acer.jpg",
    type: "laptop",
  },
  {
    name: "Dell",
    img: "./images/dell.jpg",
    type: "laptop",
  },
  /////////////////////////////
  {
    name: "samsung",
    img: "./images/samsungPhone.jpg",
    type: "phone",
  },
  {
    name: "iphone",
    img: "./images/iphone.jpg",
    type: "phone",
  },
  {
    name: "Huawei",
    img: "./images/huawei.jpg",
    type: "phone",
  },
  {
    name: "oppo",
    img: "./images/oppo.jpg",
    type: "phone",
  },
  /////////////////////////////
  {
    name: "mouse",
    img: "./images/mouse.jpg",
    type: "Accessories laptop",
  },
  {
    name: "hard disk",
    img: "./images/harddisk.jpg",
    type: "Accessories laptop",
  },
  {
    name: "keyboard",
    img: "./images/keyboard.jpg",
    type: "Accessories laptop",
  },
  {
    name: "headphones",
    img: "./images/headphones.jpg",
    type: "Accessories laptop",
  },
  /////////////////////////////
  {
    name: "Godzilla: King Of The Monsters",
    img: "./images/Godzilla King Of The Monsters.jpg",
    type: "movie",
  },
  {
    name: "Knives Out",
    img: "./images/Knives Out.png",
    type: "movie",
  },
  {
    name: "Bad Boys For Life",
    img: "./images/Bad Boys For Life.jpg",
    type: "movie",
  },
  {
    name: "Wolves",
    img: "./images/Wolves.png",
    type: "movie",
  },
];

const l1 = $("#l1"); //لا ظهار محتويات اللاب توب
const l2 = $("#l2"); //لاظهار محتويات التلفونات
const l3 = $("#l3"); //لاظهار محتويات اكسسوارات اللاب توب
const l4 = $("#l4"); //لاظهار محتويات افلام

for (let i = 0; i < arr.length; i++) {
  if (arr[i].type === "laptop") {
    l1.append(`<h2>${arr[i].name}</h2>
    <img src="${arr[i].img}"/>`);
  }
}

//for loop in arr
//arr
//for(let i =0;i<arr.length,i++){
// dynamic add name and img in arr{
//using append to view content obj body.append(paragraph)
//}

//show / hide
//the first show tosipa and hide php using onclick=click
// on hover change the color to red
/*

//replace mouseover > click
listItems.on("mouseover", function () {
  // $(this) refers to the element it self, to have the correct reference use ES5
  $(this).css("color", "red");
  console.log("color has been changed");
});*/
//.show() header.show();
//.hide() header.hide();
