// console.log(arrowTitle)
// /* START CODE UNDER THIS LINE */

const arr = [
  {
    name: "toshipa",
    img: "./images/toshipa.png",
    description: "",
    price: "200JD",
    rank: "",
    type: "laptop",
  },
  {
    name: "php",
    img: "./images/php.jpg",
    description: "",
    price: "200JD",
    type: "laptop",
  },
  {
    name: "acer",
    img: "./images/acer.jpg",
    description: "",
    price: "200JD",
    type: "laptop",
  },
  {
    name: "Dell",
    img: "./images/dell.jpg",
    description: "",
    price: "200JD",
    type: "laptop",
  },
  /////////////////////////////
  {
    name: "samsung",
    img: "./images/samsungPhone.jpg",
    description: "",
    price: "200JD",
    type: "phone",
  },
  {
    name: "iphone",
    img: "./images/iphone.jpg",
    description: "",
    price: "200JD",
    type: "phone",
  },
  {
    name: "Huawei",
    img: "./images/huawei.jpg",
    description: "",
    price: "200JD",
    type: "phone",
  },
  {
    name: "oppo",
    img: "./images/oppo.jpg",
    description: "",
    price: "200JD",
    type: "phone",
  },
  /////////////////////////////
  {
    name: "mouse",
    img: "./images/mouse.jpg",
    description: "",
    price: "200JD",
    type: "Accessories laptop",
  },
  {
    name: "hard disk",
    img: "./images/harddisk.jpg",
    description: "",
    price: "200JD",
    type: "Accessories laptop",
  },
  {
    name: "keyboard",
    img: "./images/keyboard.jpg",
    description: "",
    price: "200JD",
    type: "Accessories laptop",
  },
  {
    name: "headphones",
    img: "./images/headphones.jpg",
    description: "",
    price: "200JD",
    type: "Accessories laptop",
  },
  /////////////////////////////
  {
    name: "Godzilla: King Of The Monsters",
    price: "200JD",
    img: "./images/Godzilla King Of The Monsters.jpg",
    description:
      "The film follows the relentless efforts of a secret animal society (Monarch) when it encounters a group of huge monsters, including the formidable dinosaur Godzilla, who confronts the humanoid three-headed King Gadrawy, leaving humanity with an unknown fate.",
    type: "movie",
  },
  {
    name: "Knives Out",
    img: "./images/Knives Out.png",
    description: "",
    price: "200JD",
    type: "movie",
  },
  {
    name: "Bad Boys For Life",
    img: "./images/Bad Boys For Life.jpg",
    description: "",
    price: "200JD",
    type: "movie",
  },
  {
    name: "Wolves",
    img: "./images/Wolves.png",
    description: "",
    price: "200JD",
    type: "movie",
  },
];

const l1 = $("#l1"); //لا ظهار محتويات اللاب توب
const l2 = $("#l2"); //لاظهار محتويات التلفونات
const l3 = $("#l3"); //لاظهار محتويات اكسسوارات اللاب توب
const l4 = $("#l4"); //لاظهار محتويات افلام
const l5 = $("#l5");

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
    <button id="des${i}"> details</button>
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
    <button id="des${i}"> details</button>
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
    <button id="desAcc${i}"> details</button>
    </div>`);
    let detailAcc = $(`#desAcc${i}`);
    detailAcc.on("click", () => {
   

    //l5.append(`<div style="color: orange;"><h2>${arr[i].name}</h2>`)
    l5.append(`
    <div><img src="${arr[i].img}"/></div>
    <div style="color: orange;"><h2>${arr[i].name}</h2>
    <h4>${arr[i].price}</h4>
    <h3>${arr[i].description}</h3>
    <button> add to card</button>
    </div>`);

      l1.hide();
      p1.hide();
      l2.hide();
      p2.hide();
      l3.hide();
      p3.hide();
      l4.hide();
      p4.hide();
      l5.show();
    });
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
    <button id="desMov${i}"> details</button>
    </div>`);

    let detailMov = $(`#desMov${i}`);
    detailMov.on("click", () => {
      console.log("hi every body");

      //l5.append(`<div style="color: orange;"><h2>${arr[i].name}</h2>`)
      l5.append(`
    <div><img src="${arr[i].img}"/></div>
    <div style="color: orange;"><h2>${arr[i].name}</h2>
    <h4>${arr[i].price}</h4>
    <h3>${arr[i].description}</h3>
    <button> add to card</button>
    </div>`);

      l1.hide();
      p1.hide();
      l2.hide();
      p2.hide();
      l3.hide();
      p3.hide();
      l4.hide();
      p4.hide();
      l5.show();
    });
  }
}
l5.hide();
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
  l5.hide();
  l5.html("");
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
  l5.hide();
  l5.html("");
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
  l5.hide();
  l5.html("");
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
  l5.hide();
  l5.html("");
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
  l5.hide();
  l5.html("");
});
