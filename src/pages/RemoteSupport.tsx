import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const RemoteSupport = () => {
  const [connectionProgress, setConnectionProgress] = useState<number>(0);
  const [isConnected, setIsConnected] = useState(false);

  const remoteSolutions = [
    {
      id: 'teamviewer',
      name: 'TeamViewer',
      icon: 'Monitor',
      security: 'Высокая',
      speed: 'Быстро',
      description: 'Профессиональное решение для удаленного доступа',
      features: ['Шифрование данных', 'Передача файлов', 'Чат', 'Запись сессии']
    },
    {
      id: 'anydesk',
      name: 'AnyDesk',
      icon: 'Laptop',
      security: 'Высокая',
      speed: 'Очень быстро',
      description: 'Легкое и быстрое решение для удаленной помощи',
      features: ['Низкая задержка', 'Высокое качество', 'Простота использования', 'Кроссплатформенность']
    },
    {
      id: 'chrome',
      name: 'Chrome Remote Desktop',
      icon: 'Globe',
      security: 'Средняя',
      speed: 'Средне',
      description: 'Бесплатное решение от Google через браузер',
      features: ['Работает в браузере', 'Бесплатно', 'Простая настройка', 'Доступ с любого устройства']
    },
    {
      id: 'windows',
      name: 'Windows Remote Desktop',
      icon: 'Windows',
      security: 'Высокая',
      speed: 'Быстро',
      description: 'Встроенное решение Windows для удаленного доступа',
      features: ['Встроено в Windows', 'Профессиональные функции', 'Групповые политики', 'Интеграция с AD']
    }
  ];

  const supportServices = [
    {
      service: 'Диагностика проблем',
      price: '300₽',
      duration: '15-30 мин',
      description: 'Удаленная диагностика неисправностей',
      tasks: ['Анализ системы', 'Проверка логов', 'Тестирование компонентов', 'Отчет о состоянии']
    },
    {
      service: 'Установка программ',
      price: '400₽',
      duration: '20-40 мин',
      description: 'Удаленная установка и настройка ПО',
      tasks: ['Загрузка программ', 'Установка и настройка', 'Обучение использованию', 'Создание ярлыков']
    },
    {
      service: 'Настройка системы',
      price: '500₽',
      duration: '30-60 мин',
      description: 'Оптимизация работы операционной системы',
      tasks: ['Настройка автозагрузки', 'Очистка системы', 'Обновление драйверов', 'Настройка безопасности']
    },
    {
      service: 'Обучение пользователей',
      price: '600₽',
      duration: '45-90 мин',
      description: 'Обучение работе с компьютером и программами',
      tasks: ['Демонстрация функций', 'Практические задания', 'Ответы на вопросы', 'Методические материалы']
    },
    {
      service: 'Восстановление системы',
      price: '800₽',
      duration: '60-120 мин',
      description: 'Восстановление работоспособности Windows',
      tasks: ['Анализ проблем', 'Восстановление файлов', 'Исправление ошибок', 'Тестирование']
    },
    {
      service: 'Настройка сети',
      price: '600₽',
      duration: '30-60 мин',
      description: 'Удаленная настройка сетевых подключений',
      tasks: ['Диагностика сети', 'Настройка параметров', 'Тестирование скорости', 'Оптимизация']
    }
  ];

  const securityMeasures = [
    {
      measure: 'Шифрование соединения',
      description: 'Все данные передаются в зашифрованном виде',
      level: 'AES-256'
    },
    {
      measure: 'Двухфакторная аутентификация',
      description: 'Дополнительная проверка личности перед подключением',
      level: 'Обязательно'
    },
    {
      measure: 'Запись сессий',
      description: 'Все действия записываются для контроля качества',
      level: 'По запросу'
    },
    {
      measure: 'Временные пароли',
      description: 'Уникальные пароли для каждой сессии',
      level: 'Автоматически'
    },
    {
      measure: 'Контроль доступа',
      description: 'Вы контролируете, что может делать специалист',
      level: 'Полный контроль'
    }
  ];

  const supportStats = [
    { metric: 'Среднее время подключения', value: '2 минуты', icon: 'Clock' },
    { metric: 'Успешность решения проблем', value: '94%', icon: 'CheckCircle' },
    { metric: 'Средняя оценка качества', value: '4.8/5', icon: 'Star' },
    { metric: 'Время отклика', value: '< 15 минут', icon: 'Zap' }
  ];

  const startConnection = () => {
    setConnectionProgress(0);
    setIsConnected(false);
    const interval = setInterval(() => {
      setConnectionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsConnected(true);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Удаленная поддержка</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Быстрое решение проблем через удаленное подключение к вашему компьютеру
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="solutions" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="solutions">Решения</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="security">Безопасность</TabsTrigger>
            <TabsTrigger value="demo">Демо</TabsTrigger>
            <TabsTrigger value="stats">Статистика</TabsTrigger>
            <TabsTrigger value="connect">Подключиться</TabsTrigger>
          </TabsList>

          <TabsContent value="solutions">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Программы удаленного доступа</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Мы используем проверенные и безопасные решения для удаленной помощи
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {remoteSolutions.map((solution, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                          <Icon name={solution.icon as any} size={24} className="text-tech-blue" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{solution.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-green-600">{solution.security}</Badge>
                            <Badge variant="outline">{solution.speed}</Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription>{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Возможности:</h4>
                          <ul className="space-y-1">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Скачать программу
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Download" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Как подготовиться к удаленной поддержке</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Скачайте и установите программу удаленного доступа</li>
                        <li>• Убедитесь в стабильности интернет-соединения</li>
                        <li>• Подготовьте описание проблемы</li>
                        <li>• Закройте конфиденциальные документы</li>
                        <li>• Будьте готовы предоставить ID для подключения</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Услуги удаленной поддержки</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Широкий спектр задач, которые можно решить удаленно
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {supportServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{service.service}</CardTitle>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-tech-blue">{service.price}</Badge>
                        <Badge variant="outline">{service.duration}</Badge>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Выполняемые задачи:</h4>
                          <ul className="space-y-1">
                            {service.tasks.map((task, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="ArrowRight" size={14} className="text-tech-blue mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{task}</span>
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

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Zap" size={24} className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Преимущества удаленной поддержки</h4>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• Быстрое решение проблем без выезда мастера</li>
                        <li>• Экономия времени и денег</li>
                        <li>• Возможность наблюдать за процессом решения</li>
                        <li>• Обучение в процессе работы</li>
                        <li>• Доступность в любое время</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Безопасность удаленного доступа</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Мы обеспечиваем максимальную безопасность при удаленной работе
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityMeasures.map((measure, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{measure.measure}</CardTitle>
                      <Badge className="bg-green-600">{measure.level}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-tech-gray">{measure.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Shield" size={20} className="text-green-500" />
                      <span>Что мы гарантируем</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Полную конфиденциальность ваших данных</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Отсутствие доступа к личным файлам</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Работу только с разрешенными программами</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Немедленное отключение по вашему требованию</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="AlertTriangle" size={20} className="text-orange-500" />
                      <span>Ваши права</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="Eye" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Наблюдать за всеми действиями специалиста</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Hand" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Прервать сессию в любой момент</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="MessageCircle" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Задавать вопросы в процессе работы</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="FileText" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Получить отчет о выполненных работах</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="AlertTriangle" size={24} className="text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Важные правила безопасности</h4>
                      <ul className="space-y-1 text-red-700 text-sm">
                        <li>• Никогда не предоставляйте доступ незнакомым лицам</li>
                        <li>• Всегда проверяйте личность специалиста по телефону</li>
                        <li>• Закрывайте банковские и личные документы</li>
                        <li>• Не сообщайте пароли от важных аккаунтов</li>
                        <li>• Прерывайте сессию при подозрительных действиях</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demo">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Демонстрация подключения</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Посмотрите, как происходит процесс удаленного подключения
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Процесс подключения</CardTitle>
                  <CardDescription>
                    Интерактивная демонстрация установки соединения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-tech-blue mb-2">
                        {Math.round(connectionProgress)}%
                      </div>
                      <p className="text-tech-gray">
                        {isConnected ? 'Подключение установлено' : 'Установка соединения'}
                      </p>
                    </div>
                    
                    <Progress value={connectionProgress} className="h-4" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Текущий этап:</h4>
                        <p className="text-sm text-tech-gray">
                          {connectionProgress < 20 ? 'Запуск программы' :
                           connectionProgress < 40 ? 'Проверка соединения' :
                           connectionProgress < 60 ? 'Аутентификация' :
                           connectionProgress < 80 ? 'Установка защищенного канала' :
                           connectionProgress < 100 ? 'Финальная проверка' :
                           'Готов к работе'}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Статус безопасности:</h4>
                        <p className="text-sm text-green-600">
                          {connectionProgress > 60 ? 'Соединение зашифровано' : 'Проверка безопасности...'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        onClick={startConnection}
                        disabled={connectionProgress > 0 && connectionProgress < 100}
                        className="bg-tech-blue hover:bg-blue-700"
                      >
                        {connectionProgress === 0 ? 'Начать подключение' :
                         connectionProgress === 100 ? 'Подключиться заново' :
                         'Подключение...'}
                      </Button>
                    </div>

                    {isConnected && (
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="p-4 text-center">
                          <Icon name="CheckCircle" size={32} className="mx-auto mb-2 text-green-600" />
                          <h4 className="font-semibold text-green-800 mb-2">Соединение установлено!</h4>
                          <p className="text-sm text-green-700">
                            Специалист может приступать к решению вашей проблемы
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Статистика работы</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Показатели эффективности нашей удаленной поддержки
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportStats.map((stat, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={stat.icon as any} size={32} className="text-tech-blue" />
                      </div>
                      <div className="text-3xl font-bold text-tech-blue mb-2">{stat.value}</div>
                      <div className="text-tech-gray text-sm">{stat.metric}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Отзывы о удаленной поддержке</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-center mb-2">
                        {[1,2,3,4,5].map(star => (
                          <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-tech-gray italic mb-2">
                        "Очень быстро решили проблему с принтером. Удобно, что не нужно ждать мастера."
                      </p>
                      <p className="text-xs text-tech-gray">Елена К., бухгалтер</p>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-center mb-2">
                        {[1,2,3,4,5].map(star => (
                          <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-tech-gray italic mb-2">
                        "Помогли настроить программу для работы. Все объяснили и показали."
                      </p>
                      <p className="text-xs text-tech-gray">Игорь М., дизайнер</p>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-center mb-2">
                        {[1,2,3,4,5].map(star => (
                          <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-tech-gray italic mb-2">
                        "Отличный сервис! Решили проблему за 10 минут, которую я не мог решить неделю."
                      </p>
                      <p className="text-xs text-tech-gray">Андрей С., программист</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="connect">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Подключиться к удаленной поддержке</CardTitle>
                  <CardDescription>
                    Заполните форму для получения инструкций по подключению
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-tech-dark mb-2">Имя *</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                          placeholder="Ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-tech-dark mb-2">Телефон *</label>
                        <input 
                          type="tel" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                          placeholder="+7 (___) ___-__-__"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Тип проблемы *</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                        <option value="">Выберите тип проблемы</option>
                        <option>Медленная работа компьютера</option>
                        <option>Проблемы с программами</option>
                        <option>Настройка оборудования</option>
                        <option>Вирусы и безопасность</option>
                        <option>Обучение работе с ПК</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Описание проблемы *</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="Подробно опишите проблему, которую нужно решить..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Операционная система</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                        <option>Windows 11</option>
                        <option>Windows 10</option>
                        <option>Windows 8/8.1</option>
                        <option>Windows 7</option>
                        <option>macOS</option>
                        <option>Linux</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Срочная поддержка (в течение 15 минут, +100%)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Согласен на запись сессии для контроля качества</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" required />
                        <span className="text-sm">Согласен на обработку персональных данных *</span>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-tech-blue hover:bg-blue-700">
                      <Icon name="Send" size={20} className="mr-2" />
                      Запросить удаленную поддержку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Download" size={20} className="text-tech-blue" />
                      <span>Быстрое подключение</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-tech-gray text-sm">
                        Для экстренной помощи скачайте программу и сообщите нам ID:
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        <Button variant="outline" className="justify-start">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать TeamViewer
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать AnyDesk
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Icon name="Globe" size={16} className="mr-2" />
                          Chrome Remote Desktop
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Clock" size={20} className="text-tech-blue" />
                      <span>Время работы</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Пн-Пт:</span>
                        <span className="font-medium">8:00 - 22:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Суббота:</span>
                        <span className="font-medium">10:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Воскресенье:</span>
                        <span className="font-medium">12:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Экстренная поддержка:</span>
                        <span className="font-medium text-red-600">24/7</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <Icon name="Headphones" size={32} className="mx-auto mb-3 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Нужна помощь прямо сейчас?</h3>
                    <p className="text-sm text-green-700 mb-4">
                      Звоните и мы поможем подключиться в течение 5 минут!
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Icon name="Phone" size={16} className="mr-2" />
                      +7 (4822) 123-456
                    </Button>
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

export default RemoteSupport;