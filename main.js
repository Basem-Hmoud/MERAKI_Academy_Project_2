// console.log(arrowTitle)
// /* START CODE UNDER THIS LINE */

const arrayItems = [
  {
    //////////////////////////////laptop
    name: "toshipa",
    img: "./images/toshipa.png",
    description:
      "Hyundai Thinnote-A, 14.1Celeron Laptop, 4GB RAM, 64GB Storage, Expandable 2.5 SATA HDD Slot, Windows 10 Home S Mode, English - Black",
    price: "230 $",
    rank: "",
    type: "laptop",
  },
  {
    name: "hp",
    img: "./images/hp core i3.png",
    description:
      "2021 HP 14 HD Thin and Light Laptop, Intel Core i3-1005G1 Processor, 4GB SDRAM RAM 128GB SSD, HDMI, Webcam, 802.11b/g/n/ac, Bluetooth, Windows 10 S, Silver, W/ IFT Accessories",
    price: "419 $",
    rank: "",
    type: "laptop",
  },
  {
    name: "acer",
    img: "./images/acer core i3.png",
    description:
      "Acer Aspire 5 A515-56-36UT | 15.6 Full HD Display | 11th Gen Intel Core i3-1115G4 Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Amazon Alexa | Windows 10 Home (S Mode)",
    price: "350 $",
    rank: "",
    type: "laptop",
  },
  {
    name: "Dell",
    img: "./images/Dell core i3.png",
    description:
      "DELL 2021 Newest inspiron 15 3000 PC Laptop, 15.6 HD Anti-Glare Non-Touch Display, Intel 2-Core 4205U Processor, 8GB RAM, 128GB PCIe SSD, Webcam, Bluetooth, Win 10",
    price: "439 $",
    rank: "",
    type: "laptop",
  },
  //////////////////////////////phone
  {
    name: "Samsung Galaxy S21 5G",
    img: "./images/Samsung Galaxy S21 5G.png",
    description:
      "Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom Violet (SM-G991UZVAXAA)",
    price: "700 $",
    rank: "",
    type: "phone",
  },
  {
    name: "iPhone 7 Plus",
    img: "./images/iPhone 7 Plus.png",
    description: "Apple iPhone 7 Plus, 128GB, Black - Fully Unlocked (Renewed)",
    price: "258 $",
    rank: "",
    type: "phone",
  },
  {
    name: "HUAWEI Nova 5T",
    img: "./images/huawei.png",
    description:
      "HUAWEI Nova 5T (128GB, 6GB) 6.26 LCD, Kirin 980, 48MP Quad Camera, 22.5W Fast Charge, Dual SIM GSM Unlocked Global 4G LTE International EU Plug with US Adapter (Black)",
    price: "324 $",
    rank: "",
    type: "phone",
  },
  {
    name: "Oppo Reno 5 Pro",
    img: "./images/oppo.png",
    description:
      "Oppo Reno 5 Pro 5G CPH2201 256GB 12GB RAM International Version - Galactic Silver",
    price: "630 $",
    rank: "",
    type: "phone",
  },
  //////////////////////////////Accessories laptop
  {
    name: "mouse",
    img: "./images/mouse.png",
    description:
      "Wireless Mouse, RATEL 2.4G Wireless Ergonomic Mouse Computer Mouse Laptop Mouse USB Mouse 6 Buttons with Nano Receiver 3 Adjustable DPI Levels Cordless Wireless Mice for Windows, Mac",
    price: "10 $",
    rank: "",
    type: "Accessories laptop",
  },
  {
    name: "hard disk",
    img: "./images/harddisk.png",
    description:
      "Toshiba (HDTB410XK3AA) Canvio Basics 1TB Portable External Hard Drive USB 3.0, Black",
    price: "45 $",
    rank: "",
    type: "Accessories laptop",
  },
  {
    name: "keyboard",
    img: "./images/keyboard.png",
    description: "Logitech G213 Prodigy Gaming Keyboard",
    price: "20 $",
    rank: "",
    type: "Accessories laptop",
  },
  {
    name: "headphones",
    img: "./images/headphones.png",
    description:
      "COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone Deep Bass Wireless Headphones Over Ear, Comfortable Protein Earpads, 30 Hours Playtime for Travel/Work, Black",
    price: "50 $",
    rank: "",
    type: "Accessories laptop",
  },
  //////////////////////////////movie
  {
    name: "Godzilla: King Of The Monsters",
    img: "./images/Godzilla King Of The Monsters.jpg",
    description:
      "The film follows the relentless efforts of a secret animal society (Monarch) when it encounters a group of huge monsters, including the formidable dinosaur Godzilla, who confronts the humanoid three-headed King Gadrawy, leaving humanity with an unknown fate.",
    price: "4 $",
    rank: "",
    type: "movie",
  },
  {
    name: "Knives Out",
    img: "./images/Knives Out.png",
    description:
      "When the body of novelist Harlan Thrombie is found, Detective Plank assumes the task of investigating the crime, only to find himself involved in many events in order to search for the truth.",
    price: "4 $",
    rank: "",
    type: "movie",
  },
  {
    name: "Bad Boys For Life",
    img: "./images/Bad Boys For Life.jpg",
    description:
      "Burnett - who became an inspector - returns to work with his old colleague (Lori) - who suffers from middle-aged depression, after an Albanian mercenary allocates a prize money for the one who comes in the head of the duo in revenge for his brother who killed at their hands.",
    price: "15 $",
    rank: "",
    type: "movie",
  },
  {
    name: "Wolves",
    img: "./images/Wolves.png",
    description:
      "Sedan Richards (Lucas Till) is a handsome eighteen-year-old teenage boy, forced by circumstances to move after his father and mother die, and his feet lead him to an isolated town called (Lupine Ridge) after he meets a deranged person named Wild Joe (John Papier Ferguson), In this town, Sedan Richards discovers new facts about the origins of his family, and the ancient history of his true roots.",
    price: "20 $",
    rank: "",
    type: "movie",
  },
];

