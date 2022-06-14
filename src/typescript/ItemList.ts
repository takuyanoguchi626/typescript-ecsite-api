import axios from "axios";

window.onload = async () => {
  const res = await axios.get(
    "http://153.127.48.168:8080/ecsite-api/item/items/aloha"
  );
  console.log(res);

  const itemsElement = document.getElementsByClassName("items")[0];

  const itemElement = document.createElement("div");
  itemElement.classList.add("item");
  const itemIconElement = document.createElement("div");
  itemIconElement.classList.add("item-icon");
  const imageElement = document.createElement("img");
  imageElement.src = "";
  const linkElement = document.createElement("a");
  linkElement.href = "";
  linkElement.textContent = "";
  const sizeElementM = document.createElement("span");
  sizeElementM.classList.add("price");
  sizeElementM.textContent = "M";
  const sizeElementL = document.createElement("span");
  sizeElementL.classList.add("price");
  sizeElementL.textContent = "L";

  itemIconElement.appendChild(imageElement);
  itemElement.appendChild(itemIconElement);
  itemElement.appendChild(linkElement);
  itemElement.appendChild(sizeElementM);
  itemElement.appendChild(sizeElementL);

  itemsElement.appendChild(itemElement);
};
