var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios.get("http://153.127.48.168:8080/ecsite-api/item/items/aloha");
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
});
