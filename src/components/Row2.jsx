import LudoHome from "./LudoHome";

export default function Row2() {
  return (
    <div className="middle_row">

      <div className="h_lad">
        <div className="h_lad_row">
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell red"><span className="star">&#9733;</span></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
        </div>

        <div className="h_lad_row">
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell red"></div>
          <div className="h_lad_cell red"></div>
          <div className="h_lad_cell red"></div>
          <div className="h_lad_cell red"></div>
          <div className="h_lad_cell red"></div>
        </div>

        <div className="h_lad_row">
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell red"><span className="star">&#9733;</span></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
        </div>
      </div>

      <LudoHome />

      <div className="h_lad">
        <div className="h_lad_row">
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell yellow"><span className="star">&#9733;</span></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
        </div>

        <div className="h_lad_row">
          <div className="h_lad_cell yellow"></div>
          <div className="h_lad_cell yellow"></div>
          <div className="h_lad_cell yellow"></div>
          <div className="h_lad_cell yellow"></div>
          <div className="h_lad_cell yellow"></div>
          <div className="h_lad_cell"></div>
        </div>

        <div className="h_lad_row">
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell"></div>
          <div className="h_lad_cell yellow"><span className="star">&#9733;</span></div>
          <div className="h_lad_cell"></div>
        </div>
      </div>

    </div>
  );
}