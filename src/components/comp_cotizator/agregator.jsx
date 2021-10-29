import React, { useEffect, useState } from "react";
import Ico1 from "../svg/ico1.svg";
import Ico2 from "../svg/ico2.svg";
import Ico3 from "../svg/ico3.svg";
import R_up from "../svg/r_up.svg";
import R_down from "../svg/r_down.svg";
import Gl_add from "../../svg/gl_add.svg";
import Gl_remove from "../../svg/gl_remove.svg";
import Line_gray from "../line_gray";
import "./agregator.css";
import Separator from "../separator";

function Agregator({ tm  ,fun , type ,set}) {
	const [state_add, setstate_add] = useState("Agregar");
	const [ico_add, setico_add] = useState(Gl_add);
// const [state_add, setstate_add] = useState(false);
	const fun_add = () => {
		if (state_add == "Agregar") {
			setstate_add("Quitar");
			setico_add(Gl_remove);
            // setstate_add(true)
set(true)
		} else {
			setstate_add("Agregar");
			setico_add(Gl_add);
            // setstate_add(false)
set(false)


		}

	};

	////////////////////////
	const [ico_arr, setico_arr] = useState(R_up);
	const fun_seemore = () => {
		if (ico_arr == R_up) {
			setico_arr(R_down);
			setbol_paraph(true);
			// setvis_paraph("display")
		} else {
			setico_arr(R_up);
			// setvis_paraph("none")
			setbol_paraph(false);
		}
	};
	////////////////////////
	const [vis_paraph, setvis_paraph] = useState("none");
	const [bol_paraph, setbol_paraph] = useState(false);

	return (
		<>
			<div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginTop: 36 }}>
				<div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-around" }}>
					<img src={Ico1}  style={{margin:"25px" ,marginTop:0}}/>
					<div style={{ flowdirection: "vertical", position: "relative" }}>
						<div className="txt_midle">{tm}</div>

						<div onClick={() => fun_add()} style={{ cursor: "pointer", display: "flex", alignItems: "center", marginTop: 20, top: 42 }}>
							<div className="line_circle_add">
								<img src={ico_add} />
							</div>
							<div className="txt_blue">{state_add}</div>
						</div>

						{bol_paraph && <div className="midle_paraph">He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más</div>}
					</div>

				</div>
				<img onClick={() => fun_seemore()} src={ico_arr}  style={{margin:"30px" ,marginTop:10, cursor:"pointer"}}/>
			</div>
			<Separator h={32} />
			<Line_gray />
		</>
	);
}

export default Agregator;
