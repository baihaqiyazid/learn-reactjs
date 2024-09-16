const Label = (props) => {
    const { htmlFor, children } = props
    return (
        <label
            className="text-slate-700 font-bold block mb-2 text-sm"
            htmlFor={htmlFor}
        >
            {children}
        </label>
    )
}

export default Label