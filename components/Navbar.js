import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
        <li>
        <Link href="/">
            <a>Home</a>
            </Link>
        </li>
        <li>
        <Link href="/about">
            <a>Quem Somos</a>
            </Link>
        </li>
        <li>
            <Link href="/produtos">
            <a>Produtos</a>
            </Link>
        </li>
        <li>
            <Link href="/todos">
            <a>Lista</a>
            </Link>
        </li>
    </ul>
  )
}

export default Navbar