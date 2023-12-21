import ListTitle from "@/components/title/ListTitle";
import { css } from "@/styled-system/css";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from "react";

import LargeListCard from "./LargeListCard";


type Props = {
  startIcon?: ReactNode;
  title: string;
}

const LargeListCardNext: React.FC<Props>  = ({
  startIcon,
  title
}) => {
  return(
    <LargeListCard>
      <div className={css({
        mr: '16px'
      })}>
        {startIcon}
      </div>
      <ListTitle title={title}/>
    </LargeListCard>
  )
}

export default LargeListCardNext;
