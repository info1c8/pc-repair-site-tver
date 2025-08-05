import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Maintenance = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [maintenanceProgress, setMaintenanceProgress] = useState<number>(0);

  const maintenancePlans = [
    {
      id: 'basic',
      name: 'Базовый',
      price: '1500₽/мес',
      description: 'Основное обслуживание для домашних пользователей',
      features: [
        'Ежемесячная чистка от пыли',
        'Проверка температур',
        'Обновление антивируса',
        'Базовая диагностика',
        'Консультации по телефону'
      ],
      visits: '1 раз в месяц',
      response: '24 часа',
      warranty: '1 месяц'
    },
    {
      id: 'standard',
      name: 'Стандартный',
      price: '2500₽/мес',
      description: 'Комплексное обслуживание для активных пользователей',
      features: [
        'Все из базового плана',
        'Оптимизация системы',
        'Обновление драйверов',
        'Резервное копирование',
        'Удаленная поддержка',
        'Замена термопасты (раз в полгода)'
      ],
      visits: '2 раза в месяц',
      response: '12 часов',
      warranty: '3 месяца',
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: '4000₽/мес',
      description: 'Максимальное обслуживание для профессионалов',
      features: [
        'Все из стандартного плана',
        'Мониторинг 24/7',
        'Приоритетная поддержка',
        'Профилактическая замена компонентов',
        'Настройка производительности',
        'Обучение пользователей'
      ],
      visits: '4 раза в месяц',
      response: '2 часа',
      warranty: '6 месяцев'
    }
  ];

  const maintenanceServices = [
    {
      category: 'Профилактика',
      icon: 'Shield',
      services: [
        { name: 'Чистка от пыли', frequency: 'Ежемесячно', importance: 'Высокая' },
        { name: 'Замена термопасты', frequency: 'Раз в 6 месяцев', importance: 'Высокая' },
        { name: 'Проверка кабелей', frequency: 'Раз в 3 месяца', importance: 'Средняя' },
        { name: 'Тестирование компонентов', frequency: 'Ежемесячно', importance: 'Высокая' }
      ]
    },
    {
      category: 'Программное обеспечение',
      icon: 'Download',
      services: [
        { name: 'Обновление ОС', frequency: 'Еженедельно', importance: 'Высокая' },
        { name: 'Обновление драйверов', frequency: 'Ежемесячно', importance: 'Средняя' },
        { name: 'Проверка на вирусы', frequency: 'Еженедельно', importance: 'Высокая' },
        { name: 'Очистка реестра', frequency: 'Ежемесячно', importance: 'Низкая' }
      ]
    },
    {
      category: 'Оптимизация',
      icon: 'Zap',
      services: [
        { name: 'Дефрагментация диска', frequency: 'Ежемесячно', importance: 'Средняя' },
        { name: 'Очистка временных файлов', frequency: 'Еженедельно', importance: 'Средняя' },
        { name: 'Настройка автозагрузки', frequency: 'Раз в 3 месяца', importance: 'Средняя' },
        { name: 'Оптимизация реестра', frequency: 'Ежемесячно', importance: 'Низкая' }
      ]
    },
    {
      category: 'Безопасность',
      icon: 'Lock',
      services: [
        { name: 'Резервное копирование', frequency: 'Еженедельно', importance: 'Высокая' },
        { name: 'Проверка брандмауэра', frequency: 'Ежемесячно', importance: 'Высокая' },
        { name: 'Обновление антивируса', frequency: 'Ежедневно', importance: 'Высокая' },
        { name: 'Проверка паролей', frequency: 'Раз в 3 месяца', importance: 'Средняя' }
      ]
    }
  ];

  const maintenanceChecklist = [
    { task: 'Проверка температур процессора и видеокарты', completed: true },
    { task: 'Чистка вентиляторов от пыли', completed: true },
    { task: 'Проверка свободного места на дисках', completed: true },
    { task: 'Обновление антивирусных баз', completed: false },
    { task: 'Проверка автозагрузки программ', completed: false },
    { task: 'Тестирование оперативной памяти', completed: false },
    { task: 'Проверка целостности системных файлов', completed: false },
    { task: 'Создание точки восстановления', completed: false }
  ];

  const warningSignals = [
    {
      signal: 'Повышенный шум вентиляторов',
      cause: 'Засорение пылью или износ подшипников',
      action: 'Чистка или замена вентиляторов',
      urgency: 'Средняя'
    },
    {
      signal: 'Медленная загрузка системы',
      cause: 'Фрагментация диска или автозагрузка программ',
      action: 'Оптимизация системы',
      urgency: 'Низкая'
    },
    {
      signal: 'Частые зависания',
      cause: 'Проблемы с ОЗУ или перегрев',
      action: 'Диагностика и ремонт',
      urgency: 'Высокая'
    },
    {
      signal: 'Странные звуки из корпуса',
      cause: 'Неисправность жесткого диска',
      action: 'Срочная замена HDD',
      urgency: 'Критическая'
    }
  ];

  const startMaintenanceDemo = () => {
    setMaintenanceProgress(0);
    const interval = setInterval(() => {
      setMaintenanceProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Техническое обслуживание</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Регулярное обслуживание для стабильной и долговечной работы вашего компьютера
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="plans" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="plans">Планы</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="checklist">Чек-лист</TabsTrigger>
            <TabsTrigger value="signals">Сигналы</TabsTrigger>
            <TabsTrigger value="demo">Демо</TabsTrigger>
          </TabsList>

          <TabsContent value="plans">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Планы обслуживания</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Выберите подходящий план технического обслуживания для вашего компьютера
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {maintenancePlans.map((plan) => (
                  <Card 
                    key={plan.id} 
                    className={`relative hover:shadow-lg transition-all cursor-pointer ${
                      selectedPlan === plan.id ? 'ring-2 ring-tech-blue' : ''
                    } ${plan.popular ? 'border-tech-blue' : ''}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-tech-blue">
                        Популярный
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="text-3xl font-bold text-tech-blue">{plan.price}</div>
                      <CardDescription className="mt-2">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Визиты:</span>
                            <span className="font-medium">{plan.visits}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Время отклика:</span>
                            <span className="font-medium">{plan.response}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Гарантия:</span>
                            <span className="font-medium">{plan.warranty}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Что включено:</h4>
                          <ul className="space-y-2">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          className={`w-full ${
                            plan.popular 
                              ? 'bg-tech-blue hover:bg-blue-700' 
                              : 'bg-gray-600 hover:bg-gray-700'
                          }`}
                        >
                          Выбрать план
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Корпоративное обслуживание</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Специальные условия для организаций и предприятий
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-sm opacity-90">Компьютеров</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">-20%</div>
                      <div className="text-sm opacity-90">Скидка</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">Поддержка</div>
                    </div>
                  </div>
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    Получить предложение
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Виды обслуживания</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Комплексный подход к поддержанию вашего компьютера в идеальном состоянии
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {maintenanceServices.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                          <Icon name={category.icon as any} size={24} className="text-tech-blue" />
                        </div>
                        <CardTitle className="text-xl">{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.services.map((service, idx) => (
                          <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-medium text-tech-dark">{service.name}</div>
                              <div className="text-sm text-tech-gray">{service.frequency}</div>
                            </div>
                            <Badge variant={
                              service.importance === 'Высокая' ? 'destructive' :
                              service.importance === 'Средняя' ? 'default' : 'secondary'
                            }>
                              {service.importance}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Info" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Преимущества регулярного обслуживания</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Увеличение срока службы компонентов на 30-50%</li>
                        <li>• Снижение вероятности внезапных поломок на 80%</li>
                        <li>• Поддержание оптимальной производительности</li>
                        <li>• Экономия на дорогостоящем ремонте</li>
                        <li>• Защита важных данных от потери</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="checklist">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Чек-лист обслуживания</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Стандартный список проверок при техническом обслуживании
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Текущее обслуживание</CardTitle>
                    <CardDescription>
                      Прогресс выполнения планового обслуживания
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {maintenanceChecklist.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            item.completed 
                              ? 'bg-green-500 border-green-500' 
                              : 'border-gray-300'
                          }`}>
                            {item.completed && (
                              <Icon name="Check" size={14} className="text-white" />
                            )}
                          </div>
                          <span className={`text-sm ${
                            item.completed 
                              ? 'text-tech-dark line-through' 
                              : 'text-tech-gray'
                          }`}>
                            {item.task}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Прогресс выполнения</span>
                        <span>{Math.round((maintenanceChecklist.filter(item => item.completed).length / maintenanceChecklist.length) * 100)}%</span>
                      </div>
                      <Progress 
                        value={(maintenanceChecklist.filter(item => item.completed).length / maintenanceChecklist.length) * 100} 
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Рекомендации</CardTitle>
                    <CardDescription>
                      Что нужно сделать для оптимальной работы
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Icon name="AlertTriangle" size={16} className="text-yellow-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-yellow-800">Требует внимания</div>
                            <div className="text-sm text-yellow-700">Температура процессора выше нормы</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-green-800">Все в порядке</div>
                            <div className="text-sm text-green-700">Система работает стабильно</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Icon name="Info" size={16} className="text-blue-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-blue-800">Рекомендация</div>
                            <div className="text-sm text-blue-700">Обновить драйвера видеокарты</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Персональный чек-лист</CardTitle>
                  <CardDescription>
                    Создайте свой список задач для регулярного обслуживания
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <input 
                        type="text" 
                        placeholder="Добавить новую задачу..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                      />
                      <Button className="bg-tech-blue hover:bg-blue-700">
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                    
                    <div className="text-center py-8 text-tech-gray">
                      <Icon name="ClipboardList" size={48} className="mx-auto mb-2" />
                      <p>Добавьте задачи для создания персонального чек-листа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="signals">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Тревожные сигналы</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Признаки того, что компьютеру требуется срочное обслуживание
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {warningSignals.map((signal, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-red-600">{signal.signal}</CardTitle>
                        <Badge variant={
                          signal.urgency === 'Критическая' ? 'destructive' :
                          signal.urgency === 'Высокая' ? 'default' :
                          signal.urgency === 'Средняя' ? 'secondary' : 'outline'
                        }>
                          {signal.urgency}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-tech-dark mb-1">Возможная причина:</h4>
                          <p className="text-sm text-tech-gray">{signal.cause}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-tech-dark mb-1">Что делать:</h4>
                          <p className="text-sm text-tech-gray">{signal.action}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="AlertTriangle" size={24} className="text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Когда обращаться немедленно</h4>
                      <ul className="space-y-1 text-red-700 text-sm">
                        <li>• Компьютер не включается или выключается сам по себе</li>
                        <li>• Появился запах гари или дым из корпуса</li>
                        <li>• Жесткий диск издает странные звуки (щелчки, скрежет)</li>
                        <li>• Частые синие экраны смерти (BSOD)</li>
                        <li>• Критически высокие температуры компонентов</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-tech-blue to-blue-700 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Заметили тревожные сигналы?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Не ждите поломки - обратитесь к нашим специалистам прямо сейчас
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Экстренный вызов
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tech-blue">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Онлайн консультация
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demo">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Демонстрация обслуживания</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Посмотрите, как проходит процесс технического обслуживания
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Процесс обслуживания</CardTitle>
                  <CardDescription>
                    Интерактивная демонстрация этапов технического обслуживания
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-tech-blue mb-2">
                        {Math.round(maintenanceProgress)}%
                      </div>
                      <p className="text-tech-gray">Прогресс обслуживания</p>
                    </div>
                    
                    <Progress value={maintenanceProgress} className="h-4" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Текущий этап:</h4>
                        <p className="text-sm text-tech-gray">
                          {maintenanceProgress < 20 ? 'Диагностика системы' :
                           maintenanceProgress < 40 ? 'Чистка от пыли' :
                           maintenanceProgress < 60 ? 'Обновление ПО' :
                           maintenanceProgress < 80 ? 'Оптимизация системы' :
                           maintenanceProgress < 100 ? 'Финальное тестирование' :
                           'Обслуживание завершено'}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Время выполнения:</h4>
                        <p className="text-sm text-tech-gray">
                          {maintenanceProgress === 100 ? 'Завершено' : 'Примерно 45 минут'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        onClick={startMaintenanceDemo}
                        disabled={maintenanceProgress > 0 && maintenanceProgress < 100}
                        className="bg-tech-blue hover:bg-blue-700"
                      >
                        {maintenanceProgress === 0 ? 'Начать обслуживание' :
                         maintenanceProgress === 100 ? 'Запустить заново' :
                         'Обслуживание в процессе...'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Thermometer" size={20} className="text-red-500" />
                      <span>Температуры</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>CPU:</span>
                        <span className="text-green-600">45°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GPU:</span>
                        <span className="text-green-600">38°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Материнская плата:</span>
                        <span className="text-green-600">32°C</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="HardDrive" size={20} className="text-blue-500" />
                      <span>Диски</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>SSD C:</span>
                        <span className="text-green-600">Отлично</span>
                      </div>
                      <div className="flex justify-between">
                        <span>HDD D:</span>
                        <span className="text-yellow-600">Хорошо</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Свободно:</span>
                        <span>245 GB</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="MemoryStick" size={20} className="text-purple-500" />
                      <span>Память</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Использовано:</span>
                        <span>8.2 / 16 GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ошибки:</span>
                        <span className="text-green-600">Нет</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Тест:</span>
                        <span className="text-green-600">Пройден</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Maintenance;