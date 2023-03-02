import React from 'react';

import dynamic from 'next/dynamic';

const Details: any = dynamic(() => import('detailsMf/detail'), {
  loading: () => <p>Loading caused by client page transition ...</p>,
  ssr: false,
});

const NewComponent: any = dynamic(() => import('newMf/new'), {
  loading: () => <p>Loading caused by client page transition ...</p>,
  ssr: false,
});

/**
 * @export
 * @component
 * @name Home
 *
 * @description
 * Componente de exemplo para exportar do mf.
 */

export const Home = () => {
  return (
    <>
      <NewComponent />
      <Details />
    </>
  );
};
