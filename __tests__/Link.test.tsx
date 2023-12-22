import { describe, expect, it } from "@jest/globals";
import { axe, render } from 'jest-axe';
import React from 'react';

import Nav from '../components/Nav';

describe('NavLink Component', () => {
  it('should render Link with correct href', () => {
    const { getByRole } = render(<Nav />);
    const link = getByRole('link', { name: 'TODAY' });

    expect(link).toHaveAttribute('href', '/');
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Nav />);
    const results = await axe(container);

    // 修正: toHaveNoViolations() ではなく.toBeAccessible()
    expect(results).toBeAccessible();
  });
});
