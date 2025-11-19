import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
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
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
          </nav>
          <Button className="hidden md:flex">Связаться</Button>
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
                <Button size="lg" className="group">
                  Наша продукция
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="PlayCircle" className="mr-2" size={20} />
                  Смотреть видео
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

            <div className="animate-scale-in relative">
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
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">55.5%</div>
                  <div className="text-sm text-muted-foreground">Ni / 44.5% Ti</div>
                  <div className="text-xs mt-2">Состав сплава</div>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-secondary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">циклов</div>
                  <div className="text-xs mt-2">Долговечность</div>
                </Card>
              </div>

              <Card className="mt-6 p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                <h4 className="font-semibold mb-4">Области применения:</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Медицина</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Авиакосмос</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Робототехника</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Автомобили</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Энергетика</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Электроника</span>
                  </div>
                </div>
              </Card>
            </div>
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

            <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-white animate-fade-in">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Свяжитесь с нами</h3>
                <p className="mb-6 opacity-90">
                  Готовы обсудить ваш проект? Наши специалисты помогут подобрать оптимальное решение
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="group">
                    <Icon name="Mail" className="mr-2" size={20} />
                    Написать письмо
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </Card>
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
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
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
    </div>
  );
};

export default Index;
