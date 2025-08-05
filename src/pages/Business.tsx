import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Business = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const businessPlans = [
    {
      id: 'startup',
      name: 'Стартап',
      price: '5000₽/мес',
      description: 'Для малых предприятий до 10 сотрудников',
      features: [
        'Обслуживание до 10 ПК',
        'Базовая техподдержка',
        'Ежемесячная профилактика',
        'Удаленная поддержка',
        'Консультации по телефону'
      ],
      response: '4 часа',
      visits: '1 раз в месяц',
      discount: '10%'
    },
    {
      id: 'standard',
      name: 'Стандарт',
      price: '12000₽/мес',
      description: 'Для средних компаний до 50 сотрудников',
      features: [
        'Обслуживание до 50 ПК',
        'Приоритетная поддержка',
        'Еженедельная профилактика',
        'Настройка серверов',
        'Управление сетью',
        'Резервное копирование'
      ],
      response: '2 часа',
      visits: '2 раза в месяц',
      discount: '15%',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Корпоративный',
      price: 'от 25000₽/мес',
      description: 'Для крупных предприятий свыше 50 сотрудников',
      features: [
        'Неограниченное количество ПК',
        'Выделенный инженер',
        'Мониторинг 24/7',
        'Управление IT-инфраструктурой',
        'Планирование модернизации',
        'Обучение персонала'
      ],
      response: '1 час',
      visits: 'По требованию',
      discount: '20%'
    }
  ];

  const businessServices = [
    {
      category: 'IT-инфраструктура',
      icon: 'Server',
      services: [
        { name: 'Настройка серверов', price: 'от 5000₽', description: 'Установка и настройка серверного оборудования' },
        { name: 'Настройка домена', price: 'от 3000₽', description: 'Active Directory и управление пользователями' },
        { name: 'Настройка почтового сервера', price: 'от 4000₽', description: 'Корпоративная почта на собственном сервере' },
        { name: 'Настройка файлового сервера', price: 'от 2500₽', description: 'Централизованное хранение данных' }
      ]
    },
    {
      category: 'Безопасность',
      icon: 'Shield',
      services: [
        { name: 'Настройка брандмауэра', price: 'от 2000₽', description: 'Защита корпоративной сети' },
        { name: 'Система резервного копирования', price: 'от 3500₽', description: 'Автоматическое сохранение данных' },
        { name: 'Антивирусная защита', price: 'от 1500₽', description: 'Корпоративные антивирусные решения' },
        { name: 'Мониторинг безопасности', price: 'от 4000₽', description: 'Отслеживание угроз в реальном времени' }
      ]
    },
    {
      category: 'Рабочие места',
      icon: 'Users',
      services: [
        { name: 'Настройка рабочих станций', price: 'от 800₽', description: 'Подготовка ПК для сотрудников' },
        { name: 'Установка корпоративного ПО', price: 'от 600₽', description: 'Развертывание необходимых программ' },
        { name: 'Настройка принтеров', price: 'от 500₽', description: 'Подключение и настройка печати' },
        { name: 'Обучение сотрудников', price: 'от 1000₽', description: 'Обучение работе с IT-системами' }
      ]
    },
    {
      category: 'Консалтинг',
      icon: 'Lightbulb',
      services: [
        { name: 'IT-аудит', price: 'от 10000₽', description: 'Анализ текущей IT-инфраструктуры' },
        { name: 'План модернизации', price: 'от 5000₽', description: 'Стратегия развития IT-систем' },
        { name: 'Выбор оборудования', price: 'от 2000₽', description: 'Подбор оптимальных решений' },
        { name: 'Оптимизация расходов', price: 'от 3000₽', description: 'Снижение IT-затрат компании' }
      ]
    }
  ];

  const caseStudies = [
    {
      company: 'ООО "ТехноСфера"',
      industry: 'IT-разработка',
      employees: 25,
      challenge: 'Медленная работа компьютеров, частые сбои сети',
      solution: 'Модернизация ПК, настройка серверной инфраструктуры',
      result: 'Увеличение производительности на 200%, стабильная работа сети',
      investment: '450000₽',
      savings: '50000₽/мес'
    },
    {
      company: 'Стоматология "Улыбка"',
      industry: 'Медицина',
      employees: 12,
      challenge: 'Устаревшие компьютеры, проблемы с базой данных пациентов',
      solution: 'Замена ПК, настройка сервера баз данных, резервное копирование',
      result: 'Быстрый доступ к данным пациентов, надежное хранение',
      investment: '280000₽',
      savings: '15000₽/мес'
    },
    {
      company: 'Торговая сеть "Продукты+"',
      industry: 'Розничная торговля',
      employees: 45,
      challenge: 'Нестабильная работа кассовых систем, проблемы с учетом',
      solution: 'Модернизация кассовых ПК, настройка сети, система мониторинга',
      result: 'Стабильная работа касс, точный учет товаров',
      investment: '650000₽',
      savings: '80000₽/мес'
    }
  ];

  const itServices = [
    {
      service: 'Аутсорсинг IT',
      description: 'Полное управление IT-инфраструктурой компании',
      benefits: ['Экономия на IT-отделе', 'Профессиональная поддержка', 'Современные технологии', 'Предсказуемые расходы']
    },
    {
      service: 'Облачные решения',
      description: 'Миграция в облако и настройка облачных сервисов',
      benefits: ['Доступ из любой точки', 'Масштабируемость', 'Безопасность данных', 'Снижение затрат']
    },
    {
      service: 'Системы безопасности',
      description: 'Комплексная защита корпоративных данных',
      benefits: ['Защита от киберугроз', 'Соответствие требованиям', 'Мониторинг инцидентов', 'Обучение персонала']
    },
    {
      service: 'Автоматизация процессов',
      description: 'Внедрение систем автоматизации бизнес-процессов',
      benefits: ['Повышение эффективности', 'Снижение ошибок', 'Экономия времени', 'Улучшение контроля']
    }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">IT-услуги для бизнеса</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Комплексные IT-решения для повышения эффективности вашего бизнеса
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="plans" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="plans">Планы</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="cases">Кейсы</TabsTrigger>
            <TabsTrigger value="solutions">Решения</TabsTrigger>
            <TabsTrigger value="contact">Связаться</TabsTrigger>
          </TabsList>

          <TabsContent value="plans">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Планы обслуживания</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Выберите подходящий план IT-поддержки для вашего бизнеса
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {businessPlans.map((plan) => (
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
                            <span className="text-tech-gray">Время отклика:</span>
                            <span className="font-medium">{plan.response}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Визиты:</span>
                            <span className="font-medium">{plan.visits}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Скидка на ремонт:</span>
                            <span className="font-medium text-green-600">{plan.discount}</span>
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
                  <h3 className="text-2xl font-bold mb-4">Индивидуальные решения</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Для крупных предприятий мы разрабатываем персональные IT-стратегии
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-sm opacity-90">Рабочих мест</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">Мониторинг</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">SLA</div>
                      <div className="text-sm opacity-90">Гарантии</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">-30%</div>
                      <div className="text-sm opacity-90">Экономия</div>
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
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Корпоративные услуги</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Полный спектр IT-услуг для эффективной работы вашего бизнеса
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {businessServices.map((category, index) => (
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

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="TrendingUp" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Преимущества работы с нами</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Снижение IT-расходов на 20-40%</li>
                        <li>• Повышение производительности сотрудников</li>
                        <li>• Минимизация простоев оборудования</li>
                        <li>• Профессиональная поддержка 24/7</li>
                        <li>• Соответствие требованиям безопасности</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cases">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Успешные проекты</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Примеры решения IT-задач для различных компаний
                </p>
              </div>

              <div className="space-y-8">
                {caseStudies.map((caseStudy, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{caseStudy.company}</CardTitle>
                          <CardDescription>{caseStudy.industry} • {caseStudy.employees} сотрудников</CardDescription>
                        </div>
                        <Badge className="bg-tech-blue">{caseStudy.investment}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Проблема:</h4>
                          <p className="text-sm text-tech-gray">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2">Решение:</h4>
                          <p className="text-sm text-tech-gray">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Результат:</h4>
                          <p className="text-sm text-tech-gray mb-2">{caseStudy.result}</p>
                          <div className="text-sm">
                            <span className="text-tech-gray">Экономия: </span>
                            <span className="font-bold text-green-600">{caseStudy.savings}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-tech-blue to-blue-700 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ваша компания может быть следующей!</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Доверьте IT-инфраструктуру профессионалам и сосредоточьтесь на развитии бизнеса
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Обсудить проект
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tech-blue">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Получить презентацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="solutions">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">IT-решения</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Современные технологические решения для различных сфер бизнеса
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {itServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{service.service}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-semibold mb-3">Преимущества:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-tech-gray">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Clock" size={20} className="text-tech-blue" />
                      <span>Экономия времени</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-tech-blue mb-2">40%</div>
                      <div className="text-sm text-tech-gray">Сокращение времени на IT-задачи</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="DollarSign" size={20} className="text-green-500" />
                      <span>Экономия средств</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                      <div className="text-sm text-tech-gray">Снижение IT-расходов</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={20} className="text-purple-500" />
                      <span>Рост эффективности</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                      <div className="text-sm text-tech-gray">Повышение производительности</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Обсудить IT-проект</CardTitle>
                  <CardDescription>
                    Расскажите о потребностях вашего бизнеса
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
                        <label className="block text-sm font-medium text-tech-dark mb-2">Должность</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                          placeholder="Директор, IT-менеджер..."
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-tech-dark mb-2">Компания *</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                          placeholder="Название компании"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-tech-dark mb-2">Количество сотрудников</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                          <option>1-10 сотрудников</option>
                          <option>11-50 сотрудников</option>
                          <option>51-100 сотрудников</option>
                          <option>Более 100 сотрудников</option>
                        </select>
                      </div>
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
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="company@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Описание задач</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="Опишите текущие IT-проблемы и потребности вашей компании..."
                        rows={4}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Нужна срочная консультация (в течение 2 часов)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Интересует долгосрочное сотрудничество</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Согласен на обработку персональных данных</span>
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
                      <Icon name="Award" size={20} className="text-tech-blue" />
                      <span>Наши преимущества</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-500" />
                        <span>5+ лет опыта работы с бизнесом</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-500" />
                        <span>Сертифицированные специалисты</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-500" />
                        <span>Работа по договору с SLA</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-500" />
                        <span>Гибкие условия оплаты</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Users" size={20} className="text-tech-blue" />
                      <span>Наши клиенты</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>• IT-компании и стартапы</div>
                      <div>• Медицинские учреждения</div>
                      <div>• Торговые сети и магазины</div>
                      <div>• Образовательные учреждения</div>
                      <div>• Производственные предприятия</div>
                      <div>• Финансовые организации</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <Icon name="Phone" size={32} className="mx-auto mb-3 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Срочная консультация</h3>
                    <p className="text-sm text-green-700 mb-4">
                      Критическая IT-проблема? Звоните прямо сейчас!
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

export default Business;