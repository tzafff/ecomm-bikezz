import Link from "next/link";


const ErrorPage = () => {
    return (
        <section className="py-72">
            <div className="container mx-auto">
                <h3 className="text-center mb-4">Something went wrong, during your checkout!</h3>
                <Link href='/' >
                    <button className="btn btn-accent rounded-full mx-auto">Back to Shopping</button>
                </Link>
            </div>
        </section>
    )
}
export default ErrorPage
