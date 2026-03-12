"use client"
import { useEffect, useRef } from "react"
import { createChart, ColorType } from "lightweight-charts"

export default function Chart() {
    const chartContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!chartContainerRef.current) return

        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current?.clientWidth })
        }

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: "transparent" },
                textColor: "#00f0ff",
            },
            grid: {
                vertLines: { color: "rgba(0, 240, 255, 0.1)" },
                horzLines: { color: "rgba(0, 240, 255, 0.1)" },
            },
            width: chartContainerRef.current.clientWidth,
            height: 400,
        })

        // Simulated data for The Final Trade aesthetic
        const lineSeries = chart.addLineSeries({
            color: "#00ff66",
            lineWidth: 2,
        })
        
        // Generate mock data
        const data = []
        let lastClose = 45000
        const date = new Date()
        date.setDate(date.getDate() - 30)
        
        for (let i = 0; i < 30; i++) {
            lastClose += Math.random() * 2000 - 1000
            data.push({
                time: date.toISOString().split("T")[0],
                value: lastClose
            })
            date.setDate(date.getDate() + 1)
        }
        
        lineSeries.setData(data)

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
            chart.remove()
        }
    }, [])

    return (
        <div className="glass-panel w-full overflow-hidden p-4">
            <h2 className="text-2xl font-bold mb-4 text-[#00f0ff] uppercase tracking-widest pl-4">Market Intel / Live</h2>
            <div ref={chartContainerRef} className="w-full" />
        </div>
    )
}
