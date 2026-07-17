// data array
const cardDetails = [
    {
     image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     name: "Anifowose Zainab Olayinka",
     bio: "lorem ipsum dolor sit amet consectetur adipiscing elit. labore odio accusantium inciduntcorporis totam beatea, illo delectus doloremque porro eaque non praesentium? Velit officiis in nisi, quo inventore explicabo dolorum?", 
     title: "Software Developer"
    },   
];

const url = "http://someackendfunnyurl-23/api";


// map, turn each data to a card
const cards = cardDetails.map(card => {
  return ` 
    <div class="card">

      <img class="card-image"
        srcset="${card.image}"
        alt="random image from net"

      <div class="card-description">
        <h4 class="card-name">${card.name}</h4>
        <p class="card-title">${card.title}</p>
        <p class="card-bio">${card.bio}</p>
      </div>

    </div>
  `
}).join("");

document.getElementById("cards").innerHTML = cards;