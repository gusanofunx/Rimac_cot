import React, { useState, useEffect } from "react";
import "../App.css";
import RimacLogo from "../svg/logo.svg";
import phone from "../svg/phone.svg";
import check from "../svg/check.svg";
import Down_row from "../svg/Down_row.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";
function Home() {
	const history = useHistory();
	function handleClick() {
		axios.get("https://jsonplaceholder.typicode.com/users/" + parseInt(dni.charAt(0))).then((res) => {
			console.log("----data ---- ", res.data);
			setdata_user(res.data);
			var mdata = res.data;
			mdata["placa"] = placa;
			// mdata['placa']= placa;
			history.push({ pathname: "/cotizator", data: mdata });
		});
	}
	function submit() {
		// alert("hola")
		var patt = new RegExp(/^\D*\d{8}$/);
		var pattcel = new RegExp(/^\D*\d{9}$/);

		var res = patt.test(dni);
		var resCel = pattcel.test(celular);

		if (!res) {
			alert("Dni no validao , 8  digitos");
			return;
		}
		if (!resCel) {
			alert(" no validao , 9  digitos");
			return;
		}
		if (placa.length <= 3) {
			alert(" La placa debe tener mas de 3 caracteres");
			return;
		}

		handleClick();
	}

	const [dni, setdni] = useState("");
	const [celular, setcelular] = useState("");
	const [placa, setplaca] = useState("");
	const [data_user, setdata_user] = useState([]);
	useEffect(() => {
		console.log("---- ", dni);
	}, [dni]);

	return (
		<div>
			<div className="contain">
				<div className="left_">
					<img src={RimacLogo} className="logoRimac" />
					<img src={require("../img/chica.png").default} className="chica" />
					<div className="blok_right">
						<div className="tag_nuevo">¡NUEVO! </div>
						<div className="h1_sup">
							{" "}
							<span className="span_h1_sup"> Seguro</span> Vehicular Traking
						</div>
						<div className="tell_us">Cuentanos donde haras el seguimiento de tu pedido</div>
					</div>

					<div className="copyright">© 2021 RIMAC Seguros y Reaseguros.</div>

					<div class="phone_responsive">
						<pan class="phone_v">
							<img src="/static/media/phone.c43d97dd.svg" />
						</pan>
						<span class="nphone"> Llámanos </span>
					</div>
				</div>

				<div className="right_">
					<div class="top_data">
						<div className="dudas">
							<span className="dud_txt">¿Tienes alguna duda? </span>
						</div>

						<div className="phone">
							<pan className="phone_v">
								<img src={phone} />
							</pan>
							<span className="nphone">(01) 411 6001 </span>
						</div>
					</div>
					<div class="container">
						<div className="formData_classN">
							<div className="tit_form">Déjanos tus datos</div>
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text" id="basic-addon1">
										DNI
										<span>
											<img src={Down_row} style={{ marginLeft: 12 }} />
										</span>
									</span>
								</div>
								<input type="text" class="form-control  fc_joss" placeholder="Nro. de doc" aria-label="Username" aria-describedby="basic-addon1" onChange={(val) => setdni(val.target.value)} />
							</div>
							<div class="input-group mb-3">
								<input type="text" class="form-control fc_joss" placeholder="Celular" aria-label="Username" aria-describedby="basic-addon1" onChange={(val) => setcelular(val.target.value)} v />
							</div>
							<div class="input-group mb-3">
								<input type="text" class="form-control fc_joss" placeholder="Placa" aria-label="Username" aria-describedby="basic-addon1" onChange={(val) => setplaca(val.target.value)} />
							</div>
							<div className="row_">
								<div className="green_box">
									<image src={check} />
								</div>
								<div className="pol_text" style={{ paddingBottom: 40 }}>
									Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
								</div>
							</div>
							<button type="button" class="btn btn-primary but_rimac" onClick={() => submit()}>
								<span className="txt_but_rimac">COTÍZALO</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
