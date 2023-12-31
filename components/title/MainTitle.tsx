import { css } from "@/styled-system/css";

const MainTitle = ({title}:{title:string}) => {
  const isJapanese = /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\uFF66-\uFF9D]/.test(title);
  const fontWeight = isJapanese ? 600 : 700;
  return(
    <h1 className={css({
      fontSize: '2.25rem',
      fontWeight,
    })}>{title}</h1>
  )
}

export default MainTitle;
