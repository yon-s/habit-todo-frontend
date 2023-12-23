import { faArrowRotateRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { describe, expect, it} from "@jest/globals";
import "@testing-library/jest-dom";
import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { render,screen, waitFor} from "@testing-library/react";
import React from 'react';

import Content from '../components/Content'
import Header from "../components/Header";
import Main from '../components/Main';
import Nav from '../components/Nav';
import LargeListCardCheck from '../components/list/Large/LargeListCardCheck';
import LargeListCardToggle from '../components/list/Large/LargeListCardToggle';
import MainTitle from '../components/title/MainTitle';
import {todos} from '../const/toods';


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
          <LargeListCardCheck href={'/' + todo.id} key={todo.id} title={todo.name} />
        ))}
        <LargeListCardToggle startIcon={<FontAwesomeIcon icon={faArrowRotateRight} />} title='test' />
      </Content>
    </Main>);
    // 同期的な方法
    expect(await screen.getByRole('heading', {name: 'TODAY'})).toBeInTheDocument();
  });
});

describe('Nav', () => {
  it('link数テスト', () => {
    const { container } = render(<Nav />);

    expect(container.querySelectorAll('li')).toHaveLength(4);
  });

  it('正しいリンク文字を表示しているか', () => {
    const { container } = render(<Nav />);

    const links = container.querySelectorAll('li');

    expect(links[0].textContent).toBe('TODAY');
    expect(links[1].textContent).toBe('記録');
    expect(links[2].textContent).toBe('タスク設定');
    expect(links[3].textContent).toBe('ユーザー');
  });

  it("li要素に正しいcalssNameが入っているかのテスト", async () => {
    render(<Nav />);

    const expectedClass = 'items_center text_gray400 d_flex flex-flow_column';

    // 各 'li' 要素に対して検証を行う
    screen.getAllByRole("link").forEach((li) => {
      expect(li).toHaveClass(expectedClass);
    });
  });
});

