import Link from 'next/link';
import { brands } from '../lib/system';

export default function Home() {
  return (
    <main className="portal">
      <div className="portal-glow" />
      <section className="portal-inner">
        <p className="portal-kicker">GRUPO SPECTRA · LIVING SYSTEM</p>
        <h1>Brand &<br />Design System</h1>
        <p className="portal-lead">Uma única arquitetura para três universos visuais. Luz, matéria e emoção organizadas em princípios, tokens, componentes e aplicações.</p>
        <div className="portal-grid">
          {Object.entries(brands).map(([key, brand], index) => (
            <Link key={key} href={`/${key}/brand/overview`} className={`portal-card brand-${key}`}>
              <span>0{index + 1}</span>
              <strong>{brand.name}</strong>
              <small>{brand.territory}</small>
              <i />
            </Link>
          ))}
        </div>
        <p className="portal-note">Estrutura inspirada no projeto Brand & Design System da Hauliau. Conteúdo, direção de arte e tokens são próprios do Grupo Spectra.</p>
      </section>
    </main>
  );
}
