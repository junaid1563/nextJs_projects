export default function Blog({ params }: { params: { i: string } }) {
    return <h2>Blog Page {params.i}</h2>
}