import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'Все услуги', icon: 'Grid3X3' },
    { id: 'repair', name: 'Ремонт', icon: 'Wrench' },
    { id: 'upgrade', name: 'Модернизация', icon: 'Cpu' },
    { id: 'software', name: 'ПО', icon: 'Download' },
    { id: 'data', name: 'Данные', icon: 'HardDrive' },
    { id: 'support', name: 'Поддержка', icon: 'Headphones' }
  ];

  const services = [
    {
      id: 1,
      title: 'Диагностика компьютера',
      description: 'Полная диагностика всех компонентов системы',
      category: 'repair',
      price: '500₽',
      duration: '30-60 мин',
      popular: true,
      features: ['Тестирование процессора', 'Проверка памяти', 'Диагностика HDD/SSD', 'Анализ системы охлаждения']
    },
    {
      id: 2,
      title: 'Замена материнской платы',
      description: 'Профессиональная замена материнской платы с сохранением данных',
      category: 'repair',
      price: 'от 2000₽',
      duration: '2-4 часа',
      popular: false,
      features: ['Подбор совместимой платы', 'Перенос компонентов', 'Настройка BIOS', 'Тестирование']
    },
    {
      id: 3,
      title: 'Увеличение оперативной памяти',
      description: 'Установка дополнительных модулей ОЗУ',
      category: 'upgrade',
      price: 'от 800₽',
      duration: '30 мин',
      popular: true,
      features: ['Анализ совместимости', 'Установка модулей', 'Тестирование стабильности', 'Настройка частот']
    },
    {
      id: 4,
      title: 'Установка SSD диска',
      description: 'Замена HDD на SSD с переносом системы',
      category: 'upgrade',
      price: 'от 1200₽',
      duration: '1-2 часа',
      popular: true,
      features: ['Клонирование системы', 'Оптимизация под SSD', 'Настройка TRIM', 'Проверка скорости']
    },
    {
      id: 5,
      title: 'Установка Windows 11',
      description: 'Чистая установка последней версии Windows',
      category: 'software',
      price: '1500₽',
      duration: '2-3 часа',
      popular: true,
      features: ['Форматирование диска', 'Установка драйверов', 'Настройка системы', 'Установка антивируса']
    },
    {
      id: 6,
      title: 'Восстановление файлов',
      description: 'Восстановление удаленных или поврежденных файлов',
      category: 'data',
      price: 'от 2000₽',
      duration: '1-3 дня',
      popular: false,
      features: ['Анализ носителя', 'Поиск файлов', 'Восстановление структуры', 'Проверка целостности']
    },
    {
      id: 7,
      title: 'Настройка сети',
      description: 'Настройка домашней или офисной сети',
      category: 'support',
      price: 'от 1000₽',
      duration: '1-2 часа',
      popular: false,
      features: ['Настройка роутера', 'Создание сети', 'Настройка доступа', 'Тестирование скорости']
    },
    {
      id: 8,
      title: 'Чистка от пыли',
      description: 'Профессиональная чистка компьютера от пыли',
      category: 'repair',
      price: '800₽',
      duration: '1 час',
      popular: true,
      features: ['Разборка корпуса', 'Чистка компонентов', 'Замена термопасты', 'Проверка вентиляторов']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Наши услуги</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Полный спектр услуг по ремонту, модернизации и обслуживанию компьютерной техники в Твери
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {serviceCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 ${
                selectedCategory === category.id 
                  ? 'bg-tech-blue text-white' 
                  : 'text-tech-gray hover:text-tech-blue'
              }`}
            >
              <Icon name={category.icon as any} size={16} />
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <Card 
              key={service.id} 
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                {service.popular && (
                  <Badge className="w-fit mb-2 bg-tech-blue">Популярно</Badge>
                )}
                <CardTitle className="text-xl text-tech-dark">{service.title}</CardTitle>
                <CardDescription className="text-tech-gray">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-tech-blue">{service.price}</span>
                    <span className="text-tech-gray">{service.duration}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-tech-dark mb-2">Что входит:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-tech-gray">
                          <Icon name="Check" size={14} className="text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-tech-blue hover:bg-blue-700">
                    Заказать услугу
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-tech-blue to-blue-700 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Не нашли нужную услугу?</h3>
              <p className="text-lg mb-6 opacity-90">
                Свяжитесь с нами, и мы подберем индивидуальное решение для вашей задачи
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tech-blue">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в чат
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;