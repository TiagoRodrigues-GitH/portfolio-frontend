# Portfolio Frontend

Portfolio pessoal desenvolvido em Angular com foco em apresentação profissional, projetos, contato e conteúdos autorais relacionados à automação, mobilidade e sistemas inteligentes.

## Visão geral

Este projeto foi pensado para funcionar como um portfólio digital moderno, com:

- navegação por seções e páginas dedicadas;
- destaque para projetos e experiências profissionais;
- página de contato com canais de comunicação;
- painel administrativo para gestão de conteúdos;
- estrutura preparada para conteúdos em múltiplos idiomas.

## Arquitetura do projeto

A aplicação segue uma organização simples e modular em Angular:

- src/app/app.component.*: shell principal da aplicação, incluindo top bar, menu e footer;
- src/app/app-routing.module.ts: definição das rotas principais da aplicação;
- src/app/pages/: páginas da interface como home, projetos, contato, login e administração;
- src/app/services/: comunicação com backend e serviços de autenticação;
- src/app/models/: modelos de dados usados pela aplicação;
- src/app/shared/: dados compartilhados, como a lista de projetos em destaque;
- src/assets/: mídias e imagens do site;
- src/environments/: configurações de ambiente.

### Fluxo de funcionamento

1. O usuário acessa a aplicação pelo navegador.
2. O módulo principal renderiza o shell compartilhado e a rota ativa.
3. Cada página é carregada de acordo com a URL atual.
4. Os dados de projetos podem vir de um backend via service HTTP.
5. O painel administrativo exige autenticação antes de permitir criação, edição e exclusão.

## Tecnologias principais

- Angular 21
- TypeScript
- RxJS
- HTML/CSS
- Angular Router
- HttpClient

## Como executar localmente

```bash
npm install
npm start
```

A aplicação estará disponível em:

```text
http://localhost:4200/
```

## Como adicionar textos autorais

Os textos podem ser adicionados em seções do site seguindo a estrutura de título, texto e referências. Exemplo:

```text
Título: Sistema ADAS no Brasil
Texto: O avanço dos sistemas ADAS no Brasil representa uma etapa importante na modernização da indústria automotiva.
Referências: normas de segurança veicular, estudos de mercado automotivo e evolução de sensores.
```

Outros exemplos de conteúdos:

```text
Título: Evolução da Automotiva no Brasil
Texto: A trajetória da automotiva brasileira mostra como produção local e tecnologia impulsionaram a inovação.
Referências: relatórios setoriais e tendências de mobilidade.
```

```text
Título: História do desenvolvimento dos carros
Texto: Os veículos evoluíram de machines mecânicas para plataformas digitais com sensores e inteligência artificial.
Referências: história da indústria automotiva e engenharia de software embarcado.
```

## Idiomas

A interface inclui suporte para tradução de referência em:

- Português (Brasil)
- Inglês
- Alemão

Os flags no topo da página abrem páginas dedicadas com versões de conteúdo em cada idioma.

## Estrutura de deploy e build

Para gerar a build de produção:

```bash
ng build
```

Os artefatos ficam na pasta `dist/` e podem ser publicados em qualquer ambiente estático ou servidor compatível com Angular.

## Observações

- A paleta visual foi adaptada para uma escala azul mais clara e legível.
- A imagem principal foi ajustada para manter uma aparência fixa, sem movimento.
- O foco de contato foi alinhado ao setor automotivo, incluindo desenvolvimento de sistemas, front-end, back-end e IA aplicada à mobilidade e ADAS.
- A estrutura do admin foi mantida para permitir criação e gerenciamento de projetos do portfólio.
