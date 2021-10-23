import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import RimacLogo from "./svg/logo.svg";
import phone from "./svg/phone.svg";
import check from "./svg/check.svg";
import Down_row from "./svg/Down_row.svg";



function App() {
    return (
        <div className="App">
            <div className="contain">
                <div className="left_">
                    <img src={RimacLogo} className="logoRimac" />
                    <img src={require("./img/chica.png").default} className="chica" />
                    <div className="blok_right">
                        <div className="tag_nuevo">¡NUEVO! </div>
                        <div className="h1_sup"> <span className="span_h1_sup" > Seguro</span> Vehicular Traking</div>
                        <div>Cuentanos donde haras el seguimiento de tu pedido</div>
                    </div>

                    <div className="copyright">© 2021 RIMAC Seguros y Reaseguros.</div>
                </div>

                <div className="right_">
                    <div class="top_data">
                        <div className="dudas">  <span className="dud_txt">¿Tienes alguna duda? </span></div>

                        <div className="phone"><pan className="phone_v"><img src={phone} /></pan> <span className="nphone">(01) 411 6001 </span> </div>
                    </div>
                    <div class="container">
                        <div className="formData_classN">
                            <div className="tit_form">Déjanos tus datos</div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">DNI  <span>
                                      <img src={Down_row} style={{marginLeft:12}} />
                                    </span></span>

                                </div>
                                <input type="text" class="form-control  fc_joss" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">

                                <input type="text" class="form-control fc_joss" placeholder="Celular" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">

                                <input type="text" class="form-control fc_joss" placeholder="Placa" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="row_">
                                <div className="green_box"> <image src={check} /> </div>
                                <div className="pol_text" style={{ paddingBottom: 40, }}> Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</div>

                            </div>
                            <button type="button" class="btn btn-primary but_rimac"  >
<span className="txt_but_rimac">
                                COTÍZALO
</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
