import { notFound } from 'next/navigation';
import BrandShell from '../../../../components/BrandShell';
import PageRenderer from '../../../../components/PageRenderer';
import { brands, navigation, getPage, staticParams } from '../../../../lib/system';

export function generateStaticParams() {
  return staticParams;
}

export const dynamicParams = false;

export default async function SystemPage({ params }) {
  const { brand, area, page } = await params;
  const brandData = brands[brand];
  const pageData = getPage(area, page);
  if (!brandData || !pageData || !navigation[area]) notFound();

  return (
    <BrandShell brandKey={brand} area={area} pageId={page}>
      <PageRenderer brandKey={brand} area={area} page={pageData} />
    </BrandShell>
  );
}
