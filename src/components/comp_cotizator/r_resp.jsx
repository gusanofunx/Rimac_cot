import React from "react";

function R_resp(props) {

const {monto ,go} = props;
	return (
		<div className="r_resp">
			<div className="container_">
				<div className="row pad10">
					<div className="col-5">
<div className="cash_resp">
 $ {monto}
</div>
<div className="mensu">MENSUAL</div>


</div>
					<div className="col-7">
						<button type="button" class="btn btn-primary but_red_resp" onClick={go}>
							<span class="txt_but_rimac">lo quiero</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default R_resp;
