import "./App.css";
import { CourseList } from "./components/CourseList";
import { NavBar } from "./components/NavBar";
import { useEffect } from "react";
import { calculateTotal } from "./control/cardSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { cardItems } = useSelector((store) => store.card);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cardItems, dispatch]);

  return (
    <div className="App">
      <NavBar />
      <CourseList />
    </div>
  );
}

export default App;
