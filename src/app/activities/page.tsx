import HeaderBanner from '@/components/HeaderBanner';
import Head from 'next/head';

export default function Activities() {
  return (
    <>
      <Head>
        <title>Rannutsav - Activities</title>
      </Head>
       <HeaderBanner
              bgImage="/img/bg3-lg.jpg"
              title="Activities To Do"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Activities" }
              ]}
            />
    </>
  );
}