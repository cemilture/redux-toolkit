/* eslint-disable react/prop-types */
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { decreace, increase, removeItem } from "../control/cardSlice";

export const CourseItem = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="cardItem">
      <img src={img} alt="" />
      <div className="cardInfo">
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div>
          <button
            className="cardQuantityButton"
            onClick={() => dispatch(increase(id))}
          >
            <BsChevronUp />
          </button>
          <p>{quantity}</p>
          <button
            className="cardQuantityButton"
            onClick={() => dispatch(decreace(id))}
          >
            <BsChevronDown />
          </button>
        </div>
        <button
          className="cardDeleteButton"
          onClick={() => dispatch(removeItem(id))}
        >
          Sil
        </button>
      </div>
    </div>
  );
};
