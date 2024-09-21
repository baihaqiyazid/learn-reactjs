import { useEffect, useState } from "react"
import { useRef } from "react"
import { useSelector } from "react-redux"

const TableCart = (props) => {
    const {products} = props
    const carts = useSelector((state) => state.cart.data)
    const [total, setTotalPrice] = useState(0)
    const totalElement = useRef(null)

    useEffect(()=> {
        if(products.length > 0 && carts.length > 0){
            const sum = carts.reduce((total, item) => {
                const product = products.find(product => product.id === item.id)
                return total + product.price * item.qty
            }, 0)
            setTotalPrice(sum)
            localStorage.setItem('carts', JSON.stringify(carts))
        }

        if(carts.length > 0){
            totalElement.current.style.display = "table-row"
        }else {
            totalElement.current.style.display = "none"
        }

    }, [carts, products])

    return (
        <table>
            <thead>
                <tr>
                    <th className="border px-2 py-2 font-medium">Product</th>
                    <th className="border px-2 py-2 font-medium">Price</th>
                    <th className="border px-2 py-2 font-medium">Qty</th>
                    <th className="border px-2 py-2 font-medium">Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.length > 0 && carts.map((cart) => {
                        const product = products.find(product => product.id === cart.id)
                        return (
                            <tr key={cart.id}>
                                <td className="border px-4 py-2">{product.title.substring(0, 30)}</td>
                                <td className="border px-4 py-2">$ {product.price.toLocaleString()}</td>
                                <td className="border px-4 py-2">{cart.qty}</td>
                                <td className="border px-4 py-2">{(product.price * cart.qty).toLocaleString()}</td>
                            </tr>
                        )

                    })
                }
                <tr ref={totalElement}>
                    <td colSpan={3} className="border px-4 py-2 font-bold">Total</td>
                    <td className="border px-4 py-2 font-bold">{total.toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableCart