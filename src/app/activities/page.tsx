import HeaderBanner from '@/components/HeaderBanner';
import Head from 'next/head';

export default function Activities() {
  return (
    <>
      <Head>
        <title>Tours and Travels - Activities</title>
      </Head>
       <HeaderBanner
              bgImage="/img/_RC10943.jpg"
              title="Activities To Do"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Activities" }
              ]}
            />
    </>
  );
}