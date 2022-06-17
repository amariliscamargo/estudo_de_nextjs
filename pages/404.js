import Link from 'next/link'
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  return (
        <div className={styles.content}>
            <h1 className={styles.h1}>404</h1>
            <p>Parece que essa página não existe!</p>
            <Link href="/"><a>Voltar</a></Link>
        </div>
    )
}

export default NotFound