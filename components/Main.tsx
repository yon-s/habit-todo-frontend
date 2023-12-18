import { css } from "@/styled-system/css";
import React, { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

const Main: React.FC<MainContentProps> = ({children})=>{
  return(
    <main className={css({
      margin: { md: "0 auto" },
      maxWidth: { md: "768px" },
      p:'30px 28px 96px 28px',
    })}>{children}</main>
  )
}

export default Main;
