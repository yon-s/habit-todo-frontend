import Content from "@/components/Content";
import MainTitle from "@/components/title/MainTitle";
import { Metadata } from 'next'

const title = 'タスク設';

export const metadata: Metadata = {
  title,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainTitle title={title}/>
      <Content>{children}</Content>
    </>
 )
}