const section1 = $("#section1"); //لا ظهار محتويات اللاب توب
const section2 = $("#section2"); //لاظهار محتويات التلفونات
const section3 = $("#section3"); //لاظهار محتويات اكسسوارات اللاب توب
const section4 = $("#section4"); //لاظهار محتويات افلام
const section5 = $("#section5"); //لاطهار عنصر واحد عند الضغط على زر التفاصيل

const paragraph1 = $("#paragraph1"); //لا ظهار محتويات اللاب توب
const paragraph2 = $("#paragraph2"); //لاظهار محتويات التلفونات
const paragraph3 = $("#paragraph3"); //لاظهار محتويات اكسسوارات اللاب توب
const paragraph4 = $("#paragraph4"); //لاظهار محتويات افلام
// view all content in laptop
for (let i = 0; i < arrayItems.length; i++) {
  //return all obj type laptop name + img
  if (arrayItems[i].type === "laptop") {
    section1.append(`
    <div>
    <h2>${arrayItems[i].name}</h2><br/>
    <img src="${arrayItems[i].img}"/><br/><br/>
    <h4>${arrayItems[i].price}</h4><br/>
    <button class="buy"> add to card</button>
    <button id="deslaptop${i}"> details</button>
    </div>`);
    let detaillaptop = $(`#deslaptop${i}`);
    detaillaptop.on("click", () => {
      //to view 1 items
      section5.append(`
    <div><img src="${arrayItems[i].img}"style= "width: auto;"/></div>
    <div class="as">
    <h2>${arrayItems[i].name}</h2><br/>
    <h3>${arrayItems[i].description}</h3><br/>
    <h4>${arrayItems[i].price}</h4><br/>
    <button class="buy"> add to card</button>
    </div>`);

      section1.hide();
      paragraph1.hide();
      section2.hide();
      paragraph2.hide();
      section3.hide();
      paragraph3.hide();
      section4.hide();
      paragraph4.hide();
      section5.show();
    });
  }
}
// view all content in phone
for (let i = 0; i < arrayItems.length; i++) {
  //return all obj type phone name + img
  if (arrayItems[i].type === "phone") {
    section2.append(`
    <div>
    <h2>${arrayItems[i].name}</h2><br/>
    <img src="${arrayItems[i].img}" style= "height:300px ;"/><br/><br/>
    <h4>${arrayItems[i].price}</h4><br/>
    <button class="buy"> add to card</button>
    <button id="desPhone${i}"> details</button>
    </div>`);
    let detailPhone = $(`#desPhone${i}`);
    detailPhone.on("click", () => {
      //to view 1 items
      section5.append(`
    <div>
    <img src="${arrayItems[i].img}"style= "width: auto;"/></div>
    <div class="as">
    <h2>${arrayItems[i].name}</h2><br/>
    <h3>${arrayItems[i].description}</h3><br/>
    <h4>${arrayItems[i].price}</h4><br/>
    <button class="buy"> add to card</button>
    </div>`);

      section1.hide();
      paragraph1.hide();
      section2.hide();
      paragraph2.hide();
      section3.hide();
      paragraph3.hide();
      section4.hide();
      paragraph4.hide();
      section5.show();
    });
  }
}
// view all content in Accessories laptop
for (let i = 0; i < arrayItems.length; i++) {
  //return all obj type Accessories laptop name + img
  if (arrayItems[i].type === "Accessories laptop") {
    section3.append(`
    <div>
    <h2>${arrayItems[i].name}</h2><br/>
    <img src="${arrayItems[i].img}" style= "height:300px ;width:300px;"/><br/><br/>
    <h4>${arrayItems[i].price}</h4><br/>
    <button class="buy"> add to card</button>
    <button id="desAcc${i}"> details</button>
    </div>`);
    let detailAcc = $(`#desAcc${i}`);
    detailAcc.on("click", () => {
      //to view 1 items
      section5.append(`
    <div>
    <img src="${arrayItems[i].img}"style= "width: auto;"/></div>
    <div class="as">
    <h2>${arrayItems[i].name}</h2><br/>
    <h3>${arrayItems[i].description}</h3><br/>
    <h4>${arrayItems[i].price}</h4><br/>
    <button class="buy"> add to card</button>
    </div>`);

      section1.hide();
      paragraph1.hide();
      section2.hide();
      paragraph2.hide();
      section3.hide();
      paragraph3.hide();
      section4.hide();
      paragraph4.hide();
      section5.show();
    });
  }
}
// view all content in movie
for (let i = 0; i < arrayItems.length; i++) {
  //return all obj type movie laptop name + img
  if (arrayItems[i].type === "movie") {
    section4.append(`
    <div style="padding-bottom: 50px;">
    <h2>${arrayItems[i].name}</h2><br/>
    <img src="${arrayItems[i].img}"/><br/><br/>
    <h4>${arrayItems[i].price}</h4><br/>
    <button class="buy"> add to card</button>
    <button id="desMov${i}"> details</button>
    </div>`);

    let detailMov = $(`#desMov${i}`);
    detailMov.on("click", () => {
      console.log("hi every body");

      //to view 1 items
      section5.append(`
    <div>
    <img src="${arrayItems[i].img}"style= "width: auto;"/></div>
    <div class="as">
    <h2>${arrayItems[i].name}</h2><br/>
    <h3>${arrayItems[i].description}</h3><br/>
    <h4>${arrayItems[i].price}</h4><br/>
    <button class="buy"> add to card</button>
    </div>`);

      section1.hide();
      paragraph1.hide();
      section2.hide();
      paragraph2.hide();
      section3.hide();
      paragraph3.hide();
      section4.hide();
      paragraph4.hide();
      section4.hide();
      section5.show();
    });
  }
}
// selecting the elements with the `listItem` class
const laptopPage = $("#laptopPage");
const phonePage = $("#phonePage");
const accessoriesPage = $("#accessoriesPage");
const moviePage = $("#moviePage");
const homePage = $("#homePage");
// if click in laptopPage show all content laptope and Hide the rest of the sections
laptopPage.on("click", () => {
  section1.show();
  paragraph1.show();
  section2.hide();
  paragraph2.hide();
  section3.hide();
  paragraph3.hide();
  section4.hide();
  paragraph4.hide();
  section5.hide();
  //we added because every click in btn details return more items
  section5.html("");
});
// if click in phone show all content phone and Hide the rest of the sections
phonePage.on("click", () => {
  section2.show();
  paragraph2.show();
  section1.hide();
  paragraph1.hide();
  section3.hide();
  paragraph3.hide();
  section4.hide();
  paragraph4.hide();
  section5.hide();
  section5.html("");
});
// if click in Accessories laptop show all content Accessories laptop and Hide the rest of the sections
accessoriesPage.on("click", () => {
  section3.show();
  paragraph3.show();
  section1.hide();
  paragraph1.hide();
  section2.hide();
  paragraph2.hide();
  section4.hide();
  paragraph4.hide();
  section5.hide();
  section5.html("");
});
// if click in movie show all content movie and Hide the rest of the sections
moviePage.on("click", () => {
  section4.show();
  paragraph4.show();
  section1.hide();
  paragraph1.hide();
  section2.hide();
  paragraph2.hide();
  section3.hide();
  paragraph3.hide();
  section5.hide();
  section5.html("");
});
// if click in home show all department
homePage.on("click", () => {
  section1.show();
  paragraph1.show();
  section2.show();
  paragraph2.show();
  section3.show();
  paragraph3.show();
  section4.show();
  paragraph4.show();
  section5.hide();
  section5.html("");
});
//if click on add to card and show alert
const viewOneItem = $(".buy");
viewOneItem.on("click", () => {
  alert("thank you for buying");
});
