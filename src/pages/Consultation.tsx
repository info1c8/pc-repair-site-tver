import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Consultation = () => {
  const [selectedConsultation, setSelectedConsultation] = useState('');
  const [selectedExpert, setSelectedExpert] = useState('');

  const consultationTypes = [
    {
      id: 'purchase',
      name: 'Выбор компьютера',
      icon: 'ShoppingCart',
      price: '500₽',
      duration: '30-60 мин',
      description: 'Помощь в выборе оптимальной конфигурации ПК',
      includes: ['Анализ потребностей', 'Подбор компонентов', 'Сравнение вариантов', 'Рекомендации по покупке']
    },
    {
      id: 'upgrade',
      name: 'Модернизация ПК',
      icon: 'Cpu',
      price: '400₽',
      duration: '30 мин',
      description: 'Консультация по улучшению существующего компьютера',
      includes: ['Анализ текущей конфигурации', 'Выявление узких мест', 'План модернизации', 'Расчет бюджета']
    },
    {
      id: 'software',
      name: 'Выбор программ',
      icon: 'Download',
      price: '300₽',
      duration: '20-30 мин',
      description: 'Подбор программного обеспечения под задачи',
      includes: ['Анализ задач', 'Сравнение программ', 'Лицензирование', 'Совместимость']
    },
    {
      id: 'security',
      name: 'Безопасность',
      icon: 'Shield',
      price: '600₽',
      duration: '45 мин',
      description: 'Консультация по защите данных и системы',
      includes: ['Анализ угроз', 'Выбор антивируса', 'Настройка защиты', 'Обучение безопасности']
    },
    {
      id: 'business',
      name: 'IT для бизнеса',
      icon: 'Briefcase',
      price: '1000₽',
      duration: '60-90 мин',
      description: 'Планирование IT-инфраструктуры компании',
      includes: ['IT-аудит', 'Планирование развития', 'Расчет бюджета', 'Выбор решений']
    },
    {
      id: 'recovery',
      name: 'Восстановление данных',
      icon: 'HardDrive',
      price: '400₽',
      duration: '30 мин',
      description: 'Оценка возможности восстановления утерянных данных',
      includes: ['Анализ ситуации', 'Оценка шансов', 'Выбор метода', 'Расчет стоимости']
    }
  ];

  const experts = [
    {
      id: 'alexey',
      name: 'Алексей Петров',
      position: 'Главный инженер',
      experience: '8 лет',
      specialization: ['Ремонт материнских плат', 'Восстановление данных', 'Серверное оборудование'],
      rating: 4.9,
      consultations: 450,
      languages: ['Русский', 'Английский'],
      availability: 'Пн-Пт 9:00-18:00'
    },
    {
      id: 'maria',
      name: 'Мария Сидорова',
      position: 'Системный администратор',
      experience: '6 лет',
      specialization: ['Сетевые технологии', 'Безопасность', 'Корпоративные решения'],
      rating: 4.8,
      consultations: 320,
      languages: ['Русский'],
      availability: 'Пн-Сб 10:00-19:00'
    },
    {
      id: 'dmitry',
      name: 'Дмитрий Козлов',
      position: 'Специалист по играм',
      experience: '4 года',
      specialization: ['Игровые ПК', 'Разгон', 'Стриминг'],
      rating: 4.7,
      consultations: 280,
      languages: ['Русский'],
      availability: 'Вт-Вс 12:00-20:00'
    }
  ];

  const consultationFormats = [
    {
      format: 'Телефонная консультация',
      icon: 'Phone',
      price: 'Базовая цена',
      description: 'Консультация по телефону в удобное время',
      benefits: ['Быстрое получение ответов', 'Экономия времени', 'Возможность записи разговора']
    },
    {
      format: 'Видеоконсультация',
      icon: 'Video',
      price: '+200₽',
      description: 'Консультация через Zoom/Skype с демонстрацией экрана',
      benefits: ['Визуальная демонстрация', 'Удаленная диагностика', 'Запись сессии']
    },
    {
      format: 'Личная встреча',
      icon: 'Users',
      price: '+300₽',
      description: 'Консультация в нашем офисе или у вас',
      benefits: ['Личное общение', 'Осмотр оборудования', 'Практические демонстрации']
    },
    {
      format: 'Письменная консультация',
      icon: 'Mail',
      price: '-50%',
      description: 'Подробный ответ по email в течение 24 часов',
      benefits: ['Детальный анализ', 'Документированные рекомендации', 'Возможность пересмотра']
    }
  ];

  const faqTopics = [
    {
      topic: 'Выбор компьютера',
      questions: [
        'Какой компьютер лучше для офисной работы?',
        'Стоит ли покупать готовый ПК или собирать самому?',
        'Какая разница между Intel и AMD?',
        'Сколько оперативной памяти нужно?'
      ]
    },
    {
      topic: 'Проблемы с ПК',
      questions: [
        'Почему компьютер тормозит?',
        'Что делать, если ПК не включается?',
        'Как понять, что пора менять компьютер?',
        'Почему греется ноутбук?'
      ]
    },
    {
      topic: 'Программы и ОС',
      questions: [
        'Какой антивирус выбрать?',
        'Стоит ли обновляться до Windows 11?',
        'Как ускорить работу компьютера?',
        'Какие программы нужны для работы?'
      ]
    },
    {
      topic: 'Безопасность',
      questions: [
        'Как защитить данные от потери?',
        'Что делать при заражении вирусом?',
        'Как создать надежный пароль?',
        'Безопасно ли делать покупки онлайн?'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">IT-консультации</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Профессиональные консультации по всем вопросам компьютерной техники
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="types">Виды консультаций</TabsTrigger>
            <TabsTrigger value="experts">Эксперты</TabsTrigger>
            <TabsTrigger value="formats">Форматы</TabsTrigger>
            <TabsTrigger value="faq">Частые вопросы</TabsTrigger>
            <TabsTrigger value="book">Записаться</TabsTrigger>
          </TabsList>

          <TabsContent value="types">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Виды консультаций</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Получите экспертную помощь по любым вопросам компьютерной техники
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {consultationTypes.map((consultation) => (
                  <Card 
                    key={consultation.id} 
                    className={`hover:shadow-lg transition-all cursor-pointer ${
                      selectedConsultation === consultation.id ? 'ring-2 ring-tech-blue' : ''
                    }`}
                    onClick={() => setSelectedConsultation(consultation.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                          <Icon name={consultation.icon as any} size={24} className="text-tech-blue" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{consultation.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-tech-blue">{consultation.price}</Badge>
                            <Badge variant="outline">{consultation.duration}</Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription>{consultation.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Что включено:</h4>
                          <ul className="space-y-1">
                            {consultation.includes.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Заказать консультацию
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedConsultation && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">
                        Выбрано: {consultationTypes.find(c => c.id === selectedConsultation)?.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {consultationTypes.find(c => c.id === selectedConsultation)?.price}
                          </div>
                          <div className="text-sm text-blue-700">Стоимость</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {consultationTypes.find(c => c.id === selectedConsultation)?.duration}
                          </div>
                          <div className="text-sm text-blue-700">Длительность</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">24ч</div>
                          <div className="text-sm text-blue-700">Поддержка после</div>
                        </div>
                      </div>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Записаться на консультацию
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="experts">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Наши эксперты</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Выберите специалиста для получения консультации
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {experts.map((expert) => (
                  <Card 
                    key={expert.id} 
                    className={`hover:shadow-lg transition-all cursor-pointer ${
                      selectedExpert === expert.id ? 'ring-2 ring-tech-blue' : ''
                    }`}
                    onClick={() => setSelectedExpert(expert.id)}
                  >
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="User" size={32} className="text-tech-blue" />
                      </div>
                      <CardTitle className="text-xl">{expert.name}</CardTitle>
                      <CardDescription>{expert.position}</CardDescription>
                      <div className="flex items-center justify-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                          <span>{expert.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" size={14} className="text-tech-blue" />
                          <span>{expert.consultations}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Специализация:</h4>
                          <div className="flex flex-wrap gap-1">
                            {expert.specialization.map((spec, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Опыт:</span>
                            <span className="font-medium">{expert.experience}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Языки:</span>
                            <span className="font-medium">{expert.languages.join(', ')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-tech-gray">Доступность:</span>
                            <span className="font-medium text-green-600">{expert.availability}</span>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Выбрать эксперта
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedExpert && (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-green-800 mb-4">
                        Выбран эксперт: {experts.find(e => e.id === selectedExpert)?.name}
                      </h3>
                      <p className="text-green-700 mb-4">
                        {experts.find(e => e.id === selectedExpert)?.position} с опытом {experts.find(e => e.id === selectedExpert)?.experience}
                      </p>
                      <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                        <Icon name="Calendar" size={20} className="mr-2" />
                        Записаться к этому эксперту
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="formats">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Форматы консультаций</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Выберите удобный способ получения консультации
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {consultationFormats.map((format, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                          <Icon name={format.icon as any} size={24} className="text-tech-blue" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{format.format}</CardTitle>
                          <Badge className="bg-tech-blue">{format.price}</Badge>
                        </div>
                      </div>
                      <CardDescription>{format.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Преимущества:</h4>
                          <ul className="space-y-1">
                            {format.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Выбрать формат
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Clock" size={24} className="text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Время проведения консультаций</h4>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• Будние дни: 9:00 - 20:00</li>
                        <li>• Суббота: 10:00 - 18:00</li>
                        <li>• Воскресенье: 12:00 - 16:00</li>
                        <li>• Экстренные консультации: 24/7 (+100% к стоимости)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="faq">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Частые вопросы</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Возможно, ответ на ваш вопрос уже есть в нашей базе знаний
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqTopics.map((topic, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{topic.topic}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {topic.questions.map((question, idx) => (
                          <button
                            key={idx}
                            className="w-full text-left p-2 rounded hover:bg-tech-blue/5 transition-colors"
                          >
                            <div className="flex items-start space-x-2">
                              <Icon name="HelpCircle" size={14} className="text-tech-blue mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-tech-gray">{question}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Не нашли ответ?</h3>
                    <p className="text-sm text-blue-700 mb-4">
                      Задайте свой вопрос нашим экспертам и получите персональный ответ
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Icon name="Phone" size={16} className="mr-2" />
                        Задать вопрос по телефону
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        <Icon name="Mail" size={16} className="mr-2" />
                        Написать на email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="book">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Записаться на консультацию</CardTitle>
                  <CardDescription>
                    Заполните форму и мы свяжемся с вами для уточнения деталей
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
                      <label className="block text-sm font-medium text-tech-dark mb-2">Тип консультации *</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                        <option value="">Выберите тип консультации</option>
                        {consultationTypes.map(consultation => (
                          <option key={consultation.id} value={consultation.id}>{consultation.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Предпочитаемый эксперт</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                        <option value="">Любой доступный</option>
                        {experts.map(expert => (
                          <option key={expert.id} value={expert.id}>{expert.name} - {expert.position}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Формат консультации</label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="format" value="phone" className="text-tech-blue" />
                          <span className="text-sm">Телефонная консультация</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="format" value="video" className="text-tech-blue" />
                          <span className="text-sm">Видеоконсультация (+200₽)</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="format" value="personal" className="text-tech-blue" />
                          <span className="text-sm">Личная встреча (+300₽)</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Описание вопроса *</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="Подробно опишите ваш вопрос или проблему..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Предпочитаемое время</label>
                      <div className="grid grid-cols-2 gap-4">
                        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                          <option>Утром (9:00-12:00)</option>
                          <option>Днем (12:00-15:00)</option>
                          <option>Вечером (15:00-18:00)</option>
                          <option>Поздно (18:00-20:00)</option>
                        </select>
                        <input 
                          type="date" 
                          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Срочная консультация (в течение 2 часов, +100%)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Согласен на обработку персональных данных</span>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-tech-blue hover:bg-blue-700">
                      <Icon name="Send" size={20} className="mr-2" />
                      Записаться на консультацию
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Info" size={20} className="text-tech-blue" />
                      <span>Как проходит консультация</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                        <div>
                          <div className="font-medium">Анализ вашего вопроса</div>
                          <div className="text-tech-gray">Эксперт изучает вашу ситуацию</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                        <div>
                          <div className="font-medium">Детальное обсуждение</div>
                          <div className="text-tech-gray">Разбираем проблему по пунктам</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                        <div>
                          <div className="font-medium">Рекомендации</div>
                          <div className="text-tech-gray">Получаете конкретные советы</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-tech-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                        <div>
                          <div className="font-medium">План действий</div>
                          <div className="text-tech-gray">Составляем пошаговый план</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="DollarSign" size={20} className="text-green-500" />
                      <span>Стоимость</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Базовая консультация:</span>
                        <span className="font-semibold">300-600₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Экспертная консультация:</span>
                        <span className="font-semibold">800-1200₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Корпоративная консультация:</span>
                        <span className="font-semibold">от 2000₽</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Повторная консультация:</span>
                        <span className="font-semibold text-green-600">-50%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <Icon name="Gift" size={32} className="mx-auto mb-3 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Бесплатная мини-консультация</h3>
                    <p className="text-sm text-green-700 mb-4">
                      Получите краткий ответ на простой вопрос абсолютно бесплатно!
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Задать быстрый вопрос
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

export default Consultation;