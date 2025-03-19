let work__content = document.querySelectorAll(".work__content")[0]

let dataArray = []
// let data import {  } from "module";
let data = () =>  fetch("../data/data.json").then(res=> res.json()).then(data => {
    dataArray = data?.blocks
}).catch( err => {
    console.log(err);
})
{/* <li>
                    <div><img src="./image/offer-img.svg" alt="offer-img"></div>
                    <h3> По договору</h3>
                    <p>Предоставлю все документы для бухгалтерии: договоры, счета и акты. Работаю как ИП без НДС.</p>
                </li> */}

const g = async () => {
    await data();
    dataArray.map(item => {

        let li = document.createElement("li")
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute('src', item?.imageUrl)
        let h3 = document.createElement("h3")
        h3.innerText = item?.title
        let p = document.createElement("p")
        p.innerText= item?.description
       div.appendChild(img);
        li.appendChild(div)
        li.appendChild(h3)
        li.appendChild(p)
        work__content.appendChild(li)
        return li    })

    
}

g()