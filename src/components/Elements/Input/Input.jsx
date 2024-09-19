import { forwardRef } from "react"

const Input = forwardRef((props, ref) => {
    const {type, name, placeholder} = props

    return (
        <input
            type={type}
            name={name} 
            placeholder={placeholder} 
            id={name}
            ref={ref}
            className="text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-50" 
        />
    )
})

export default Input