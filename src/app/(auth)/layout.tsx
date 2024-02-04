export const metadata = {
    title: 'Auth Pages',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>   {children}
            < footer > <p>Extra footer for authentication pages</p></footer >
        </div>


    )
}
