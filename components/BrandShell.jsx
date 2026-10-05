'use client';

import Link from 'next/link';
import { useLayoutEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { brands, navigation } from '../lib/system';

const github = 'https://github.com/GRUPO-SPECTRA/brand-design-system';
const themeKey = brandKey => `spectra-brand-design-theme:${brandKey}`;

export default function BrandShell({ brandKey, area, pageId, children }) {
  const brand = brands[brandKey];
  const pathname = usePathname();
  const defaultTheme = brandKey === 'spectra' ? 'light' : brand.theme;
  const [theme, setTheme] = useState(defaultTheme);
  const [query, setQuery] = useState('');
  const [drawer, setDrawer] = useState(false);

  useLayoutEffect(() => {
    try {
      const saved = window.localStorage.getItem(themeKey(brandKey));
      setTheme(saved === 'dark' || saved === 'light' ? saved : defaultTheme);
    } catch {
      setTheme(defaultTheme);
    }
  }, [brandKey, defaultTheme]);

  const groups = useMemo(() => navigation[area].map(group => ({
    ...group,
    pages: group.pages.filter(([, title]) => title.toLowerCase().includes(query.toLowerCase()))
  })).filter(group => group.pages.length), [area, query]);

  const toggleTheme = () => {
    setTheme(current => {
      const next = current === 'dark' ? 'light' : 'dark';
      try { window.localStorage.setItem(themeKey(brandKey), next); } catch {}
      return next;
    });
  };

  return (
    <div className={`system brand-${brandKey}`} data-theme={theme}>
      <div className={`backdrop ${drawer ? 'show' : ''}`} onClick={() => setDrawer(false)} />
      <aside className={`sidebar ${drawer ? 'open' : ''}`}>
        <div className="sidebar-head">
          <Link className="ecosystem" href="/">
            <span className="ecosystem-mark" />
            <span><strong>GRUPO SPECTRA</strong><small>Brand & Design System</small></span>
          </Link>
          <div className="brand-switcher">
            {Object.entries(brands).map(([key, item]) => (
              <Link key={key} href={`/${key}/${area}/${pageId}`} className={`brand-option ${key === brandKey ? 'active' : ''}`}>{item.short}</Link>
            ))}
          </div>
        </div>

        <div className="sidebar-search"><label><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar páginas" /></label></div>
        <div className="mode-tabs">
          <Link className={area === 'brand' ? 'active' : ''} href={`/${brandKey}/brand/overview`}>Brand</Link>
          <Link className={area === 'design' ? 'active' : ''} href={`/${brandKey}/design/colors`}>Design System</Link>
        </div>
        <nav className="nav">
          {groups.map(group => (
            <div key={group.group}>
              <p className="nav-group">{group.group}</p>
              {group.pages.map(([id, title]) => {
                const href = `/${brandKey}/${area}/${id}`;
                const active = pathname?.endsWith(`/${area}/${id}`) || pageId === id;
                return <Link key={id} onClick={() => setDrawer(false)} className={`nav-link ${active ? 'active' : ''}`} href={href}>{title}</Link>;
              })}
            </div>
          ))}
        </nav>
        <div className="sidebar-foot"><strong>{brand.name}</strong><span>{brand.territory}</span></div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <button className="icon-button menu-button" onClick={() => setDrawer(true)} aria-label="Abrir menu">☰</button>
          <div className="crumb"><span>{area === 'brand' ? 'Brand' : 'Design System'} / </span><strong>{pageId.replaceAll('-', ' ')}</strong></div>
          <span className="topbar-space" />
          <span className="brand-context">{brand.concept}</span>
          <a className="icon-button" href={github} target="_blank" rel="noreferrer" aria-label="GitHub">↗</a>
          <button className="icon-button" onClick={toggleTheme} aria-label="Alternar tema">◐</button>
        </header>
        <main className="app">{children}</main>
      </section>
    </div>
  );
}
