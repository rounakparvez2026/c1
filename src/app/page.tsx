"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    TrendingUp,
    Target,
    Users,
    Briefcase,
    GraduationCap,
    ArrowRight
} from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "Social Media Marketing",
        description:
            "Comprehensive social media strategies to boost your brand presence and engagement across all platforms.",
        icon: TrendingUp
    },
    {
        title: "Facebook Marketing (Organic)",
        description:
            "Grow your Facebook audience naturally with strategic content, engagement techniques, and community building.",
        icon: Users
    },
    {
        title: "Meta Ads Campaign (Paid)",
        description:
            "High-converting paid advertising campaigns on Facebook and Instagram with precise audience targeting.",
        icon: Target
    },
    {
        title: "Business Consultation",
        description:
            "Strategic guidance to scale your business digitally with data-driven marketing insights and growth plans.",
        icon: Briefcase
    },
    {
        title: "Career Opportunities",
        description:
            "Mentorship and guidance for aspiring Social Media Marketers looking to build a successful career.",
        icon: GraduationCap
    }
]

const contactLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/mdrounakparvez",
        handle: "@mdrounakparvez",
        icon: Facebook,
        external: true
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/mdrounakparvez",
        handle: "@mdrounakparvez",
        icon: Instagram,
        external: true
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/8801733383770",
        handle: "+880 1733-383770",
        icon: Phone,
        external: true
    },
    {
        label: "Email",
        href: "mailto:rounakparvez2006@gmail.com",
        handle: "rounakparvez2006@gmail.com",
        icon: Mail,
        external: false
    }
]

export default function Home() {
    return (
        <main id="main-content" className="min-h-screen">
            {/* Hero Section */}
            <section
                aria-labelledby="hero-heading"
                className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-primary/5 px-4 py-16 md:px-8 md:py-24 lg:py-32"
            >
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"
                    aria-hidden="true"
                />
                <div className="relative mx-auto max-w-6xl">
                    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
                        <div className="shrink-0">
                            <div className="overflow-hidden rounded-full border-4 border-primary/20 shadow-xl shadow-primary/10">
                                <Image
                                    src="/author.jpg"
                                    alt="MD. Rounak Parvez"
                                    width={200}
                                    height={200}
                                    className="h-40 w-40 object-cover sm:h-48 sm:w-48 md:h-56 md:w-56"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">
                            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
                                Social Media Marketing Specialist
                            </Badge>
                            <h1
                                id="hero-heading"
                                className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
                            >
                                MD. Rounak Parvez
                            </h1>
                            <p className="mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
                                Building strong digital brand presence and scalable business growth through strategic,
                                data-driven marketing solutions.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                                <Button
                                    size="lg"
                                    className="gap-2"
                                    onClick={() =>
                                        globalThis.document
                                            .getElementById("contact")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    Get in Touch <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() =>
                                        globalThis.document
                                            .getElementById("services")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    View Services
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section aria-labelledby="about-heading" className="px-4 py-12 md:px-8 md:py-16 lg:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 text-center md:mb-12">
                        <h2
                            id="about-heading"
                            className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl"
                        >
                            About Me
                        </h2>
                        <div className="mx-auto h-1 w-16 rounded-full bg-primary" aria-hidden="true" />
                    </div>
                    <div className="mx-auto max-w-4xl space-y-5">
                        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                            I am a{" "}
                            <span className="font-semibold text-foreground">
                                result-driven Social Media Marketing Specialist
                            </span>{" "}
                            dedicated to building strong digital brand presence and scalable business growth.
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                            In today&apos;s competitive digital landscape, a business&apos;s success largely depends on
                            its online visibility, strategic marketing approach, and targeted audience reach. This is
                            where I bring my expertise — delivering{" "}
                            <span className="font-medium text-foreground">
                                practical, data-focused, and growth-oriented
                            </span>{" "}
                            marketing solutions tailored to each client.
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                            My mission is not just to provide services — but to{" "}
                            <span className="font-semibold text-primary">
                                transform businesses into powerful, recognizable brands
                            </span>{" "}
                            in the digital world.
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                            I strongly believe that the right planning, data-driven marketing, and consistent execution
                            can take any business to the{" "}
                            <span className="font-medium text-foreground">highest level of success</span>.
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                            If you&apos;re looking to scale your business digitally or build a career in Social Media
                            Marketing —{" "}
                            <span className="font-semibold text-primary">
                                I&apos;m here to guide you every step of the way
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <Separator className="mx-auto max-w-6xl" />

            {/* Services Section */}
            <section
                id="services"
                aria-labelledby="services-heading"
                className="scroll-mt-16 px-4 py-12 md:px-8 md:py-16 lg:py-20"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 text-center md:mb-12">
                        <h2
                            id="services-heading"
                            className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl"
                        >
                            Services
                        </h2>
                        <div className="mx-auto h-1 w-16 rounded-full bg-primary" aria-hidden="true" />
                        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                            Comprehensive digital marketing solutions to take your business to the next level
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="group border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <CardHeader className="pb-3">
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                                        <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                    </div>
                                    <CardTitle as="h3" className="text-base sm:text-lg">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm sm:text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                aria-labelledby="cta-heading"
                className="bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 px-4 py-12 md:px-8 md:py-16 lg:py-20"
            >
                <div className="mx-auto max-w-4xl text-center">
                    <h2 id="cta-heading" className="mb-4 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                        Ready to Scale Your Business Digitally?
                    </h2>
                    <p className="mb-6 text-base text-muted-foreground sm:text-lg">
                        I strongly believe that the right planning, data-driven marketing, and consistent execution can
                        take any business to the highest level of success.
                    </p>
                    <p className="mb-8 text-lg font-semibold text-primary sm:text-xl">
                        Let&apos;s Build Your Brand Digitally.
                    </p>
                    <Button
                        size="lg"
                        className="gap-2"
                        onClick={() =>
                            globalThis.document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Start Your Journey <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                aria-labelledby="contact-heading"
                className="scroll-mt-16 px-4 py-12 md:px-8 md:py-16 lg:py-20"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 text-center md:mb-12">
                        <h2
                            id="contact-heading"
                            className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl"
                        >
                            Get in Touch
                        </h2>
                        <div className="mx-auto h-1 w-16 rounded-full bg-primary" aria-hidden="true" />
                        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                            Whether you&apos;re looking to scale your business or build a career in Social Media
                            Marketing — I&apos;m here to guide you every step of the way.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
                        {contactLinks.map((contact, index) => (
                            <Card
                                key={index}
                                className="py-0 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <CardContent className="flex items-center gap-4 p-4 sm:p-6">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <contact.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-muted-foreground">{contact.label}</p>
                                        <Link
                                            href={contact.href}
                                            {...(contact.external && {
                                                target: "_blank",
                                                rel: "noopener noreferrer"
                                            })}
                                            className="block truncate text-sm font-semibold text-foreground transition-colors hover:text-primary sm:text-base"
                                        >
                                            {contact.handle}
                                            {contact.external && <span className="sr-only"> (opens in new tab)</span>}
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/50 bg-muted/30 px-4 py-6 md:px-8 md:py-8">
                <div className="mx-auto max-w-6xl text-center">
                    <p className="text-sm text-muted-foreground sm:text-base">
                        © {new Date().getFullYear()} MD. Rounak Parvez. All rights reserved.
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground/70 sm:text-sm">
                        Building brands digitally, one strategy at a time.
                    </p>
                </div>
            </footer>
        </main>
    )
}
