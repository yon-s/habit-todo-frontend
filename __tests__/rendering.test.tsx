import { faArrowRotateRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { describe, expect, it} from "@jest/globals";
import "@testing-library/jest-dom";
import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { render,screen} from "@testing-library/react";
import React from 'react';

import Content from '../components/Content'
import Header from "../components/Header";
import Main from '../components/Main';
import LargeListCardCheck from '../components/list/Large/LargeListCardCheck';
import LargeListCardToggle from '../components/list/Large/LargeListCardToggle';
import MainTitle from '../components/title/MainTitle';


const todos = [
  {'created_at': '2020/12/20', 'id': 1, 'name': 'テスト1', 'updated_at': '2020/12/20', 'user_id':1},
  {'created_at': '2020/12/21', 'id': 2, 'name': 'テスト2', 'updated_at': '2020/12/21', 'user_id':2},
  {'created_at': '2020/12/22', 'id': 3, 'name': 'テスト3', 'updated_at': '2020/12/22', 'user_id':3},

];

declare module "expect" {
  interface Matchers<R extends Promise<void> | void>
    extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}

describe("Rendering", () => {
  it("コンポーネントのレンダリングのテスト", async () => {
    render(<Header />);
    // await を使う方法
    expect(await screen.findByText('Habit Todo')).toBeInTheDocument();

    render(<Main>
      <MainTitle title='TODAY'/>
      <Content>
        {todos.map((todo)=>(
          <LargeListCardCheck key={todo.id} title={todo.name} />
        ))}
        <LargeListCardToggle startIcon={<FontAwesomeIcon icon={faArrowRotateRight} />} title='test' />
      </Content>
    </Main>);
    // 同期的な方法
    expect(await screen.getByText('TODAY')).toBeInTheDocument();
  });
});
