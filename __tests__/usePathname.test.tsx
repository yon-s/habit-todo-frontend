import { expect, jest } from '@jest/globals'
import { axe, render } from 'jest-axe';
import { usePathname } from 'next/navigation';

import Nav from '../components/Nav';;
import React from 'react';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn(),
}));

describe('NavUsePathname Component', () => {
  it('should render Nav with correct styling based on pathname', () => {
    usePathname.mockReturnValueOnce('/record');
    const { getByText } = render(<Nav />);
    const recordLink = getByText('記録');

    expect(recordLink).toHaveStyle('color: inherit');
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Nav />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
