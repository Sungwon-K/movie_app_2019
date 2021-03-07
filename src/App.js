import React from 'react';

function Food({ name,picture }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture}/>
    </div>
  )
}

const foodILike = [
  {
      name : "kimchi",
      image:
        "http//aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name : "Samgyeopsal",
    image:
      "http//3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAAfLk/yHxnxFXcfx4ZKSfHS_RQNKjw3bA.jpg"
  },
  {
    name : "bibimbap",
    image:
      "http//cdn-image/myrecipes.com/sites/default/files/styles/4_3_horizonatal_-_1200x900/public.jpg"
  },
  {
    name : "Doncasu",
    image:
      "http//s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRyAu5feA/ls.jpg"
  },
  {
    name : "Kimbap",
    image:
      "http//cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => <Food name={dish.name} picture ={dish.image}/>)}
    </div>
  )

}

export default App;
