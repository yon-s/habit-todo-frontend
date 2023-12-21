import ListTitle from "@/components/title/ListTitle";
import { css } from "@/styled-system/css";

import LargeListCard from "./LargeListCard";

type Props = {
  progress: string;
  title: string;
}

const LargeListCardProgress: React.FC<Props>  = ({
  progress,
  title
}) => {
  return(
    <LargeListCard>
      <ListTitle title={title}/>
      <div className={css({
        fontSize: '1.25rem',
        fontWeight:'700',
      })}>
        {progress}
      </div>
    </LargeListCard>
  )
}

export default LargeListCardProgress;
