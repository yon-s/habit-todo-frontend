import { css } from "@/styled-system/css";

const MainTitle = ({title}:{title:string}) => {
  return(
    <h1 className={css({
      fontSize: '2.25rem',
      fontWeight: '700',
    })}>{title}</h1>
  )
}

export default MainTitle;
