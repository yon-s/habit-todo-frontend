import { css } from "@/styled-system/css";

const Header = () =>{
  return(
    <header className={css({
      fontSize: '1.25rem',
      fontWeight: '700',
      p:'bodySide',
      pb:'20px'
    })}>
      Habit Todo
    </header>
  )
}

export default Header;
