let container=document.querySelector("#coin_search");
let input=document.querySelector("#input")
let searchBtn=document.querySelector("#search_btn");
let coinS=document.querySelector("#coin_search")
// let url=new URL(window.location.href);

// call data func

function moreInfoClickHandler(api_symbol){
  window.location.href = `info.html?q=${api_symbol}`;
}
function callData(data){
    console.log(data);
    let j=1;
      coinS.innerHTML="";
      for(let i = 0; i < data.coins.length; i++) {
     var div = document.createElement('div');
     div.innerHTML=`<div id=left>${j}.  <img src="${data.coins[i].thumb}"  alt="thumb" height="20px">${data.coins[i].name}  ${(data.coins[i].symbol)}</div><button id=btn onclick="moreInfoClickHandler('${data.coins[i].api_symbol}')">More Info</button>
 
     `

     div.style.boxShadow="0 0 2px gray"
      div.style.width="1300px"
      div.style.height="50px"
      div.style.fontWeight="bolder"
      div.style.fontSize="25px"
      div.style.padding="5px"
      div.style.margin="10px"
      div.style.fontWeight="bolder"
      div.style.backgroundColor="#f3f4fa"
      div.style.display="flex";
      div.style.borderRadius="10px"
      div.style.alignItems="center"
      div.style.justifyContent="space-between"
        
      

     //  div.style.padding="5px"
     // coin.style.padding="5px"
     // coin.style.margin="15px 0 15px 15px"
     coinS.appendChild(div);
     coinS.style.padding="10px"
     j++;
     
 }

 
}

  

// fetching func
async function coinSearch(){
  let res=await fetch(`https://api.drc-20.org/explorer/recently/api/v3/search?query=${input.value}`)
  let data = await res.json();
  console.log(data);
  callData(data);
}
// event on btn
searchBtn.addEventListener("click",coinSearch)

