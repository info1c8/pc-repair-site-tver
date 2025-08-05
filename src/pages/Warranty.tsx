import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Warranty = () => {
  const [warrantyNumber, setWarrantyNumber] = useState('');
  const [warrantyInfo, setWarrantyInfo] = useState<any>(null);

  const warrantyTypes = [
    {
      type: 'Стандартная гарантия',
      duration: '3 месяца',
      coverage: 'Все виды ремонтных работ',
      description: 'Базовая гарантия на выполненные работы',
      conditions: [
        'Соблюдение условий эксплуатации',
        'Отсутствие механических повреждений',
        'Использование оригинальных запчастей',
        'Своевременное обращение при проблемах'
      ],
      includes: [
        'Бесплатное устранение дефектов работы',
        'Замена неисправных запчастей',
        'Повторная диагностика',
        'Консультации по эксплуатации'
      ]
    },
    {
      type: 'Расширенная гарантия',
      duration: '6 месяцев',
      coverage: 'Работы + установленные компоненты',
      description: 'Увеличенный срок гарантии для сложных работ',
      conditions: [
        'Использование премиум компонентов',
        'Профессиональная установка',
        'Регулярное обслуживание',
        'Соблюдение рекомендаций'
      ],
      includes: [
        'Все из стандартной гарантии',
        'Профилактическое обслуживание',
        'Приоритетная поддержка',
        'Скидки на дополнительные услуги'
      ]
    },
    {
      type: 'Гарантия производителя',
      duration: '1-3 года',
      coverage: 'Новые комплектующие',
      description: 'Официальная гарантия от производителя',
      conditions: [
        'Сохранение гарантийных наклеек',
        'Использование по назначению',
        'Отсутствие самостоятельного ремонта',
        'Обращение в авторизованный сервис'
      ],
      includes: [
        'Бесплатная замена при браке',
        'Ремонт в сервисном центре',
        'Техническая поддержка',
        'Обновления прошивки'
      ]
    }
  ];

  const warrantyServices = [
    {
      service: 'Гарантийная диагностика',
      price: 'Бесплатно',
      description: 'Проверка устройства в рамках гарантийного случая',
      duration: '30-60 мин'
    },
    {
      service: 'Гарантийный ремонт',
      price: 'Бесплатно',
      description: 'Устранение дефектов, покрываемых гарантией',
      duration: '1-3 дня'
    },
    {
      service: 'Замена по гарантии',
      price: 'Бесплатно',
      description: 'Замена неисправного компонента на новый',
      duration: '1-7 дней'
    },
    {
      service: 'Гарантийная консультация',
      price: 'Бесплатно',
      description: 'Консультация по вопросам эксплуатации',
      duration: '15-30 мин'
    }
  ];

  const warrantyExclusions = [
    {
      exclusion: 'Механические повреждения',
      examples: ['Удары и падения', 'Трещины корпуса', 'Сломанные разъемы', 'Повреждения от неосторожности'],
      icon: 'AlertTriangle'
    },
    {
      exclusion: 'Воздействие жидкости',
      examples: ['Залитие водой/кофе', 'Высокая влажность', 'Конденсат', 'Коррозия контактов'],
      icon: 'Droplets'
    },
    {
      exclusion: 'Электрические повреждения',
      examples: ['Скачки напряжения', 'Неправильное подключение', 'Использование неподходящих адаптеров'],
      icon: 'Zap'
    },
    {
      exclusion: 'Программные проблемы',
      examples: ['Вирусные атаки', 'Неправильная настройка', 'Установка несовместимого ПО'],
      icon: 'Bug'
    },
    {
      exclusion: 'Естественный износ',
      examples: ['Выгорание экрана', 'Износ клавиш', 'Деградация батареи', 'Старение компонентов'],
      icon: 'Clock'
    }
  ];

  const checkWarranty = () => {
    if (warrantyNumber.length >= 6) {
      // Имитация проверки гарантии
      setWarrantyInfo({
        number: warrantyNumber,
        device: 'Ноутбук ASUS VivoBook',
        service: 'Замена экрана',
        date: '15.02.2024',
        expiry: '15.05.2024',
        status: 'Активна',
        remaining: '45 дней',
        master: 'Алексей Петров'
      });
    }
  };

  const warrantySteps = [
    {
      step: 1,
      title: 'Обращение',
      description: 'Свяжитесь с нами по телефону или через сайт',
      icon: 'Phone'
    },
    {
      step: 2,
      title: 'Проверка гарантии',
      description: 'Мы проверим действительность гарантийных обязательств',
      icon: 'Search'
    },
    {
      step: 3,
      title: 'Диагностика',
      description: 'Определяем, покрывается ли проблема гарантией',
      icon: 'Stethoscope'
    },
    {
      step: 4,
      title: 'Устранение',
      description: 'Бесплатно устраняем гарантийную неисправность',
      icon: 'Wrench'
    },
    {
      step: 5,
      title: 'Тестирование',
      description: 'Проверяем качество выполненных работ',
      icon: 'CheckCircle'
    }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Гарантийное обслуживание</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Полная информация о гарантийных обязательствах и условиях обслуживания
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="check" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="check">Проверить гарантию</TabsTrigger>
            <TabsTrigger value="types">Виды гарантий</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="exclusions">Исключения</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
          </TabsList>

          <TabsContent value="check">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Проверка гарантии</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Введите номер гарантийного талона для проверки статуса
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Проверить статус гарантии</CardTitle>
                    <CardDescription>
                      Введите номер из гарантийного талона или чека
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Номер гарантийного талона"
                          value={warrantyNumber}
                          onChange={(e) => setWarrantyNumber(e.target.value)}
                          className="flex-1"
                        />
                        <Button 
                          onClick={checkWarranty}
                          disabled={warrantyNumber.length < 6}
                          className="bg-tech-blue hover:bg-blue-700"
                        >
                          <Icon name="Search" size={16} className="mr-2" />
                          Проверить
                        </Button>
                      </div>
                      
                      {warrantyInfo && (
                        <Card className="bg-green-50 border-green-200">
                          <CardContent className="p-4">
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="font-semibold">Статус гарантии:</span>
                                <Badge className="bg-green-600">{warrantyInfo.status}</Badge>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-tech-gray">Устройство:</span>
                                    <span className="font-medium">{warrantyInfo.device}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-tech-gray">Услуга:</span>
                                    <span className="font-medium">{warrantyInfo.service}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-tech-gray">Мастер:</span>
                                    <span className="font-medium">{warrantyInfo.master}</span>
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span className="text-tech-gray">Дата работ:</span>
                                    <span className="font-medium">{warrantyInfo.date}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-tech-gray">Истекает:</span>
                                    <span className="font-medium">{warrantyInfo.expiry}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-tech-gray">Осталось:</span>
                                    <span className="font-medium text-green-600">{warrantyInfo.remaining}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="text-center pt-3 border-t">
                                <Button className="bg-green-600 hover:bg-green-700 text-white">
                                  <Icon name="Phone" size={16} className="mr-2" />
                                  Обратиться по гарантии
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                      
                      {!warrantyInfo && warrantyNumber.length >= 6 && (
                        <Card className="bg-red-50 border-red-200">
                          <CardContent className="p-4 text-center">
                            <Icon name="AlertCircle" size={32} className="mx-auto mb-2 text-red-600" />
                            <h4 className="font-semibold text-red-800 mb-2">Гарантия не найдена</h4>
                            <p className="text-sm text-red-700 mb-3">
                              Проверьте правильность номера или обратитесь к нам для уточнения
                            </p>
                            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                              <Icon name="Phone" size={16} className="mr-2" />
                              Связаться с поддержкой
                            </Button>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Info" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Где найти номер гарантии</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• В гарантийном талоне (обычно 8-12 цифр)</li>
                        <li>• В чеке об оплате услуг</li>
                        <li>• В SMS-уведомлении о завершении работ</li>
                        <li>• В email с отчетом о выполненных работах</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="types">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Виды гарантий</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Мы предоставляем различные типы гарантийных обязательств
                </p>
              </div>

              <div className="space-y-8">
                {warrantyTypes.map((warranty, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl">{warranty.type}</CardTitle>
                          <CardDescription className="mt-2">{warranty.description}</CardDescription>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-tech-blue">{warranty.duration}</div>
                          <div className="text-sm text-tech-gray">{warranty.coverage}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-3">Что включает гарантия:</h4>
                          <ul className="space-y-2">
                            {warranty.includes.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-orange-600 mb-3">Условия действия:</h4>
                          <ul className="space-y-2">
                            {warranty.conditions.map((condition, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="AlertCircle" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{condition}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Гарантийные услуги</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Услуги, предоставляемые в рамках гарантийных обязательств
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {warrantyServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{service.service}</CardTitle>
                        <Badge className="bg-green-600">{service.price}</Badge>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                      <div className="flex items-center space-x-2 text-sm text-tech-gray">
                        <Icon name="Clock" size={14} />
                        <span>{service.duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-tech-blue hover:bg-blue-700">
                        Воспользоваться услугой
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Gift" size={24} className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Дополнительные преимущества</h4>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• Приоритетное обслуживание для гарантийных клиентов</li>
                        <li>• Скидка 20% на негарантийные работы</li>
                        <li>• Бесплатные консультации в течение гарантийного периода</li>
                        <li>• Уведомления о профилактических мероприятиях</li>
                        <li>• Продление гарантии при регулярном обслуживании</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="exclusions">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Исключения из гарантии</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Случаи, которые не покрываются гарантийными обязательствами
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {warrantyExclusions.map((exclusion, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <Icon name={exclusion.icon as any} size={24} className="text-red-600" />
                        </div>
                        <CardTitle className="text-lg text-red-600">{exclusion.exclusion}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-semibold mb-2">Примеры:</h4>
                        <ul className="space-y-1">
                          {exclusion.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Icon name="X" size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-tech-gray">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Lightbulb" size={24} className="text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Как сохранить гарантию</h4>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• Соблюдайте условия эксплуатации устройства</li>
                        <li>• Не вскрывайте корпус самостоятельно</li>
                        <li>• Используйте оригинальные зарядные устройства</li>
                        <li>• Защищайте от влаги и механических повреждений</li>
                        <li>• Обращайтесь к нам при первых признаках проблем</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="process">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Процесс гарантийного обслуживания</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Пошаговый алгоритм обращения по гарантии
                </p>
              </div>

              <div className="space-y-6">
                {warrantySteps.map((step, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name={step.icon as any} size={32} className="text-tech-blue" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-8 h-8 bg-tech-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {step.step}
                            </div>
                            <h3 className="text-lg font-semibold text-tech-dark">{step.title}</h3>
                          </div>
                          <p className="text-tech-gray">{step.description}</p>
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
                      <Icon name="FileText" size={20} className="text-tech-blue" />
                      <span>Необходимые документы</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Гарантийный талон с печатью</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Чек об оплате услуг</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Документ, удостоверяющий личность</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Описание проблемы (желательно)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Clock" size={20} className="text-tech-blue" />
                      <span>Сроки гарантийного обслуживания</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Диагностика:</span>
                        <span className="font-semibold">В день обращения</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Простой ремонт:</span>
                        <span className="font-semibold">1-2 дня</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Сложный ремонт:</span>
                        <span className="font-semibold">3-7 дней</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Заказ запчастей:</span>
                        <span className="font-semibold">5-14 дней</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-tech-blue to-blue-700 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Возникла гарантийная проблема?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Обращайтесь к нам незамедлительно для сохранения гарантийных прав
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить по гарантии
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tech-blue">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Написать в поддержку
                    </Button>
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

export default Warranty;