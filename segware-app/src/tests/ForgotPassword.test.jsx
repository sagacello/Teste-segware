import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForgotPassword from '../pages/ForgotPassword';
import renderWithRouter from './config/renderWithRouter';
import fetchForgotPassword from '../service/forgotPasswordService';

describe('Teste se a página ForgotPassword', () => {
  it('Obtem retorno do endpoint "https://segware-book-api.segware.io/api/forgot-password/adm"', async () => {
    const username = 'adm';
    const password = '123';    
    expect(await fetchForgotPassword(username)).toEqual(password);
  });

  it('renderiza o componente Header e o SubHeader', () => {
    renderWithRouter(<ForgotPassword />);
    expect(screen.getByText('SEGWARE')).toBeInTheDocument();
    expect(screen.getByText('RECUPEAR SENHA')).toBeInTheDocument();
  });

  it('renderiza o botão enviar e o link "Já possui conta ? logar"', () => {
    renderWithRouter(<ForgotPassword />);
    const linkLogar = screen.getByText('logar');
    const btnEnviar = screen.getByRole('button', { name: /Enviar/i });
    expect(btnEnviar).toBeInTheDocument();
    expect(linkLogar).toBeInTheDocument();
  });

  it('Será validado que o botão "Enviar" fica desabilitado caso não adicione username', () => {
    renderWithRouter(<ForgotPassword />);
    const btnEntrar = screen.getByRole('button', { name: /Enviar/i });
    expect(btnEntrar).toBeDisabled();
  });
  
  it('se é possível escrever no input', () => {
    renderWithRouter(<ForgotPassword />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const USERNAME = 'adm';
    fireEvent.change(usernameInput, { target: { value: USERNAME } });
    expect(usernameInput.value).toBe(USERNAME);
  });

  it('se ao clicar no botão enviar passando um usuário cadastrado retorna a senha do usuario da API', async () => {
    renderWithRouter(<ForgotPassword />);
    const btnEnviar = screen.getByRole('button', { name: /Enviar/i });
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput.value).toBe(' ');
    const USERNAME = 'adm';
    fireEvent.change(usernameInput, { target: { value: USERNAME } });
    await waitFor(() => fireEvent.click(btnEnviar));
    await waitFor(() => expect(passwordInput.value).toBe('123'));
  });

  it('se redireciona a pessoa para a página de Login ao clikar no link "Já possui conta ? logar"', () => {
    const { history } = renderWithRouter(<ForgotPassword />);
    const linkLogar = screen.getByText('logar');
    expect(history.location.pathname).toBe('/');
    fireEvent.click(linkLogar);
    expect(history.location.pathname).toBe('/sign-in');
  });
});
