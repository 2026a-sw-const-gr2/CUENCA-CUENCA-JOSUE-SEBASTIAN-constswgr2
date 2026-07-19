import { render, screen } from '@testing-library/react';
import App from './app';

describe('Aplicación de proyección fotovoltaica', () => {
  it('muestra el formulario y las dos versiones de la API', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /proyección fotovoltaica/i,
      })
    ).toBeTruthy();

    expect(
      screen.getByRole('button', {
        name: /calcular con api v1/i,
      })
    ).toBeTruthy();

    expect(
      screen.getByRole('button', {
        name: /calcular con api v2/i,
      })
    ).toBeTruthy();
  });
});