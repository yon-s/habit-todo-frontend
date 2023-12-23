import Content from '@/components/Content';
import LargeListCardNext from '@/components/list/Large/LargeListCardNext'
import MainTitle from '@/components/title/MainTitle'
import {todos} from '@/const/toods'

export default function Home() {
  return (
    <>
      <MainTitle title='TODAY'/>
      <Content>
        {todos.map((todo)=>(
          <LargeListCardNext href={'/' + todo.id} key={todo.id} title={todo.name} />
        ))}
      </Content>
    </>
  )
}
