export default function RowBottom() {
  return (
    <div className="box_row">

      <div className="box" style={{ border: "50px solid blue" }}>
        <div className="circle border_blue"></div>
        <div className="circle border_blue"></div>
        <div className="circle border_blue"></div>
        <div className="circle border_blue"></div>
      </div>

      <div className="v_lad">
        <div className="v_lad_row">
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell blue"></div>
          <div className="v_lad_cell"></div>
        </div>

        <div className="v_lad_row">
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell blue"></div>
          <div className="v_lad_cell"></div>
        </div>

        <div className="v_lad_row">
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell blue"></div>
          <div className="v_lad_cell"></div>
        </div>

        <div className="v_lad_row">
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell blue"></div>
          <div className="v_lad_cell blue">
            <span className="star">&#9733;</span>
          </div>
        </div>

        <div className="v_lad_row">
          <div className="v_lad_cell blue">
            <span className="star">&#9733;</span>
          </div>
          <div className="v_lad_cell blue"></div>
          <div className="v_lad_cell"></div>
        </div>

        <div className="v_lad_row">
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell"></div>
        </div>
      </div>

      <div className="box" style={{ border: "50px solid yellow" }}>
        <div className="circle border_yellow"></div>
        <div className="circle border_yellow"></div>
        <div className="circle border_yellow"></div>
        <div className="circle border_yellow"></div>
      </div>

    </div>
  );
}