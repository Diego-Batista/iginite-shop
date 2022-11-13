import Image from 'next/legacy/image'
import Link from 'next/link'
import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
import { Cart } from '../Cart'

export function Header() {
    return (
        <HeaderContainer>
            <Link href="/" prefetch={false}>
                <Image src={Logo}  alt="" />
            </Link>

            <Cart/>
        </HeaderContainer>
    )
}