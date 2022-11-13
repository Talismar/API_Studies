import React from 'react';
import TableListSeller from '../TableListSeller';

function ListSeller({sellerList, api_action}) {
  return (
    <main className='container'>
      
      <TableListSeller api_action={api_action} sellerList={sellerList}/>
            
    </main>
  );
}

export default ListSeller;