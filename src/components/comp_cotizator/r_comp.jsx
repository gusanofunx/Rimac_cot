import React from "react";
import Line_gray from "../line_gray";
import Separator from "../separator";
import Incluye from "./incluye";

function R_comp(props) {
const {monto,go} = props;

	return (
		<div style={{ marginTop: "89px" ,padding:'50px' }}>
			<div className="sup_txt">Monto</div>
			<div className="monto_num"> $ {monto}</div>
			<div className="txt_reg">mensuales </div>
			<Separator h={19} />
			<Line_gray />
			<Separator h={24} />
			<div className="incluye">El precio incluye:</div>

			<Incluye txt="Llanta de respuesto" />
			<Incluye txt="Analisis de motor" />
			<Incluye txt="Aros gratis" />

			<Separator h={32} />

			<button type="button" class="btn btn-primary but_quiero" onClick={() =>go() }>
				<span className="txt_but_rimac">lo quiero</span>
			</button>
		</div>
	);
}

export default R_comp;
