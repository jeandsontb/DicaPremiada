import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Layout from '../components/layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>

          <Component {...pageProps} />

        </Layout>
      </ThemeProvider>

    </>
  )
}

export default MyApp;