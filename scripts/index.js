//store the products array in localstorage as "products"
let read=(id)=>{
    return document.getElementById(id).value
 }
 let creat=(id)=>{
     return document.createElement(id);
 }
 let get=(id)=>{
 return document.getElementById(id);
 
 }


 get("add_product").addEventListener("click",myfun);


function pro(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image = i;
}



 function myfun(e){
     event.preventDefault();
  let form = get("products");
  let type = form.type.value;
  let desc = form.desc.value;
  let price =  form.price.value;
  let image = form.image.value;
//   console.log(type,desc,price,image);
var s1 = new pro(type,desc,price,image);
console.log(s1);


var data = JSON.parse(localStorage.getItem("products")) || [];

data.push(s1);
localStorage.setItem("products",JSON.stringify(data));

 }







