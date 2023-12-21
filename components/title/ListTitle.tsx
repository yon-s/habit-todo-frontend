import { css } from "@/styled-system/css";

const ListTitle = ({title}:{title: string})=> {
  const isJapanese = /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\uFF66-\uFF9D]/.test(title);
  const fontWeight = isJapanese ? 600 : 700;
  return(
    <div className={css({
      fontSize: '1.25rem',
      fontWeight,
      width:'100%',
    })}>
      {title}
    </div>
  )
}

export default ListTitle;
