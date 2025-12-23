"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/supawork-9e019ea96e1946fe98eac9f96aa82bd0-WDb955JavhadrffiI2fD8gbprpEktO.png"
            alt="Yediveren Logo"
            width={120}
            height={40}
            className="w-auto h-[43px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/#hakkimizda" className="transition-colors hover:text-primary">
            Hakkımızda
          </Link>
          <Link href="/#hizmetlerimiz" className="transition-colors hover:text-primary">
            Hizmetlerimiz
          </Link>
          <Link href="/#ekibimiz" className="transition-colors hover:text-primary">
            Ekibimiz
          </Link>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <Link href="/iletisim">
            <Button className="bg-primary hover:bg-primary/90">İletişim</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-4">
            <Link
              href="/#hakkimizda"
              className="transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="/#hizmetlerimiz"
              className="transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="/#ekibimiz"
              className="transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ekibimiz
            </Link>
            <Link href="/iletisim" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90">İletişim</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
