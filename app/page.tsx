import Header from '@/components/Header'
import Main from '@/components/Main'
import MainTitle from '@/components/title/MainTitle'

export default function Home() {
  return (
    <>
      <Header/>
      <Main>
        <MainTitle title='TODAY'/>
      </Main>
    </>
  )
}
