import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/legacy/image';
import { X } from 'phosphor-react';
import { useCart } from '../../../hooks/useCart';
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from './styles';

export function Cart() {
    const { cartItems, removeCartItem } = useCart()
    const cartQuantity = cartItems.length

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton/>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay />
                <CartContent>
                    <CartClose>
                        <X size={24} weight="bold"/>
                    </CartClose>
                    
                    <h2>Sacola de compras</h2>

                    <section>
                        {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio : ( </p>}

                        {cartItems.map(cartItem => (
                            <CartProduct key={cartItem.id}>
                                <CartProductImage>
                                    <Image width={100} height={93} alt="" src={cartItem.imageUrl}/>
                                </CartProductImage>
                                <CartProductDetails>
                                    <p>{cartItem.name}</p>
                                    <strong>{cartItem.price}</strong>

                                    <button onClick={() => removeCartItem(cartItem.id)}>Remover</button>
                                </CartProductDetails>
                            </CartProduct>
                        ))}

                    </section>
                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>{cartQuantity} {cartQuantity > 1 ? 'itens' : 'item'}</p>
                            </div>
                            <div>
                                <span>Valor total</span>
                                <p>R$ 270,00</p>
                            </div>
                        </FinalizationDetails>
                        <button>Finalizar compra</button>
                    </CartFinalization>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}