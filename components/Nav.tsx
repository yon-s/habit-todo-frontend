"use client"

import { css } from "@/styled-system/css";
import { faCalendarDays, faCircleUser ,faGear, faList, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { usePathname } from "next/navigation";

const navs = [
  {'href': '/', 'icon': faList, 'text': 'TODAY'},
  {'href': '/record', 'icon': faCalendarDays, 'text': '記録'},
  {'href': '/task-setting', 'icon': faGear, 'text': 'タスク設定'},
  {'href': '/user', 'icon': faCircleUser, 'text': 'ユーザー'},
]
const Nav = () => {
  const pathname = usePathname();
  return(
    <nav className={css({
      bottom: '0',
      left: { md: "0" },
      margin: { md: '0 auto' },
      maxWidth: { md: 'maxWidth' },
      position: 'fixed',
      right: {md: '0'},
      width:'100%'
    })}>
      <ul className={css({
        display: 'flex',
        justifyContent: 'space-between',
        pb: '26px',
        pl:'bodySide',
        pr:'bodySide',
        pt: '16px',
      })}>
        {navs.map((nav,index)=>(
          <li key={index}>
            <Link href={nav.href} legacyBehavior>
              <a className={css({
                alignItems:'center',
                color: pathname === nav.href ? 'inherit' : 'gray400',
                display:'flex',
                flexFlow: 'column',
              })}>
                <FontAwesomeIcon className={css({
                   fontSize: '22px',
                  fontWeight: '900',
                })} icon={nav.icon} />
                <div className={css({
                  fontSize: '0.75rem',
                  mt: '6px'
                })}>{nav.text}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default  Nav;
