import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const { quantity } = useSelector((store) => store.card);

  return (
    <nav>
      <div className="navBar">
        <h3>Kurs Uygulaması</h3>
        <div className="navDiv">
          <div className="itemsDiv">
            <p>{quantity}</p>
          </div>
          <BsFillBasketFill className="itemsICon" />
        </div>
      </div>
    </nav>
  );
};
