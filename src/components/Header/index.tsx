import Image from 'next/legacy/image'
import Link from 'next/link'
import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
import { Cart } from '../Cart'
import { useRouter } from 'next/router'

export function Header() {
    const { pathname } = useRouter()

    const showCartButton = pathname !== '/success'
    return (
        <HeaderContainer>
            <Link href="/" prefetch={false}>
                <Image src={Logo}  alt="" />
            </Link>

            {showCartButton && <Cart/>}
            
        </HeaderContainer>
    )
}