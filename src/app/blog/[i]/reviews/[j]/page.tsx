import { notFound } from "next/navigation"

export default function Review({ params }: { params: { i: string, j: string } }) {
    if (parseInt(params.j) > 1000) { 
        notFound();
    }
    return <h1>Review {params.j} of product {params.i}</h1>
}