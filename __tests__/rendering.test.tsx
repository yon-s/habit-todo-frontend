import { describe, expect, it} from "@jest/globals";
import "@testing-library/jest-dom";
import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { render,screen} from "@testing-library/react";
import React from 'react';

import Header from "../components/Header";
import MainTitle from "../components/title/MainTitle"


declare module "expect" {
  interface Matchers<R extends Promise<void> | void>
    extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}

describe("Rendering", () => {
    it("コンポーネントのレンダリングのテスト", async () => {
      render(<Header />);
      expect(screen.getByText('Habit Todo')).toBeInTheDocument();

      render(<MainTitle title="TODAY" />);
      expect(screen.getByText('TODAY')).toBeInTheDocument();
    });
});
