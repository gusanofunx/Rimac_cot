import React from 'react'
import Check from "../svg/check.svg"
function Incluye({txt}) {
    return (
        <div style={{flexDirection:'row'}}>
		<img src={Check} style={{ marginRight: '19px' }}/>
<span className="txt_incluye">
            {txt}

</span>
        </div>
    )
}

export default Incluye
