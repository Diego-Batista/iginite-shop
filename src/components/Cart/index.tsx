import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/legacy/image';
import { X } from 'phosphor-react';
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from './styles';

export function Cart() {
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
                        {/* <p>Parece que seu carrinho está vazio : (</p> */}

                        <CartProduct>
                            <CartProductImage>
                                <Image width={100} height={93} alt="" src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1668988800&Signature=emFUp2nfox00ZOjdVI3pPsInBEvYX1XSRTjX54CSsNSnNucm1xtQR8wQ6ZTBuBbEqwmvSZfCWxSdO4j5JS65up~QL1SwGDgP2parVtFV3Sw1iQHAh9aROrlzZmxtv8Gv78l3brW0PERJnogk2kzvRcMFujJAc~gdQw-5DC8WAF7O8BSm3w9QLkPoXGafbqPDQPTCr1rspYt6HXtbZzz4oCSAIMuBeBN8erNjW2X0qNaiBOautebtytHHLEXCOObC0oOmmT4CiGpKXGtLDTTwCJIzh1VsVa7z-2ZGJ8RDBpUai3czHhtecsTlcSwdDbzWhABBpxjDSkmAIDMxTQwcNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                            </CartProductImage>
                            <CartProductDetails>
                                <p>Camiseta Beyond the Limits</p>
                                <strong>R$ 79,90</strong>

                                <button>Remover</button>
                            </CartProductDetails>
                        </CartProduct>

                    </section>
                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>3 itens</p>
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