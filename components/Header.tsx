import { css } from "@/styled-system/css";

const Header = () =>{
  return(
    <header className={css({
      fontSize: '1.25rem',
      fontWeight: 'bold',
      p:'28px 28px 20px 28px',
    })}>
      Habit Todo
    </header>
  )
}

export default Header;
