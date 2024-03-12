import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";
import HeartFilled from "../assets/heart-filled.svg";
import HeartLined from "../assets/heart-lined.svg";

const FavoriteButton = ({ ele }) => {
  //   console.log(ele);

  const { state, dispatch } = useContext(AppContext);

  const favorited = state.favorites.some((item) => {
    return item.id === ele.id;
  });

  

  const handleFavorite = () => {
    favorited
      ? dispatch({ type: "REMOVE_FAVORITE", payload: ele.id })
      : dispatch({ type: "ADD_TO_FAVORITE", payload: ele });
  };

  return (
    <div onClick={handleFavorite} className="favButton">

{
   favorited  ? <img src={HeartFilled} alt="HeartFilled" width={24} /> : <img src={HeartLined} alt="HeartLined" width={24} />
}

      {/* <img src={HeartFilled} alt="HeartFilled" width={24} />
      <img src={HeartLined} alt="HeartLined" width={24} /> */}



    </div>
  );
};

export default FavoriteButton;
