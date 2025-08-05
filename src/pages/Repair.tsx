import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Repair = () => {
  const [selectedCategory, setSelectedCategory] = useState('desktop');

  const repairCategories = [
    { id: 'desktop', name: 'Настольные ПК', icon: 'Monitor' },
    { id: 'laptop', name: 'Ноутбуки', icon: 'Laptop' },
    { id: 'components', name: 'Комплектующие', icon: 'Cpu' },
    { id: 'peripherals', name: 'Периферия', icon: 'Mouse' }
  ];

  const repairServices = {
    desktop: [
      {
        title: 'Ремонт материнской платы',
        price: 'от 2000₽',
        duration: '2-5 дней',
        complexity: 'Высокая',
        description: 'Диагностика и ремонт материнских плат любой сложности',
        symptoms: ['Не включается компьютер', 'Нет изображения', 'Перезагрузки', 'Ошибки POST'],
        warranty: '3 месяца'
      },
      {
        title: 'Замена блока питания',
        price: 'от 1500₽',
        duration: '1-2 дня',
        complexity: 'Средняя',
        description: 'Диагностика и замена неисправного блока питания',
        symptoms: ['Не включается', 'Запах гари', 'Треск при включении', 'Нестабильная работа'],
        warranty: '6 месяцев'
      },
      {
        title: 'Ремонт видеокарты',
        price: 'от 2500₽',
        duration: '3-7 дней',
        complexity: 'Высокая',
        description: 'Восстановление работоспособности видеокарт',
        symptoms: ['Артефакты на экране', 'Нет изображения', 'Перегрев', 'Синий экран'],
        warranty: '3 месяца'
      },
      {
        title: 'Чистка и профилактика',
        price: 'от 800₽',
        duration: '2-4 часа',
        complexity: 'Низкая',
        description: 'Полная чистка от пыли и замена термопасты',
        symptoms: ['Шум вентиляторов', 'Перегрев', 'Медленная работа', 'Выключения'],
        warranty: '1 месяц'
      }
    ],
    laptop: [
      {
        title: 'Замена экрана ноутбука',
        price: 'от 3500₽',
        duration: '1-3 дня',
        complexity: 'Средняя',
        description: 'Замена поврежденной матрицы ноутбука',
        symptoms: ['Трещины на экране', 'Полосы', 'Темный экран', 'Мерцание'],
        warranty: '6 месяцев'
      },
      {
        title: 'Ремонт клавиатуры',
        price: 'от 1200₽',
        duration: '1-2 дня',
        complexity: 'Средняя',
        description: 'Замена клавиш или всей клавиатуры',
        symptoms: ['Не работают клавиши', 'Залипание', 'Отсутствие подсветки'],
        warranty: '3 месяца'
      },
      {
        title: 'Замена батареи',
        price: 'от 2000₽',
        duration: '1 день',
        complexity: 'Низкая',
        description: 'Установка новой батареи для ноутбука',
        symptoms: ['Быстрая разрядка', 'Не заряжается', 'Вздутие батареи'],
        warranty: '12 месяцев'
      },
      {
        title: 'Ремонт разъема питания',
        price: 'от 1800₽',
        duration: '2-3 дня',
        complexity: 'Высокая',
        description: 'Восстановление разъема зарядки',
        symptoms: ['Не заряжается', 'Искрение', 'Расшатанный разъем'],
        warranty: '6 месяцев'
      }
    ],
    components: [
      {
        title: 'Ремонт жесткого диска',
        price: 'от 1500₽',
        duration: '2-5 дней',
        complexity: 'Высокая',
        description: 'Восстановление работоспособности HDD',
        symptoms: ['Странные звуки', 'Медленная работа', 'Ошибки чтения', 'Не определяется'],
        warranty: '1 месяц'
      },
      {
        title: 'Ремонт оперативной памяти',
        price: 'от 800₽',
        duration: '1-2 дня',
        complexity: 'Средняя',
        description: 'Восстановление модулей ОЗУ',
        symptoms: ['Синий экран', 'Ошибки памяти', 'Не загружается система'],
        warranty: '3 месяца'
      },
      {
        title: 'Ремонт процессора',
        price: 'от 3000₽',
        duration: '3-7 дней',
        complexity: 'Очень высокая',
        description: 'Восстановление поврежденных процессоров',
        symptoms: ['Перегрев', 'Нестабильная работа', 'Ошибки вычислений'],
        warranty: '1 месяц'
      }
    ],
    peripherals: [
      {
        title: 'Ремонт мониторов',
        price: 'от 1200₽',
        duration: '2-4 дня',
        complexity: 'Средняя',
        description: 'Восстановление LCD/LED мониторов',
        symptoms: ['Нет изображения', 'Полосы', 'Мерцание', 'Искажение цветов'],
        warranty: '3 месяца'
      },
      {
        title: 'Ремонт принтеров',
        price: 'от 800₽',
        duration: '1-3 дня',
        complexity: 'Средняя',
        description: 'Обслуживание и ремонт принтеров',
        symptoms: ['Не печатает', 'Замятие бумаги', 'Плохое качество печати'],
        warranty: '2 месяца'
      },
      {
        title: 'Ремонт клавиатур и мышей',
        price: 'от 500₽',
        duration: '1 день',
        complexity: 'Низкая',
        description: 'Восстановление периферийных устройств',
        symptoms: ['Не работают кнопки', 'Двойные клики', 'Не подключается'],
        warranty: '1 месяц'
      }
    ]
  };

  const repairProcess = [
    {
      step: 1,
      title: 'Прием устройства',
      description: 'Осмотр и фиксация внешних повреждений',
      icon: 'Clipboard'
    },
    {
      step: 2,
      title: 'Диагностика',
      description: 'Полная проверка всех компонентов',
      icon: 'Search'
    },
    {
      step: 3,
      title: 'Согласование',
      description: 'Сообщаем стоимость и сроки ремонта',
      icon: 'MessageCircle'
    },
    {
      step: 4,
      title: 'Ремонт',
      description: 'Устранение неисправностей',
      icon: 'Wrench'
    },
    {
      step: 5,
      title: 'Тестирование',
      description: 'Проверка работоспособности',
      icon: 'CheckCircle'
    },
    {
      step: 6,
      title: 'Выдача',
      description: 'Передача отремонтированного устройства',
      icon: 'Package'
    }
  ];

  const commonProblems = [
    {
      problem: 'Компьютер не включается',
      causes: ['Неисправный блок питания', 'Проблемы с материнской платой', 'Неисправная кнопка питания'],
      solutions: ['Замена БП', 'Ремонт материнской платы', 'Замена кнопки'],
      avgCost: '1500-3000₽'
    },
    {
      problem: 'Перегрев и выключения',
      causes: ['Засорение пылью', 'Высохшая термопаста', 'Неисправные вентиляторы'],
      solutions: ['Чистка от пыли', 'Замена термопасты', 'Замена кулеров'],
      avgCost: '800-2000₽'
    },
    {
      problem: 'Медленная работа',
      causes: ['Вирусы', 'Переполненный диск', 'Старый HDD'],
      solutions: ['Чистка от вирусов', 'Очистка диска', 'Установка SSD'],
      avgCost: '500-4000₽'
    },
    {
      problem: 'Синий экран смерти',
      causes: ['Проблемы с ОЗУ', 'Неисправные драйвера', 'Аппаратные сбои'],
      solutions: ['Замена памяти', 'Переустановка драйверов', 'Диагностика железа'],
      avgCost: '800-2500₽'
    }
  ];

  const warranties = [
    {
      type: 'Стандартная гарантия',
      duration: '3 месяца',
      coverage: 'На все виды ремонтных работ',
      conditions: 'При соблюдении условий эксплуатации'
    },
    {
      type: 'Расширенная гарантия',
      duration: '6 месяцев',
      coverage: 'На замену комплектующих',
      conditions: 'На оригинальные запчасти'
    },
    {
      type: 'Гарантия производителя',
      duration: '1-3 года',
      coverage: 'На новые комплектующие',
      conditions: 'Согласно условиям производителя'
    }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Ремонт компьютеров</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Профессиональный ремонт компьютеров, ноутбуков и комплектующих в Твери
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
            <TabsTrigger value="problems">Проблемы</TabsTrigger>
            <TabsTrigger value="warranty">Гарантии</TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <div className="space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4">
                {repairCategories.map((category) => (
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repairServices[selectedCategory as keyof typeof repairServices].map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge className="bg-tech-blue">{service.price}</Badge>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                      <div className="flex items-center space-x-4 text-sm text-tech-gray">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="BarChart" size={14} />
                          <span>{service.complexity}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Shield" size={14} />
                          <span>{service.warranty}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Симптомы:</h4>
                          <div className="flex flex-wrap gap-1">
                            {service.symptoms.map((symptom, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {symptom}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Заказать ремонт
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="process">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Процесс ремонта</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Наш стандартизированный процесс обеспечивает качественный ремонт и полную прозрачность
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repairProcess.map((step, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={step.icon as any} size={32} className="text-tech-blue" />
                      </div>
                      <div className="w-8 h-8 bg-tech-blue text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-tech-dark mb-2">{step.title}</h3>
                      <p className="text-tech-gray text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Info" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Важная информация</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Диагностика проводится бесплатно при заказе ремонта</li>
                        <li>• Вы получаете SMS-уведомления о статусе ремонта</li>
                        <li>• Все работы выполняются сертифицированными мастерами</li>
                        <li>• Используем только качественные запчасти</li>
                        <li>• Предоставляем гарантию на все виды работ</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="problems">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Частые проблемы</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Самые распространенные неисправности и способы их устранения
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {commonProblems.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-600">{item.problem}</CardTitle>
                      <div className="text-right">
                        <Badge variant="outline">{item.avgCost}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-tech-dark mb-2">Возможные причины:</h4>
                          <ul className="space-y-1">
                            {item.causes.map((cause, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="AlertCircle" size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{cause}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-tech-dark mb-2">Способы решения:</h4>
                          <ul className="space-y-1">
                            {item.solutions.map((solution, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="CheckCircle" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-tech-blue to-blue-700 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Не нашли свою проблему?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Опишите симптомы нашим специалистам, и мы поможем найти решение
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
          </TabsContent>

          <TabsContent value="warranty">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Гарантийные обязательства</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Мы предоставляем различные виды гарантий для вашего спокойствия
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {warranties.map((warranty, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-center">{warranty.type}</CardTitle>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-tech-blue">{warranty.duration}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-center">
                        <div>
                          <h4 className="font-semibold text-tech-dark mb-1">Покрытие:</h4>
                          <p className="text-sm text-tech-gray">{warranty.coverage}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-tech-dark mb-1">Условия:</h4>
                          <p className="text-sm text-tech-gray">{warranty.conditions}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Shield" size={20} className="text-green-500" />
                      <span>Что покрывает гарантия</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Повторное возникновение той же неисправности</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Дефекты установленных запчастей</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Ошибки в выполненных работах</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Бесплатное устранение гарантийных случаев</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="AlertTriangle" size={20} className="text-red-500" />
                      <span>Что НЕ покрывает гарантия</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="X" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Механические повреждения</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Попадание жидкости</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Скачки напряжения</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Неправильная эксплуатация</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="X" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Вирусные атаки</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Icon name="Award" size={32} className="mx-auto mb-3 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Наши гарантии</h3>
                    <p className="text-sm text-green-700 mb-4">
                      Мы настолько уверены в качестве наших работ, что предоставляем одни из самых длительных гарантий на рынке
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">98%</div>
                        <div className="text-sm text-green-700">Успешных ремонтов</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">24ч</div>
                        <div className="text-sm text-green-700">Реакция на гарантийный случай</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">5 лет</div>
                        <div className="text-sm text-green-700">Опыт работы</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Repair;