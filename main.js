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

// view all content in laptop
for (let i = 0; i < arr.length; i++) {
  //return all obj type laptop name + img
  if (arr[i].type === "laptop") {
    l1.append(`<h2>${arr[i].name}</h2>
    <img src="${arr[i].img}"/>`);
  }
}
// view all content in phone
for (let i = 0; i < arr.length; i++) {
  //return all obj type phone name + img
  if (arr[i].type === "phone") {
    l2.append(`<h2>${arr[i].name}</h2>
    <img src="${arr[i].img}"/>`);
  }
}
// view all content in Accessories laptop
for (let i = 0; i < arr.length; i++) {
  //return all obj type Accessories laptop name + img
  if (arr[i].type === "Accessories laptop") {
    l3.append(`<h2>${arr[i].name}</h2>
    <img src="${arr[i].img}"/>`);
  }
}
// view all content in movie
for (let i = 0; i < arr.length; i++) {
  //return all obj type movie laptop name + img
  if (arr[i].type === "movie") {
    l4.append(`<h2>${arr[i].name}</h2>
    <img src="${arr[i].img}"/>`);
  }
}
// selecting the elements with the `listItem` class
const lap1 = $("#lap1");
const pho1 = $("#pho1");
const AccLab = $("#AccLab");
const mov = $("#mov");
const home = $("#home");
// if click in lap1 show all content laptope and Hide the rest of the sections
lap1.on("click", () => {
  l1.show();
  l2.hide();
  l3.hide();
  l4.hide();
});
// if click in phone show all content phone and Hide the rest of the sections
pho1.on("click", () => {
  l2.show();
  l1.hide();
  l3.hide();
  l4.hide();
});
// if click in Accessories laptop show all content Accessories laptop and Hide the rest of the sections
AccLab.on("click", () => {
  l3.show();
  l1.hide();
  l2.hide();
  l4.hide();
});
// if click in movie show all content movie and Hide the rest of the sections
mov.on("click", () => {
  l4.show();
  l1.hide();
  l2.hide();
  l3.hide();
});
// if click in home show all department
home.on("click", () => {
  l1.show();
  l2.show();
  l3.show();
  l4.show();
});
const content = $(".content");
content.css({
  "font-size": "50px",
  color: "red",
  display: "flex",
  "flex-wrap": "wrap",
});
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
