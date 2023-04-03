import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import baseTheme from '~/presentation/common/themes/base-theme';
import BaseLayoutComponent from './base-layout';
import type { BaseLayoutProps } from './interfaces';

const defaultProps: BaseLayoutProps = {
  background: 'main',
  children: <Text>Test</Text>
};

const makeSut = () =>
  render(<BaseLayoutComponent {...defaultProps}></BaseLayoutComponent>);

describe('BaseLayoutComponent', () => {
  it('should render', () => {
    makeSut();
    const component = screen.getByTestId('base-layout');
    expect(component).toBeTruthy();
  });

  it('should render with children', () => {
    makeSut();
    const component = screen.getByText('Test');
    expect(component).toBeTruthy();
  });

  it('should render with background secondary', () => {
    defaultProps.background = 'secondary';
    makeSut();
    const component = screen.getByTestId('base-layout');
    expect(component.props.style.backgroundColor).toBe(
      baseTheme.colors.bgSecondary
    );
  });
});
