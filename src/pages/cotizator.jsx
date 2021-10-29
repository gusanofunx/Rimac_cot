import React, { useEffect, useState } from "react";
import Separator from "../components/separator";
import Header_rimac from "../components/header_rimac";
import "../styles/cotizator.css";
import Line_gray from "../components/line_gray";
import Line_red from "../components/line_red";
import Amount_sel from "../components/comp_cotizator/amount_sel";
import Three_sel from "../components/comp_cotizator/three_sel";
import R_comp from "../components/comp_cotizator/r_comp";
import L_comp from "../components/comp_cotizator/l_comp";
import Arro_left from "../svg/arro_left.svg";
import Arr_gray from "../svg/arr_gray.svg";

import Agregator from "../components/comp_cotizator/agregator";
import R_resp from "../components/comp_cotizator/r_resp";
import { useHistory } from "react-router-dom";

function Cotizator(props) {
	const { data } = props.location;
	console.log("-- copt tt ", data);

	const history = useHistory();
	function handleClick() {
		history.push("/");
	}

	function goThanks() {
	history.push({ pathname: "/thanks", data: monto_cuota });
		// history.push("/");
	}
	////////// ////   ////////
	const [monto_aseg, setmonto_aseg] = useState(12500);
	const [monto_cuota, setmonto_cuota] = useState(80);

	function add_to_montoc(type) {
		switch (type) {
			case 1:
				settypeadd1((x) => !x);

				break;
			case 2:
				settypeadd2((x) => !x);

				break;
			case 3:
				settypeadd3((x) => !x);

				break;
			default:
				break;
		}
	}
	const [typeadd1, settypeadd1] = useState(false);
	const [typeadd2, settypeadd2] = useState(false);
	const [typeadd3, settypeadd3] = useState(false);
	useEffect(() => {
		typeadd1==true && setmonto_cuota(monto_cuota + 15);
		if(typeadd1==false) {setmonto_cuota(monto_cuota - 15);}
	

		
console.log("... " ,monto_cuota)

	}, [typeadd1]);
useEffect(() => {
		typeadd2 ==true&& setmonto_cuota(monto_cuota + 20);
		if(typeadd2==false) {setmonto_cuota(monto_cuota - 20);}
}, [typeadd2]);
useEffect(() => {
	typeadd3==true && setmonto_cuota(monto_cuota + 50);
	if(typeadd3==false) {setmonto_cuota(monto_cuota - 50);}
}, [typeadd3]);

const elim =() => {
console.log("status  ---- " ,typeadd2)
settypeadd2(false)
}
useEffect(() => {
	if(monto_aseg >16000 && typeadd2){  elim()}
}, [monto_aseg]);

	return (
		<div style={{ height: "100%", display: "block" }}>
			<Header_rimac />

			<div className="volver_resp" onClick={handleClick}>
				<div className="row_">
					<div className=" col" style={{}}>
						<div className="h_sup">
							<div className="line_circle_red gray_">
								<img src={Arr_gray} />
							</div>
							<span className="tit_g ttg">PASO 2 DE 2</span>
							<div className="bar_adv"></div>
						</div>
					</div>
				</div>
				<Line_gray />
			</div>

			<div className="conaine" style={{ display: "flex" }}>
				<div className="left_2">
					<L_comp />
				</div>

				<div className="right_2">
					<div class="container">
						<div class="row">
							<div class="col-sm-7">
								<div className="rl">
									<div className="volver_" style={{ flexDirection: "row", display: "flex" }}>
										<div className="line_circle_red">
											<img src={Arro_left} />{" "}
										</div>
										<span className="tit_g ttg"> VOLVER</span>
									</div>
									<Separator h={24} />

									<div className="title">¡Hola, {data?.name}!</div>
									<div className="txt_reg">Conoce las coberturas para tu plan</div>
									<Separator h={44} />
									<div className="placa">
										<div className="placa_cont">
											<div className="placa_det">Placa: {data?.placa}</div>
											<div className="placa_name">Wolkswagen 2019 Golf</div>
										</div>
										<img src={require("../img/men_like.png").default} className="men_like" />
									</div>
									<Separator h={40} />
									<Amount_sel monto_aseg={monto_aseg} set_monto={setmonto_aseg} />
									<Separator h={40} />
									<Line_gray />
									<Separator h={40} />

									<div className="dud_txt">Agrega o quita coberturas</div>
									<Three_sel />
									<Line_red />
									<Line_gray />

									<Agregator  type={1} set={settypeadd1} tm="Llanta robada" />
									{(monto_aseg <16000 )&&	<Agregator type={2}  set={settypeadd2}   tm="Choque y/o pasarte la luz roja " />}
									<Agregator type={3}  set={settypeadd3}  tm="Atropello en la vía Evitamiento " />

									<Separator h={40} />
								</div>
							</div>
							<div id="rr_elem" class="col-sm-4">
								<R_comp monto={monto_cuota} go={goThanks} />
							</div>
							<div id="rr_resp" class="col-sm-4"></div>
						</div>
					</div>
				</div>
			</div>

			<div id="rr_resp">
				<R_resp monto={monto_cuota}  go={goThanks}/>
			</div>
		</div>
	);
}

export default Cotizator;
