import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const VirusRemoval = () => {
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [selectedThreat, setSelectedThreat] = useState<string>('');

  const virusTypes = [
    {
      id: 'adware',
      name: 'Рекламное ПО',
      icon: 'AlertTriangle',
      severity: 'Низкая',
      symptoms: ['Всплывающая реклама', 'Изменение стартовой страницы', 'Медленная работа браузера'],
      removalTime: '1-2 часа',
      price: '800₽'
    },
    {
      id: 'trojan',
      name: 'Троянские программы',
      icon: 'Shield',
      severity: 'Высокая',
      symptoms: ['Кража паролей', 'Удаленный доступ', 'Нестабильная работа системы'],
      removalTime: '2-4 часа',
      price: '1200₽'
    },
    {
      id: 'ransomware',
      name: 'Шифровальщики',
      icon: 'Lock',
      severity: 'Критическая',
      symptoms: ['Заблокированные файлы', 'Требование выкупа', 'Измененные расширения файлов'],
      removalTime: '4-8 часов',
      price: '2000₽'
    },
    {
      id: 'rootkit',
      name: 'Руткиты',
      icon: 'Eye',
      severity: 'Очень высокая',
      symptoms: ['Скрытые процессы', 'Невидимые файлы', 'Изменение системных файлов'],
      removalTime: '3-6 часов',
      price: '1500₽'
    },
    {
      id: 'spyware',
      name: 'Шпионское ПО',
      icon: 'Search',
      severity: 'Средняя',
      symptoms: ['Слежка за действиями', 'Кража личных данных', 'Медленная работа'],
      removalTime: '2-3 часа',
      price: '1000₽'
    },
    {
      id: 'worm',
      name: 'Сетевые черви',
      icon: 'Wifi',
      severity: 'Высокая',
      symptoms: ['Распространение по сети', 'Высокая нагрузка на сеть', 'Заражение других устройств'],
      removalTime: '2-4 часа',
      price: '1300₽'
    }
  ];

  const cleaningSteps = [
    {
      step: 1,
      title: 'Диагностика заражения',
      description: 'Анализ системы и выявление типов вредоносного ПО',
      duration: '30 мин'
    },
    {
      step: 2,
      title: 'Создание резервной копии',
      description: 'Сохранение важных данных перед очисткой',
      duration: '20 мин'
    },
    {
      step: 3,
      title: 'Загрузка с внешнего носителя',
      description: 'Запуск системы с антивирусного диска',
      duration: '10 мин'
    },
    {
      step: 4,
      title: 'Глубокое сканирование',
      description: 'Полная проверка всех файлов и системных областей',
      duration: '1-3 часа'
    },
    {
      step: 5,
      title: 'Удаление угроз',
      description: 'Карантин и удаление обнаруженных вирусов',
      duration: '30 мин'
    },
    {
      step: 6,
      title: 'Восстановление системы',
      description: 'Восстановление поврежденных системных файлов',
      duration: '30 мин'
    },
    {
      step: 7,
      title: 'Установка защиты',
      description: 'Настройка антивируса и брандмауэра',
      duration: '20 мин'
    }
  ];

  const antivirusOptions = [
    {
      name: 'Kaspersky Security Cloud',
      price: '2000₽/год',
      features: ['Защита в реальном времени', 'Веб-защита', 'Защита от фишинга', 'Родительский контроль'],
      rating: 9.5,
      recommended: true
    },
    {
      name: 'ESET NOD32',
      price: '1800₽/год',
      features: ['Легкий на ресурсы', 'Быстрое сканирование', 'Защита от эксплойтов', 'Анти-фишинг'],
      rating: 9.2,
      recommended: false
    },
    {
      name: 'Bitdefender Total Security',
      price: '2200₽/год',
      features: ['Многослойная защита', 'VPN включен', 'Менеджер паролей', 'Защита веб-камеры'],
      rating: 9.7,
      recommended: true
    },
    {
      name: 'Windows Defender',
      price: 'Бесплатно',
      features: ['Встроен в Windows', 'Базовая защита', 'Облачная защита', 'Контроль приложений'],
      rating: 8.5,
      recommended: false
    }
  ];

  const preventionTips = [
    {
      tip: 'Регулярно обновляйте ОС',
      description: 'Устанавливайте обновления безопасности сразу после выхода',
      importance: 'Критично'
    },
    {
      tip: 'Не открывайте подозрительные ссылки',
      description: 'Проверяйте отправителя и содержание писем перед переходом по ссылкам',
      importance: 'Высокая'
    },
    {
      tip: 'Используйте надежные пароли',
      description: 'Создавайте сложные уникальные пароли для каждого сервиса',
      importance: 'Высокая'
    },
    {
      tip: 'Скачивайте ПО с официальных сайтов',
      description: 'Избегайте сомнительных источников и торрентов',
      importance: 'Средняя'
    },
    {
      tip: 'Делайте резервные копии',
      description: 'Регулярно создавайте бэкапы важных данных',
      importance: 'Высокая'
    },
    {
      tip: 'Настройте брандмауэр',
      description: 'Включите и правильно настройте системный брандмауэр',
      importance: 'Средняя'
    }
  ];

  const emergencyActions = [
    {
      action: 'Отключите интернет',
      reason: 'Предотвращение передачи данных и дальнейшего заражения',
      priority: 1
    },
    {
      action: 'Не вводите пароли',
      reason: 'Избежание кражи учетных данных',
      priority: 2
    },
    {
      action: 'Сделайте фото экрана',
      reason: 'Документирование проблемы для специалистов',
      priority: 3
    },
    {
      action: 'Обратитесь к специалистам',
      reason: 'Профессиональное решение без потери данных',
      priority: 4
    }
  ];

  const startScanDemo = () => {
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Удаление вирусов</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Профессиональная очистка компьютера от всех видов вредоносного ПО
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="threats" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="threats">Угрозы</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
            <TabsTrigger value="antivirus">Антивирусы</TabsTrigger>
            <TabsTrigger value="prevention">Профилактика</TabsTrigger>
            <TabsTrigger value="emergency">Экстренная помощь</TabsTrigger>
            <TabsTrigger value="scan">Сканирование</TabsTrigger>
          </TabsList>

          <TabsContent value="threats">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Типы вредоносного ПО</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Мы боремся со всеми видами компьютерных угроз
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {virusTypes.map((virus) => (
                  <Card 
                    key={virus.id} 
                    className={`hover:shadow-lg transition-all cursor-pointer ${
                      selectedThreat === virus.id ? 'ring-2 ring-tech-blue' : ''
                    }`}
                    onClick={() => setSelectedThreat(virus.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <Icon name={virus.icon as any} size={24} className="text-red-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{virus.name}</CardTitle>
                          <Badge variant={
                            virus.severity === 'Критическая' ? 'destructive' :
                            virus.severity === 'Очень высокая' ? 'destructive' :
                            virus.severity === 'Высокая' ? 'default' :
                            virus.severity === 'Средняя' ? 'secondary' : 'outline'
                          }>
                            {virus.severity}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Симптомы:</h4>
                          <ul className="space-y-1">
                            {virus.symptoms.map((symptom, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="AlertCircle" size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{symptom}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center pt-2 border-t">
                          <div className="text-center">
                            <div className="text-sm font-semibold">{virus.removalTime}</div>
                            <div className="text-xs text-tech-gray">Время очистки</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-semibold text-tech-blue">{virus.price}</div>
                            <div className="text-xs text-tech-gray">Стоимость</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedThreat && (
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-red-800 mb-4">
                        Выбрано: {virusTypes.find(v => v.id === selectedThreat)?.name}
                      </h3>
                      <p className="text-red-700 mb-4">
                        Этот тип угрозы требует немедленного вмешательства специалистов
                      </p>
                      <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                        <Icon name="Phone" size={20} className="mr-2" />
                        Вызвать мастера срочно
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="process">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Процесс очистки</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Комплексный подход к удалению вирусов и восстановлению системы
                </p>
              </div>

              <div className="space-y-6">
                {cleaningSteps.map((step, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-tech-blue text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-tech-dark">{step.title}</h3>
                            <Badge variant="outline">{step.duration}</Badge>
                          </div>
                          <p className="text-tech-gray">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="CheckCircle" size={24} className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Гарантии нашей работы</h4>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• 100% удаление всех обнаруженных угроз</li>
                        <li>• Восстановление поврежденных системных файлов</li>
                        <li>• Настройка надежной защиты</li>
                        <li>• Гарантия 1 месяц на повторное заражение</li>
                        <li>• Бесплатные консультации по безопасности</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="antivirus">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Антивирусные решения</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Рекомендуемые антивирусы для надежной защиты вашего компьютера
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {antivirusOptions.map((antivirus, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-shadow ${antivirus.recommended ? 'border-tech-blue' : ''}`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{antivirus.name}</CardTitle>
                        {antivirus.recommended && (
                          <Badge className="bg-tech-blue">Рекомендуем</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold text-tech-blue">{antivirus.price}</div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                          <span className="font-semibold">{antivirus.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Возможности:</h4>
                          <ul className="space-y-1">
                            {antivirus.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className={`w-full ${antivirus.recommended ? 'bg-tech-blue hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
                          Установить антивирус
                        </Button>
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
                      <h4 className="font-semibold text-blue-800 mb-2">Что входит в установку антивируса</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Полное удаление предыдущего антивируса</li>
                        <li>• Чистая установка выбранного решения</li>
                        <li>• Настройка оптимальных параметров защиты</li>
                        <li>• Обучение основам работы с программой</li>
                        <li>• Настройка автоматических обновлений</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="prevention">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Профилактика заражений</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Простые правила, которые помогут избежать заражения вирусами
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {preventionTips.map((tip, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{tip.tip}</CardTitle>
                      <Badge variant={
                        tip.importance === 'Критично' ? 'destructive' :
                        tip.importance === 'Высокая' ? 'default' : 'secondary'
                      }>
                        {tip.importance}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-tech-gray">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Бесплатная консультация по безопасности</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Наши специалисты расскажут, как защитить ваш компьютер от угроз
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Получить консультацию
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                      <Icon name="Download" size={20} className="mr-2" />
                      Скачать памятку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="emergency">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Экстренные действия</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Что делать, если компьютер заражен вирусом прямо сейчас
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyActions.map((action, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {action.priority}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-tech-dark mb-2">{action.action}</h3>
                          <p className="text-tech-gray">{action.reason}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Icon name="AlertTriangle" size={32} className="mx-auto mb-3 text-red-600" />
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Экстренная помощь 24/7</h3>
                    <p className="text-sm text-red-700 mb-4">
                      Если ваш компьютер заблокирован вирусом или вы подозреваете кражу данных - звоните немедленно!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Icon name="Phone" size={16} className="mr-2" />
                        +7 (999) 123-45-67
                      </Button>
                      <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        Написать в Telegram
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scan">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Демонстрация сканирования</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Посмотрите, как происходит процесс поиска и удаления вирусов
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Антивирусное сканирование</CardTitle>
                  <CardDescription>
                    Интерактивная демонстрация процесса очистки системы
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-tech-blue mb-2">
                        {Math.round(scanProgress)}%
                      </div>
                      <p className="text-tech-gray">Прогресс сканирования</p>
                    </div>
                    
                    <Progress value={scanProgress} className="h-4" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Текущий этап:</h4>
                        <p className="text-sm text-tech-gray">
                          {scanProgress < 20 ? 'Сканирование системных файлов' :
                           scanProgress < 40 ? 'Проверка программ' :
                           scanProgress < 60 ? 'Анализ реестра' :
                           scanProgress < 80 ? 'Проверка автозагрузки' :
                           scanProgress < 100 ? 'Финальная проверка' :
                           'Сканирование завершено'}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Найдено угроз:</h4>
                        <p className="text-sm text-red-600">
                          {scanProgress > 30 ? Math.floor(scanProgress / 20) : 0}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        onClick={startScanDemo}
                        disabled={scanProgress > 0 && scanProgress < 100}
                        className="bg-tech-blue hover:bg-blue-700"
                      >
                        {scanProgress === 0 ? 'Начать сканирование' :
                         scanProgress === 100 ? 'Запустить заново' :
                         'Сканирование в процессе...'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Search" size={20} className="text-blue-500" />
                      <span>Сканирование</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Проверено файлов:</span>
                        <span>{Math.floor(scanProgress * 1000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Скорость:</span>
                        <span>1250 файлов/мин</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Время:</span>
                        <span>{Math.floor(scanProgress / 2)} мин</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="AlertTriangle" size={20} className="text-red-500" />
                      <span>Угрозы</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Найдено:</span>
                        <span className="text-red-600">{scanProgress > 30 ? Math.floor(scanProgress / 20) : 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Удалено:</span>
                        <span className="text-green-600">{scanProgress > 80 ? Math.floor(scanProgress / 20) : 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>В карантине:</span>
                        <span>0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Shield" size={20} className="text-green-500" />
                      <span>Защита</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Статус:</span>
                        <span className="text-green-600">Активна</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Последнее обновление:</span>
                        <span>Сегодня</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Брандмауэр:</span>
                        <span className="text-green-600">Включен</span>
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

export default VirusRemoval;