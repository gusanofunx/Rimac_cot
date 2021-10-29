import React from "react";
import "./1style.css";

function L_comp() {
	return (
		<div style={{ marginTop: 22, padding: "20%" }}>
			<div style={{ flexDirection: "row", display: "flex" }}>
				<div className="line_circle">1</div>
				<span className="tit_g">Datos</span>
			</div>

<div className="line_pun"></div>
<div style={{ flexDirection: "row", display: "flex" }}>
				<div className="line_circle_blue">2</div>
				<span className="tit_g ttg"> Arma tu plan</span>
			</div>
		</div>
	);
}

export default L_comp;
