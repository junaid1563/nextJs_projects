import { Metadata } from "next";

type Props = {
    params: { i: string }
}

export function generateMetadata({ params }: Props): Metadata {
    return { title: `Blog ${params.i}` }
}
export default function Blog({ params }: Props) {
    return <h2>Blog Page {params.i}</h2>
}