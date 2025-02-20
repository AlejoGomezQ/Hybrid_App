function Button(props) {
    return (
        <button
            {...props}
            className="cursor-pointer w-2xs justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 "
        >
        </button>
    );
}
export default Button;
