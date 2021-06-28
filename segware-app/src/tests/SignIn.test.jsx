import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignIn from '../pages/SignIn';
import renderWithRouter from './config/renderWithRouter';
import fetchSignIn from '../service/signInService';

describe('Teste se a página SignIn', () => {
  it('Obtem um retorno do endpoint "https://segware-book-api.segware.io/api/sign-in"', async () => {
    const username = 'adm';
    const password = '123';
    const res = await fetchSignIn(username, password);
    expect(res.length).toBeGreaterThan(10);
  });

  it('renderiza o componente Header e o SubHeader', () => {
    renderWithRouter(<SignIn />);
    expect(screen.getByText('SEGWARE')).toBeInTheDocument();
    expect(screen.getByText('LOGIN')).toBeInTheDocument();
  });

  it('Será validado que o botão "Entrar" fica desabilitado caso não adicione username e password', () => {
    renderWithRouter(<SignIn />);
    const btnEntrar = screen.getByRole('button', { name: /Entrar/i });
    expect(btnEntrar).toBeDisabled();
  });

  it('renderiza os botões cadastrar, recuperar senha e entrar', () => {
    renderWithRouter(<SignIn />);
    const btnEntrar = screen.getByRole('button', { name: /Entrar/i });
    const btnCadastro = screen.getByRole('button', {
      name: /Ainda não tenho conta/i,
    });
    const btnEsqueceu = screen.getByRole('button', {
      name: /Esqueceu a senha ?/i,
    });
    expect(btnEntrar).toBeInTheDocument();
    expect(btnCadastro).toBeInTheDocument();
    expect(btnEsqueceu).toBeInTheDocument();
  });

  it('se é possível escrever nos inputs', () => {
    renderWithRouter(<SignIn />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const PASSWORD = '123';
    const USERNAME = 'adm';
    fireEvent.change(usernameInput, { target: { value: USERNAME } });
    fireEvent.change(passwordInput, { target: { value: PASSWORD } });
    expect(usernameInput.value).toBe(USERNAME);
    expect(passwordInput.value).toBe(PASSWORD);
  });

  it('se redireciona a pessoa para a página de cadastro ao clikar no botão cadastrar', () => {
    const { history } = renderWithRouter(<SignIn />);
    const btnCadastro = screen.getByRole('button', {
      name: /Ainda não tenho conta/i,
    });
    expect(history.location.pathname).toBe('/');
    fireEvent.click(btnCadastro);
    expect(history.location.pathname).toBe('/sign-up');
  });

  it('se redireciona a pessoa para a página de recuperar senha ao clikar no botão recuperar', () => {
    const { history } = renderWithRouter(<SignIn />);
    const btnEsqueceu = screen.getByRole('button', {
      name: /Esqueceu a senha ?/i,
    });
    expect(history.location.pathname).toBe('/');
    fireEvent.click(btnEsqueceu);
    expect(history.location.pathname).toBe('/forgot-password');
  });

  it('se redireciona a pessoa para a página de feed ao clikar no botão entrar', async () => {
    const { history } = renderWithRouter(<SignIn />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const btnEntrar = screen.getByRole('button', { name: /Entrar/i });
    expect(history.location.pathname).toBe('/');
    const PASSWORD = '123';
    const USERNAME = 'adm';
    fireEvent.change(usernameInput, { target: { value: USERNAME } });
    fireEvent.change(passwordInput, { target: { value: PASSWORD } });
    fireEvent.click(btnEntrar);
    await waitFor(() => expect(history.location.pathname).toBe('/feed'));
    expect(history.location.pathname).toBe('/feed');
  });

  it('se o token é gerado de acordo com o retorno do backEnd e salvo no localStorage ao clicar no botão Entrar', async () => {
    const { history } = renderWithRouter(<SignIn />);
    localStorage.clear();
    const password = '123';
    const username = 'adm';
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const btnEntrar = screen.getByRole('button', { name: /Entrar/i });
    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(btnEntrar);
    await waitFor(() => expect(history.location.pathname).toBe('/feed'));
    const res = await fetchSignIn(username, password);
    const token = JSON.parse(localStorage.getItem('token'));
    expect(token).toEqual(res);
  });
});
