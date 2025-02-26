function Input(props) {
    return (
        <input
            {...props}
            className={`w-full rounded-lg bg-white/30 px-4 py-2 text-base text-white placeholder-white/70 border-2 border-white/50 outline-none focus:border-white/100 transition-all duration-300`}
        />
    )
}

export default Input

