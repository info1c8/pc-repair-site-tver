import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Diagnostics = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [diagnosticResult, setDiagnosticResult] = useState<any>(null);

  const diagnosticServices = [
    {
      title: 'Экспресс-диагностика',
      duration: '15-30 мин',
      price: '300₽',
      description: 'Быстрая проверка основных компонентов системы',
      includes: ['Проверка загрузки системы', 'Тест оперативной памяти', 'Проверка жесткого диска', 'Анализ температур']
    },
    {
      title: 'Полная диагностика',
      duration: '1-2 часа',
      price: '500₽',
      description: 'Комплексная проверка всех компонентов компьютера',
      includes: ['Все из экспресс-диагностики', 'Тест процессора и видеокарты', 'Проверка блока питания', 'Анализ системы охлаждения', 'Проверка портов и разъемов']
    },
    {
      title: 'Диагностика ноутбука',
      duration: '30-60 мин',
      price: '400₽',
      description: 'Специализированная диагностика портативных устройств',
      includes: ['Проверка батареи', 'Тест клавиатуры и тачпада', 'Проверка экрана', 'Анализ системы охлаждения', 'Тест портов и Wi-Fi']
    }
  ];

  const commonSymptoms = [
    { id: 'slow', name: 'Медленная работа', category: 'performance' },
    { id: 'freeze', name: 'Зависания', category: 'stability' },
    { id: 'noise', name: 'Шум и треск', category: 'hardware' },
    { id: 'overheat', name: 'Перегрев', category: 'cooling' },
    { id: 'no_boot', name: 'Не включается', category: 'power' },
    { id: 'blue_screen', name: 'Синий экран', category: 'system' },
    { id: 'no_display', name: 'Нет изображения', category: 'display' },
    { id: 'strange_sounds', name: 'Странные звуки', category: 'hardware' },
    { id: 'internet_issues', name: 'Проблемы с интернетом', category: 'network' },
    { id: 'virus_suspected', name: 'Подозрение на вирусы', category: 'security' }
  ];

  const diagnosticSteps = [
    {
      step: 1,
      title: 'Внешний осмотр',
      description: 'Проверка физического состояния устройства',
      duration: '5 мин'
    },
    {
      step: 2,
      title: 'Тестирование загрузки',
      description: 'Анализ процесса запуска системы',
      duration: '10 мин'
    },
    {
      step: 3,
      title: 'Проверка компонентов',
      description: 'Тестирование отдельных узлов компьютера',
      duration: '20-40 мин'
    },
    {
      step: 4,
      title: 'Анализ результатов',
      description: 'Составление отчета и рекомендаций',
      duration: '10 мин'
    }
  ];

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const runDiagnostic = () => {
    // Имитация диагностики на основе выбранных симптомов
    const results = {
      overallHealth: Math.floor(Math.random() * 40) + 60,
      issues: selectedSymptoms.length,
      recommendations: [
        'Очистка от пыли и замена термопасты',
        'Проверка жесткого диска на ошибки',
        'Обновление драйверов'
      ]
    };
    setDiagnosticResult(results);
  };

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Диагностика компьютеров</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Профессиональная диагностика для выявления проблем и оптимизации работы вашего компьютера
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="online">Онлайн тест</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
            <TabsTrigger value="order">Заказать</TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {diagnosticServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge className="bg-tech-blue">{service.price}</Badge>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="flex items-center space-x-2 text-sm text-tech-gray">
                      <Icon name="Clock" size={16} />
                      <span>{service.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Что включено:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-tech-gray">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-tech-blue hover:bg-blue-700">
                      Заказать диагностику
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="online">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Предварительная диагностика</CardTitle>
                  <CardDescription>
                    Выберите симптомы, которые вы наблюдаете у вашего компьютера
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Выберите проблемы:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {commonSymptoms.map((symptom) => (
                        <button
                          key={symptom.id}
                          onClick={() => toggleSymptom(symptom.id)}
                          className={`p-3 text-left rounded-lg border transition-colors ${
                            selectedSymptoms.includes(symptom.id)
                              ? 'bg-tech-blue text-white border-tech-blue'
                              : 'bg-white hover:bg-gray-50 border-gray-200'
                          }`}
                        >
                          <div className="text-sm font-medium">{symptom.name}</div>
                        </button>
                      ))}
                    </div>
                    <Button 
                      onClick={runDiagnostic}
                      disabled={selectedSymptoms.length === 0}
                      className="w-full bg-tech-blue hover:bg-blue-700"
                    >
                      Запустить диагностику
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Результат диагностики</CardTitle>
                </CardHeader>
                <CardContent>
                  {diagnosticResult ? (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className={`text-4xl font-bold mb-2 ${
                          diagnosticResult.overallHealth > 80 ? 'text-green-500' :
                          diagnosticResult.overallHealth > 60 ? 'text-yellow-500' : 'text-red-500'
                        }`}>
                          {diagnosticResult.overallHealth}%
                        </div>
                        <p className="text-tech-gray">Общее состояние системы</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Обнаружено проблем:</span>
                          <span className="font-semibold">{diagnosticResult.issues}</span>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Рекомендации:</h4>
                          <ul className="space-y-1">
                            {diagnosticResult.recommendations.map((rec, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="ArrowRight" size={16} className="text-tech-blue mt-0.5" />
                                <span className="text-sm">{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Записаться на диагностику
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Icon name="Monitor" size={48} className="mx-auto text-tech-gray mb-4" />
                      <p className="text-tech-gray">
                        Выберите симптомы и запустите диагностику для получения предварительного анализа
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="process">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Как проходит диагностика</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Наш процесс диагностики включает несколько этапов для полного анализа состояния вашего компьютера
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {diagnosticSteps.map((step, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-tech-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-tech-dark mb-2">{step.title}</h3>
                      <p className="text-tech-gray text-sm mb-3">{step.description}</p>
                      <Badge variant="outline">{step.duration}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Info" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Что вы получите после диагностики</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Подробный отчет о состоянии всех компонентов</li>
                        <li>• Рекомендации по устранению найденных проблем</li>
                        <li>• Смету на необходимые работы и запчасти</li>
                        <li>• Советы по профилактике и уходу</li>
                        <li>• Гарантию на выполненную диагностику</li>
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
                  <CardTitle>Заказать диагностику</CardTitle>
                  <CardDescription>
                    Заполните форму и мы свяжемся с вами для уточнения деталей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-tech-dark mb-2">Имя *</label>
                        <Input placeholder="Ваше имя" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-tech-dark mb-2">Телефон *</label>
                        <Input type="tel" placeholder="+7 (___) ___-__-__" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Тип устройства</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                        <option>Настольный компьютер</option>
                        <option>Ноутбук</option>
                        <option>Моноблок</option>
                        <option>Сервер</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Описание проблемы</label>
                      <Textarea 
                        placeholder="Опишите симптомы и проблемы, которые вы наблюдаете..."
                        rows={4}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Срочная диагностика (в течение 2 часов, +50%)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Выезд мастера на дом (бесплатно в пределах Твери)</span>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-tech-blue hover:bg-blue-700">
                      <Icon name="Send" size={20} className="mr-2" />
                      Заказать диагностику
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
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
                        <span className="font-medium">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Суббота:</span>
                        <span className="font-medium">10:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Воскресенье:</span>
                        <span className="font-medium">Выходной</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Экстренная помощь:</span>
                        <span className="font-medium text-red-600">24/7</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="MapPin" size={20} className="text-tech-blue" />
                      <span>Адрес</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-tech-gray mb-3">г. Тверь, ул. Советская, 25</p>
                    <Button variant="outline" className="w-full">
                      <Icon name="Navigation" size={16} className="mr-2" />
                      Построить маршрут
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <Icon name="Shield" size={32} className="mx-auto mb-3 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Гарантия качества</h3>
                    <p className="text-sm text-green-700">
                      Если диагностика не выявит проблем, а они проявятся в течение недели - 
                      повторная диагностика бесплатно!
                    </p>
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

export default Diagnostics;