import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const DataRecovery = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>('');
  const [recoveryProgress, setRecoveryProgress] = useState<number>(0);

  const deviceTypes = [
    {
      id: 'hdd',
      name: 'Жесткий диск (HDD)',
      icon: 'HardDrive',
      successRate: '85%',
      avgTime: '2-5 дней',
      price: 'от 2000₽',
      description: 'Восстановление данных с механических жестких дисков'
    },
    {
      id: 'ssd',
      name: 'SSD накопитель',
      icon: 'Cpu',
      successRate: '75%',
      avgTime: '3-7 дней',
      price: 'от 3000₽',
      description: 'Восстановление с твердотельных накопителей'
    },
    {
      id: 'usb',
      name: 'USB флешка',
      icon: 'Usb',
      successRate: '70%',
      avgTime: '1-3 дня',
      price: 'от 1500₽',
      description: 'Восстановление данных с USB накопителей'
    },
    {
      id: 'sd',
      name: 'SD карта',
      icon: 'CreditCard',
      successRate: '65%',
      avgTime: '1-2 дня',
      price: 'от 1200₽',
      description: 'Восстановление с карт памяти'
    },
    {
      id: 'raid',
      name: 'RAID массив',
      icon: 'Server',
      successRate: '90%',
      avgTime: '5-10 дней',
      price: 'от 5000₽',
      description: 'Восстановление RAID конфигураций'
    },
    {
      id: 'phone',
      name: 'Телефон/Планшет',
      icon: 'Smartphone',
      successRate: '60%',
      avgTime: '3-5 дней',
      price: 'от 2500₽',
      description: 'Восстановление с мобильных устройств'
    }
  ];

  const recoverySteps = [
    {
      step: 1,
      title: 'Диагностика',
      description: 'Анализ повреждений и оценка возможности восстановления',
      duration: '1-2 часа'
    },
    {
      step: 2,
      title: 'Создание образа',
      description: 'Побитовое копирование данных с поврежденного носителя',
      duration: '4-24 часа'
    },
    {
      step: 3,
      title: 'Анализ структуры',
      description: 'Восстановление файловой системы и каталогов',
      duration: '2-8 часов'
    },
    {
      step: 4,
      title: 'Извлечение файлов',
      description: 'Восстановление и проверка целостности данных',
      duration: '1-6 часов'
    },
    {
      step: 5,
      title: 'Передача данных',
      description: 'Копирование восстановленных файлов на новый носитель',
      duration: '1-3 часа'
    }
  ];

  const damageTypes = [
    {
      type: 'Логические повреждения',
      icon: 'FileX',
      examples: ['Случайное удаление', 'Форматирование', 'Повреждение файловой системы', 'Вирусные атаки'],
      successRate: '90-95%',
      complexity: 'Низкая'
    },
    {
      type: 'Физические повреждения',
      icon: 'AlertTriangle',
      examples: ['Механические удары', 'Повреждение головок', 'Царапины на пластинах', 'Выход из строя контроллера'],
      successRate: '60-80%',
      complexity: 'Высокая'
    },
    {
      type: 'Электрические повреждения',
      icon: 'Zap',
      examples: ['Скачки напряжения', 'Короткое замыкание', 'Выгорание микросхем', 'Повреждение БП'],
      successRate: '70-85%',
      complexity: 'Средняя'
    }
  ];

  const caseStudies = [
    {
      title: 'Восстановление после залития ноутбука',
      device: 'SSD 512GB',
      problem: 'Ноутбук был залит кофе, SSD не определялся',
      solution: 'Очистка контактов, замена контроллера, восстановление прошивки',
      result: '98% данных восстановлено',
      time: '4 дня',
      cost: '4500₽'
    },
    {
      title: 'Восстановление RAID 5 сервера',
      device: 'RAID 5 (4x2TB)',
      problem: 'Одновременный выход из строя 2 дисков',
      solution: 'Восстановление данных с поврежденных дисков, пересборка массива',
      result: '95% данных восстановлено',
      time: '8 дней',
      cost: '15000₽'
    },
    {
      title: 'Восстановление семейных фото',
      device: 'USB флешка 64GB',
      problem: 'Случайное форматирование с важными фотографиями',
      solution: 'Глубокое сканирование, восстановление по сигнатурам файлов',
      result: '100% фотографий восстановлено',
      time: '1 день',
      cost: '2000₽'
    }
  ];

  const startRecoverySimulation = () => {
    setRecoveryProgress(0);
    const interval = setInterval(() => {
      setRecoveryProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Восстановление данных</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Профессиональное восстановление утерянных данных с любых носителей информации
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="devices" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="devices">Устройства</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
            <TabsTrigger value="damages">Повреждения</TabsTrigger>
            <TabsTrigger value="cases">Кейсы</TabsTrigger>
            <TabsTrigger value="order">Заказать</TabsTrigger>
          </TabsList>

          <TabsContent value="devices">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deviceTypes.map((device) => (
                <Card 
                  key={device.id} 
                  className={`hover:shadow-lg transition-all cursor-pointer ${
                    selectedDevice === device.id ? 'ring-2 ring-tech-blue' : ''
                  }`}
                  onClick={() => setSelectedDevice(device.id)}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                        <Icon name={device.icon as any} size={24} className="text-tech-blue" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{device.name}</CardTitle>
                        <Badge className="bg-tech-blue text-xs">{device.price}</Badge>
                      </div>
                    </div>
                    <CardDescription>{device.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-tech-gray">Успешность:</span>
                        <span className="font-semibold text-green-600">{device.successRate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-tech-gray">Время:</span>
                        <span className="font-semibold">{device.avgTime}</span>
                      </div>
                      <Button className="w-full bg-tech-blue hover:bg-blue-700">
                        Выбрать устройство
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedDevice && (
              <Card className="mt-8 bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">
                      Выбрано: {deviceTypes.find(d => d.id === selectedDevice)?.name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {deviceTypes.find(d => d.id === selectedDevice)?.successRate}
                        </div>
                        <div className="text-sm text-blue-700">Успешность</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {deviceTypes.find(d => d.id === selectedDevice)?.avgTime}
                        </div>
                        <div className="text-sm text-blue-700">Время работы</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {deviceTypes.find(d => d.id === selectedDevice)?.price}
                        </div>
                        <div className="text-sm text-blue-700">Стоимость</div>
                      </div>
                    </div>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Заказать восстановление
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="process">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Этапы восстановления данных</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Наш процесс восстановления включает несколько этапов для максимального извлечения данных
                </p>
              </div>

              <div className="space-y-6">
                {recoverySteps.map((step, index) => (
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

              <Card className="bg-gradient-to-r from-tech-blue to-blue-700 text-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Демонстрация процесса</h3>
                    <p className="mb-6 opacity-90">
                      Посмотрите, как происходит восстановление данных
                    </p>
                    <div className="max-w-md mx-auto mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Прогресс восстановления</span>
                        <span>{Math.round(recoveryProgress)}%</span>
                      </div>
                      <Progress value={recoveryProgress} className="h-3" />
                    </div>
                    <Button 
                      onClick={startRecoverySimulation}
                      className="bg-white text-tech-blue hover:bg-gray-100"
                      disabled={recoveryProgress > 0 && recoveryProgress < 100}
                    >
                      {recoveryProgress === 0 ? 'Запустить демо' : 
                       recoveryProgress === 100 ? 'Запустить заново' : 'Восстановление...'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="damages">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Типы повреждений</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Мы работаем с различными типами повреждений носителей информации
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {damageTypes.map((damage, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={damage.icon as any} size={32} className="text-tech-blue" />
                      </div>
                      <CardTitle className="text-center">{damage.type}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">{damage.successRate}</div>
                          <div className="text-sm text-tech-gray">Успешность восстановления</div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Примеры:</h4>
                          <ul className="space-y-1">
                            {damage.examples.map((example, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Dot" size={16} className="text-tech-blue mt-1 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="text-sm text-tech-gray">Сложность:</span>
                          <Badge variant={
                            damage.complexity === 'Низкая' ? 'default' :
                            damage.complexity === 'Средняя' ? 'secondary' : 'destructive'
                          }>
                            {damage.complexity}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cases">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Успешные кейсы</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Примеры сложных случаев восстановления данных из нашей практики
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {caseStudies.map((caseStudy, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                      <CardDescription>{caseStudy.device}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-red-600 mb-1">Проблема:</h4>
                          <p className="text-sm text-tech-gray">{caseStudy.problem}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-1">Решение:</h4>
                          <p className="text-sm text-tech-gray">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-green-600 mb-1">Результат:</h4>
                          <p className="text-sm text-tech-gray">{caseStudy.result}</p>
                        </div>
                        
                        <div className="flex justify-between items-center pt-2 border-t">
                          <div className="text-center">
                            <div className="text-sm font-semibold">{caseStudy.time}</div>
                            <div className="text-xs text-tech-gray">Время</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-semibold text-tech-blue">{caseStudy.cost}</div>
                            <div className="text-xs text-tech-gray">Стоимость</div>
                          </div>
                        </div>
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
                      <h4 className="font-semibold text-yellow-800 mb-2">Важные рекомендации</h4>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• При повреждении носителя немедленно прекратите его использование</li>
                        <li>• Не пытайтесь восстановить данные самостоятельно</li>
                        <li>• Не устанавливайте программы восстановления на поврежденный диск</li>
                        <li>• Обратитесь к специалистам как можно скорее</li>
                        <li>• Чем раньше начато восстановление, тем выше шансы на успех</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="order">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Заказать восстановление данных</CardTitle>
                  <CardDescription>
                    Опишите вашу ситуацию и мы оценим возможность восстановления
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
                      <label className="block text-sm font-medium text-tech-dark mb-2">Тип устройства *</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                        <option value="">Выберите тип устройства</option>
                        {deviceTypes.map(device => (
                          <option key={device.id} value={device.id}>{device.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Что произошло? *</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="Опишите подробно, что случилось с устройством и какие данные нужно восстановить..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Важность данных</label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="importance" value="low" className="text-tech-blue" />
                          <span className="text-sm">Низкая - можно подождать</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="importance" value="medium" className="text-tech-blue" />
                          <span className="text-sm">Средняя - желательно восстановить</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="importance" value="high" className="text-tech-blue" />
                          <span className="text-sm">Высокая - критически важные данные</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Срочное восстановление (приоритет, +100%)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Согласен на предварительную оценку (500₽)</span>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-tech-blue hover:bg-blue-700">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Info" size={20} className="text-tech-blue" />
                      <span>Как это работает</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                        <div>
                          <div className="font-medium">Бесплатная консультация</div>
                          <div className="text-tech-gray">Оцениваем ситуацию по телефону</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                        <div>
                          <div className="font-medium">Диагностика</div>
                          <div className="text-tech-gray">Определяем возможность восстановления</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                        <div>
                          <div className="font-medium">Согласование</div>
                          <div className="text-tech-gray">Сообщаем стоимость и сроки</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                        <div>
                          <div className="font-medium">Восстановление</div>
                          <div className="text-tech-gray">Извлекаем ваши данные</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                        <div>
                          <div className="font-medium">Передача</div>
                          <div className="text-tech-gray">Копируем данные на новый носитель</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Icon name="Shield" size={32} className="mx-auto mb-3 text-green-600" />
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Гарантии</h3>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Полная конфиденциальность</li>
                        <li>• Оплата только за результат</li>
                        <li>• Бесплатная диагностика при заказе</li>
                        <li>• Сохранность ваших данных</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Icon name="AlertTriangle" size={32} className="mx-auto mb-3 text-red-600" />
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Экстренные случаи</h3>
                      <p className="text-sm text-red-700 mb-3">
                        Критически важные данные? Звоните немедленно!
                      </p>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Icon name="Phone" size={16} className="mr-2" />
                        +7 (999) 123-45-67
                      </Button>
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

export default DataRecovery;