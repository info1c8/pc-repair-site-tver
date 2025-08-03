import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<string | null>(null);

  const services = [
    {
      id: 'repair',
      title: 'Ремонт компьютеров',
      description: 'Диагностика и устранение неисправностей любой сложности',
      icon: 'Monitor',
      price: 'от 500₽',
      popular: true,
      details: {
        fullDescription: 'Профессиональная диагностика и ремонт настольных компьютеров и ноутбуков. Устраняем неисправности материнских плат, блоков питания, видеокарт и других компонентов.',
        includes: ['Полная диагностика системы', 'Замена неисправных компонентов', 'Тестирование после ремонта', 'Гарантия 3 месяца'],
        duration: '1-3 дня',
        examples: ['Замена материнской платы', 'Ремонт блока питания', 'Восстановление после залития']
      }
    },
    {
      id: 'upgrade',
      title: 'Модернизация ПК',
      description: 'Увеличение производительности и замена комплектующих',
      icon: 'Cpu',
      price: 'от 1000₽',
      popular: false,
      details: {
        fullDescription: 'Повышение производительности вашего компьютера путем замены и установки новых комплектующих. Подберем оптимальную конфигурацию под ваши задачи.',
        includes: ['Анализ текущей конфигурации', 'Подбор совместимых компонентов', 'Установка и настройка', 'Тестирование стабильности'],
        duration: '1-2 дня',
        examples: ['Увеличение объема ОЗУ', 'Установка SSD диска', 'Замена видеокарты']
      }
    },
    {
      id: 'cleaning',
      title: 'Чистка от вирусов',
      description: 'Полная очистка системы от вредоносного ПО',
      icon: 'Shield',
      price: 'от 800₽',
      popular: true,
      details: {
        fullDescription: 'Комплексная очистка компьютера от вирусов, троянов, рекламного ПО и других угроз. Установка надежной антивирусной защиты.',
        includes: ['Глубокое сканирование системы', 'Удаление всех угроз', 'Восстановление поврежденных файлов', 'Установка антивируса'],
        duration: '2-4 часа',
        examples: ['Удаление рекламных баннеров', 'Очистка от криптолокеров', 'Восстановление браузеров']
      }
    },
    {
      id: 'recovery',
      title: 'Восстановление данных',
      description: 'Восстановление утерянных файлов и документов',
      icon: 'HardDrive',
      price: 'от 1500₽',
      popular: false,
      details: {
        fullDescription: 'Восстановление данных с поврежденных жестких дисков, флешек и других носителей. Используем профессиональное оборудование.',
        includes: ['Диагностика носителя', 'Восстановление файлов', 'Проверка целостности данных', 'Копирование на новый носитель'],
        duration: '1-7 дней',
        examples: ['Восстановление после форматирования', 'Данные с поврежденного HDD', 'Файлы с нерабочей флешки']
      }
    },
    {
      id: 'installation',
      title: 'Установка ПО',
      description: 'Установка операционных систем и программ',
      icon: 'Download',
      price: 'от 700₽',
      popular: true,
      details: {
        fullDescription: 'Профессиональная установка операционных систем, драйверов и необходимого программного обеспечения с последующей настройкой.',
        includes: ['Установка ОС с нуля', 'Установка всех драйверов', 'Настройка системы', 'Установка необходимых программ'],
        duration: '2-4 часа',
        examples: ['Установка Windows 11', 'Настройка Office 365', 'Установка Adobe Creative Suite']
      }
    },
    {
      id: 'support',
      title: 'Техподдержка',
      description: 'Консультации и удаленная помощь 24/7',
      icon: 'Headphones',
      price: 'от 300₽',
      popular: false,
      details: {
        fullDescription: 'Круглосуточная техническая поддержка по телефону и удаленному доступу. Решаем вопросы любой сложности в режиме реального времени.',
        includes: ['Консультации по телефону', 'Удаленное подключение', 'Решение проблем онлайн', 'Обучение работе с ПК'],
        duration: '15 мин - 2 часа',
        examples: ['Настройка Wi-Fi', 'Помощь с программами', 'Консультация по покупке']
      }
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Быстро починили компьютер, очень доволен сервисом. Цены адекватные, мастера профессиональные.',
      date: '15 января 2024'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Восстановили все важные документы после сбоя системы. Спасибо огромное!',
      date: '3 февраля 2024'
    },
    {
      name: 'Дмитрий С.',
      rating: 5,
      text: 'Модернизировали старый ПК, теперь летает как новый. Рекомендую всем!',
      date: '22 февраля 2024'
    }
  ];

  const priceList = [
    { service: 'Диагностика', price: '500₽' },
    { service: 'Чистка от пыли', price: '800₽' },
    { service: 'Замена термопасты', price: '600₽' },
    { service: 'Установка Windows', price: '1200₽' },
    { service: 'Чистка от вирусов', price: '800₽' },
    { service: 'Восстановление данных', price: 'от 1500₽' },
    { service: 'Модернизация ПК', price: 'от 2000₽' },
    { service: 'Настройка роутера', price: '700₽' }
  ];

  return (
    <div className="min-h-screen bg-tech-light font-roboto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Monitor" size={32} className="text-tech-blue" />
              <h1 className="text-2xl font-bold text-tech-dark">КомпМастер</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-tech-gray hover:text-tech-blue transition-colors">Услуги</a>
              <a href="#prices" className="text-tech-gray hover:text-tech-blue transition-colors">Цены</a>
              <a href="#reviews" className="text-tech-gray hover:text-tech-blue transition-colors">Отзывы</a>
              <a href="#about" className="text-tech-gray hover:text-tech-blue transition-colors">О нас</a>
              <a href="#contacts" className="text-tech-gray hover:text-tech-blue transition-colors">Контакты</a>
            </nav>
            <Button className="bg-tech-blue hover:bg-blue-700 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tech-blue to-blue-700 text-white py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ремонт компьютеров в Твери</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Профессиональная диагностика и ремонт любой сложности. 
            Гарантия качества, доступные цены, выезд на дом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100 text-lg px-8 py-3">
              <Icon name="Wrench" size={20} className="mr-2" />
              Заказать ремонт
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tech-blue text-lg px-8 py-3">
              <Icon name="Calculator" size={20} className="mr-2" />
              Узнать стоимость
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl font-bold">1000+</div>
              <div className="opacity-80">Довольных клиентов</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-3xl font-bold">5 лет</div>
              <div className="opacity-80">Опыт работы</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-3xl font-bold">24/7</div>
              <div className="opacity-80">Техподдержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-tech-dark mb-4">Наши услуги</h3>
            <p className="text-xl text-tech-gray max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию компьютерной техники
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 animate-fade-in ${selectedService === service.id ? 'ring-2 ring-tech-blue' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setOpenModal(service.id)}
              >
                <CardHeader className="text-center">
                  {service.popular && (
                    <Badge className="w-fit mx-auto mb-2 bg-tech-blue">Популярно</Badge>
                  )}
                  <div className="w-16 h-16 mx-auto mb-4 bg-tech-blue/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-tech-blue" />
                  </div>
                  <CardTitle className="text-xl text-tech-dark">{service.title}</CardTitle>
                  <CardDescription className="text-tech-gray mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-tech-blue mb-4">{service.price}</div>
                  <Button className="w-full bg-tech-blue hover:bg-blue-700">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="prices" className="py-20 bg-tech-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-tech-dark mb-4">Прайс-лист</h3>
            <p className="text-xl text-tech-gray">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="bg-tech-blue text-white text-center">
                <CardTitle className="text-2xl">Основные услуги</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {priceList.map((item, index) => (
                  <div key={index} className={`flex justify-between items-center p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-tech-blue/5 transition-colors`}>
                    <span className="text-tech-dark font-medium">{item.service}</span>
                    <span className="text-tech-blue font-bold text-lg">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-tech-blue hover:bg-blue-700">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать полный прайс
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-tech-dark mb-4">Отзывы клиентов</h3>
            <p className="text-xl text-tech-gray">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-tech-dark">{review.name}</CardTitle>
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-tech-gray text-sm">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-tech-gray italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-tech-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-tech-dark mb-6">О компании КомпМастер</h3>
              <p className="text-lg text-tech-gray mb-6">
                Мы работаем в сфере ремонта компьютерной техники уже более 5 лет. 
                За это время мы помогли более чем 1000 клиентам решить их технические проблемы.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-tech-dark">Сертифицированные специалисты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-tech-dark">Гарантия на все виды работ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-tech-dark">Выезд на дом в день обращения</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-tech-dark">Использование оригинальных запчастей</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-tech-blue to-blue-700 rounded-lg p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Почему выбирают нас?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Быстрое решение</div>
                    <div className="text-sm opacity-90">Большинство проблем решаем за 1-2 часа</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="DollarSign" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Честные цены</div>
                    <div className="text-sm opacity-90">Никаких скрытых доплат и переплат</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Award" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Гарантия качества</div>
                    <div className="text-sm opacity-90">3 месяца гарантии на все работы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-tech-dark mb-4">Контакты</h3>
            <p className="text-xl text-tech-gray">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-tech-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-tech-dark mb-2">Телефон</h4>
                  <p className="text-tech-gray">+7 (4822) 123-456</p>
                  <p className="text-tech-gray">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-tech-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-tech-dark mb-2">Email</h4>
                  <p className="text-tech-gray">info@kompmaster-tver.ru</p>
                  <p className="text-tech-gray">support@kompmaster-tver.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-tech-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-tech-dark mb-2">Адрес</h4>
                  <p className="text-tech-gray">г. Тверь, ул. Советская, 25</p>
                  <p className="text-tech-gray">Режим работы: Пн-Пт 9:00-18:00</p>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-tech-dark">Заказать звонок</CardTitle>
                <CardDescription>Оставьте заявку и мы перезвоним в течение 5 минут</CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-tech-dark mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tech-dark mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tech-dark mb-2">Описание проблемы</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                    placeholder="Опишите вашу проблему..."
                  />
                </div>
                <Button className="w-full bg-tech-blue hover:bg-blue-700 py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Modals */}
      {services.map((service) => (
        <Dialog key={service.id} open={openModal === service.id} onOpenChange={(open) => !open && setOpenModal(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center">
                  <Icon name={service.icon as any} size={32} className="text-tech-blue" />
                </div>
                <div>
                  <DialogTitle className="text-2xl text-tech-dark">{service.title}</DialogTitle>
                  <DialogDescription className="text-lg text-tech-gray mt-1">
                    {service.description}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Подробности</TabsTrigger>
                <TabsTrigger value="examples">Примеры работ</TabsTrigger>
                <TabsTrigger value="order">Заказать</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-6 mt-6">
                <div>
                  <h4 className="text-xl font-semibold text-tech-dark mb-3">Описание услуги</h4>
                  <p className="text-tech-gray leading-relaxed">
                    {service.details.fullDescription}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={20} className="text-green-500" />
                        <span>Что входит в услугу</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.details.includes.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="Check" size={16} className="text-tech-blue mt-0.5 flex-shrink-0" />
                            <span className="text-tech-gray">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Icon name="Clock" size={20} className="text-tech-blue" />
                          <span>Время выполнения</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-tech-blue">{service.details.duration}</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Icon name="DollarSign" size={20} className="text-green-500" />
                          <span>Стоимость</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-tech-blue">{service.price}</p>
                        <p className="text-tech-gray text-sm mt-1">Точная стоимость после диагностики</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="examples" className="mt-6">
                <div>
                  <h4 className="text-xl font-semibold text-tech-dark mb-4">Примеры наших работ</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.details.examples.map((example, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center mb-3">
                            <Icon name="Wrench" size={20} className="text-tech-blue" />
                          </div>
                          <CardTitle className="text-lg">{example}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Badge variant="outline" className="text-green-600 border-green-200">
                            Выполнено
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-tech-blue/5 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <Icon name="Info" size={24} className="text-tech-blue mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-tech-dark mb-2">Гарантия качества</h5>
                        <p className="text-tech-gray">
                          На все выполненные работы предоставляется гарантия 3 месяца. 
                          Если в течение этого времени возникнут проблемы, связанные с нашей работой, 
                          мы устраним их бесплатно.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="order" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-tech-dark mb-4">Заказать услугу</h4>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-tech-dark mb-2">Имя *</label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                            placeholder="Ваше имя"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-tech-dark mb-2">Телефон *</label>
                          <input 
                            type="tel" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                            placeholder="+7 (___) ___-__-__"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-tech-dark mb-2">Email</label>
                          <input 
                            type="email" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                            placeholder="example@mail.ru"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-tech-dark mb-2">Описание проблемы</label>
                          <textarea 
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                            placeholder={`Опишите подробно проблему для услуги "${service.title}"`}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="urgent" className="rounded border-gray-300" />
                          <label htmlFor="urgent" className="text-sm text-tech-gray">
                            Срочный заказ (+50% к стоимости)
                          </label>
                        </div>
                        <Button className="w-full bg-tech-blue hover:bg-blue-700 py-3">
                          <Icon name="Send" size={20} className="mr-2" />
                          Отправить заявку
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-tech-dark mb-4">Информация о заказе</h4>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-tech-gray">Базовая стоимость:</span>
                              <span className="font-semibold text-tech-blue">{service.price}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-tech-gray">Время выполнения:</span>
                              <span className="font-semibold">{service.details.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-tech-gray">Гарантия:</span>
                              <span className="font-semibold">3 месяца</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-tech-blue/5">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <Icon name="Truck" size={20} className="text-tech-blue mt-1" />
                            <div>
                              <h6 className="font-semibold text-tech-dark">Выезд на дом</h6>
                              <p className="text-sm text-tech-gray">
                                Бесплатный выезд мастера в пределах Твери. 
                                Диагностика - 500₽ (засчитывается при ремонте).
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-green-50">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <Icon name="Shield" size={20} className="text-green-600 mt-1" />
                            <div>
                              <h6 className="font-semibold text-tech-dark">Гарантия качества</h6>
                              <p className="text-sm text-tech-gray">
                                3 месяца гарантии на все работы. 
                                Если что-то пойдет не так - исправим бесплатно.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      ))}

      {/* Footer */}
      <footer className="bg-tech-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Monitor" size={28} className="text-tech-blue" />
                <h5 className="text-xl font-bold">КомпМастер</h5>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональный ремонт компьютеров в Твери. Быстро, качественно, недорого.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="MessageCircle" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Услуги</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Ремонт ПК</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Модернизация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Чистка от вирусов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Восстановление данных</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <div className="space-y-2 text-gray-400">
                <p>+7 (4822) 123-456</p>
                <p>info@kompmaster-tver.ru</p>
                <p>г. Тверь, ул. Советская, 25</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 КомпМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;