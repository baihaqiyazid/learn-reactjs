const AuthLayout = (props) => {
    const {title, children} = props
    return (
        <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
            <p className="text-sm text-slate-500 mb-6">Welcome back again!</p>
            {children}
        </div>
    );
}

export default AuthLayout