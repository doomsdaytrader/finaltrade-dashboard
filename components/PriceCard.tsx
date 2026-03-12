"use client"
import { useEffect, useState } from "react"

export default function PriceCard({ coin }: { coin: string }) {
    const [price, setPrice] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`)
            .then(res => res.json())
            .then(data => {
                if (data[coin]) {
                    setPrice(data[coin].usd)
                }
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [coin])

    return (
        <div className="glass-panel p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300">
            <h3 className="text-xl font-bold tracking-widest text-white/70 uppercase mb-2">
                {coin.replace("-", " ")}
            </h3>
            {loading ? (
                <div className="w-16 h-8 bg-white/10 animate-pulse rounded"></div>
            ) : (
                <p className="text-3xl font-extrabold text-[#00f0ff] tracking-tight">
                    ${price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 }) ?? "N/A"}
                </p>
            )}
        </div>
    )
}
