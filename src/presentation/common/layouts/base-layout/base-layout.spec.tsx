import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import BaseLayoutComponent from './base-layout';

const makeSut = () =>
  render(
    <BaseLayoutComponent>
      <Text>Test</Text>
    </BaseLayoutComponent>
  );

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
});
