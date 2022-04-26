const container = document.querySelector(".container");


async function getData(direction){
   const data = await fetch(direction);
   const result = await data.json();
   setData(result.data);
   console.log(result.data);
}

function setData(result){
   result.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      const h3 = document.createElement("h3");

         if(item.displayName.length > 13){
            const setTitle = item.displayName.slice(0,13);
            h3.innerHTML = setTitle + "...";
         }else{
            h3.innerHTML = item.displayName;
         }

      const image = document.createElement("img");
      image.src = item.smallArt;

      card.appendChild(h3);
      card.appendChild(image);
      container.appendChild(card);

   })
}

getData("https://valorant-api.com/v1/playercards");