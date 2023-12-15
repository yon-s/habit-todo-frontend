import { describe, expect, it} from "@jest/globals";
import "@testing-library/jest-dom";
import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import { render,screen} from "@testing-library/react";
import React from 'react';

import Header from "../components/Header";

declare module "expect" {
  interface Matchers<R extends Promise<void> | void>
    extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}

describe("Header", () => {
    it("コンポーネントのレンダリングのテスト", async () => {
      render(<Header />);
      expect(screen.getByText('Habit Todo')).toBeInTheDocument()
    });
});
