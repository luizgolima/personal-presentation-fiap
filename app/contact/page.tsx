'use client'

import Link from "next/link";
import Image from "next/image";
import { Header } from '@/app/shared';
import homePic from "@/public/homePagePic.jpg";
import { useState } from "react";

export default function ContactPage() {
    const [fullAddress, setFullAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showAddress, setShowAddress] = useState(false); // Novo estado

    const cep: string = "06390530";

    const fetchAddress = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                setError("CEP not found");
            } else {
                const { logradouro, bairro, localidade, uf, cep } = data;
                const address = `${logradouro}, ${bairro}, ${localidade} - ${uf}, ${cep}`;
                setFullAddress(address);
                setShowAddress(true); // Mostrar o endereço após buscar com sucesso
            }
        } catch (error) {
            setError("An error occurred while fetching the address.");
        } finally {
            setLoading(false);
        }
    };

    const toggleAddress = () => {
        setShowAddress(!showAddress);
    };

    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center mb-8">
                <Image
                    src={homePic}
                    alt="Luiz Lima's photo"
                    height={300}
                    width={300}
                    title="Got impressed?"
                    className="mt-32 mb-8 rounded-full hover:scale-105"
                />
                <h1 className="text-4xl font-bold text-center mb-2">Get in touch!</h1>
                <h3 className="w-4/5 text-2xl text-center mb-2">Page in progress...</h3>
                <p className="mb-2">Location 06390-530</p>
                {showAddress && <p className="mb-8">Full Address: {fullAddress}</p>}
                {error && <p className="mb-8">Error: {error}</p>}
                <button
                    className="bg-black md:bg-blue-500 text-white md:text-black px-4 py-2 rounded hover:bg-blue-400 mb-4"
                    onClick={showAddress ? toggleAddress : fetchAddress} // Alterar a ação do botão
                    disabled={loading}
                >
                    {loading ? "Loading..." : showAddress ? "Hide address" : "See full address"}
                </button>
                <nav>
                    <ul className="flex flex-col md:flex-row gap-4">
                        <li className="text-center">
                            <Link
                                href="/"
                                title="Come on, stay!"
                                className="text-blue-500 hover:text-blue-400 hover:underline"
                            >
                                Back to home page!
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link
                                href="/experience"
                                title="Yeah!"
                                className="text-blue-500 hover:text-blue-400 hover:underline"
                            >
                                Back to my experiences!
                            </Link>
                        </li>
                    </ul>
                </nav>
            </main>
        </>
    );
}
