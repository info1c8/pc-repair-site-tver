import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Prices = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const priceCategories = [
    {
      id: 'repair',
      name: 'Ремонт',
      icon: 'Wrench',
      services: [
        { name: 'Диагностика компьютера', price: '500₽', description: 'Полная проверка всех компонентов' },
        { name: 'Замена блока питания', price: 'от 1500₽', description: 'Установка нового БП с тестированием' },
        { name: 'Ремонт материнской платы', price: 'от 2500₽', description: 'Восстановление работоспособности платы' },
        { name: 'Замена процессора', price: 'от 1200₽', description: 'Установка нового CPU с настройкой' },
        { name: 'Ремонт видеокарты', price: 'от 3000₽', description: 'Восстановление GPU, замена компонентов' },
        { name: 'Чистка от пыли', price: '800₽', description: 'Полная чистка с заменой термопасты' }
      ]
    },
    {
      id: 'upgrade',
      name: 'Модернизация',
      icon: 'Cpu',
      services: [
        { name: 'Увеличение ОЗУ', price: 'от 800₽', description: 'Установка дополнительной памяти' },
        { name: 'Установка SSD', price: 'от 1200₽', description: 'Замена HDD на SSD с переносом данных' },
        { name: 'Апгрейд видеокарты', price: 'от 1500₽', description: 'Установка новой видеокарты' },
        { name: 'Замена процессора', price: 'от 2000₽', description: 'Установка более мощного CPU' },
        { name: 'Добавление жесткого диска', price: 'от 600₽', description: 'Установка дополнительного накопителя' },
        { name: 'Улучшение охлаждения', price: 'от 1000₽', description: 'Установка новых вентиляторов/кулеров' }
      ]
    },
    {
      id: 'software',
      name: 'Программное обеспечение',
      icon: 'Download',
      services: [
        { name: 'Установка Windows 11', price: '1500₽', description: 'Чистая установка с драйверами' },
        { name: 'Установка Windows 10', price: '1200₽', description: 'Установка с настройкой системы' },
        { name: 'Установка Linux', price: '1000₽', description: 'Установка любого дистрибутива Linux' },
        { name: 'Установка Office', price: '800₽', description: 'Microsoft Office или аналоги' },
        { name: 'Установка антивируса', price: '600₽', description: 'Настройка защиты системы' },
        { name: 'Установка драйверов', price: '500₽', description: 'Поиск и установка всех драйверов' }
      ]
    },
    {
      id: 'data',
      name: 'Работа с данными',
      icon: 'HardDrive',
      services: [
        { name: 'Восстановление данных HDD', price: 'от 2000₽', description: 'Восстановление с жесткого диска' },
        { name: 'Восстановление данных SSD', price: 'от 3000₽', description: 'Восстановление с SSD накопителя' },
        { name: 'Восстановление с флешки', price: 'от 1500₽', description: 'Восстановление файлов с USB' },
        { name: 'Перенос данных', price: '800₽', description: 'Копирование файлов на новый носитель' },
        { name: 'Создание резервной копии', price: '600₽', description: 'Настройка автоматического бэкапа' },
        { name: 'Восстановление системы', price: '1200₽', description: 'Восстановление работы Windows' }
      ]
    }
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Базовый',
      price: '2500₽',
      originalPrice: '3200₽',
      description: 'Основные услуги для домашнего использования',
      popular: false,
      features: [
        'Диагностика компьютера',
        'Чистка от пыли',
        'Установка антивируса',
        'Базовая настройка системы',
        'Консультация по использованию'
      ]
    },
    {
      id: 'standard',
      name: 'Стандартный',
      price: '4500₽',
      originalPrice: '5800₽',
      description: 'Комплексное обслуживание с модернизацией',
      popular: true,
      features: [
        'Все из базового пакета',
        'Установка SSD до 500GB',
        'Увеличение ОЗУ до 16GB',
        'Установка Windows 11',
        'Настройка всех программ',
        'Гарантия 6 месяцев'
      ]
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: '7500₽',
      originalPrice: '9500₽',
      description: 'Максимальная производительность и надежность',
      popular: false,
      features: [
        'Все из стандартного пакета',
        'Замена видеокарты (до 30000₽)',
        'Установка процессора нового поколения',
        'Система жидкостного охлаждения',
        'Восстановление всех данных',
        'Годовая гарантия',
        'Приоритетная поддержка 24/7'
      ]
    }
  ];

  const additionalServices = [
    { name: 'Выезд на дом (в пределах Твери)', price: 'Бесплатно', icon: 'Truck' },
    { name: 'Срочный ремонт (в течение дня)', price: '+50%', icon: 'Zap' },
    { name: 'Работа в выходные дни', price: '+30%', icon: 'Calendar' },
    { name: 'Консультация по телефону', price: '300₽/час', icon: 'Phone' },
    { name: 'Удаленная помощь', price: '500₽/час', icon: 'Monitor' },
    { name: 'Обучение работе с ПК', price: '800₽/час', icon: 'GraduationCap' }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Цены на услуги</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Прозрачные цены без скрытых доплат. Все цены указаны с учетом работы мастера
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="packages">Пакеты</TabsTrigger>
            <TabsTrigger value="additional">Дополнительно</TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {priceCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                        <Icon name={category.icon as any} size={24} className="text-tech-blue" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-tech-dark">{category.name}</CardTitle>
                        <CardDescription>Основные услуги категории</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.services.map((service, index) => (
                        <div key={index} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-1">
                            <h4 className="font-medium text-tech-dark">{service.name}</h4>
                            <p className="text-sm text-tech-gray mt-1">{service.description}</p>
                          </div>
                          <div className="text-right ml-4">
                            <span className="text-lg font-bold text-tech-blue">{service.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="packages">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    pkg.popular ? 'ring-2 ring-tech-blue' : ''
                  }`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-tech-blue">
                      Популярный
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-tech-dark">{pkg.name}</CardTitle>
                    <CardDescription className="mt-2">{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-3xl font-bold text-tech-blue">{pkg.price}</span>
                        <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                      </div>
                      <p className="text-sm text-green-600 mt-1">
                        Экономия {parseInt(pkg.originalPrice.replace('₽', '')) - parseInt(pkg.price.replace('₽', ''))}₽
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-tech-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        pkg.popular 
                          ? 'bg-tech-blue hover:bg-blue-700' 
                          : 'bg-gray-600 hover:bg-gray-700'
                      }`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      Выбрать пакет
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-tech-blue to-blue-700 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Индивидуальный пакет</h3>
                <p className="text-lg mb-6 opacity-90">
                  Нужно что-то особенное? Мы создадим персональный пакет услуг под ваши потребности
                </p>
                <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                  <Icon name="Settings" size={20} className="mr-2" />
                  Создать пакет
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="additional">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={service.icon as any} size={24} className="text-tech-blue" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-tech-dark mb-2">{service.name}</h4>
                        <p className="text-2xl font-bold text-tech-blue">{service.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Info" size={24} className="text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-tech-dark mb-2">Важная информация</h4>
                    <ul className="space-y-1 text-tech-gray">
                      <li>• Все цены указаны с учетом работы мастера</li>
                      <li>• Стоимость запчастей оплачивается отдельно</li>
                      <li>• Диагностика засчитывается при заказе ремонта</li>
                      <li>• Гарантия на работы - 3 месяца</li>
                      <li>• Возможна оплата картой или наличными</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Calculator Section */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-tech-dark">Калькулятор стоимости</CardTitle>
              <CardDescription>Рассчитайте примерную стоимость ремонта</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-tech-dark mb-4">Выберите услуги:</h4>
                  <div className="space-y-3">
                    {['Диагностика (500₽)', 'Чистка от пыли (800₽)', 'Установка SSD (1200₽)', 'Увеличение ОЗУ (800₽)', 'Установка Windows (1500₽)'].map((service, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-tech-gray">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="bg-tech-blue/5 p-6 rounded-lg">
                  <h4 className="font-semibold text-tech-dark mb-4">Итого:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Услуги:</span>
                      <span className="font-semibold">0₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Выезд:</span>
                      <span className="font-semibold text-green-600">Бесплатно</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Общая стоимость:</span>
                      <span className="font-bold text-tech-blue">0₽</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-tech-blue hover:bg-blue-700">
                    Заказать услуги
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Prices;