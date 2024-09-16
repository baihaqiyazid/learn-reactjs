const Button = (props) => {
    const { children = "Home", className, type="button", onClick=() => {}} = props

    return (
        <button 
            className={`h-10 px-6 font-semibold rounded-md ${className} text-white`} 
            type={type}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
}

export default Button