import ListTitle from "@/components/title/ListTitle";
import { css } from "@/styled-system/css";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { ReactNode } from "react";

import LargeListCard from "./LargeListCard";


type Props = {
  href: string;
  startIcon?: ReactNode;
  title: string;
}

const LargeListCardNext: React.FC<Props>  = ({
  href,
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
      <Link href={href} legacyBehavior>
        <a>
          <FontAwesomeIcon className={css({
            fontSize: '1.75rem',
            ml: '16px'
            })} icon={faChevronRight}/>
        </a>
      </Link>
    </LargeListCard>
  )
}

export default LargeListCardNext;
