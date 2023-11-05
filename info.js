
let infoBody=document.querySelector("#info_body");
// let inputInfo=document.querySelector("#input");
let url=new URL(window.location.href);
console.log(url);
let id=url.searchParams.get("q");
console.log(id);






function getData(data){
     console.log(data);
     let div=document.createElement("div");
     let img=document.createElement("img");
     img.src=`${data.image.large}`;
     div.appendChild(img);
     let Phistory=document.createElement("h1");
     Phistory.textContent="Price History";
     Phistory.style.margin="30px 0 0 20px "
     Phistory.style.color="orange"

     div.appendChild(Phistory);
     div.style.margin="30px 0 30px 30px"

     let div1=document.createElement("div")
     let name=document.createElement("h1");
     name.textContent=data.name;
     name.style.fontWeight="bolder"
     name.style.color="orange"

     div1.appendChild(name);
    //  div2 for prices
     let div2=document.createElement("div")
     let marketDta=document.createElement("p");
     let marketDta1=document.createElement("p");

    //  let marketDta2=document.createElement("p");
      let marketDta3=document.createElement("p");

     marketDta.textContent="INR:-"+data.market_data.current_price.inr;
     marketDta1.textContent="AED:-"+data.market_data.current_price.aed;
    //  marketDta2.textContent="BDTH:-"+data.market_data.current_price.bdth;
     marketDta3.textContent="BCH:-"+data.market_data.current_price.bch;
     
     div2.appendChild(marketDta);
     div2.appendChild(marketDta1);
    //  div2.appendChild(marketDta2);
     div2.appendChild(marketDta3);
     div2.style.display="flex"
     div2.style.gap="30px"
     div2.style.color="blue"
     div2.style.margin="20px 0 20px 0"
    div1.appendChild(div2)

    // description div
    let desDiv=document.createElement("div");
    let desP=document.createElement("p");
    desP.textContent=data.description.en;
    desDiv.appendChild(desP);
    div1.appendChild(desDiv);
    div1.style.margin="0 40px 0 300px"



    
     infoBody.appendChild(div)
     infoBody.appendChild(div1)
}




async function moreInfo(){
    let resp=await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
    let data=await resp.json();
    console.log(data);
    getData(data);

}
moreInfo();