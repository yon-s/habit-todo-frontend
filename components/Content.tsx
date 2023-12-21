import { css } from "@/styled-system/css";

const Content = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return(
    <div className={css({
      mt: '22px',
    })}>
      {children}
    </div>
  )
}

export default Content;
