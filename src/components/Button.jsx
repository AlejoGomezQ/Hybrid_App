function Button(props) {
    return (
        <button
            {...props}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pointer-cursor"
        >
        </button>
    );
}

export default Button;
