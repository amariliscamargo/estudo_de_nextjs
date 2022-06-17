import MainContainer from '../components/MainContainer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
      <MainContainer>
        <Component {...pageProps} /> {/* componente que renderiza todas as páginas */}
      </MainContainer>
  )

}
export default MyApp
