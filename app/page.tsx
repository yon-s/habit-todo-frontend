import Content from '@/components/Content';
import LargeListCardCheck from '@/components/list/Large/LargeListCardCheck'
import MainTitle from '@/components/title/MainTitle'

const todos = [
  {'created_at': '2020/12/20', 'id': 1, 'name': 'テスト1', 'updated_at': '2020/12/20', 'user_id':1},
  {'created_at': '2020/12/21', 'id': 2, 'name': 'テスト2', 'updated_at': '2020/12/21', 'user_id':2},
  {'created_at': '2020/12/22', 'id': 3, 'name': 'テスト3', 'updated_at': '2020/12/22', 'user_id':3},

];

export default function Home() {
  return (
    <>
      <MainTitle title='TODAY'/>
      <Content>
        {todos.map((todo)=>(
          <LargeListCardCheck key={todo.id} title={todo.name} />
        ))}
      </Content>
    </>
  )
}
