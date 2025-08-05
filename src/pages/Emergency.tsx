import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Emergency = () => {
  const [selectedEmergency, setSelectedEmergency] = useState('');

  const emergencyTypes = [
    {
      id: 'no_boot',
      name: 'Компьютер не включается',
      icon: 'Power',
      severity: 'Критическая',
      response: '1 час',
      price: '+50%',
      description: 'Полный отказ системы, нет признаков жизни',
      actions: ['Проверка питания', 'Диагностика материнской платы', 'Тестирование БП']
    },
    {
      id: 'data_loss',
      name: 'Потеря важных данных',
      icon: 'AlertTriangle',
      severity: 'Критическая',
      response: '30 мин',
      price: '+100%',
      description: 'Удаление или недоступность критически важных файлов',
      actions: ['Остановка записи на диск', 'Создание образа', 'Восстановление данных']
    },
    {
      id: 'virus_attack',
      name: 'Вирусная атака',
      icon: 'Shield',
      severity: 'Высокая',
      response: '2 часа',
      price: '+75%',
      description: 'Заражение системы, блокировка файлов, кража данных',
      actions: ['Изоляция системы', 'Анализ угроз', 'Очистка и восстановление']
    },
    {
      id: 'hardware_failure',
      name: 'Отказ оборудования',
      icon: 'AlertCircle',
      severity: 'Высокая',
      response: '1.5 часа',
      price: '+50%',
      description: 'Выход из строя критически важных компонентов',
      actions: ['Диагностика неисправности', 'Поиск замены', 'Срочный ремонт']
    },
    {
      id: 'network_down',
      name: 'Отказ сети',
      icon: 'WifiOff',
      severity: 'Высокая',
      response: '1 час',
      price: '+50%',
      description: 'Полная потеря сетевого соединения в офисе',
      actions: ['Диагностика сети', 'Проверка оборудования', 'Восстановление связи']
    },
    {
      id: 'server_crash',
      name: 'Сбой сервера',
      icon: 'Server',
      severity: 'Критическая',
      response: '30 мин',
      price: '+100%',
      description: 'Отказ серверного оборудования, недоступность сервисов',
      actions: ['Анализ логов', 'Восстановление сервисов', 'Проверка данных']
    }
  ];

  const emergencyContacts = [
    {
      type: 'Телефон экстренной помощи',
      contact: '+7 (999) 123-45-67',
      availability: '24/7',
      description: 'Звоните в любое время при критических проблемах'
    },
    {
      type: 'Telegram',
      contact: '@kompmaster_emergency',
      availability: '24/7',
      description: 'Быстрая связь через мессенджер'
    },
    {
      type: 'WhatsApp',
      contact: '+7 (999) 123-45-67',
      availability: '24/7',
      description: 'Отправьте фото проблемы для быстрой диагностики'
    },
    {
      type: 'Email',
      contact: 'emergency@kompmaster-tver.ru',
      availability: '24/7',
      description: 'Подробное описание проблемы с приложением файлов'
    }
  ];

  const emergencySteps = [
    {
      step: 1,
      title: 'Немедленный отклик',
      description: 'Принимаем заявку и оцениваем критичность',
      time: '5 минут'
    },
    {
      step: 2,
      title: 'Выезд специалиста',
      description: 'Мастер выезжает к вам в кратчайшие сроки',
      time: '30-60 минут'
    },
    {
      step: 3,
      title: 'Экспресс-диагностика',
      description: 'Быстрое выявление причины проблемы',
      time: '15-30 минут'
    },
    {
      step: 4,
      title: 'Устранение проблемы',
      description: 'Применение экстренных мер для восстановления работы',
      time: '30 минут - 3 часа'
    },
    {
      step: 5,
      title: 'Тестирование',
      description: 'Проверка стабильности работы системы',
      time: '15-30 минут'
    }
  ];

  const preventiveMeasures = [
    {
      measure: 'Регулярное резервное копирование',
      description: 'Автоматическое создание копий важных данных',
      frequency: 'Ежедневно',
      importance: 'Критично'
    },
    {
      measure: 'Мониторинг состояния системы',
      description: 'Отслеживание показателей здоровья компонентов',
      frequency: 'Постоянно',
      importance: 'Высокая'
    },
    {
      measure: 'Обновление системы безопасности',
      description: 'Своевременная установка патчей безопасности',
      frequency: 'Еженедельно',
      importance: 'Высокая'
    },
    {
      measure: 'Профилактическое обслуживание',
      description: 'Регулярная чистка и проверка оборудования',
      frequency: 'Ежемесячно',
      importance: 'Средняя'
    }
  ];

  const emergencyKit = [
    {
      item: 'Загрузочная флешка',
      purpose: 'Восстановление системы при сбоях загрузки',
      status: 'Обязательно'
    },
    {
      item: 'Антивирусный диск',
      purpose: 'Очистка от вирусов без загрузки Windows',
      status: 'Рекомендуется'
    },
    {
      item: 'Диск с драйверами',
      purpose: 'Быстрая установка драйверов после переустановки',
      status: 'Полезно'
    },
    {
      item: 'Резервный HDD/SSD',
      purpose: 'Быстрая замена при отказе основного диска',
      status: 'Для критичных систем'
    },
    {
      item: 'Запасной блок питания',
      purpose: 'Замена при выходе из строя БП',
      status: 'Для серверов'
    }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Экстренная помощь 24/7</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Круглосуточная техническая поддержка при критических проблемах с компьютерами
            </p>
            <div className="mt-6">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-xl px-8 py-4">
                <Icon name="Phone" size={24} className="mr-3" />
                +7 (999) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="types">Типы проблем</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
            <TabsTrigger value="contacts">Контакты</TabsTrigger>
            <TabsTrigger value="prevention">Профилактика</TabsTrigger>
            <TabsTrigger value="kit">Аварийный набор</TabsTrigger>
          </TabsList>

          <TabsContent value="types">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Экстренные ситуации</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Мы готовы помочь при любых критических проблемах с компьютерной техникой
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergencyTypes.map((emergency) => (
                  <Card 
                    key={emergency.id} 
                    className={`hover:shadow-lg transition-all cursor-pointer ${
                      selectedEmergency === emergency.id ? 'ring-2 ring-red-500' : ''
                    }`}
                    onClick={() => setSelectedEmergency(emergency.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <Icon name={emergency.icon as any} size={24} className="text-red-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{emergency.name}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge variant="destructive">{emergency.severity}</Badge>
                            <Badge variant="outline">{emergency.response}</Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription>{emergency.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Экстренные действия:</h4>
                          <ul className="space-y-1">
                            {emergency.actions.map((action, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="ArrowRight" size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-tech-gray">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="text-sm text-tech-gray">Доплата:</span>
                          <span className="font-bold text-red-600">{emergency.price}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedEmergency && (
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-red-800 mb-4">
                        Выбрано: {emergencyTypes.find(e => e.id === selectedEmergency)?.name}
                      </h3>
                      <p className="text-red-700 mb-6">
                        Эта проблема требует немедленного вмешательства специалистов!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                          <Icon name="Phone" size={20} className="mr-2" />
                          Вызвать мастера СРОЧНО
                        </Button>
                        <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                          <Icon name="MessageCircle" size={20} className="mr-2" />
                          Написать в Telegram
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="process">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Процесс экстренной помощи</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Четкий алгоритм действий для быстрого решения критических проблем
                </p>
              </div>

              <div className="space-y-6">
                {emergencySteps.map((step, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-tech-dark">{step.title}</h3>
                            <Badge variant="outline">{step.time}</Badge>
                          </div>
                          <p className="text-tech-gray">{step.description}</p>
                        </div>
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
                      <h4 className="font-semibold text-yellow-800 mb-2">Гарантии времени отклика</h4>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• Критические проблемы - в течение 30 минут</li>
                        <li>• Высокоприоритетные - в течение 1 часа</li>
                        <li>• Средние проблемы - в течение 2 часов</li>
                        <li>• Если не успеваем - скидка 50% на услуги</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Экстренная ситуация прямо сейчас?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Не теряйте время - звоните немедленно!
                  </p>
                  <div className="text-4xl font-bold mb-4">+7 (999) 123-45-67</div>
                  <p className="opacity-90">Работаем круглосуточно без выходных</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contacts">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Экстренные контакты</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Выберите удобный способ связи для получения немедленной помощи
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyContacts.map((contact, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{contact.type}</CardTitle>
                      <Badge className="bg-green-600">{contact.availability}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="text-xl font-bold text-tech-blue">{contact.contact}</div>
                        </div>
                        <p className="text-tech-gray text-sm">{contact.description}</p>
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                          Связаться сейчас
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Info" size={24} className="text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Как правильно описать проблему</h4>
                      <ul className="space-y-1 text-orange-700 text-sm">
                        <li>• Опишите, что происходило перед сбоем</li>
                        <li>• Укажите точные сообщения об ошибках</li>
                        <li>• Сообщите модель компьютера/ноутбука</li>
                        <li>• Опишите, какие данные критически важны</li>
                        <li>• Укажите ваше местоположение для выезда</li>
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
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Профилактика проблем</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Предотвратите экстренные ситуации с помощью профилактических мер
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {preventiveMeasures.map((measure, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{measure.measure}</CardTitle>
                        <Badge variant={
                          measure.importance === 'Критично' ? 'destructive' :
                          measure.importance === 'Высокая' ? 'default' : 'secondary'
                        }>
                          {measure.importance}
                        </Badge>
                      </div>
                      <div className="text-sm text-tech-gray">Частота: {measure.frequency}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-tech-gray">{measure.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Shield" size={24} className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Договор на профилактическое обслуживание</h4>
                      <p className="text-green-700 text-sm mb-3">
                        Заключите договор на регулярное обслуживание и получите:
                      </p>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• Скидку 50% на экстренные вызовы</li>
                        <li>• Приоритетное обслуживание</li>
                        <li>• Бесплатные консультации</li>
                        <li>• Мониторинг состояния системы</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="kit">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Аварийный набор</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Рекомендуемые инструменты для самостоятельного решения простых проблем
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergencyKit.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.item}</CardTitle>
                      <Badge variant={
                        item.status === 'Обязательно' ? 'destructive' :
                        item.status === 'Рекомендуется' ? 'default' : 'secondary'
                      }>
                        {item.status}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-tech-gray">{item.purpose}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Package" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Готовый аварийный набор</h4>
                      <p className="text-blue-700 text-sm mb-3">
                        Мы можем подготовить для вас готовый набор инструментов для экстренных ситуаций:
                      </p>
                      <ul className="space-y-1 text-blue-700 text-sm mb-4">
                        <li>• Загрузочная флешка с утилитами восстановления</li>
                        <li>• Антивирусный диск для автономной очистки</li>
                        <li>• Диск с драйверами для вашего оборудования</li>
                        <li>• Инструкции по самостоятельному решению проблем</li>
                      </ul>
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600 mb-2">2500₽</div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          Заказать набор
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Emergency CTA */}
        <Card className="mt-12 bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardContent className="p-8 text-center">
            <Icon name="AlertTriangle" size={48} className="mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">ЭКСТРЕННАЯ СИТУАЦИЯ?</h3>
            <p className="text-xl mb-6 opacity-90">
              Каждая минута на счету - звоните прямо сейчас!
            </p>
            <div className="space-y-4">
              <div className="text-4xl font-bold">+7 (999) 123-45-67</div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram: @kompmaster_emergency
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Emergency;