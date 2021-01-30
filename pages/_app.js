import { ProvideAuth } from '../lib/auth'
import '../styles/globals.css'

{/*Inicializado a app */}
function MyApp({ Component, pageProps }) {
  return  <ProvideAuth>
           <Component {...pageProps}/>
        </ProvideAuth> // criando provedor do context para todas paginas que fore, gerado
     }

export default MyApp
