import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignUp from '../pages/SignUp';
import renderWithRouter from './config/renderWithRouter';
import fetchSignUp from '../service/signUpService';


describe('Teste se a página SignUp', () => {
  it('Obtem retorno do endpoint "https://segware-book-api.segware.io/api/sign-up"', async () => {
    const username = 'adm';
    const password = '123';
    expect(await fetchSignUp(username, password)).toEqual("Request failed with status code 500");
    console.log("Resposta do servidor STATUS 500, devido ao usuario ja ter sido cadastrado",)
  });

  it('renderiza o componente Header e o SubHeader', () => {
    renderWithRouter(<SignUp />);
    expect(screen.getByText('SEGWARE')).toBeInTheDocument();
    expect(screen.getByText('CADASTRO')).toBeInTheDocument();
  });

  it('renderiza o botão cadastrar e o link (Já possui conta ? logar)', () => {
    renderWithRouter(<SignUp />);
    const linkLogar = screen.getByText('logar');
    const btnCadastrar = screen.getByRole('button', { name: /Cadastrar/i });
    expect(btnCadastrar).toBeInTheDocument();
    expect(linkLogar).toBeInTheDocument();
  });

  it('se é possível escrever nos inputs', () => {
    renderWithRouter(<SignUp />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const PASSWORD = '123';
    const USERNAME = 'adm';
    fireEvent.change(usernameInput, { target: { value: USERNAME } });
    fireEvent.change(passwordInput, { target: { value: PASSWORD } });
    expect(usernameInput.value).toBe(USERNAME);
    expect(passwordInput.value).toBe(PASSWORD);
  });

  it('Será validado que o botão "Cadastrar" fica desabilitado caso não adicione username e password', () => {
    renderWithRouter(<SignUp />);
    const btnEntrar = screen.getByRole('button', { name: /Cadastrar/i });
    expect(btnEntrar).toBeDisabled();
  });

  it('se redireciona a pessoa para a página de Login ao clikar no botão cadastrar apos preenchimento do formulario', async () => {
    const { history } = renderWithRouter(<SignUp />);
    const btnCadastrar = screen.getByRole('button', { name: /Cadastrar/i });
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const PASSWORD = '123';
    const USERNAME = 'adm';
    fireEvent.change(usernameInput, { target: { value: USERNAME } });
    fireEvent.change(passwordInput, { target: { value: PASSWORD } });
    expect(history.location.pathname).toBe('/');
    fireEvent.click(btnCadastrar);
    await waitFor(() => expect(history.location.pathname).toBe('/sign-in'));
  });

  it('se redireciona a pessoa para a página de Login ao clikar no link (Já possui conta ? logar)', () => {
    const { history } = renderWithRouter(<SignUp />);
    const linkLogar = screen.getByText('logar');
    expect(history.location.pathname).toBe('/');
    fireEvent.click(linkLogar);
    expect(history.location.pathname).toBe('/sign-in');
  });
});
