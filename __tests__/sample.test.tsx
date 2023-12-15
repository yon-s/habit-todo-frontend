import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";
import React from 'react';

import Sample from "../components/Sample"

describe("Sample", () => {
    it("コンポーネントのレンダリングのテスト", async () => {
        render(<Sample />);
    });
});
