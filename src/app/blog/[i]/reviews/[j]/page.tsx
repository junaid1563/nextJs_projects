export default function Review({ params }: { params: { i: string, j: string } }) {
    return <h1>Review {params.j} of product {params.i}</h1>
}