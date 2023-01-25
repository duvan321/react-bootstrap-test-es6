import React from "react";
import Card from "./card";
import image1 from "../assets/tiburon.jpg";
import image2 from "../assets/delfines.jpg";
import image3 from "../assets/tortugas.jpg";

const cards = [
  
  {
    id: 2,
    title: "Delfines",
    image: image2,
    url: "https://www.pinterest.com.mx/pin/594404850800030514/",
    text:"imagenes de delfines - video de delfines - fotoretoque."
  },
  {
    id: 1,
    title: "Tiburones",
    image: image1,
    url: "https://www.google.com/search?q=videos+de+tiburones&source=lmns&tbm=vid&bih=600&biw=1366&rlz=1C1CHZN_esCO1025CO1025&hl=es&sa=X&ved=2ahUKEwiTuLK79tv8AhUUPd8KHXZOBywQ_AUoAXoECAEQAQ#fpstate=ive&vld=cid:575eef3a,vid:oh-NuP66M8k",
    text:"Sabías que los tiburones no duermen? Descubre todos los secretos del pez más grande del océano."
  },
  {
    id: 3,
    title: "Ballenas",
    image: image3,
    url: "https://www.google.com/search?q=videos+de+las+ballenas&bih=600&biw=1366&rlz=1C1CHZN_esCO1025CO1025&hl=es&tbm=vid&sxsrf=AJOqlzUZSf6NfzQxyQihjruq0dTwysIimw%3A1674416489230&ei=aZHNY6naDYuxkvQPwdSroAg&ved=0ahUKEwjpsq_A99v8AhWLmIQIHUHqCoQQ4dUDCA0&uact=5&oq=videos+de+las+ballenas&gs_lcp=Cg1nd3Mtd2l6LXZpZGVvEAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BAgjECc6BAgAEEM6CAgAEIAEELEDOggIABCxAxCDAToLCAAQgAQQsQMQgwE6CggAEIAEEBQQhwI6BwgAEIAEEAo6CAgAEBYQHhAKUPgjWNRLYOpSaAFwAHgAgAGpAYgBwg6SAQQwLjE0mAEAoAEBwAEB&sclient=gws-wiz-video#fpstate=ive&vld=cid:6f5230a8,vid:FzJb8saaDwY",
    text:"La ballena jorobada visita una temporada más la Bahía de Cabo San Lucas, en el nororiental estado"
  },
];
const randomCard = () => {
  const card = cards[Math.floor(Math.random() * cards.length)];
  return card;
};

module.exports = randomCard;



function Cards() {
  
  return (
    
    <div className="container d-flex justify-content-center h-100 align-items-center ">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4 mb-4 mt-5" key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
          </div>
        ))}
      </div>
    </div>
  );


}



export default Cards;
