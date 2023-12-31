import Content from '@/components/Content';
import LargeListCardCheck from '@/components/list/Large/LargeListCardCheck'
import MainTitle from '@/components/title/MainTitle'
import {todos} from '@/const/toods'

export default function Home() {
  return (
    <>
      <MainTitle title='TODAY'/>
      <Content>
        {todos.map((todo)=>(
          <LargeListCardCheck href={'/' + todo.id} key={todo.id} title={todo.name} />
        ))}
      </Content>
    </>
  )
}
