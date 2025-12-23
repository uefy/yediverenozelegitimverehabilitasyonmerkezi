import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="iletisim-hero"
          className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-background"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">İletişim</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Sorularınız için bize ulaşabilir, randevu talebinde bulunabilirsiniz.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section id="iletisim-bilgileri" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Telefon</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+903322485050" className="text-muted-foreground hover:text-primary transition-colors">
                    (0332) 248 50 50
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">E-posta</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@yediveren.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    info@yediveren.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Adres</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dumlupınar, Nadir Sk. No:1
                    <br />
                    42070 Selçuklu/Konya
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Çalışma Saatleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pazartesi - Cuma
                    <br />
                    09:00 - 18:00
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Konum</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[450px] rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.4442847936516!2d32.50682!3d37.87894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085d83e92c221%3A0x9d7c8d5e9c0a1e2d!2zRHVtbHVwxLFuYXIsIE5hZGlyIFNrLiBObzoxLCA0MjA3MCBTZWzDp3VrbHUvS29ueWE!5e0!3m2!1str!2str!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Yediveren Konum"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
