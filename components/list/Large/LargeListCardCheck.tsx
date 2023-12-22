import CheckboxCircle from "@/components/button/CheckboxCircle";

import LargeListCardNext from "./LargeListCardNext";

type Props = {
  href: string;
  title: string;
}

const LargeListCardCheck:React.FC<Props> = ({
  href,
  title
}) => {
  return(
    <LargeListCardNext href={href} startIcon={<CheckboxCircle />} title={title}/>
  )
}

export default LargeListCardCheck;
