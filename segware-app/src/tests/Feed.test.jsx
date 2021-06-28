import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Feed from '../pages/Feed';
import renderWithRouter from './config/renderWithRouter';

describe('Teste se a página Feed', () => {
  it('renderiza o componente Header', async () => {
    renderWithRouter(<Feed />);
    expect(screen.getByText('SEU POST')).toBeInTheDocument();
  });

  it('renderiza os botões enviar e "ver todos os posts"', () => {
    renderWithRouter(<Feed />);
    const verPosts = screen.getByRole('button', { name: /Ver todos os seus posts/i });
    const btnEnviar = screen.getByRole('button', { name: /Enviar/i });
    expect(btnEnviar).toBeInTheDocument();
    expect(verPosts).toBeInTheDocument();
  });

  it('se é possível escrever no input de texto', () => {
    renderWithRouter(<Feed />);
    const textInput = screen.getByPlaceholderText('Escreva aqui');
    const TEXT = 'teste texto';
    fireEvent.change(textInput, { target: { value: TEXT } });
    expect(textInput.value).toBe(TEXT);
  });

  it('se redireciona a pessoa para a página de Posts ao clikar no botão "ver todos os posts"', async () => {
    const { history } = renderWithRouter(<Feed />);
    const verPosts = screen.getByRole('button', { name: /Ver todos os seus posts/i });
    expect(history.location.pathname).toBe('/');
    fireEvent.click(verPosts);
    await waitFor(() => expect(history.location.pathname).toBe('/feeds'));
  });
});
