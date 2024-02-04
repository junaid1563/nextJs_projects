import { notFound } from "next/navigation"
import { Metadata } from "next";

type Props = {
    params: { i: string, j: string }
}

export function generateMetadata({ params }: Props): Metadata {
    return { title: { absolute: `Review ${params.j} of Blog ${params.i}` } }
}

export default function Review({ params }: { params: { i: string, j: string } }) {
    if (parseInt(params.j) > 1000) {
        notFound();
    }
    return <h1>Review {params.j} of product {params.i}</h1>
}