import { notFound } from 'next/navigation';
import BrandShell from '../../../../components/BrandShell';
import PageRenderer from '../../../../components/PageRenderer';
import DesignIdentityPage from '../../../../components/DesignIdentityPage';
import { brands, navigation, getPage, staticParams } from '../../../../lib/system';

const extraDesignPages = {
  concepts: { id: 'concepts', title: 'Brand Concepts', eyebrow: 'Identity', description: 'Os conceitos que governam a expressão visual e funcional de cada marca.' },
  photography: { id: 'photography', title: 'Photography', eyebrow: 'Identity', description: 'Direção fotográfica por marca: assunto, luz, fundo, enquadramento, famílias e critérios de aprovação.' }
};

export function generateStaticParams() {
  const extras = Object.keys(brands).flatMap(brand => Object.keys(extraDesignPages).map(page => ({ brand, area: 'design', page })));
  return [...staticParams, ...extras];
}

export const dynamicParams = false;

export default async function SystemPage({ params }) {
  const { brand, area, page } = await params;
  const brandData = brands[brand];
  const extraPage = area === 'design' ? extraDesignPages[page] : null;
  const pageData = getPage(area, page) || extraPage;
  if (!brandData || !pageData || !navigation[area]) notFound();

  return (
    <BrandShell brandKey={brand} area={area} pageId={page}>
      {extraPage
        ? <DesignIdentityPage brandKey={brand} pageId={page} />
        : <PageRenderer brandKey={brand} area={area} page={pageData} />}
    </BrandShell>
  );
}
