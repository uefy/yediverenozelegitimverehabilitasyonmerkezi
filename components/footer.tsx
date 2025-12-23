import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Yediveren Özel Eğitim ve Rehabilitasyon Merkezi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed"></p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#hakkimizda" className="text-muted-foreground hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/#hizmetlerimiz" className="text-muted-foreground hover:text-primary transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/#ekibimiz" className="text-muted-foreground hover:text-primary transition-colors">
                  Ekibimiz
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>(0332) 248 50 50</li>
              <li>Dumlupınar, Nadir Sk. No:1</li>
              <li>42070 Selçuklu/Konya</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Yediveren Özel Eğitim ve Rehabilitasyon Merkezi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
