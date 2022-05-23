let read=(id)=>{
    return document.getElementById(id).value
 }
 let creat=(id)=>{
     return document.createElement(id);
 }
 let get=(id)=>{
 return document.getElementById(id);
 
 }




 function append(){
   
    var data = JSON.parse(localStorage.getItem('products'));

    data.map(function (el,index){
        // console.log(el);
    let div1 = creat("div");
    div1.id="house";
    let img1=creat("img");
    img1.src = el.image;

    let type1 = creat("h3");
    type1.innerText = el.type;

    let desc1 = creat("h4");
    desc1.innerText = el.desc;


    let price1 = creat("h2");
    price1.innerText = el.price;

    let btn = creat("button");
    btn.innerText= "Remove";
    btn.id="remove_product";
    btn.addEventListener("click", deleteItem);




     div1.append(img1,type1,desc1,price1,btn);

     get("all_products").append(div1);




    })


 }

//  function remove(index){
//      var data = JSON.parse(localStorage.getItem('products')) ||[];

//      let newData=data.filter(function (el,i){
//          if(i==index){
//              let trash = JSON.parse(localStorage.getItem("trash")) || [];
//              trash.push(el);
//              localStorage.setItem("trash",JSON.stringify(trash));
//          }
//          else{
//              return i !== index;
//          }
//      })
//      localStorage.setItem("trash_data",JSON.stringify(newData));
     
//     }
    
//     append();

 
 function deleteItem(event){
    var data = JSON.parse(localStorage.getItem('products')) ||[];
     event.target.parentNode.remove()
     
    }
    
    append();