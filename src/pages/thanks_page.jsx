import React from "react";
import Header_rimac from "../components/header_rimac";
import "../styles/thanks.css";
import Separator from "../components/separator";

function Thanks_page(props) {

const { data } = props.location;
	return (
		<div style={{height:'100%',display: "block"}}>
			<Header_rimac />
			<div className="conaine" style={{display:'flex'}}>
				<div className="left_2">
					{/* <img src={require("../img/stuff.png").default} className="stuff" /> */}
					<img src={require("../img/men2.png").default} className="men" />
				</div>
				<div className="head_img"></div>
				<div className="right_2">
					<div className="cont_r">
						<div className="title col-red"> ¡Te damos la bienvenida!</div>
						<div className="title ">Cuenta con nosotros para proteger tu vehículo </div>
						<div className="txt_reg">Cuota mensual {data}</div>
						<div className="txt_reg">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</div>
						
<div className="txt_reg txt_reg_bold">joel.sanchez@gmail.com</div>
						<Separator h={50} />
						<button type="button" class="btn btn-primary but_rimac" onClick={() => {}}>
							<span className="txt_but_rimac">cómo usar mi seguro</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Thanks_page;
