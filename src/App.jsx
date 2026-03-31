import "./App.css";

import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import RowBottom from "./components/RowBottom";

export default function App() {
  return (
    <div className="outer">
      <Row1 />
      <Row2 />
      <RowBottom />
    </div>
  );
}