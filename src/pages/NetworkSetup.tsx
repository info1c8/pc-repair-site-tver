import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const NetworkSetup = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('home');

  const networkTypes = [
    {
      id: 'home',
      name: 'Домашняя сеть',
      icon: 'Home',
      price: 'от 1000₽',
      duration: '1-2 часа',
      description: 'Настройка Wi-Fi и проводной сети для дома',
      features: ['Настройка роутера', 'Подключение устройств', 'Настройка Wi-Fi', 'Родительский контроль']
    },
    {
      id: 'office',
      name: 'Офисная сеть',
      icon: 'Building',
      price: 'от 2500₽',
      duration: '3-6 часов',
      description: 'Корпоративная сеть с разграничением доступа',
      features: ['Настройка сервера', 'Разграничение доступа', 'Общие папки', 'Принт-сервер']
    },
    {
      id: 'gaming',
      name: 'Игровая сеть',
      icon: 'Gamepad2',
      price: 'от 1500₽',
      duration: '2-3 часа',
      description: 'Оптимизация сети для онлайн игр',
      features: ['Низкий пинг', 'QoS настройка', 'Порт форвардинг', 'Gaming режим']
    },
    {
      id: 'security',
      name: 'Защищенная сеть',
      icon: 'Shield',
      price: 'от 3000₽',
      duration: '4-8 часов',
      description: 'Максимальная безопасность сетевых соединений',
      features: ['VPN сервер', 'Файрвол', 'Мониторинг трафика', 'Шифрование']
    }
  ];

  const networkServices = [
    {
      category: 'Настройка оборудования',
      icon: 'Router',
      services: [
        { name: 'Настройка роутера', price: '800₽', description: 'Базовая настройка Wi-Fi роутера' },
        { name: 'Настройка модема', price: '600₽', description: 'Подключение к интернет-провайдеру' },
        { name: 'Настройка коммутатора', price: '1000₽', description: 'Настройка сетевого коммутатора' },
        { name: 'Настройка точки доступа', price: '700₽', description: 'Расширение Wi-Fi покрытия' }
      ]
    },
    {
      category: 'Подключение устройств',
      icon: 'Smartphone',
      services: [
        { name: 'Подключение ПК к сети', price: '500₽', description: 'Настройка сетевых параметров' },
        { name: 'Подключение принтера', price: '600₽', description: 'Настройка сетевой печати' },
        { name: 'Подключение NAS', price: '1200₽', description: 'Настройка сетевого хранилища' },
        { name: 'Подключение IP-камер', price: '800₽', description: 'Настройка видеонаблюдения' }
      ]
    },
    {
      category: 'Безопасность',
      icon: 'Lock',
      services: [
        { name: 'Настройка брандмауэра', price: '700₽', description: 'Защита от внешних угроз' },
        { name: 'Настройка VPN', price: '1000₽', description: 'Безопасное подключение' },
        { name: 'Фильтрация контента', price: '600₽', description: 'Блокировка нежелательных сайтов' },
        { name: 'Мониторинг сети', price: '1500₽', description: 'Отслеживание сетевой активности' }
      ]
    },
    {
      category: 'Оптимизация',
      icon: 'Zap',
      services: [
        { name: 'Настройка QoS', price: '800₽', description: 'Приоритизация трафика' },
        { name: 'Оптимизация скорости', price: '600₽', description: 'Максимизация пропускной способности' },
        { name: 'Настройка каналов Wi-Fi', price: '500₽', description: 'Выбор оптимальных частот' },
        { name: 'Балансировка нагрузки', price: '1200₽', description: 'Распределение трафика' }
      ]
    }
  ];

  const networkDiagnostics = [
    {
      test: 'Скорость интернета',
      current: '85 Мбит/с',
      expected: '100 Мбит/с',
      status: 'good'
    },
    {
      test: 'Пинг до сервера',
      current: '15 мс',
      expected: '< 20 мс',
      status: 'excellent'
    },
    {
      test: 'Потеря пакетов',
      current: '0.1%',
      expected: '< 1%',
      status: 'excellent'
    },
    {
      test: 'DNS отклик',
      current: '8 мс',
      expected: '< 50 мс',
      status: 'excellent'
    },
    {
      test: 'Стабильность соединения',
      current: '99.9%',
      expected: '> 99%',
      status: 'excellent'
    },
    {
      test: 'Покрытие Wi-Fi',
      current: '85%',
      expected: '> 80%',
      status: 'good'
    }
  ];

  const troubleshootingGuide = [
    {
      problem: 'Медленный интернет',
      causes: ['Перегруженный канал', 'Неоптимальные настройки', 'Помехи Wi-Fi'],
      solutions: ['Смена тарифа', 'Настройка QoS', 'Смена канала Wi-Fi']
    },
    {
      problem: 'Нестабильное соединение',
      causes: ['Слабый сигнал', 'Перегрев роутера', 'Устаревшие драйвера'],
      solutions: ['Усиление сигнала', 'Улучшение охлаждения', 'Обновление драйверов']
    },
    {
      problem: 'Не работает Wi-Fi',
      causes: ['Неправильные настройки', 'Конфликт IP адресов', 'Проблемы с роутером'],
      solutions: ['Сброс настроек', 'Настройка DHCP', 'Перезагрузка роутера']
    },
    {
      problem: 'Нет доступа к интернету',
      causes: ['Проблемы у провайдера', 'Неправильные DNS', 'Блокировка брандмауэром'],
      solutions: ['Связь с провайдером', 'Смена DNS', 'Настройка брандмауэра']
    }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Настройка сетей</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Профессиональная настройка домашних и корпоративных сетей
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="types">Типы сетей</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="diagnostics">Диагностика</TabsTrigger>
            <TabsTrigger value="troubleshooting">Решение проблем</TabsTrigger>
            <TabsTrigger value="order">Заказать</TabsTrigger>
          </TabsList>

          <TabsContent value="types">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Типы сетевых решений</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Выберите подходящий тип сети для ваших потребностей
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {networkTypes.map((network) => (
                  <Card 
                    key={network.id} 
                    className={`hover:shadow-lg transition-all cursor-pointer ${
                      selectedNetwork === network.id ? 'ring-2 ring-tech-blue' : ''
                    }`}
                    onClick={() => setSelectedNetwork(network.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                          <Icon name={network.icon as any} size={24} className="text-tech-blue" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{network.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-tech-blue">{network.price}</Badge>
                            <Badge variant="outline">{network.duration}</Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription>{network.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Что включено:</h4>
                          <ul className="space-y-1">
                            {network.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Заказать настройку
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedNetwork && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">
                        Выбрано: {networkTypes.find(n => n.id === selectedNetwork)?.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {networkTypes.find(n => n.id === selectedNetwork)?.price}
                          </div>
                          <div className="text-sm text-blue-700">Стоимость</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {networkTypes.find(n => n.id === selectedNetwork)?.duration}
                          </div>
                          <div className="text-sm text-blue-700">Время настройки</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">6 мес</div>
                          <div className="text-sm text-blue-700">Гарантия</div>
                        </div>
                      </div>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Заказать настройку
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Сетевые услуги</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Полный спектр услуг по настройке и обслуживанию сетей
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {networkServices.map((category, index) => (
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
                          <div key={idx} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="flex-1">
                              <div className="font-medium text-tech-dark">{service.name}</div>
                              <div className="text-sm text-tech-gray">{service.description}</div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="text-tech-blue font-bold">{service.price}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Gift" size={24} className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Комплексные пакеты</h4>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• Домашний пакет (роутер + настройка + Wi-Fi) - 1500₽ вместо 1900₽</li>
                        <li>• Офисный пакет (сеть + принтер + безопасность) - 3500₽ вместо 4200₽</li>
                        <li>• Игровой пакет (оптимизация + QoS + порты) - 2000₽ вместо 2400₽</li>
                        <li>• Премиум пакет (все услуги + мониторинг) - 5000₽ вместо 6500₽</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="diagnostics">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Диагностика сети</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Проверка производительности и стабильности сетевого соединения
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {networkDiagnostics.map((diagnostic, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{diagnostic.test}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-tech-gray">Текущее значение:</span>
                          <span className="font-semibold">{diagnostic.current}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-tech-gray">Норма:</span>
                          <span className="font-semibold">{diagnostic.expected}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-tech-gray">Статус:</span>
                          <Badge variant={
                            diagnostic.status === 'excellent' ? 'default' :
                            diagnostic.status === 'good' ? 'secondary' : 'destructive'
                          }>
                            {diagnostic.status === 'excellent' ? 'Отлично' :
                             diagnostic.status === 'good' ? 'Хорошо' : 'Требует внимания'}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Тест скорости интернета</CardTitle>
                  <CardDescription>
                    Проверьте реальную скорость вашего интернет-соединения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-blue-600">85.4</div>
                        <div className="text-sm text-tech-gray">Мбит/с загрузка</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-600">42.1</div>
                        <div className="text-sm text-tech-gray">Мбит/с отдача</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-600">15</div>
                        <div className="text-sm text-tech-gray">мс пинг</div>
                      </div>
                    </div>
                    
                    <Button className="bg-tech-blue hover:bg-blue-700">
                      <Icon name="Play" size={20} className="mr-2" />
                      Запустить тест
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="troubleshooting">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Решение сетевых проблем</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Частые проблемы с сетью и способы их устранения
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {troubleshootingGuide.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-600">{item.problem}</CardTitle>
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

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Lightbulb" size={24} className="text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Советы по оптимизации сети</h4>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• Размещайте роутер в центре помещения</li>
                        <li>• Избегайте помех от микроволновок и радиотелефонов</li>
                        <li>• Регулярно перезагружайте сетевое оборудование</li>
                        <li>• Обновляйте прошивку роутера</li>
                        <li>• Используйте качественные сетевые кабели</li>
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
                  <CardTitle>Заказать настройку сети</CardTitle>
                  <CardDescription>
                    Опишите ваши потребности и мы подберем оптимальное решение
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
                      <label className="block text-sm font-medium text-tech-dark mb-2">Тип сети *</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                        <option value="">Выберите тип сети</option>
                        {networkTypes.map(network => (
                          <option key={network.id} value={network.id}>{network.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Количество устройств</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                        <option>1-5 устройств</option>
                        <option>6-10 устройств</option>
                        <option>11-20 устройств</option>
                        <option>Более 20 устройств</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Особые требования</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="Опишите особые требования к сети (игры, видеоконференции, безопасность и т.д.)"
                        rows={4}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Настройка родительского контроля</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Настройка гостевой сети</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Обучение работе с оборудованием</span>
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
                      <Icon name="Wifi" size={20} className="text-tech-blue" />
                      <span>Покрытие Wi-Fi</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>1-комнатная квартира:</span>
                        <span className="font-semibold">1 роутер</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2-3 комнатная квартира:</span>
                        <span className="font-semibold">1-2 роутера</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Частный дом:</span>
                        <span className="font-semibold">2-3 точки доступа</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Офис до 100м²:</span>
                        <span className="font-semibold">1-2 точки доступа</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Clock" size={20} className="text-tech-blue" />
                      <span>Время выполнения</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Базовая настройка:</span>
                        <span className="font-semibold">1-2 часа</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Офисная сеть:</span>
                        <span className="font-semibold">3-6 часов</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Комплексная настройка:</span>
                        <span className="font-semibold">1-2 дня</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Корпоративная сеть:</span>
                        <span className="font-semibold">2-5 дней</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <Icon name="Headphones" size={32} className="mx-auto mb-3 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Техподдержка</h3>
                    <p className="text-sm text-blue-700 mb-4">
                      Бесплатная поддержка в течение месяца после настройки
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Связаться с поддержкой
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

export default NetworkSetup;