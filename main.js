// console.log(arrowTitle)
// /* START CODE UNDER THIS LINE */

const arr = [
  {
    name: "toshipa",
    img: "./images/toshipa.png",
    price: "200JD",
    type: "laptop",
  },
  {
    name: "php",
    img: "./images/php.jpg",
    price: "200JD",
    type: "laptop",
  },
  {
    name: "acer",
    img: "./images/acer.jpg",
    price: "200JD",
    type: "laptop",
  },
  {
    name: "Dell",
    img: "./images/dell.jpg",
    price: "200JD",
    type: "laptop",
  },
  /////////////////////////////
  {
    name: "samsung",
    img: "./images/samsungPhone.jpg",
    price: "200JD",
    type: "phone",
  },
  {
    name: "iphone",
    img: "./images/iphone.jpg",
    price: "200JD",
    type: "phone",
  },
  {
    name: "Huawei",
    img: "./images/huawei.jpg",
    price: "200JD",
    type: "phone",
  },
  {
    name: "oppo",
    img: "./images/oppo.jpg",
    price: "200JD",
    type: "phone",
  },
  /////////////////////////////
  {
    name: "mouse",
    img: "./images/mouse.jpg",
    price: "200JD",
    type: "Accessories laptop",
  },
  {
    name: "hard disk",
    img: "./images/harddisk.jpg",
    price: "200JD",
    type: "Accessories laptop",
  },
  {
    name: "keyboard",
    img: "./images/keyboard.jpg",
    price: "200JD",
    type: "Accessories laptop",
  },
  {
    name: "headphones",
    img: "./images/headphones.jpg",
    price: "200JD",
    type: "Accessories laptop",
  },
  /////////////////////////////
  {
    name: "Godzilla: King Of The Monsters",
    price: "200JD",
    img: "./images/Godzilla King Of The Monsters.jpg",
    type: "movie",
  },
  {
    name: "Knives Out",
    img: "./images/Knives Out.png",
    price: "200JD",
    type: "movie",
  },
  {
    name: "Bad Boys For Life",
    img: "./images/Bad Boys For Life.jpg",
    price: "200JD",
    type: "movie",
  },
  {
    name: "Wolves",
    img: "./images/Wolves.png",
    price: "200JD",
    type: "movie",
  },
];

const l1 = $("#l1"); //لا ظهار محتويات اللاب توب
const l2 = $("#l2"); //لاظهار محتويات التلفونات
const l3 = $("#l3"); //لاظهار محتويات اكسسوارات اللاب توب
const l4 = $("#l4"); //لاظهار محتويات افلام

const p1 = $("#p1"); //لا ظهار محتويات اللاب توب
const p2 = $("#p2"); //لاظهار محتويات التلفونات
const p3 = $("#p3"); //لاظهار محتويات اكسسوارات اللاب توب
const p4 = $("#p4"); //لاظهار محتويات افلام
// view all content in laptop
for (let i = 0; i < arr.length; i++) {
  //return all obj type laptop name + img
  if (arr[i].type === "laptop") {
    l1.append(`<div class="as"><h2>${arr[i].name}</h2>
    <img src="${arr[i].img}"/>
    <h4>${arr[i].price}</h4>
    <button> add to card</button>
    <button> details</button>
    </div>`);
  }
}
// view all content in phone
for (let i = 0; i < arr.length; i++) {
  //return all obj type phone name + img
  if (arr[i].type === "phone") {
    l2.append(`<div><h2>${arr[i].name}</h2>
    <img src="${arr[i].img}"/>
    <h4>${arr[i].price}</h4>
    <button> add to card</button>
    <button> details</button>
    </div>`);
  }
}
// view all content in Accessories laptop
for (let i = 0; i < arr.length; i++) {
  //return all obj type Accessories laptop name + img
  if (arr[i].type === "Accessories laptop") {
    l3.append(`<div><h2>${arr[i].name}</h2>
    <img src="${arr[i].img}"/>
    <h4>${arr[i].price}</h4>
    <button> add to card</button>
    <button> details</button>
    </div>`);
  }
}
// view all content in movie
for (let i = 0; i < arr.length; i++) {
  //return all obj type movie laptop name + img
  if (arr[i].type === "movie") {
    l4.append(`<div style="color: orange;"><h2>${arr[i].name}</h2>
    <img src="${arr[i].img}"/>
    <h4>${arr[i].price}</h4>
    <button> add to card</button>
    <button id="des${i}"> details</button>
    </div>`);
    let bbb = $(`#des${i}`);
    bbb.on("click", () => {
      console.log("hi every body");
     /*  bbb.show();
      l1.hide();
      p1.hide();
      l2.hide();
      p2.hide();
      l3.hide();
      p3.hide();
      bbb.show();
      p4.show(); */
    });
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
  p1.show();
  l2.hide();
  p2.hide();
  l3.hide();
  p3.hide();
  l4.hide();
  p4.hide();
});
// if click in phone show all content phone and Hide the rest of the sections
pho1.on("click", () => {
  l2.show();
  p2.show();
  l1.hide();
  p1.hide();
  l3.hide();
  p3.hide();
  l4.hide();
  p4.hide();
});
// if click in Accessories laptop show all content Accessories laptop and Hide the rest of the sections
AccLab.on("click", () => {
  l3.show();
  p3.show();
  l1.hide();
  p1.hide();
  l2.hide();
  p2.hide();
  l4.hide();
  p4.hide();
});
// if click in movie show all content movie and Hide the rest of the sections
mov.on("click", () => {
  l4.show();
  p4.show();
  l1.hide();
  p1.hide();
  l2.hide();
  p2.hide();
  l3.hide();
  p3.hide();
});
// if click in home show all department
home.on("click", () => {
  l1.show();
  p1.show();
  l2.show();
  p2.show();
  l3.show();
  p3.show();
  l4.show();
  p4.show();
});

let bbb = $("#des${i}");
bbb.on("click", (i) => {
  l1.hide();
  p1.hide();
  l2.hide();
  p2.hide();
  l3.hide();
  p3.hide();
  l4.show();
  p4.show();
});
