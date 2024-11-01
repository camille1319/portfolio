import React from 'react';
import { Cabecalho } from '../componentes/cabecalho';
import { Titulo } from '../componentes/title';
import { TituloSessao } from '../componentes/tituloSessao';
/* import { Cartao } from '../componentes/cartao'; */
import { Likes } from '../componentes/likes'
import { Rodape } from '../componentes/rodape';
import Favoritos from '../componentes/favoritos'; // Importando o novo componente

const projetos = [
  { nome: 'sobre mim', descricao: 'Sou a Camille Victória Rodrigues Silva, tenho 17 anos. Atualmente moro em Palmas-TO, estou no segundo ano do ensino médio e trabalho como assistente admnistrativo de menor aprendiz pela instituição Renapsi.' },
  { nome: 'Experiencias de trabalho', descricao: 'Profissão que tenho experiencias: Assistente administrativo , auxiliar de atendente, cuidadora de crianças.' },
  { nome: 'Objetivos', descricao: 'Este projeto tem como obetivo mostrar aos leitores a minha capacidade de programadora , mostrar as minhas experiencias de trabalho, e um pouco de quem eu sou.' },
];

export default function Home() {
  return (
    <div className="app">
      <Cabecalho
        nome="Meu Portfólio"
        subtitulo="Bem-vindo ao meu espaço"
        descricao="Aqui você encontrará algumas informações sobre mim ."
      />
      <Likes/>
      <Titulo nome="informações" subnome="Algumas informações recentes" />
     {/*  <section className="projetos">
        {projetos.map((projeto, index) => (
          <Cartao
            key={index}
            titulo={projeto.nome}
            conteudo={projeto.descricao}
            botaoTexto="Ver Projeto"
            onClickBotao={() => alert(`Abrindo ${projeto.nome}`)}
          />
        ))}
      </section> */}
      <Favoritos projetos={projetos} /> 
      <TituloSessao titulo="Experiência e Educação" />
      <Rodape 
        linkGithub="https://github.com/JoaoIto"
        linkLinkedin="https://www.linkedin.com/in/joao-ito-b27b821b9/"
        linkEmail="camillevictoria.contato@gmail.com"
      />
    </div>
  );
}
