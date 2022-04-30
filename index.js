//https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=V0JZDfpWqdchnvpb6BKxl1T38t6n-Ig95EP9c9_NC9Y

//https://api.unsplash.com/search/photos/?query=cat&per_page=20&order_by=popular&client_id=V0JZDfpWqdchnvpb6BKxl1T38t6n-Ig95EP9c9_NC9Y

const API = "V0JZDfpWqdchnvpb6BKxl1T38t6n-Ig95EP9c9_NC9Y";

import { navbar} from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { searchImages,append } from"./fetch.js";

let search =(e) => {
    if(e.key === "Enter") {
        let value =  document.getElementById("query").value;
        searchImages(API, value).then((data) =>{
            console.log(data);
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results, container);
        });
    }
 };

document.getElementById("query").addEventListener("keydown", search);

let categories = document.getElementById("categories").children;

function cSearch(){
    console.log(this.id);
    searchImages(API, this.id).then((data) =>{
        console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);    
    });
};

for(let el of categories){
    el.addEventListener("click", cSearch);                                                  
};
// let searchImages = async () =>{
//     let value = document.getElementById("query").value;

//     try{
//         let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`);

//         let data = await res.json();

//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// };