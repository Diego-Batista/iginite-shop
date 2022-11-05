
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import Logo from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/legacy/image'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (  
    <Container>
      <Header>
        <Link href="/" prefetch={false}>
          <Image src={Logo}  alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
