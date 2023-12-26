let coin=document.querySelector("#coins");

function append(data){
    for(let i = 0; i < data.coins.length; i++) {
        var div = document.createElement('span');
        div.innerHTML=`<img src="${data.coins[i].item.small}"  alt="thumb" height="20px">${data.coins[i].item.name}_${(data.coins[i].item.symbol)}<br>
        <p>$${(data.coins[i].item.price_btc)}</p>`
        div.style.boxShadow="0 0 4px gray"
         div.style.width="500px"
         div.style.height="50px"
         div.style.fontWeight="bold"
        //  div.style.padding="5px"
        // coin.style.padding="5px"
        coin.style.margin="15px 0 15px 15px"
        coin.appendChild(div);
        
    }
    
}
async function topCoins(){
    let response=await fetch("https://api.drc-20.org/api/v3/search/trending");
    let data=await response.json();
    console.log(data);
    append(data);

}
topCoins();
