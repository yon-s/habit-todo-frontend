import { describe, expect, it} from "@jest/globals";
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react'

import Nav from '../components/Nav';


describe('Nav', () => {
  it('リンクのテスト', () => {
    render(<Nav/>);
    const link = screen.getByRole('link', { name: 'TODAY' });
    fireEvent.click(link);
    expect(window.location.pathname).toBe('/');
  });
});
