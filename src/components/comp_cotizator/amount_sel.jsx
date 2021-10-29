import React ,{useEffect,useState} from "react";
import "../../styles/cotizator.css";
import Cotizator from "./../../pages/cotizator";
import "./1style.css";
import Gl_add from "../../svg/gl_add.svg";
import Gl_remove from "../../svg/gl_remove.svg";

function Amount_sel(props) {
const {monto_aseg ,set_monto } =props

function add(){
set_monto(mon => mon +100)
}

function remove(){
set_monto(mon => mon -100)
}

useEffect(() => {
	if(monto_aseg<12500){
set_monto(12500)
}
if(monto_aseg>=16000){}
}, [monto_aseg]);

	return (
		<div className="container_flui">
			<div className="row">
				<div className="col-sm-7">
<div style={{ justifyContent:"flex-start"}}>
<div className="row">
					<div className="indica">Indica la suma asegurada</div>
</div>
<div className="row">
					<div className="rrp  d-flex justify-content-center ">
						<div className="t_min">MIN $12,500</div>
<div className="sep_ver"></div>
						<div className="t_min">MAX $16,500</div>

					</div>
</div>
</div>
				</div>
				<div className="col-sm-5">
					<div className="selec_">
						<img  onClick={remove} src={Gl_remove} />
						<div className="txt_selec_">$ {monto_aseg}</div>
						<img  onClick={add} src={Gl_add} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Amount_sel;
