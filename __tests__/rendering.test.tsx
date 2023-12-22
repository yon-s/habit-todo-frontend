import { faArrowRotateRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { describe, expect, it} from "@jest/globals";
import "@testing-library/jest-dom";
import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { render,screen} from "@testing-library/react";
import { axe } from 'jest-axe';
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
    expect(await screen.getByText('TODAY')).toBeInTheDocument();
  });
});

describe('Nav Component', () => {
  it('should render Nav with all links', () => {
    const { getByRole } = render(<Nav />);
    const links = getByRole('link', { name: /TODAY|記録|タスク設定|ユーザー/ });

    expect(links).toHaveLength(4);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Nav />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
