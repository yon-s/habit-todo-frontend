import { css } from "@/styled-system/css";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { border } from "polished";

const CheckboxToggle = () =>{
  return(
      <label>
        <input className={css({srOnly: true}) + ' peer'} name="checkboxcircle" type="checkbox"/>
        <div className={css({
          _before: {bgColor:'gray400', borderRadius:'50%', boxShadow: 'toggle', content: '""', display:'block', height:"27px", transition:'all 0.3s', width:'27px'},
          _peerChecked: { _before: { transform: 'translateX(20px)'}, bgColor:'accent', borderColor:'accent'},
          alignItems:'center',
          border: '2px solid',
          borderColor:'gray400',
          borderRadius: '16px',
          boxSizing: 'border-box',
          display: 'flex',
          height: '31px',
          position: 'relative',
          transition:'all 0.3s',
          width: '51px',
        })}></div>
      </label>
  )
}

export default CheckboxToggle;
　
