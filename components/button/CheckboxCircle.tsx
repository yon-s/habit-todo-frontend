import { css } from "@/styled-system/css";
import { border } from "polished";

const CheckboxCircle = () =>{
  return(
      <label>
        <input className={css({srOnly: true}) + ' peer'} name="checkboxcircle" type="checkbox"/>
        <div className={css({
          _peerChecked: { _before: {bgGradient:'url(/icon/check-solid.svg)', bgSize: 'cover', color:'white', content: '""', display:'block', height:"21px", left:'0', margin:'auto', position:'absolute', right:'0',top:'8px',  width:'20px', }, bgColor: 'accent', border: 'none', position: 'relative' },
          border: '2px solid',
          borderColor:'gray400',
          borderRadius: '50%',
          boxSizing: 'border-box',
          height: '40px',
          width: '40px',
        })}></div>
      </label>
  )
}

export default CheckboxCircle;
