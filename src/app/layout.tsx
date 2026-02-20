import { Analytics } from "@vercel/analytics/next"
import { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
    title: "MD. Rounak Parvez | Social Media Marketing Specialist",
    description:
        "Result-driven Social Media Marketing Specialist dedicated to building strong digital brand presence and scalable business growth. Expert in Facebook Marketing, Meta Ads, and Business Consultation."
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <Script
                    defer
                    src="https://analytics-xcfio.netlify.app/script.js"
                    data-website-id="cdcd5bc6-0f04-421e-8d3e-f09a2644085f"
                />
            </head>
            <body className={`antialiased`}>{children}</body>
            <Analytics />
        </html>
    )
}
