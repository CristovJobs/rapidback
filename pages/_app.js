import { AuthProvider } from '@lib/auth';
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import customTheme from '@styles/theme';
import { Global, css } from '@emotion/react';


const GlobaListyle = ({ children }) => {
  return (

    <>
      <CSSReset />
      <Global
        styles={css`

          @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500&display=swap');

          html {
                 min-width:360px;
                 scroll-bahavior:smooth;
                 font-family: 'Baloo 2', cursive !important;

           }

          #__next {
                     display:flex;
                     flex-direction: column;
                     min-height:100vh;
             }
          `}
         />
      {children}
    </>
  );
};


{/*Inicializado a app */ }
function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={customTheme}> {/**tema do aplicativo */}
    <AuthProvider>
      <GlobaListyle />
      <Component {...pageProps} />

    </AuthProvider>
  </ThemeProvider> // criando provedor do context para todas paginas que fore, gerado
}

export default MyApp
