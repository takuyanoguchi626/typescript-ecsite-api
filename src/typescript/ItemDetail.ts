import axios from "../../node_modules/axios/index";

window.onload = async () => {
  const res = await axios.get(
    "http://153.127.48.168:8080/ecsite-api/item/items/aloha"
  );
  console.log(res);
};
