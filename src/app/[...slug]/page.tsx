export default function SlugPages({ params }: {
    params: {
        slug: string[]
    }
}) {
    if (params.slug.length === 2) {
        return <h1>Reading concept {params.slug[1]} of feature {params.slug[0]}</h1>
    } else if (params.slug.length === 1) {
        return <h1>Reading feature {params.slug[0]}</h1>
    }

    return <h1>Finally block</h1>
}