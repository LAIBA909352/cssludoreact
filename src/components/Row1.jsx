export default function Row1() {
  return (
    <div className="box_row">

      <div className="box" style={{ border: "50px solid red" }}>
        <div className="circle border_red"></div>
        <div className="circle border_red"></div>
        <div className="circle border_red"></div>
        <div className="circle border_red"></div>
      </div>

      <div className="v_lad">
        <div className="v_lad_row">
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell"></div>
        </div>

        <div className="v_lad_row">
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell green"></div>
          <div className="v_lad_cell green">
            <span className="star">&#9733;</span>
          </div>
        </div>

        <div className="v_lad_row">
          <div className="v_lad_cell green">
            <span className="star">&#9733;</span>
          </div>
          <div className="v_lad_cell green"></div>
          <div className="v_lad_cell"></div>
        </div>

        <div className="v_lad_row">
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell green"></div>
          <div className="v_lad_cell"></div>
        </div>

        <div className="v_lad_row">
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell green"></div>
          <div className="v_lad_cell"></div>
        </div>

        <div className="v_lad_row">
          <div className="v_lad_cell"></div>
          <div className="v_lad_cell green"></div>
          <div className="v_lad_cell"></div>
        </div>
      </div>

      <div className="box" style={{ border: "50px solid green" }}>
        <div className="circle border_green"></div>
        <div className="circle border_green"></div>
        <div className="circle border_green"></div>
        <div className="circle border_green"></div>
      </div>

    </div>
  );
}