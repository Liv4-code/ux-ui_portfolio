import Head from "next/head";
import { Genos } from "next/font/google";
import HomePage from ".//_home.js";

const genos = Genos({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Olivia | UX UI Developer</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HomePage />
            </main>
        </>
    );
}
