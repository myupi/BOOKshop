const book = document.querySelector(".cards");
const bar = document.querySelector(".bar");
const barin = document.querySelector("#bar");

const expensive = document.querySelector("#expensive");
const middle = document.querySelector("#middle");
const cheep = document.querySelector("#cheep");
const all = document.querySelector("#all");

const textm = document.querySelector("#price");
const max = document.querySelector("#max");
const min = document.querySelector("#min");

const srcbtn = document.querySelector(`#srcbtn`);
const search = document.querySelector("#search");

bar.addEventListener("click", () => {
  barin.style.transform = "translateX(0)";
});

const data = [
  {
    id: 1,
    title: "Umrning bir lahzasi!",
    description: "Inson umir va hayot yo'liga bag'ishlanadi.",
    price: 9000,
    status: "cheep",
  },
  {
    id: 2,
    title: "Baxtiyor oila!",
    description: "Islomi hayot va oila.",
    price: 150000,
    status: "expensive",
  },
  {
    id: 3,
    title: "Otamdan qolgan dalalar.",
    description: "Insoniylik.",
    price: 50000,
    status: "middle",
  },
  {
    id: 4,
    title: "Ilm olish sirlari!",
    description: "Ilm olish siralari islomiy shakilda.",
    price: 100000,
    status: "expensive",
  },
  {
    id: 5,
    title: "Yulduzli tunlar!",
    description: "Yaxshi kitob bo'lsa kerak.",
    price: 6000,
    status: "cheep",
  },
  {
    id: 6,
    title: "Kichkina shahzoda",
    description: "Filni yutayotgan ilon yohut shlyapa mash-mashalari.",
    price: 80000,
    status: "middle",
  },
];

function card(title, description, price) {
  const box = document.createElement("div");
  box.className = "card";
  book.append(box);
  const h2 = document.createElement("h2");
  h2.textContent = "BOOK";
  box.append(h2);
  const h3 = document.createElement("h3");
  h3.textContent = title;
  box.append(h3);
  const p = document.createElement("p");
  p.textContent = description;
  box.append(p);
  const scan = document.createElement("scan");
  scan.textContent = `Price: ${price}`;
  box.append(scan);
}

for (i = 0; i < data.length; i++) {
  book.innerHTML = "";
  let sum = 0;
  for (i = 0; i < data.length; i++) {
    card(data[i].title, data[i].description, data[i].price);
    const summ = document.querySelector("#summa");
    const summ1 = document.querySelector("#summa1");
    sum += data[i].price;
    summ.textContent = sum;
    summ1.textContent = sum;
  }
}

function cena(pr) {
  book.innerHTML = "";
  let sum = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i].status === pr) {
      card(data[i].title, data[i].description, data[i].price);
      const summ = document.querySelector("#summa");
      const summ1 = document.querySelector("#summa1");
      sum += data[i].price;
      summ.textContent = sum;
      summ1.textContent = sum;
    }
  }
}

all.addEventListener("click", () => {
  transformBar();
  book.innerHTML = "";
  let sum = 0;
  for (i = 0; i < data.length; i++) {
    card(data[i].title, data[i].description, data[i].price);
    const summ = document.querySelector("#summa");
    const summ1 = document.querySelector("#summa1");
    sum += data[i].price;
    summ.textContent = sum;
    summ1.textContent = sum;
  }
});

expensive.addEventListener("click", () => {
  transformBar();
  cena("expensive");
});

middle.addEventListener("click", () => {
  transformBar();
  cena("middle");
});

cheep.addEventListener("click", () => {
  transformBar();
  cena("cheep");
});

function transformBar() {
  if (window.innerWidth <= 960) {
    barin.style.transform = "translateX(-100%)";
  }
}


max.addEventListener("click", () => {
  book.innerHTML = "";
  let sum = 0;
  transformBar();
  for(i=0;i<data.length;i++) {
    if ( textm.value <= data[i].price) {
      card(data[i].title, data[i].description, data[i].price);
      const summ = document.querySelector("#summa");
      const summ1 = document.querySelector("#summa1");
      sum += data[i].price;
      summ.textContent = sum;
      summ1.textContent = sum;
    }
  }
})


min.addEventListener("click", () => {
  book.innerHTML = "";
  let sum = 0;
  transformBar();
  for (i = 0; i < data.length; i++) {
    if (textm.value >= data[i].price) {
      card(data[i].title, data[i].description, data[i].price);
      const summ = document.querySelector("#summa");
      const summ1 = document.querySelector("#summa1");
      sum += data[i].price;
      summ.textContent = sum;
      summ1.textContent = sum;
    }
  }
});


srcbtn.addEventListener("click", () => {
  let result = search.value.toLowerCase();
  let find = data.filter((item) => item.title.toLowerCase().includes(result));
  book.innerHTML = "";
  let sum = 0;
  transformBar();
  for (i = 0; i < find.length; i++) {
    card(find[i].title, find[i].description, find[i].price);
    const summ = document.querySelector("#summa");
    const summ1 = document.querySelector("#summa1");
    sum += data[i].price;
    summ.textContent = sum;
    summ1.textContent = sum;
  }
});


