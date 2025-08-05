import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Upgrade = () => {
  const [budget, setBudget] = useState([15000]);
  const [selectedUse, setSelectedUse] = useState('gaming');

  const upgradeCategories = [
    { id: 'gaming', name: 'Игровой ПК', icon: 'Gamepad2', color: 'bg-red-500' },
    { id: 'work', name: 'Рабочий ПК', icon: 'Briefcase', color: 'bg-blue-500' },
    { id: 'creative', name: 'Творчество', icon: 'Palette', color: 'bg-purple-500' },
    { id: 'office', name: 'Офисный ПК', icon: 'FileText', color: 'bg-green-500' }
  ];

  const upgradeComponents = {
    gaming: [
      {
        component: 'Видеокарта',
        priority: 'Высокий',
        impact: 'Максимальный',
        options: [
          { name: 'RTX 4060', price: '35000₽', performance: '+150%' },
          { name: 'RTX 4070', price: '55000₽', performance: '+200%' },
          { name: 'RTX 4080', price: '85000₽', performance: '+300%' }
        ]
      },
      {
        component: 'Процессор',
        priority: 'Средний',
        impact: 'Высокий',
        options: [
          { name: 'Intel i5-13400F', price: '18000₽', performance: '+80%' },
          { name: 'Intel i7-13700F', price: '28000₽', performance: '+120%' },
          { name: 'Intel i9-13900F', price: '45000₽', performance: '+180%' }
        ]
      },
      {
        component: 'Оперативная память',
        priority: 'Средний',
        impact: 'Средний',
        options: [
          { name: '16GB DDR4-3200', price: '4500₽', performance: '+40%' },
          { name: '32GB DDR4-3600', price: '8500₽', performance: '+60%' },
          { name: '32GB DDR5-5600', price: '12000₽', performance: '+80%' }
        ]
      }
    ],
    work: [
      {
        component: 'SSD накопитель',
        priority: 'Высокий',
        impact: 'Максимальный',
        options: [
          { name: '500GB NVMe', price: '4500₽', performance: '+300%' },
          { name: '1TB NVMe', price: '7500₽', performance: '+300%' },
          { name: '2TB NVMe', price: '15000₽', performance: '+300%' }
        ]
      },
      {
        component: 'Оперативная память',
        priority: 'Высокий',
        impact: 'Высокий',
        options: [
          { name: '16GB DDR4', price: '4500₽', performance: '+100%' },
          { name: '32GB DDR4', price: '8500₽', performance: '+150%' },
          { name: '64GB DDR4', price: '16000₽', performance: '+200%' }
        ]
      },
      {
        component: 'Процессор',
        priority: 'Средний',
        impact: 'Высокий',
        options: [
          { name: 'Intel i5-13400', price: '20000₽', performance: '+80%' },
          { name: 'Intel i7-13700', price: '30000₽', performance: '+120%' },
          { name: 'Intel i9-13900', price: '48000₽', performance: '+180%' }
        ]
      }
    ],
    creative: [
      {
        component: 'Видеокарта',
        priority: 'Высокий',
        impact: 'Максимальный',
        options: [
          { name: 'RTX 4060 Ti', price: '45000₽', performance: '+180%' },
          { name: 'RTX 4070 Ti', price: '65000₽', performance: '+250%' },
          { name: 'RTX 4090', price: '150000₽', performance: '+400%' }
        ]
      },
      {
        component: 'Оперативная память',
        priority: 'Высокий',
        impact: 'Высокий',
        options: [
          { name: '32GB DDR4', price: '8500₽', performance: '+120%' },
          { name: '64GB DDR4', price: '16000₽', performance: '+180%' },
          { name: '128GB DDR4', price: '32000₽', performance: '+250%' }
        ]
      },
      {
        component: 'SSD накопитель',
        priority: 'Средний',
        impact: 'Высокий',
        options: [
          { name: '1TB NVMe', price: '7500₽', performance: '+200%' },
          { name: '2TB NVMe', price: '15000₽', performance: '+200%' },
          { name: '4TB NVMe', price: '35000₽', performance: '+200%' }
        ]
      }
    ],
    office: [
      {
        component: 'SSD накопитель',
        priority: 'Высокий',
        impact: 'Максимальный',
        options: [
          { name: '256GB SATA', price: '2500₽', performance: '+250%' },
          { name: '500GB NVMe', price: '4500₽', performance: '+300%' },
          { name: '1TB NVMe', price: '7500₽', performance: '+300%' }
        ]
      },
      {
        component: 'Оперативная память',
        priority: 'Средний',
        impact: 'Высокий',
        options: [
          { name: '8GB DDR4', price: '2500₽', performance: '+80%' },
          { name: '16GB DDR4', price: '4500₽', performance: '+120%' },
          { name: '32GB DDR4', price: '8500₽', performance: '+150%' }
        ]
      },
      {
        component: 'Процессор',
        priority: 'Низкий',
        impact: 'Средний',
        options: [
          { name: 'Intel i3-13100', price: '12000₽', performance: '+60%' },
          { name: 'Intel i5-13400', price: '20000₽', performance: '+100%' },
          { name: 'AMD Ryzen 5 7600', price: '22000₽', performance: '+110%' }
        ]
      }
    ]
  };

  const upgradeSteps = [
    {
      step: 1,
      title: 'Анализ текущей конфигурации',
      description: 'Диагностика производительности и выявление узких мест',
      duration: '30 мин'
    },
    {
      step: 2,
      title: 'Подбор компонентов',
      description: 'Выбор оптимальных комплектующих под ваши задачи и бюджет',
      duration: '1 час'
    },
    {
      step: 3,
      title: 'Проверка совместимости',
      description: 'Тестирование совместимости новых компонентов с существующими',
      duration: '30 мин'
    },
    {
      step: 4,
      title: 'Установка и настройка',
      description: 'Физическая установка компонентов и настройка системы',
      duration: '2-4 часа'
    },
    {
      step: 5,
      title: 'Тестирование',
      description: 'Проверка стабильности и производительности системы',
      duration: '1 час'
    }
  ];

  const budgetRecommendations = {
    5000: {
      title: 'Базовое обновление',
      components: ['SSD 256GB', 'Дополнительная ОЗУ 8GB'],
      performance: '+50-80%',
      description: 'Значительное ускорение загрузки и работы системы'
    },
    15000: {
      title: 'Среднее обновление',
      components: ['SSD 500GB NVMe', 'ОЗУ 16GB', 'Новый кулер'],
      performance: '+100-150%',
      description: 'Комплексное улучшение производительности'
    },
    30000: {
      title: 'Серьезное обновление',
      components: ['Новый процессор', 'SSD 1TB', 'ОЗУ 32GB'],
      performance: '+200-300%',
      description: 'Кардинальное повышение производительности'
    },
    50000: {
      title: 'Максимальное обновление',
      components: ['Топовый процессор', 'Мощная видеокарта', 'Быстрая ОЗУ'],
      performance: '+300-500%',
      description: 'Превращение в высокопроизводительную систему'
    }
  };

  const getBudgetRecommendation = (budget: number) => {
    if (budget <= 7500) return budgetRecommendations[5000];
    if (budget <= 22500) return budgetRecommendations[15000];
    if (budget <= 40000) return budgetRecommendations[30000];
    return budgetRecommendations[50000];
  };

  const compatibilityChecks = [
    {
      check: 'Совместимость сокета',
      description: 'Проверяем совместимость процессора с материнской платой',
      importance: 'Критично'
    },
    {
      check: 'Мощность блока питания',
      description: 'Рассчитываем необходимую мощность для новых компонентов',
      importance: 'Высокая'
    },
    {
      check: 'Размеры корпуса',
      description: 'Убеждаемся, что новые компоненты поместятся в корпус',
      importance: 'Высокая'
    },
    {
      check: 'Тип памяти',
      description: 'Проверяем поддержку типа и частоты оперативной памяти',
      importance: 'Средняя'
    },
    {
      check: 'Охлаждение',
      description: 'Оцениваем достаточность системы охлаждения',
      importance: 'Средняя'
    }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Модернизация компьютеров</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Повысьте производительность вашего ПК с помощью профессиональной модернизации
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="configurator" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="configurator">Конфигуратор</TabsTrigger>
            <TabsTrigger value="components">Компоненты</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
            <TabsTrigger value="compatibility">Совместимость</TabsTrigger>
          </TabsList>

          <TabsContent value="configurator">
            <div className="space-y-8">
              {/* Use Case Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Для чего используется компьютер?</CardTitle>
                  <CardDescription>Выберите основное назначение для подбора оптимальной конфигурации</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {upgradeCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedUse(category.id)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          selectedUse === category.id
                            ? 'border-tech-blue bg-tech-blue/10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                          <Icon name={category.icon as any} size={24} className="text-white" />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-tech-dark">{category.name}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Budget Slider */}
              <Card>
                <CardHeader>
                  <CardTitle>Бюджет на модернизацию</CardTitle>
                  <CardDescription>Укажите планируемую сумму для подбора оптимальных компонентов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-tech-gray">5 000₽</span>
                        <span className="text-2xl font-bold text-tech-blue">{budget[0].toLocaleString()}₽</span>
                        <span className="text-sm text-tech-gray">100 000₽</span>
                      </div>
                      <Slider
                        value={budget}
                        onValueChange={setBudget}
                        max={100000}
                        min={5000}
                        step={2500}
                        className="w-full"
                      />
                    </div>
                    
                    {/* Budget Recommendation */}
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <Icon name="Lightbulb" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-blue-800 mb-1">
                              {getBudgetRecommendation(budget[0]).title}
                            </h4>
                            <p className="text-sm text-blue-700 mb-2">
                              {getBudgetRecommendation(budget[0]).description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {getBudgetRecommendation(budget[0]).components.map((component, idx) => (
                                <Badge key={idx} variant="outline" className="text-blue-700 border-blue-300">
                                  {component}
                                </Badge>
                              ))}
                            </div>
                            <div className="text-sm font-semibold text-blue-800">
                              Прирост производительности: {getBudgetRecommendation(budget[0]).performance}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle>Рекомендуемая конфигурация</CardTitle>
                  <CardDescription>
                    Оптимальные компоненты для {upgradeCategories.find(c => c.id === selectedUse)?.name.toLowerCase()} в рамках бюджета {budget[0].toLocaleString()}₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upgradeComponents[selectedUse as keyof typeof upgradeComponents].map((component, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-tech-dark">{component.component}</h4>
                            <div className="flex items-center space-x-4 text-sm text-tech-gray">
                              <span>Приоритет: {component.priority}</span>
                              <span>Влияние: {component.impact}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {component.options.map((option, idx) => (
                            <div key={idx} className="border rounded p-3 hover:bg-gray-50 transition-colors">
                              <div className="font-medium text-tech-dark">{option.name}</div>
                              <div className="text-tech-blue font-bold">{option.price}</div>
                              <div className="text-sm text-green-600">{option.performance}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button size="lg" className="bg-tech-blue hover:bg-blue-700">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Заказать модернизацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="components">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Компоненты для модернизации</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Подробная информация о компонентах, которые можно модернизировать
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Процессор (CPU)',
                    icon: 'Cpu',
                    impact: 'Высокий',
                    difficulty: 'Средняя',
                    avgPrice: '15000-50000₽',
                    benefits: ['Быстрее обработка данных', 'Лучшая многозадачность', 'Поддержка новых технологий'],
                    considerations: ['Совместимость с материнской платой', 'Необходимость нового кулера', 'Возможная замена ОЗУ']
                  },
                  {
                    name: 'Видеокарта (GPU)',
                    icon: 'Monitor',
                    impact: 'Максимальный',
                    difficulty: 'Низкая',
                    avgPrice: '20000-150000₽',
                    benefits: ['Лучшая графика в играх', 'Ускорение видеомонтажа', '4K и VR поддержка'],
                    considerations: ['Мощность блока питания', 'Размеры корпуса', 'Совместимость с процессором']
                  },
                  {
                    name: 'Оперативная память (RAM)',
                    icon: 'MemoryStick',
                    impact: 'Высокий',
                    difficulty: 'Очень низкая',
                    avgPrice: '3000-20000₽',
                    benefits: ['Быстрее загрузка программ', 'Лучшая многозадачность', 'Стабильная работа'],
                    considerations: ['Тип памяти (DDR4/DDR5)', 'Максимальный объем', 'Частота и тайминги']
                  },
                  {
                    name: 'SSD накопитель',
                    icon: 'HardDrive',
                    impact: 'Максимальный',
                    difficulty: 'Низкая',
                    avgPrice: '3000-30000₽',
                    benefits: ['Мгновенная загрузка ОС', 'Быстрый запуск программ', 'Тихая работа'],
                    considerations: ['Тип интерфейса (SATA/NVMe)', 'Объем накопителя', 'Перенос данных']
                  },
                  {
                    name: 'Материнская плата',
                    icon: 'CircuitBoard',
                    impact: 'Средний',
                    difficulty: 'Высокая',
                    avgPrice: '8000-40000₽',
                    benefits: ['Новые разъемы и порты', 'Поддержка новых CPU', 'Лучшее разгонное потенциал'],
                    considerations: ['Совместимость с CPU', 'Форм-фактор корпуса', 'Переустановка Windows']
                  },
                  {
                    name: 'Блок питания (PSU)',
                    icon: 'Zap',
                    impact: 'Средний',
                    difficulty: 'Средняя',
                    avgPrice: '5000-25000₽',
                    benefits: ['Стабильное питание', 'Поддержка мощных компонентов', 'Тихая работа'],
                    considerations: ['Необходимая мощность', 'Модульность кабелей', 'Сертификация 80+']
                  }
                ].map((component, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                          <Icon name={component.icon as any} size={24} className="text-tech-blue" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{component.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{component.impact}</Badge>
                            <Badge variant="secondary">{component.difficulty}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-tech-blue">{component.avgPrice}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Преимущества:</h4>
                          <ul className="space-y-1">
                            {component.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Plus" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-orange-600 mb-2">Важно учесть:</h4>
                          <ul className="space-y-1">
                            {component.considerations.map((consideration, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="AlertCircle" size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{consideration}</span>
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

          <TabsContent value="process">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Процесс модернизации</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Пошаговый процесс модернизации вашего компьютера
                </p>
              </div>

              <div className="space-y-6">
                {upgradeSteps.map((step, index) => (
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={20} className="text-green-500" />
                      <span>Что входит в услугу</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Бесплатная консультация по выбору компонентов</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Проверка совместимости всех компонентов</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Профессиональная установка и настройка</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Тестирование стабильности системы</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Гарантия на установку 6 месяцев</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="DollarSign" size={20} className="text-tech-blue" />
                      <span>Стоимость работ</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-tech-gray">Установка ОЗУ/SSD:</span>
                        <span className="font-semibold">500₽</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-tech-gray">Установка видеокарты:</span>
                        <span className="font-semibold">800₽</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-tech-gray">Замена процессора:</span>
                        <span className="font-semibold">1500₽</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-tech-gray">Замена материнской платы:</span>
                        <span className="font-semibold">2500₽</span>
                      </div>
                      <div className="flex justify-between items-center border-t pt-2">
                        <span className="font-semibold">Комплексная модернизация:</span>
                        <span className="font-bold text-tech-blue">от 3000₽</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compatibility">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Проверка совместимости</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Важные аспекты совместимости компонентов при модернизации
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {compatibilityChecks.map((check, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{check.check}</CardTitle>
                      <Badge variant={
                        check.importance === 'Критично' ? 'destructive' :
                        check.importance === 'Высокая' ? 'default' : 'secondary'
                      }>
                        {check.importance}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-tech-gray">{check.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="AlertTriangle" size={24} className="text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Важные моменты совместимости</h4>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• Процессор должен подходить к сокету материнской платы</li>
                        <li>• Блок питания должен обеспечивать достаточную мощность</li>
                        <li>• Видеокарта должна физически помещаться в корпус</li>
                        <li>• ОЗУ должна поддерживаться материнской платой</li>
                        <li>• Система охлаждения должна справляться с новыми компонентами</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-tech-blue to-blue-700 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Бесплатная проверка совместимости</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Наши специалисты проверят совместимость компонентов перед покупкой
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Получить консультацию
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tech-blue">
                      <Icon name="Upload" size={20} className="mr-2" />
                      Отправить конфигурацию
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

export default Upgrade;