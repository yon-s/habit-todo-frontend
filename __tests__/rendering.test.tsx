import { describe, expect, it} from "@jest/globals";
import "@testing-library/jest-dom";
import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { render,screen} from "@testing-library/react";
import React from 'react';

import Header from "../components/Header";
import Main from '../components/Main'
import MainTitle from "../components/title/MainTitle"


declare module "expect" {
  interface Matchers<R extends Promise<void> | void>
    extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}

describe("Rendering", () => {
  it("コンポーネントのレンダリングのテスト", async () => {
    render(<Header />);
    // await を使う方法
    expect(await screen.findByText('Habit Todo')).toBeInTheDocument();

    render(<Main><MainTitle title='TODAY'/></Main>);
    // 同期的な方法
    expect(await screen.getByText('TODAY')).toBeInTheDocument();
  });
});
