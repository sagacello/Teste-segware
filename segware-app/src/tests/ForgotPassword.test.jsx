import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForgotPassword from '../pages/ForgotPassword';
import renderWithRouter from './config/renderWithRouter';

describe('Teste se a página ForgotPassword', () => {
  it('renderiza o componente Header e o SubHeader', () => {
    renderWithRouter(<ForgotPassword />);
    expect(screen.getByText('SEGWARE')).toBeInTheDocument();
    expect(screen.getByText('RECUPEAR SENHA')).toBeInTheDocument();
  });

  it('renderiza o botão enviar e o link (Já possui conta ? logar)', () => {
    renderWithRouter(<ForgotPassword />);
    const linkLogar = screen.getByText('logar');
    const btnEnviar = screen.getByRole('button', { name: /Enviar/i });
    expect(btnEnviar).toBeInTheDocument();
    expect(linkLogar).toBeInTheDocument();
  });

  it('se é possível escrever no input', () => {
    renderWithRouter(<ForgotPassword />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const USERNAME = 'adm';
    fireEvent.change(usernameInput, { target: { value: USERNAME } });
    expect(usernameInput.value).toBe(USERNAME);
  });

  it('se ao clicar no botão enviar passando um usuário cadastrado retorna a senha do usuario', async () => {
    renderWithRouter(<ForgotPassword />);
    const btnEnviar = screen.getByRole('button', { name: /Enviar/i });
    const usernameInput = screen.getByPlaceholderText('Username');
    const USERNAME = 'adm';
    fireEvent.change(usernameInput, { target: { value: USERNAME } });
    fireEvent.click(btnEnviar);
    const passwordInput = await waitFor(() => expect(screen.getByText('123')));
    expect(screen.getByText(passwordInput)).toBeInTheDocument();
  });

  it('se redireciona a pessoa para a página de Login ao clikar no link (Já possui conta ? logar)', () => {
    const { history } = renderWithRouter(<ForgotPassword />);
    const linkLogar = screen.getByText('logar');
    expect(history.location.pathname).toBe('/');
    fireEvent.click(linkLogar);
    expect(history.location.pathname).toBe('/sign-in');
  });
});
