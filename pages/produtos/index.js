import React from 'react'
import Link from 'next/link';

const index = () => {
  return (
    <>
      <div>Produtos</div>
      <div>
        <Link href='/'>
            <a>Voltar</a>
        </Link>
      </div>
    </>
    
  )
}

export default index