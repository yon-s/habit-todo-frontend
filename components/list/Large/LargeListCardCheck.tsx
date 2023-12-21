import CheckboxCircle from "@/components/button/CheckboxCircle";

import LargeListCardNext from "./LargeListCardNext";

const LargeListCardCheck = ({
  title
}:{title: string}) => {
  return(
    <LargeListCardNext startIcon={<CheckboxCircle />} title={title} />
  )
}

export default LargeListCardCheck;
