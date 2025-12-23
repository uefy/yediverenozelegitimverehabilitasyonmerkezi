import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Users, BookOpen, Award, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Her Çocuğun Gelişimine Özel Bir Yolculuk
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Özel gereksinimli çocukların potansiyelini ortaya çıkarmak, ailelerine güç vermek ve her bireyin hayatına
              değer katmak için buradayız. Sevgi, bilim ve deneyimle dolu bir gelişim yolculuğuna hazır mısınız?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto cursor-pointer">
                  Randevu Alın
                </Button>
              </Link>
              <Link href="/#hizmetlerimiz">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent cursor-pointer">
                  Hizmetlerimiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hakkımızda</h2>
            <p className="text-muted-foreground leading-relaxed">
              Yediveren Özel Eğitim ve Rehabilitasyon Merkezi olarak, özel gereksinimli bireylerin gelişimlerine katkıda
              bulunmak ve ailelerine destek olmak için kurulduk. Uzman kadromuz ve modern tesislerimizle, her bireyin
              potansiyelini ortaya çıkarmasına yardımcı oluyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Sevgi Dolu Yaklaşım</h3>
                <p className="text-sm text-muted-foreground">Her çocuğa özel ilgi ve sevgiyle yaklaşıyoruz</p>
              </CardContent>
            </Card>

            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Uzman Kadro</h3>
                <p className="text-sm text-muted-foreground">Alanında deneyimli uzmanlardan oluşan ekibimiz</p>
              </CardContent>
            </Card>

            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Bireysel Programlar</h3>
                <p className="text-sm text-muted-foreground">Kişiye özel eğitim ve terapi programları</p>
              </CardContent>
            </Card>

            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Modern Tesisler</h3>
                <p className="text-sm text-muted-foreground">Gelişime uygun, güvenli ve konforlu ortam</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetlerimiz" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-muted-foreground leading-relaxed">
              Çocuklarınızın gelişim alanlarına özel, kapsamlı destek hizmetleri sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Özel Eğitim",
                description:
                  "Bireysel eğitim planları ile özel gereksinimli çocukların akademik ve sosyal gelişimlerini destekliyoruz.",
              },
              {
                title: "Dil ve Konuşma Terapisi",
                description:
                  "Dil gelişimi ve konuşma bozuklukları için uzman terapistlerimizle bireysel seanslar sunuyoruz.",
              },
              {
                title: "Fizyoterapi",
                description:
                  "Motor gelişim ve fiziksel rehabilitasyon için profesyonel fizyoterapi hizmetleri sağlıyoruz.",
              },
              {
                title: "Ergoterapi",
                description: "Günlük yaşam becerilerinin geliştirilmesi için ergoterapi desteği veriyoruz.",
              },
              {
                title: "Özel Eğitim Danışmanlığı",
                description: "Ailelere eğitim süreçleri ve ev programları konusunda rehberlik ediyoruz.",
              },
              {
                title: "Oyun Terapisi",
                description:
                  "Oyun temelli terapi yöntemleri ile çocukların sosyal ve duygusal gelişimlerini destekliyoruz.",
              },
            ].map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="ekibimiz" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ekibimiz</h2>
            <p className="text-muted-foreground leading-relaxed">
              Alanlarında uzman, deneyimli ve özveriyle çalışan ekibimizle tanışın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Ayşe Yılmaz",
                title: "Özel Eğitim Uzmanı",
                bio: "15 yıllık deneyimi ile özel gereksinimli çocukların eğitim programlarını yönetiyor. Ankara Üniversitesi Özel Eğitim mezunu.",
              },
              {
                name: "Mehmet Kaya",
                title: "Dil ve Konuşma Terapisti",
                bio: "Dil ve konuşma bozuklukları alanında 10 yıllık tecrübeye sahip. Hacettepe Üniversitesi mezunu, sertifikalı terapist.",
              },
              {
                name: "Zeynep Demir",
                title: "Fizyoterapist",
                bio: "Pediatrik rehabilitasyon alanında uzman. 8 yıldır çocukların motor gelişimlerine katkıda bulunuyor.",
              },
              {
                name: "Ahmet Çelik",
                title: "Ergoterapist",
                bio: "Duyusal entegrasyon ve günlük yaşam becerileri konusunda uzman. 12 yıllık deneyime sahip.",
              },
              {
                name: "Fatma Arslan",
                title: "Özel Eğitim Öğretmeni",
                bio: "Zihin engelli çocukların eğitimi konusunda 9 yıllık tecrübesi olan, sabırlı ve sevecen bir eğitimci.",
              },
              {
                name: "Can Öztürk",
                title: "Psikolog",
                bio: "Gelişimsel değerlendirme ve aile danışmanlığı konularında uzman. Çocuk ve ergen psikolojisi alanında 7 yıllık deneyim.",
              },
            ].map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-primary text-center mb-3">{member.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Phone className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bizimle İletişime Geçin</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Çocuğunuzun gelişimi için profesyonel destek almak ister misiniz? Hemen bizimle iletişime geçin, size
            yardımcı olmaktan mutluluk duyarız.
          </p>
          <Link href="/iletisim">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 cursor-pointer"
            >
              İletişim Sayfası
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
