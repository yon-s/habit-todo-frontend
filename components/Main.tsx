import { css } from "@/styled-system/css";
import React, { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

const Main: React.FC<MainContentProps> = ({children})=>{
  return(
    <main className={css({
      margin: { md: '0 auto' },
      maxWidth: { md: 'maxWidth' },
      pb:'96px',
      pl:'bodySide',
      pr:'bodySide',
      pt:'30px',

    })}>{children}</main>
  )
}

export default Main;
