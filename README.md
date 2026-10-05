# SPECTRA · Brand & Design System

Sistema vivo de marca e design do Grupo Spectra, reunindo **Spectra Minerais**, **Sür** e **Ana Rios** em uma arquitetura única de documentação.

**Site publicado:** https://grupo-spectra.github.io/brand-design-system/

## Estrutura

- `app/` — App Router do Next.js e rotas estáticas.
- `components/` — shell, navegação e páginas visuais do sistema.
- `lib/system.js` — fonte de verdade de marcas, paletas, conteúdo e navegação.
- `public/` — ativos públicos.
- `.github/workflows/nextjs.yml` — única workflow de build e publicação no GitHub Pages.

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

O Next.js usa `output: 'export'` e gera o site em `out/`. Em produção o projeto usa o `basePath` `/brand-design-system` para GitHub Project Pages.

## Publicação

Todo push na `main` executa **Deploy Next.js to GitHub Pages**. A workflow configura Pages para Next.js, gera o export estático, envia somente `out/` como artefato e publica no ambiente `github-pages`.

A página do repositório no GitHub renderiza este README. O site visual é o endereço do GitHub Pages acima.

## Direção visual

- **Spectra** — luz, refração, espectro e tecnologia.
- **Sür** — preto, prata, metal e precisão.
- **Ana Rios** — luxo orgânico, editorial, marfim, vinho e champagne.

A estrutura de documentação toma como referência o projeto `agenciahauliau/brand-and-design-system`; identidade, tokens, direção de arte e conteúdo são próprios do Grupo Spectra.
