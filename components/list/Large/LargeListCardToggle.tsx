import CheckboxToggle from "@/components/button/CheckboxToggle";
import ListTitle from "@/components/title/ListTitle";
import { css } from "@/styled-system/css";
import { ReactNode } from "react";

import LargeListCard from "./LargeListCard";



type Props = {
  startIcon?: ReactNode;
  title: string;
}

const LargeListCardToggle: React.FC<Props>  = ({
  startIcon,
  title
}) => {
  return(
    <LargeListCard>
      <div className={css({
        alignItems:'center',
        display:'flex',
        mr: '16px',
      })}>
        {startIcon}
      </div>
      <ListTitle title={title}/>
      <CheckboxToggle/>
    </LargeListCard>
  )
}

export default LargeListCardToggle;
