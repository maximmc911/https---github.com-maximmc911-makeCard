const img = []; // массив путей к картинкам

let constImgName = `/images/card-1.jpg` // константное имя (шаблон пути к картинкам)

// Массив с ценами
const price = [`20 000$` , `50 000$` ,`80 000$` ,`100 000$` ,`120 000$` ,
`89 000$` ,`95 000$` ,`70 000$` ,`170 000$` ,`150 000$` ,`80 000$` ,`220 000$` , ]

// Массив с названиями
const name = [ `Porche 911` , `Porche with girl`, `Porche Cayenne`, `Porche 718 white`,
`Porche darkBlue`, `Porche Grey`, `Lamborgini`, `Girl with auto`, `Porche panamera`,
`Porche roasted`, `Porche99 blue`, `pretty girl`, `Chevrolet Corvette`]


// Нахождение изменяемого индекса картинок
let iterIndex;
for (let index = 0; index < constImgName.length; index++) {
    if (constImgName[index]==1) {
        iterIndex= index;
    }
    
}

// Создание путей к картинкам
for (let index = 1 ; index<=12 ; index++) {
    let newImgName = ``;
    newImgName = constImgName.slice(0,iterIndex) + index + constImgName.slice(iterIndex+1);
    img.push(newImgName);    
}

 // Совмещение данных из всех массивов
  const imgInfo=[];
 
  const randomIdGenerator = () =>Math.floor( Math.random()*1000);
console.log(randomIdGenerator());
for (let index = 0; index < 12; index++) {
    imgInfo.push({
        id: randomIdGenerator(),
        img: img[index],
        name: name[index],
        price: price[index]
    }
    );
    
};

console.log(imgInfo);

const parentDiv = document.querySelector(`.cards`);

const CreatCard = (imgInfo , parentDiv) => {

    parentDiv.innerHTML = imgInfo.map ((auto) => 
    `
    <div class="card">
                    <div class="image">
                        <img src="${auto.img}" alt="">
                    </div>
                    <div class="card_name">
                        <p class="name">${auto.name}</p>
                        <div class="card_price">
                            <p>Цена:</p>
                            <p class="price">
                            ${auto.price}
                            </p>
                        </div>
                    </div>
                </div>
    `
    ).join(``);
 
};
CreatCard(imgInfo , parentDiv);