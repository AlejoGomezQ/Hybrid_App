function Button(props) {
    return (
        <button
            {...props}
            className={`cursor-pointer w-full justify-center rounded-lg bg-purple-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 transition-colors duration-300`}
        >
        </button>
    )
}

export default Button

