# SPECTRA · Brand & Design System

Sistema vivo de marca e design do Grupo Spectra, reunindo **Spectra Minerais**, **Sür** e **Ana Rios** em uma arquitetura única de documentação.

## Estrutura

- `app/` — App Router do Next.js e rotas estáticas.
- `components/` — shell, navegação e páginas visuais do sistema.
- `lib/system.js` — fonte de verdade de marcas, paletas, conteúdo e navegação.
- `public/` — ativos públicos.
- `.github/workflows/deploy-pages.yml` — única workflow de build e publicação no GitHub Pages.

## Rotas

As páginas são geradas estaticamente para cada marca e área:

```text
/{marca}/brand/{pagina}
/{marca}/design/{pagina}
```

Marcas: `spectra`, `sur`, `ana-rios`.

Exemplos:

```text
/spectra/brand/overview
/spectra/design/colors
/sur/brand/visual-identity
/ana-rios/design/typography
```

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run build
```

O Next.js usa `output: 'export'` e gera o site em `out/`. Em produção o projeto usa o `basePath` `/brand-design-system` para funcionar como GitHub Project Pages.

## Publicação

Um push na `main` executa a workflow **Deploy Brand Design System**, que instala dependências, gera o export estático e publica o diretório `out/` no GitHub Pages.

URL esperada:

`https://grupo-spectra.github.io/brand-design-system/`

## Direção visual

- **Spectra** — luz, refração, espectro e tecnologia.
- **Sür** — preto, prata, metal e precisão.
- **Ana Rios** — luxo orgânico, editorial, marfim, vinho e champagne.

A estrutura de documentação toma como referência o projeto `agenciahauliau/brand-and-design-system`; identidade, tokens, direção de arte e conteúdo são próprios do Grupo Spectra.
