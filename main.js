mains_list_array = ["~MAINS~","Pasta","Veg Margherita Pizza","Double cheese margherita pizza", "Cheese and corn pizza", "Fresh veggie pizza (onion and capsicum)", "Peppy paneer pizza (Paneer, capsicum, red paprika)", "Farmhouse pizza (Onion, capsicum, mushroom, tomato)", "Pepper barbecue chicken pizaa (Pepper barbecue chicen and cheese)","Chicken Fiesta (Grilled chicken, peri-peri chicken, capsicum, onion)"];
SandD_array = ["~SAUCES AND DRINKS~","Coca cola","Lime soda","Sprite","Fanta","Cheesy jalepinio dip","Cheese dip"];
Sides_array = ["~SIDES~","Garlic bread stickes","Zingy paneer parcel","Taco Mexicana"];

function getmenu(){
    var htmldata;
    htmldata = "<ol class='menulist'>";
    SandD_array;
    for (i=0; i<SandD_array; i++){
        htmldata = htmldata+'<li>' + SandD_array[i] + '</li>';
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("dispaly_menuSandD").innerHTML=htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_itemINPUT").value;
    SandD_array;
    htmldata = "<section class='cards'>"
    for (i=0; i<SandD_array; i++){
        htmldata=htmldata + '<div class="card">' + '<img src="images/pizzaImg.png"/>' + SandD_array[i] + '</div>'
    }
    htmldata = htmldata + "</section>"
}

function getmenu(){
    var htmldata;
    htmldata = "<ol class='menulist'>";
    SandD_array;
    for (i=0; i<Sides_array; i++){
        htmldata = htmldata+'<li>' + Sides_array[i] + '</li>';
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("dispaly_menuSides").innerHTML=htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_itemINPUT").value;
    SandD_array;
    htmldata = "<section class='cards'>"
    for (i=0; i<Sides_array; i++){
        htmldata=htmldata + '<div class="card">' + '<img src="images/pizzaImg.png"/>' + SandD_array[i] + '</div>'
    }
    htmldata = htmldata + "</section>"
}


function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
mains_list_array;
for(i=0;i<mains_list_array.length;i++){
    htmldata = htmldata+'<li>'+mains_list_array[i]+'</li>';
}
htmldata=htmldata+ "</ol>"
document.getElementById("display_menumains").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_itemINPUT").value;
mains_list_array;
htmldata="<section class='cards'>"
for(i=0;i<mains_list_array.length;i++){
htmldata=htmldata+'<div class="card">'+'<img src="images/pizzaImg.png"/>'+mains_list_array[i]+'</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML=htmldata;
//Complete the code

}

function add_top(){
//Complete the code
}