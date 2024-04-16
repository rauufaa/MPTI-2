
function SubmitButton({isLoading, text}) {
    return (
        <button className="btn w-full">
            <span className={isLoading ? "loading loading-spinner" : ""}></span>
            {isLoading ? "loading" : text}
        </button>
    )
}

export default SubmitButton