import React from "react";
import PropTypes from "prop-types";

// fake api data
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 3.1,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2024/09/BibimbapKoreanMixedRice-6a656fe.jpg",
    rating: 3.0,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.0,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.8,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I love {name}</h1>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }
function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
      {/* {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
