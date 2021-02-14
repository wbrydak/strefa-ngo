import React, { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import { render, RenderOptions } from '@testing-library/react';

import { theme } from '../styles/theme/theme';

const wrapper: RenderOptions['wrapper'] = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries' | 'wrapper'>) => {
  return render(ui, { ...options, wrapper });
};

export * from '@testing-library/react';

export { customRender as render };
