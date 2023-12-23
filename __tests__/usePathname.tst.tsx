import { navs } from "@/const/navs";
import { describe, expect, it, jest} from "@jest/globals";
import '@testing-library/jest-dom'
import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

import Nav from '../components/Nav';

declare module "expect" {
  interface Matchers<R extends Promise<void> | void>
    extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}


// モックの作成
jest.mock('next/navigation', () => ({
  ...require('next-router-mock'),
  usePathname: jest.fn(),
}));

describe('Nav Component', () => {
  it('pathnameが正しか確かめるテスト', () => {
    // usePathname のモックの振る舞いを設定
    (usePathname as jest.Mock).mockReturnValue('/mock-path');

    // コンポーネントをレンダリング
    render(<Nav />);

    // レンダリングされたテキストを検証
    navs.forEach((nav) => {
      expect(screen.getByText(nav.text)).toBeInTheDocument();
    });
  });
});
