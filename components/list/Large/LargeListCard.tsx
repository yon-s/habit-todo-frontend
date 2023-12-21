import { css } from "@/styled-system/css";

const LargeListCard  = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return(
    <div className={css({
      _first: {mt:0},
      bgColor: 'contentsBg',
      borderRadius: '16px',
      mt:'18px',
      p:'18px 16px',
    })}>
      <div className={css({
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '40px',
      })}>{children}</div>
    </div>
  )
}

export default LargeListCard;
