import LargeListCardNext from '@/components/list/Large/LargeListCardNext'
import {todos} from '@/const/toods'

export default function Home() {
  return (
    <>
      {todos.map((todo)=>(
        <LargeListCardNext href={'/' + todo.id} key={todo.id} title={todo.name} />
      ))}
    </>
  )
}
