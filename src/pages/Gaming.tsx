import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Gaming = () => {
  const [budget, setBudget] = useState([50000]);
  const [selectedGame, setSelectedGame] = useState('cyberpunk');

  const gamingBuilds = [
    {
      id: 'budget',
      name: 'Бюджетный геймерский ПК',
      price: '45000₽',
      performance: '1080p Medium-High',
      components: {
        cpu: 'AMD Ryzen 5 5600',
        gpu: 'GTX 1660 Super',
        ram: '16GB DDR4-3200',
        storage: '500GB NVMe SSD',
        motherboard: 'B450M',
        psu: '550W 80+ Bronze'
      },
      games: ['CS:GO 200+ FPS', 'Dota 2 120+ FPS', 'GTA V 80+ FPS', 'Fortnite 100+ FPS']
    },
    {
      id: 'mid',
      name: 'Средний геймерский ПК',
      price: '85000₽',
      performance: '1440p High',
      components: {
        cpu: 'Intel i5-13400F',
        gpu: 'RTX 4060 Ti',
        ram: '32GB DDR4-3600',
        storage: '1TB NVMe SSD',
        motherboard: 'B660M',
        psu: '650W 80+ Gold'
      },
      games: ['Cyberpunk 2077 60+ FPS', 'Call of Duty 100+ FPS', 'Apex Legends 120+ FPS', 'Valorant 200+ FPS']
    },
    {
      id: 'high',
      name: 'Мощный геймерский ПК',
      price: '150000₽',
      performance: '4K High-Ultra',
      components: {
        cpu: 'Intel i7-13700F',
        gpu: 'RTX 4070 Ti',
        ram: '32GB DDR5-5600',
        storage: '2TB NVMe SSD',
        motherboard: 'Z690',
        psu: '750W 80+ Gold'
      },
      games: ['Cyberpunk 2077 4K 80+ FPS', 'Red Dead Redemption 2 4K 60+ FPS', 'Battlefield 2042 120+ FPS']
    },
    {
      id: 'ultimate',
      name: 'Топовый геймерский ПК',
      price: '250000₽',
      performance: '4K Ultra + Ray Tracing',
      components: {
        cpu: 'Intel i9-13900K',
        gpu: 'RTX 4080',
        ram: '64GB DDR5-6000',
        storage: '4TB NVMe SSD',
        motherboard: 'Z790',
        psu: '850W 80+ Platinum'
      },
      games: ['Любые игры 4K Ultra', 'Ray Tracing в полном качестве', 'VR игры без компромиссов']
    }
  ];

  const popularGames = [
    {
      id: 'cyberpunk',
      name: 'Cyberpunk 2077',
      requirements: {
        minimum: { cpu: 'Intel i5-3570K', gpu: 'GTX 780', ram: '8GB', storage: '70GB' },
        recommended: { cpu: 'Intel i7-4790', gpu: 'GTX 1060 6GB', ram: '12GB', storage: '70GB SSD' },
        ultra: { cpu: 'Intel i7-12700', gpu: 'RTX 3080', ram: '20GB', storage: '70GB NVMe' }
      }
    },
    {
      id: 'cod',
      name: 'Call of Duty: Modern Warfare',
      requirements: {
        minimum: { cpu: 'Intel i3-6100', gpu: 'GTX 960', ram: '8GB', storage: '175GB' },
        recommended: { cpu: 'Intel i5-2500K', gpu: 'GTX 1060', ram: '12GB', storage: '175GB SSD' },
        ultra: { cpu: 'Intel i7-10700K', gpu: 'RTX 3070', ram: '16GB', storage: '175GB NVMe' }
      }
    },
    {
      id: 'rdr2',
      name: 'Red Dead Redemption 2',
      requirements: {
        minimum: { cpu: 'Intel i5-2500K', gpu: 'GTX 770', ram: '8GB', storage: '150GB' },
        recommended: { cpu: 'Intel i7-4770K', gpu: 'GTX 1060 6GB', ram: '12GB', storage: '150GB SSD' },
        ultra: { cpu: 'Intel i7-10700K', gpu: 'RTX 3080', ram: '32GB', storage: '150GB NVMe' }
      }
    }
  ];

  const gamingServices = [
    {
      service: 'Сборка игрового ПК',
      price: 'от 3000₽',
      description: 'Профессиональная сборка с тестированием',
      includes: ['Подбор компонентов', 'Сборка и настройка', 'Установка ОС и драйверов', 'Тестирование в играх']
    },
    {
      service: 'Оптимизация для игр',
      price: 'от 1200₽',
      description: 'Настройка системы для максимальной производительности',
      includes: ['Настройка Windows', 'Оптимизация драйверов', 'Разгон компонентов', 'Настройка игр']
    },
    {
      service: 'Апгрейд игрового ПК',
      price: 'от 1500₽',
      description: 'Модернизация существующего компьютера',
      includes: ['Анализ узких мест', 'Подбор апгрейда', 'Установка компонентов', 'Тестирование']
    },
    {
      service: 'Настройка стриминга',
      price: 'от 2000₽',
      description: 'Подготовка ПК для стриминга игр',
      includes: ['Настройка OBS', 'Оптимизация кодирования', 'Настройка звука', 'Тестирование стрима']
    }
  ];

  const performanceOptimization = [
    {
      category: 'Система',
      optimizations: [
        'Отключение ненужных служб Windows',
        'Настройка плана электропитания',
        'Оптимизация файла подкачки',
        'Настройка приоритетов процессов'
      ]
    },
    {
      category: 'Графика',
      optimizations: [
        'Настройка панели управления NVIDIA/AMD',
        'Оптимизация настроек игр',
        'Настройка G-Sync/FreeSync',
        'Калибровка монитора'
      ]
    },
    {
      category: 'Сеть',
      optimizations: [
        'Настройка QoS для игр',
        'Оптимизация TCP/IP параметров',
        'Настройка DNS серверов',
        'Приоритизация игрового трафика'
      ]
    },
    {
      category: 'Охлаждение',
      optimizations: [
        'Настройка кривых вентиляторов',
        'Оптимизация воздушных потоков',
        'Мониторинг температур',
        'Андервольтинг компонентов'
      ]
    }
  ];

  const benchmarkResults = [
    { game: 'Cyberpunk 2077', fps: '85', settings: '4K High + RT', gpu: 'RTX 4080' },
    { game: 'Call of Duty MW2', fps: '165', settings: '1440p Ultra', gpu: 'RTX 4070' },
    { game: 'Apex Legends', fps: '240', settings: '1080p High', gpu: 'RTX 4060' },
    { game: 'CS:GO', fps: '400+', settings: '1080p Max', gpu: 'GTX 1660 Super' },
    { game: 'Valorant', fps: '300+', settings: '1080p High', gpu: 'RTX 4060' },
    { game: 'Fortnite', fps: '200', settings: '1440p Epic', gpu: 'RTX 4070' }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Игровые компьютеры</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Сборка, настройка и оптимизация игровых ПК для максимальной производительности
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="builds" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="builds">Сборки</TabsTrigger>
            <TabsTrigger value="games">Игры</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="optimization">Оптимизация</TabsTrigger>
            <TabsTrigger value="benchmarks">Бенчмарки</TabsTrigger>
            <TabsTrigger value="configurator">Конфигуратор</TabsTrigger>
          </TabsList>

          <TabsContent value="builds">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Готовые игровые сборки</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Проверенные конфигурации для разных бюджетов и требований
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gamingBuilds.map((build, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{build.name}</CardTitle>
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-tech-blue">{build.price}</div>
                        <Badge className="bg-green-600">{build.performance}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Конфигурация:</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-tech-gray">Процессор:</span>
                              <span className="font-medium">{build.components.cpu}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-tech-gray">Видеокарта:</span>
                              <span className="font-medium">{build.components.gpu}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-tech-gray">Память:</span>
                              <span className="font-medium">{build.components.ram}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-tech-gray">Накопитель:</span>
                              <span className="font-medium">{build.components.storage}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Производительность в играх:</h4>
                          <div className="space-y-1">
                            {build.games.map((game, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Icon name="Gamepad2" size={14} className="text-green-500" />
                                <span className="text-sm text-tech-gray">{game}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Заказать сборку
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="games">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Системные требования игр</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Проверьте, какая конфигурация нужна для ваших любимых игр
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="flex space-x-2">
                  {popularGames.map((game) => (
                    <Button
                      key={game.id}
                      variant={selectedGame === game.id ? "default" : "outline"}
                      onClick={() => setSelectedGame(game.id)}
                      className={selectedGame === game.id ? 'bg-tech-blue' : ''}
                    >
                      {game.name}
                    </Button>
                  ))}
                </div>
              </div>

              {selectedGame && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(popularGames.find(g => g.id === selectedGame)?.requirements || {}).map(([level, req]) => (
                    <Card key={level} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-center capitalize">
                          {level === 'minimum' ? 'Минимальные' :
                           level === 'recommended' ? 'Рекомендуемые' : 'Ультра настройки'}
                        </CardTitle>
                        <Badge className={`mx-auto ${
                          level === 'minimum' ? 'bg-red-500' :
                          level === 'recommended' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}>
                          {level === 'minimum' ? '30+ FPS' :
                           level === 'recommended' ? '60+ FPS' : '120+ FPS'}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Процессор:</span>
                            <span className="font-medium">{req.cpu}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Видеокарта:</span>
                            <span className="font-medium">{req.gpu}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Память:</span>
                            <span className="font-medium">{req.ram}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Место:</span>
                            <span className="font-medium">{req.storage}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Не знаете, какая конфигурация нужна?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Наши специалисты помогут подобрать оптимальную сборку под ваши игры
                  </p>
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Игровые услуги</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Специализированные услуги для геймеров
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gamingServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{service.service}</CardTitle>
                        <Badge className="bg-tech-blue">{service.price}</Badge>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Что включено:</h4>
                          <ul className="space-y-1">
                            {service.includes.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{item}</span>
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

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Zap" size={24} className="text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Экстремальный разгон</h4>
                      <p className="text-red-700 text-sm mb-3">
                        Максимальная производительность через профессиональный разгон компонентов
                      </p>
                      <ul className="space-y-1 text-red-700 text-sm">
                        <li>• Разгон процессора до безопасных пределов</li>
                        <li>• Оптимизация памяти и таймингов</li>
                        <li>• Разгон видеокарты с тестированием</li>
                        <li>• Настройка системы охлаждения</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="optimization">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Оптимизация производительности</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Комплексная настройка системы для максимального FPS в играх
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {performanceOptimization.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.optimizations.map((optimization, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Icon name="Settings" size={14} className="text-tech-blue mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-tech-gray">{optimization}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="TrendingUp" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Результаты оптимизации</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Увеличение FPS на 15-30% в большинстве игр</li>
                        <li>• Снижение времени загрузки игр на 40-60%</li>
                        <li>• Уменьшение задержек ввода (input lag)</li>
                        <li>• Стабилизация частоты кадров</li>
                        <li>• Снижение температур компонентов</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="benchmarks">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Результаты тестирования</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Реальная производительность наших сборок в популярных играх
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Таблица производительности</CardTitle>
                  <CardDescription>
                    FPS в популярных играх на разных конфигурациях
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Игра</th>
                          <th className="text-center py-2">FPS</th>
                          <th className="text-center py-2">Настройки</th>
                          <th className="text-center py-2">Видеокарта</th>
                        </tr>
                      </thead>
                      <tbody>
                        {benchmarkResults.map((result, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 font-medium">{result.game}</td>
                            <td className="py-3 text-center">
                              <Badge className="bg-green-600">{result.fps}</Badge>
                            </td>
                            <td className="py-3 text-center text-sm text-tech-gray">{result.settings}</td>
                            <td className="py-3 text-center text-sm font-medium">{result.gpu}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Target" size={20} className="text-green-500" />
                      <span>1080p Gaming</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">от 45000₽</div>
                        <div className="text-sm text-tech-gray">Бюджет для комфортной игры</div>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• GTX 1660 Super / RTX 4060</li>
                        <li>• AMD Ryzen 5 / Intel i5</li>
                        <li>• 16GB DDR4 память</li>
                        <li>• 500GB SSD накопитель</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Monitor" size={20} className="text-blue-500" />
                      <span>1440p Gaming</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">от 85000₽</div>
                        <div className="text-sm text-tech-gray">Для высоких настроек</div>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• RTX 4060 Ti / RTX 4070</li>
                        <li>• Intel i5-13400F / AMD Ryzen 7</li>
                        <li>• 32GB DDR4/DDR5 память</li>
                        <li>• 1TB NVMe SSD</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Tv" size={20} className="text-purple-500" />
                      <span>4K Gaming</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">от 150000₽</div>
                        <div className="text-sm text-tech-gray">Для ультра настроек</div>
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• RTX 4070 Ti / RTX 4080</li>
                        <li>• Intel i7-13700F / AMD Ryzen 9</li>
                        <li>• 32GB DDR5 память</li>
                        <li>• 2TB NVMe SSD</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="configurator">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Конфигуратор игрового ПК</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Создайте свою идеальную игровую конфигурацию
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Бюджет на сборку</CardTitle>
                  <CardDescription>Укажите планируемую сумму для подбора компонентов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-tech-gray">30 000₽</span>
                        <span className="text-2xl font-bold text-tech-blue">{budget[0].toLocaleString()}₽</span>
                        <span className="text-sm text-tech-gray">300 000₽</span>
                      </div>
                      <Slider
                        value={budget}
                        onValueChange={setBudget}
                        max={300000}
                        min={30000}
                        step={5000}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-tech-blue">
                          {Math.round(budget[0] * 0.4).toLocaleString()}₽
                        </div>
                        <div className="text-sm text-tech-gray">На видеокарту (40%)</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-tech-blue">
                          {Math.round(budget[0] * 0.25).toLocaleString()}₽
                        </div>
                        <div className="text-sm text-tech-gray">На процессор (25%)</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-tech-blue">
                          {Math.round(budget[0] * 0.35).toLocaleString()}₽
                        </div>
                        <div className="text-sm text-tech-gray">Остальные компоненты (35%)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-tech-blue to-blue-700 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Готовы собрать игровой ПК?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Доверьте сборку профессионалам и получите максимальную производительность
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Обсудить сборку
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tech-blue">
                      <Icon name="Calculator" size={20} className="mr-2" />
                      Рассчитать стоимость
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

export default Gaming;