import React from 'react'
import "./styles/header_rimac.css"
import RimacLogo from "../svg/logo2.svg"
import phone from "../svg/phone.svg"
import { useHistory } from "react-router-dom";


export default function Header_rimac() {



const history = useHistory();
  function handleClick() {

    history.push("/");
  }
    return (
        <div className="hh_eader">
                <img src={RimacLogo} className="logo"  onClick={handleClick} />
           		<div class="call_us">
						<div className="dudas">
							{" "}
							<span className="dud_txt">¿Tienes alguna duda? </span>
						</div>

						<div className="phone_h">
							<pan className="phone_v">
								<img src={phone} />

							</pan>
<span className="nphone_2">Llámanos</span>
							<span className="nphone">(01) 411 6001 </span>

						</div>
					</div>
        </div>
    )
}



