import { fireEvent, render, screen } from "@testing-library/react";
import React, { ReactElement } from 'react';

import Sample from "../components/Sample"

describe("Sample", () => {
    it("コンポーネントのレンダリングのテスト", async () => {
        render(<Sample />);
    });
});
