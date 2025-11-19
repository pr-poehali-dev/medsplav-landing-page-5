import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/projects/cd9d576c-b48d-4619-952c-6c0bbf28698c/files/4ee50261-7a3a-4cc5-a7db-a05d2ac19c58.jpg",
      title: "Медицинские стенты",
      category: "Медицина"
    },
    {
      url: "https://cdn.poehali.dev/projects/cd9d576c-b48d-4619-952c-6c0bbf28698c/files/b6b95666-ad0b-4202-ac61-ddb2c5ce2915.jpg",
      title: "Производственный комплекс",
      category: "Производство"
    },
    {
      url: "https://cdn.poehali.dev/projects/cd9d576c-b48d-4619-952c-6c0bbf28698c/files/83d5884b-22d7-4d68-aaca-335fa81e9574.jpg",
      title: "Проволока с памятью формы",
      category: "Продукция"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const properties = [
    { name: "Температурный диапазон", value: 85, color: "bg-primary" },
    { name: "Деформация", value: 70, color: "bg-secondary" },
    { name: "Биосовместимость", value: 95, color: "bg-primary" },
    { name: "Коррозионная стойкость", value: 90, color: "bg-secondary" },
    { name: "Долговечность", value: 100, color: "bg-primary" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">М</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">МИЦ «МЕДСПЛАВ»</h1>
              <p className="text-xs text-muted-foreground">Инновации в материалах</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Продукция</a>
            <a href="#technology" className="text-sm font-medium hover:text-primary transition-colors">Технологии</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
          </nav>
          <Button className="hidden md:flex" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Связаться
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold text-sm">Технологии будущего</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Изделия из никелида титана
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                ООО «МИЦ «МЕДСПЛАВ» — ведущий российский производитель высокотехнологичных изделий из сплавов с эффектом памяти формы (NiTi) для промышленности и медицины
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                  Наша продукция
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Image" className="mr-2" size={20} />
                  Смотреть галерею
                </Button>
              </div>
            </div>
            <div className="animate-scale-in relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary to-secondary p-1 rounded-3xl">
                <div className="bg-card rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-background p-6 rounded-2xl">
                      <Icon name="Zap" className="text-primary mb-4" size={32} />
                      <div className="text-3xl font-bold mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Лет опыта</div>
                    </div>
                    <div className="bg-background p-6 rounded-2xl">
                      <Icon name="Award" className="text-secondary mb-4" size={32} />
                      <div className="text-3xl font-bold mb-2">200+</div>
                      <div className="text-sm text-muted-foreground">Патентов</div>
                    </div>
                    <div className="bg-background p-6 rounded-2xl">
                      <Icon name="Globe" className="text-primary mb-4" size={32} />
                      <div className="text-3xl font-bold mb-2">30+</div>
                      <div className="text-sm text-muted-foreground">Стран</div>
                    </div>
                    <div className="bg-background p-6 rounded-2xl">
                      <Icon name="Users" className="text-secondary mb-4" size={32} />
                      <div className="text-3xl font-bold mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Клиентов</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
              <span className="text-secondary font-semibold text-sm">Наша продукция</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Передовые решения из NiTi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент изделий для различных отраслей промышленности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-card border-2 hover:border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Activity" className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Медицинские изделия</h3>
              <p className="text-muted-foreground mb-6">
                Стенты, проволока с памятью формы, инструменты для малоинвазивной хирургии
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm">Биосовместимость</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm">Высокая точность</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm">Сертификация</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Подробнее
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-card border-2 hover:border-secondary" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Cog" className="text-secondary" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Промышленные компоненты</h3>
              <p className="text-muted-foreground mb-6">
                Приводы, актуаторы, элементы автоматики с памятью формы
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm">Долговечность</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm">Устойчивость к нагрузкам</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm">Индивидуальные решения</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Подробнее
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-card border-2 hover:border-primary" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="FlaskConical" className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Исследования и разработки</h3>
              <p className="text-muted-foreground mb-6">
                Индивидуальные разработки, прототипирование, научное сотрудничество
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm">Собственная лаборатория</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm">Опытное производство</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm">Консультации экспертов</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Подробнее
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="technology" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold text-sm">Технологии NiTi</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Эффект памяти формы</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Никелид титана (NiTi) — уникальный сплав с эффектом памяти формы и сверхэластичностью. Материал способен восстанавливать исходную форму после деформации при нагреве.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Thermometer" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Термоактивация</h4>
                    <p className="text-sm text-muted-foreground">Восстановление формы при заданной температуре</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Waves" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Сверхэластичность</h4>
                    <p className="text-sm text-muted-foreground">Деформация до 10% без остаточных изменений</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Биосовместимость</h4>
                    <p className="text-sm text-muted-foreground">Безопасность для медицинского применения</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Коррозионная стойкость</h4>
                    <p className="text-sm text-muted-foreground">Высокая устойчивость к агрессивным средам</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6 text-center">Характеристики NiTi-сплава</h3>
                <div className="space-y-4">
                  {properties.map((prop, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{prop.name}</span>
                        <span className="text-muted-foreground">{prop.value}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${prop.color} transition-all duration-1000 ease-out rounded-full`}
                          style={{ 
                            width: `${prop.value}%`,
                            animation: `expandWidth 1.5s ease-out ${index * 0.1}s backwards`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">-200°C</div>
                  <div className="text-sm text-muted-foreground">до +400°C</div>
                  <div className="text-xs mt-2">Диапазон работы</div>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-secondary mb-2">10%</div>
                  <div className="text-sm text-muted-foreground">деформация</div>
                  <div className="text-xs mt-2">Сверхэластичность</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">Галерея</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши разработки и производство</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Взгляните на наши высокотехнологичные изделия и современное производство
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 bg-primary rounded-full text-white text-xs font-semibold mb-2">
                      {image.category}
                    </div>
                    <h3 className="text-white font-bold text-xl">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <Icon name="X" size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-full object-contain animate-scale-in"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
              <span className="text-secondary font-semibold text-sm">Свяжитесь с нами</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Оставьте заявку</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и наши специалисты свяжутся с вами в ближайшее время
            </p>
          </div>

          <Card className="p-8 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Компания</Label>
                  <Input
                    id="company"
                    placeholder="ООО «Название»"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сообщение *</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Расскажите о вашем проекте или вопросе..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                Отправить заявку
                <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-sm text-muted-foreground">info@medsplav.ru</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-secondary" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p className="text-sm text-muted-foreground">Москва, Россия</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
                <span className="text-secondary font-semibold text-sm">О компании</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">ООО «МИЦ «МЕДСПЛАВ»</h2>
              <p className="text-lg text-muted-foreground">
                Российский лидер в производстве изделий из сплавов с памятью формы
              </p>
            </div>

            <Card className="p-8 mb-8 animate-scale-in">
              <p className="text-lg leading-relaxed mb-6">
                Международный инновационный центр «МЕДСПЛАВ» — это научно-производственное предприятие полного цикла, специализирующееся на разработке и производстве изделий из никелида титана с эффектом памяти формы.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Мы обладаем уникальными технологиями и оборудованием для создания высокотехнологичных решений для медицины, промышленности и научных исследований.
              </p>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
                <Icon name="Factory" className="mx-auto text-primary mb-4" size={40} />
                <h4 className="font-semibold mb-2">Собственное производство</h4>
                <p className="text-sm text-muted-foreground">Полный цикл от плавки до готового изделия</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Icon name="Microscope" className="mx-auto text-secondary mb-4" size={40} />
                <h4 className="font-semibold mb-2">Научная база</h4>
                <p className="text-sm text-muted-foreground">Собственные R&D и испытательные лаборатории</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Icon name="Award" className="mx-auto text-primary mb-4" size={40} />
                <h4 className="font-semibold mb-2">Сертификация</h4>
                <p className="text-sm text-muted-foreground">Международные стандарты качества</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">М</span>
                </div>
                <div>
                  <h3 className="font-bold">МИЦ «МЕДСПЛАВ»</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Инновационные решения из никелида титана
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Медицинские изделия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Промышленные компоненты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">R&D</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#technology" className="hover:text-primary transition-colors">Технологии</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@medsplav.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ООО «МИЦ «МЕДСПЛАВ». Все права защищены.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
