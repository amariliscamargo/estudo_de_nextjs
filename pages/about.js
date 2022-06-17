import React from 'react'

import Link from 'next/link';
const About = () => {
  return (
    <div>
        <h1>Página de about</h1>
        <Link href="/">
          <a>Voltar</a>
        </Link>
    </div>
  )
}

export default About