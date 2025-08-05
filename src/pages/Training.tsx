import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Training = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseProgress, setCourseProgress] = useState<number>(0);

  const trainingCourses = [
    {
      id: 'basics',
      name: 'Основы работы с ПК',
      icon: 'Monitor',
      duration: '4 часа',
      price: '2000₽',
      level: 'Начинающий',
      description: 'Базовые навыки работы с компьютером для новичков',
      topics: [
        'Включение и выключение компьютера',
        'Работа с мышью и клавиатурой',
        'Основы Windows',
        'Работа с файлами и папками',
        'Подключение к интернету'
      ],
      target: 'Пенсионеры, новички'
    },
    {
      id: 'office',
      name: 'Microsoft Office',
      icon: 'FileText',
      duration: '8 часов',
      price: '3500₽',
      level: 'Средний',
      description: 'Эффективная работа с офисными программами',
      topics: [
        'Word: создание и форматирование документов',
        'Excel: таблицы и формулы',
        'PowerPoint: создание презентаций',
        'Outlook: работа с почтой',
        'Совместная работа с документами'
      ],
      target: 'Офисные сотрудники'
    },
    {
      id: 'internet',
      name: 'Безопасность в интернете',
      icon: 'Shield',
      duration: '3 часа',
      price: '1800₽',
      level: 'Начинающий',
      description: 'Защита от интернет-угроз и безопасное поведение онлайн',
      topics: [
        'Распознавание фишинговых сайтов',
        'Безопасные пароли',
        'Настройка приватности в соцсетях',
        'Безопасные покупки онлайн',
        'Защита от вирусов'
      ],
      target: 'Все пользователи'
    },
    {
      id: 'maintenance',
      name: 'Обслуживание ПК',
      icon: 'Settings',
      duration: '6 часов',
      price: '2800₽',
      level: 'Продвинутый',
      description: 'Самостоятельное обслуживание и диагностика компьютера',
      topics: [
        'Чистка компьютера от пыли',
        'Диагностика неисправностей',
        'Установка программ и драйверов',
        'Оптимизация системы',
        'Резервное копирование'
      ],
      target: 'Продвинутые пользователи'
    },
    {
      id: 'business',
      name: 'IT для бизнеса',
      icon: 'Briefcase',
      duration: '12 часов',
      price: '5000₽',
      level: 'Профессиональный',
      description: 'Управление IT-инфраструктурой малого бизнеса',
      topics: [
        'Планирование IT-инфраструктуры',
        'Выбор оборудования и ПО',
        'Организация рабочих мест',
        'Системы безопасности',
        'Управление IT-бюджетом'
      ],
      target: 'Руководители, IT-менеджеры'
    },
    {
      id: 'seniors',
      name: 'Компьютер для пенсионеров',
      icon: 'Heart',
      duration: '6 часов',
      price: '1500₽',
      level: 'Начинающий',
      description: 'Специальный курс для людей старшего возраста',
      topics: [
        'Знакомство с компьютером',
        'Общение в интернете',
        'Видеозвонки с родственниками',
        'Онлайн покупки и услуги',
        'Развлечения и хобби'
      ],
      target: 'Люди 60+'
    }
  ];

  const trainingFormats = [
    {
      format: 'Индивидуальные занятия',
      icon: 'User',
      price: 'от 800₽/час',
      description: 'Персональное обучение с учетом ваших потребностей',
      benefits: ['Индивидуальный подход', 'Гибкий график', 'Обучение на вашем ПК', 'Максимальная эффективность']
    },
    {
      format: 'Групповые курсы',
      icon: 'Users',
      price: 'от 500₽/час',
      description: 'Обучение в группах до 8 человек',
      benefits: ['Экономия средств', 'Общение с единомышленниками', 'Групповые задания', 'Регулярное расписание']
    },
    {
      format: 'Корпоративное обучение',
      icon: 'Building',
      price: 'от 15000₽/день',
      description: 'Обучение сотрудников компании на рабочих местах',
      benefits: ['Обучение на рабочем месте', 'Программа под задачи компании', 'Сертификаты', 'Отчеты для руководства']
    },
    {
      format: 'Онлайн обучение',
      icon: 'Video',
      price: 'от 300₽/час',
      description: 'Дистанционное обучение через видеосвязь',
      benefits: ['Экономия времени', 'Обучение из дома', 'Запись занятий', 'Гибкий график']
    }
  ];

  const learningPath = [
    {
      level: 'Новичок',
      courses: ['Основы работы с ПК', 'Безопасность в интернете'],
      duration: '7 часов',
      price: '3800₽'
    },
    {
      level: 'Пользователь',
      courses: ['Microsoft Office', 'Обслуживание ПК'],
      duration: '14 часов',
      price: '6300₽'
    },
    {
      level: 'Продвинутый',
      courses: ['IT для бизнеса', 'Администрирование'],
      duration: '20 часов',
      price: '8500₽'
    }
  ];

  const startCourseDemo = () => {
    setCourseProgress(0);
    const interval = setInterval(() => {
      setCourseProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Обучение работе с ПК</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Индивидуальные и групповые курсы по работе с компьютером для всех уровней подготовки
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="courses">Курсы</TabsTrigger>
            <TabsTrigger value="formats">Форматы</TabsTrigger>
            <TabsTrigger value="path">Программы</TabsTrigger>
            <TabsTrigger value="demo">Демо урок</TabsTrigger>
            <TabsTrigger value="signup">Записаться</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Доступные курсы</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Выберите курс, соответствующий вашему уровню подготовки
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingCourses.map((course) => (
                  <Card 
                    key={course.id} 
                    className={`hover:shadow-lg transition-all cursor-pointer ${
                      selectedCourse === course.id ? 'ring-2 ring-tech-blue' : ''
                    }`}
                    onClick={() => setSelectedCourse(course.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                          <Icon name={course.icon as any} size={24} className="text-tech-blue" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{course.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-tech-blue">{course.price}</Badge>
                            <Badge variant="outline">{course.level}</Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription>{course.description}</CardDescription>
                      <div className="flex items-center space-x-4 text-sm text-tech-gray">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Users" size={14} />
                          <span>{course.target}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Программа курса:</h4>
                          <ul className="space-y-1">
                            {course.topics.map((topic, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Записаться на курс
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedCourse && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">
                        Выбран курс: {trainingCourses.find(c => c.id === selectedCourse)?.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {trainingCourses.find(c => c.id === selectedCourse)?.duration}
                          </div>
                          <div className="text-sm text-blue-700">Продолжительность</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {trainingCourses.find(c => c.id === selectedCourse)?.price}
                          </div>
                          <div className="text-sm text-blue-700">Стоимость</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {trainingCourses.find(c => c.id === selectedCourse)?.level}
                          </div>
                          <div className="text-sm text-blue-700">Уровень</div>
                        </div>
                      </div>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Записаться на курс
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
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Форматы обучения</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Выберите удобный для вас формат обучения
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {trainingFormats.map((format, index) => (
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

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Gift" size={24} className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Специальные предложения</h4>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• Скидка 20% для пенсионеров на все курсы</li>
                        <li>• Семейная скидка 15% при записи 2+ человек</li>
                        <li>• Корпоративные скидки от 25% для групп 5+ человек</li>
                        <li>• Бесплатное пробное занятие для новых учеников</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="path">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Программы обучения</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Структурированные программы для последовательного изучения
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {learningPath.map((path, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{path.level}</CardTitle>
                      <div className="text-3xl font-bold text-tech-blue">{path.price}</div>
                      <CardDescription>Полная программа обучения</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-tech-dark">{path.duration}</div>
                          <div className="text-sm text-tech-gray">Общая продолжительность</div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Включенные курсы:</h4>
                          <ul className="space-y-1">
                            {path.courses.map((course, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="BookOpen" size={14} className="text-tech-blue mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Выбрать программу
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Award" size={24} className="text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Сертификация</h4>
                      <p className="text-purple-700 text-sm mb-3">
                        По окончании курсов вы получите:
                      </p>
                      <ul className="space-y-1 text-purple-700 text-sm">
                        <li>• Сертификат о прохождении обучения</li>
                        <li>• Методические материалы</li>
                        <li>• Доступ к записям занятий на 3 месяца</li>
                        <li>• Бесплатные консультации в течение месяца</li>
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
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Демонстрационный урок</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Попробуйте наш подход к обучению на примере урока
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Урок: "Основы работы с файлами"</CardTitle>
                  <CardDescription>
                    Интерактивный урок по работе с файлами и папками в Windows
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-tech-blue mb-2">
                        {Math.round(courseProgress)}%
                      </div>
                      <p className="text-tech-gray">Прогресс урока</p>
                    </div>
                    
                    <Progress value={courseProgress} className="h-4" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Текущая тема:</h4>
                        <p className="text-sm text-tech-gray">
                          {courseProgress < 20 ? 'Что такое файлы и папки' :
                           courseProgress < 40 ? 'Создание новых папок' :
                           courseProgress < 60 ? 'Копирование и перемещение файлов' :
                           courseProgress < 80 ? 'Поиск файлов на компьютере' :
                           courseProgress < 100 ? 'Практические задания' :
                           'Урок завершен'}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Оставшееся время:</h4>
                        <p className="text-sm text-tech-gray">
                          {courseProgress === 100 ? 'Завершено' : 
                           `Примерно ${Math.max(1, Math.round((100 - courseProgress) / 5))} минут`}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        onClick={startCourseDemo}
                        disabled={courseProgress > 0 && courseProgress < 100}
                        className="bg-tech-blue hover:bg-blue-700"
                      >
                        {courseProgress === 0 ? 'Начать урок' :
                         courseProgress === 100 ? 'Пройти заново' :
                         'Урок в процессе...'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="BookOpen" size={20} className="text-blue-500" />
                      <span>Теория</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Изучено тем:</span>
                        <span>{Math.floor(courseProgress / 20)}/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Понимание:</span>
                        <span className="text-green-600">Отлично</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Вопросы:</span>
                        <span>2 заданы</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="MousePointer" size={20} className="text-green-500" />
                      <span>Практика</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Выполнено заданий:</span>
                        <span>{Math.floor(courseProgress / 25)}/4</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Правильность:</span>
                        <span className="text-green-600">95%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Скорость:</span>
                        <span className="text-green-600">Хорошая</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Trophy" size={20} className="text-yellow-500" />
                      <span>Достижения</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Получено баллов:</span>
                        <span>{Math.floor(courseProgress * 0.95)}/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Уровень:</span>
                        <span className="text-yellow-600">Новичок</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Прогресс:</span>
                        <span className="text-green-600">Отличный</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="signup">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Записаться на обучение</CardTitle>
                  <CardDescription>
                    Заполните форму и мы подберем оптимальную программу обучения
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
                        <label className="block text-sm font-medium text-tech-dark mb-2">Возраст</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                          <option>18-30 лет</option>
                          <option>31-50 лет</option>
                          <option>51-65 лет</option>
                          <option>65+ лет</option>
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
                      <label className="block text-sm font-medium text-tech-dark mb-2">Уровень подготовки</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                        <option>Полный новичок</option>
                        <option>Базовые навыки</option>
                        <option>Уверенный пользователь</option>
                        <option>Продвинутый уровень</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Интересующие курсы</label>
                      <div className="space-y-2">
                        {trainingCourses.slice(0, 4).map((course) => (
                          <label key={course.id} className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="text-sm">{course.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Предпочитаемый формат</label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="format" value="individual" className="text-tech-blue" />
                          <span className="text-sm">Индивидуальные занятия</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="format" value="group" className="text-tech-blue" />
                          <span className="text-sm">Групповые занятия</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="format" value="online" className="text-tech-blue" />
                          <span className="text-sm">Онлайн обучение</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Дополнительная информация</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="Расскажите о ваших целях обучения, предпочитаемом времени занятий..."
                        rows={3}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-tech-blue hover:bg-blue-700">
                      <Icon name="Send" size={20} className="mr-2" />
                      Записаться на обучение
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Calendar" size={20} className="text-tech-blue" />
                      <span>Расписание</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Будние дни:</span>
                        <span className="font-medium">10:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Суббота:</span>
                        <span className="font-medium">10:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Воскресенье:</span>
                        <span className="font-medium">По договоренности</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Индивидуальные занятия:</span>
                        <span className="font-medium text-green-600">Гибкий график</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="MapPin" size={20} className="text-tech-blue" />
                      <span>Место проведения</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="font-medium">Наш офис:</div>
                        <div className="text-sm text-tech-gray">г. Тверь, ул. Советская, 25</div>
                      </div>
                      <div>
                        <div className="font-medium">У вас дома:</div>
                        <div className="text-sm text-tech-gray">Выезд в пределах Твери (+500₽)</div>
                      </div>
                      <div>
                        <div className="font-medium">Онлайн:</div>
                        <div className="text-sm text-tech-gray">Через Zoom/Skype/TeamViewer</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <Icon name="Gift" size={32} className="mx-auto mb-3 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Бесплатное пробное занятие</h3>
                    <p className="text-sm text-blue-700 mb-4">
                      Первое занятие бесплатно для всех новых учеников!
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Icon name="Play" size={16} className="mr-2" />
                      Записаться на пробный урок
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

export default Training;