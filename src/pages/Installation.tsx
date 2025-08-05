import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Installation = () => {
  const [selectedOS, setSelectedOS] = useState('windows11');
  const [installationProgress, setInstallationProgress] = useState<number>(0);

  const operatingSystems = [
    {
      id: 'windows11',
      name: 'Windows 11',
      icon: 'Monitor',
      price: '1500₽',
      duration: '2-3 часа',
      description: 'Последняя версия Windows с новым интерфейсом',
      features: ['Новый дизайн', 'Улучшенная безопасность', 'Поддержка Android приложений', 'Microsoft Teams интеграция'],
      requirements: ['TPM 2.0', 'UEFI', '4GB RAM', '64GB Storage']
    },
    {
      id: 'windows10',
      name: 'Windows 10',
      icon: 'Monitor',
      price: '1200₽',
      duration: '2 часа',
      description: 'Стабильная и проверенная версия Windows',
      features: ['Стабильная работа', 'Широкая совместимость', 'Знакомый интерфейс', 'Долгосрочная поддержка'],
      requirements: ['1GB RAM (32-bit)', '2GB RAM (64-bit)', '16GB Storage', 'DirectX 9']
    },
    {
      id: 'linux',
      name: 'Linux Ubuntu',
      icon: 'Terminal',
      price: '1000₽',
      duration: '1.5 часа',
      description: 'Бесплатная и безопасная операционная система',
      features: ['Бесплатная ОС', 'Высокая безопасность', 'Быстрая работа', 'Открытый исходный код'],
      requirements: ['2GB RAM', '25GB Storage', 'DVD или USB', 'Интернет соединение']
    },
    {
      id: 'macos',
      name: 'macOS (Hackintosh)',
      icon: 'Apple',
      price: '2500₽',
      duration: '4-6 часов',
      description: 'Установка macOS на совместимое оборудование',
      features: ['Интерфейс Apple', 'Стабильная работа', 'Профессиональные приложения', 'Экосистема Apple'],
      requirements: ['Совместимое железо', 'Intel процессор', '8GB RAM', '128GB SSD']
    }
  ];

  const softwareCategories = [
    {
      category: 'Офисные программы',
      icon: 'FileText',
      software: [
        { name: 'Microsoft Office 365', price: '800₽', description: 'Полный пакет офисных приложений' },
        { name: 'LibreOffice', price: '300₽', description: 'Бесплатный аналог MS Office' },
        { name: 'Adobe Acrobat', price: '600₽', description: 'Работа с PDF документами' },
        { name: 'WinRAR/7-Zip', price: '200₽', description: 'Архиваторы для сжатия файлов' }
      ]
    },
    {
      category: 'Мультимедиа',
      icon: 'Play',
      software: [
        { name: 'Adobe Creative Suite', price: '1500₽', description: 'Профессиональные инструменты дизайна' },
        { name: 'VLC Media Player', price: '200₽', description: 'Универсальный медиаплеер' },
        { name: 'OBS Studio', price: '400₽', description: 'Запись и стриминг видео' },
        { name: 'Audacity', price: '300₽', description: 'Редактор аудио файлов' }
      ]
    },
    {
      category: 'Безопасность',
      icon: 'Shield',
      software: [
        { name: 'Kaspersky Security', price: '600₽', description: 'Комплексная защита от угроз' },
        { name: 'Malwarebytes', price: '500₽', description: 'Защита от вредоносного ПО' },
        { name: 'CCleaner', price: '300₽', description: 'Очистка и оптимизация системы' },
        { name: 'Windows Defender', price: '200₽', description: 'Настройка встроенной защиты' }
      ]
    },
    {
      category: 'Разработка',
      icon: 'Code',
      software: [
        { name: 'Visual Studio Code', price: '400₽', description: 'Редактор кода от Microsoft' },
        { name: 'Git + GitHub Desktop', price: '300₽', description: 'Система контроля версий' },
        { name: 'Docker Desktop', price: '500₽', description: 'Контейнеризация приложений' },
        { name: 'Node.js + npm', price: '300₽', description: 'Среда выполнения JavaScript' }
      ]
    }
  ];

  const installationSteps = [
    {
      step: 1,
      title: 'Подготовка',
      description: 'Резервное копирование данных и подготовка носителя',
      duration: '30 мин'
    },
    {
      step: 2,
      title: 'Форматирование',
      description: 'Очистка диска и создание разделов',
      duration: '15 мин'
    },
    {
      step: 3,
      title: 'Установка ОС',
      description: 'Копирование системных файлов',
      duration: '45-90 мин'
    },
    {
      step: 4,
      title: 'Драйвера',
      description: 'Установка драйверов для всех устройств',
      duration: '30 мин'
    },
    {
      step: 5,
      title: 'Программы',
      description: 'Установка необходимого ПО',
      duration: '30-60 мин'
    },
    {
      step: 6,
      title: 'Настройка',
      description: 'Конфигурация системы и восстановление данных',
      duration: '30 мин'
    }
  ];

  const troubleshooting = [
    {
      problem: 'Ошибка активации Windows',
      solution: 'Использование лицензионного ключа или KMS активации',
      complexity: 'Низкая'
    },
    {
      problem: 'Не устанавливаются драйвера',
      solution: 'Поиск совместимых драйверов или использование универсальных',
      complexity: 'Средняя'
    },
    {
      problem: 'Синий экран при установке',
      solution: 'Проверка совместимости железа и настройка BIOS',
      complexity: 'Высокая'
    },
    {
      problem: 'Медленная работа после установки',
      solution: 'Оптимизация системы и отключение ненужных служб',
      complexity: 'Средняя'
    }
  ];

  const startInstallationDemo = () => {
    setInstallationProgress(0);
    const interval = setInterval(() => {
      setInstallationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Установка ПО</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Профессиональная установка операционных систем и программного обеспечения
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="os" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="os">Операционные системы</TabsTrigger>
            <TabsTrigger value="software">Программы</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
            <TabsTrigger value="troubleshooting">Решение проблем</TabsTrigger>
            <TabsTrigger value="demo">Демо</TabsTrigger>
          </TabsList>

          <TabsContent value="os">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Операционные системы</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Выберите операционную систему для установки на ваш компьютер
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {operatingSystems.map((os) => (
                  <Card 
                    key={os.id} 
                    className={`hover:shadow-lg transition-all cursor-pointer ${
                      selectedOS === os.id ? 'ring-2 ring-tech-blue' : ''
                    }`}
                    onClick={() => setSelectedOS(os.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                          <Icon name={os.icon as any} size={24} className="text-tech-blue" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{os.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-tech-blue">{os.price}</Badge>
                            <Badge variant="outline">{os.duration}</Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription>{os.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Особенности:</h4>
                          <ul className="space-y-1">
                            {os.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Системные требования:</h4>
                          <div className="flex flex-wrap gap-1">
                            {os.requirements.map((req, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Заказать установку
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedOS && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">
                        Выбрано: {operatingSystems.find(os => os.id === selectedOS)?.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {operatingSystems.find(os => os.id === selectedOS)?.price}
                          </div>
                          <div className="text-sm text-blue-700">Стоимость</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {operatingSystems.find(os => os.id === selectedOS)?.duration}
                          </div>
                          <div className="text-sm text-blue-700">Время установки</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">3 мес</div>
                          <div className="text-sm text-blue-700">Гарантия</div>
                        </div>
                      </div>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Заказать установку
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="software">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Программное обеспечение</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Установка необходимых программ для работы, творчества и развлечений
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {softwareCategories.map((category, index) => (
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
                        {category.software.map((software, idx) => (
                          <div key={idx} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="flex-1">
                              <div className="font-medium text-tech-dark">{software.name}</div>
                              <div className="text-sm text-tech-gray">{software.description}</div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="text-tech-blue font-bold">{software.price}</div>
                              <Button size="sm" variant="outline" className="mt-1">
                                Добавить
                              </Button>
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
                      <h4 className="font-semibold text-green-800 mb-2">Пакетные предложения</h4>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• Базовый пакет (ОС + антивирус + офис) - 2500₽ вместо 3100₽</li>
                        <li>• Мультимедиа пакет (ОС + творческие программы) - 4000₽ вместо 4800₽</li>
                        <li>• Геймерский пакет (ОС + игровые утилиты) - 3000₽ вместо 3600₽</li>
                        <li>• Профессиональный пакет (все программы) - 6000₽ вместо 7500₽</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="process">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Процесс установки</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Пошаговый процесс установки операционной системы и программ
                </p>
              </div>

              <div className="space-y-6">
                {installationSteps.map((step, index) => (
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
                        <span className="text-sm">Резервное копирование важных данных</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Чистая установка операционной системы</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Установка всех необходимых драйверов</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Настройка системы под ваши потребности</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Восстановление пользовательских данных</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="AlertTriangle" size={20} className="text-orange-500" />
                      <span>Важные моменты</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Icon name="AlertCircle" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Все данные будут сохранены перед установкой</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="AlertCircle" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Потребуется лицензионный ключ Windows</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="AlertCircle" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Некоторые старые программы могут не работать</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="AlertCircle" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Рекомендуется проверка совместимости железа</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="troubleshooting">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Решение проблем</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Частые проблемы при установке ПО и способы их решения
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {troubleshooting.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-red-600">{item.problem}</CardTitle>
                        <Badge variant={
                          item.complexity === 'Высокая' ? 'destructive' :
                          item.complexity === 'Средняя' ? 'default' : 'secondary'
                        }>
                          {item.complexity}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-1">Решение:</h4>
                        <p className="text-sm text-tech-gray">{item.solution}</p>
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
                      <h4 className="font-semibold text-yellow-800 mb-2">Советы для успешной установки</h4>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• Убедитесь в совместимости железа с выбранной ОС</li>
                        <li>• Сделайте резервную копию всех важных данных</li>
                        <li>• Подготовьте лицензионные ключи заранее</li>
                        <li>• Отключите антивирус на время установки</li>
                        <li>• Обеспечьте стабильное питание компьютера</li>
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
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Демонстрация установки</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Посмотрите, как происходит процесс установки операционной системы
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Процесс установки Windows 11</CardTitle>
                  <CardDescription>
                    Интерактивная демонстрация этапов установки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-tech-blue mb-2">
                        {Math.round(installationProgress)}%
                      </div>
                      <p className="text-tech-gray">Прогресс установки</p>
                    </div>
                    
                    <Progress value={installationProgress} className="h-4" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Текущий этап:</h4>
                        <p className="text-sm text-tech-gray">
                          {installationProgress < 15 ? 'Подготовка установочных файлов' :
                           installationProgress < 30 ? 'Копирование системных файлов' :
                           installationProgress < 50 ? 'Настройка системы' :
                           installationProgress < 70 ? 'Установка драйверов' :
                           installationProgress < 90 ? 'Настройка пользователя' :
                           installationProgress < 100 ? 'Финальная настройка' :
                           'Установка завершена'}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Оставшееся время:</h4>
                        <p className="text-sm text-tech-gray">
                          {installationProgress === 100 ? 'Завершено' : 
                           `Примерно ${Math.max(1, Math.round((100 - installationProgress) / 10))} минут`}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        onClick={startInstallationDemo}
                        disabled={installationProgress > 0 && installationProgress < 100}
                        className="bg-tech-blue hover:bg-blue-700"
                      >
                        {installationProgress === 0 ? 'Начать установку' :
                         installationProgress === 100 ? 'Запустить заново' :
                         'Установка в процессе...'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="HardDrive" size={20} className="text-blue-500" />
                      <span>Диск</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Используется:</span>
                        <span>45 GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Свободно:</span>
                        <span>455 GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Тип:</span>
                        <span>SSD NVMe</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Download" size={20} className="text-green-500" />
                      <span>Загрузки</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Windows 11:</span>
                        <span className="text-green-600">Готов</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Драйвера:</span>
                        <span className="text-green-600">Загружены</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Программы:</span>
                        <span className="text-yellow-600">В очереди</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Settings" size={20} className="text-purple-500" />
                      <span>Настройки</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Пользователь:</span>
                        <span>Создан</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Сеть:</span>
                        <span className="text-green-600">Настроена</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Обновления:</span>
                        <span className="text-yellow-600">Загружаются</span>
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

export default Installation;