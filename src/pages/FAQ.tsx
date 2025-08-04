import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все вопросы', icon: 'HelpCircle', count: 24 },
    { id: 'repair', name: 'Ремонт', icon: 'Wrench', count: 8 },
    { id: 'pricing', name: 'Цены', icon: 'DollarSign', count: 6 },
    { id: 'warranty', name: 'Гарантия', icon: 'Shield', count: 4 },
    { id: 'service', name: 'Обслуживание', icon: 'Settings', count: 6 }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'repair',
      question: 'Сколько времени занимает диагностика компьютера?',
      answer: 'Стандартная диагностика занимает от 30 минут до 2 часов в зависимости от сложности проблемы. Экспресс-диагностика основных компонентов выполняется за 15-30 минут. После диагностики мы предоставляем подробный отчет о состоянии вашего компьютера.',
      popular: true,
      tags: ['диагностика', 'время', 'проверка']
    },
    {
      id: 2,
      category: 'pricing',
      question: 'Сколько стоит выезд мастера на дом?',
      answer: 'Выезд мастера в пределах Твери абсолютно бесплатный! Мы берем плату только за диагностику (500₽) и ремонтные работы. Стоимость диагностики засчитывается при заказе ремонта. За пределы города действует доплата 50₽ за каждый километр.',
      popular: true,
      tags: ['выезд', 'стоимость', 'бесплатно']
    },
    {
      id: 3,
      category: 'warranty',
      question: 'Какая гарантия предоставляется на ремонт?',
      answer: 'Мы предоставляем гарантию 3 месяца на все виды ремонтных работ. На установленные запчасти действует гарантия производителя (от 6 месяцев до 3 лет). Если в течение гарантийного периода возникнет проблема, связанная с нашей работой, мы устраним ее бесплатно.',
      popular: true,
      tags: ['гарантия', 'ремонт', 'запчасти']
    },
    {
      id: 4,
      category: 'service',
      question: 'Работаете ли вы в выходные дни?',
      answer: 'Да, мы работаем в выходные дни с 10:00 до 16:00. За работу в выходные дни действует доплата 30% к стоимости услуг. Также доступна экстренная помощь 24/7 по номеру +7 (999) 123-45-67 с доплатой 50%.',
      popular: false,
      tags: ['выходные', 'график', 'экстренная помощь']
    },
    {
      id: 5,
      category: 'repair',
      question: 'Можете ли вы восстановить данные с поврежденного жесткого диска?',
      answer: 'Да, мы специализируемся на восстановлении данных с различных носителей: HDD, SSD, флешек, карт памяти. Успешность восстановления зависит от степени повреждения. В 85% случаев удается восстановить большую часть данных. Стоимость от 2000₽, точная цена определяется после диагностики.',
      popular: true,
      tags: ['восстановление данных', 'жесткий диск', 'файлы']
    },
    {
      id: 6,
      category: 'pricing',
      question: 'Можно ли оплатить услуги банковской картой?',
      answer: 'Конечно! Мы принимаем оплату наличными, банковскими картами (Visa, MasterCard, МИР), а также безналичную оплату для юридических лиц. Оплата производится после выполнения работ и вашего одобрения результата.',
      popular: false,
      tags: ['оплата', 'карта', 'безналичный расчет']
    },
    {
      id: 7,
      category: 'repair',
      question: 'Что делать, если компьютер не включается?',
      answer: 'Не паникуйте! Сначала проверьте подключение к сети, попробуйте другую розетку. Если не помогает - вызывайте нашего мастера. Причины могут быть разные: неисправность блока питания, материнской платы, кнопки включения. Диагностика покажет точную причину.',
      popular: true,
      tags: ['не включается', 'диагностика', 'блок питания']
    },
    {
      id: 8,
      category: 'service',
      question: 'Предоставляете ли вы услуги для организаций?',
      answer: 'Да, мы работаем как с частными лицами, так и с организациями. Для юридических лиц предоставляем все необходимые документы, работаем по договору, предоставляем отсрочку платежа. Возможно заключение договора на техническое обслуживание компьютерного парка.',
      popular: false,
      tags: ['организации', 'юридические лица', 'договор']
    },
    {
      id: 9,
      category: 'repair',
      question: 'Сколько стоит замена экрана ноутбука?',
      answer: 'Стоимость замены экрана зависит от модели ноутбука и типа матрицы. В среднем: 15.6" HD - от 3500₽, Full HD - от 4500₽, 4K - от 8000₽. Цена включает стоимость матрицы и работу по замене. Точную стоимость назовем после определения модели вашего ноутбука.',
      popular: true,
      tags: ['ноутбук', 'экран', 'матрица', 'замена']
    },
    {
      id: 10,
      category: 'warranty',
      question: 'Что не покрывается гарантией?',
      answer: 'Гарантия не покрывает: механические повреждения, попадание жидкости, скачки напряжения, вирусные атаки, неправильную эксплуатацию пользователем. Также гарантия не распространяется на расходные материалы (термопаста, батарейки BIOS) и программное обеспечение.',
      popular: false,
      tags: ['гарантия', 'исключения', 'повреждения']
    },
    {
      id: 11,
      category: 'service',
      question: 'Можете ли вы помочь с выбором комплектующих?',
      answer: 'Абсолютно! Наши специалисты помогут подобрать комплектующие под ваши задачи и бюджет. Мы учитываем совместимость компонентов, ваши потребности (игры, работа, учеба) и предлагаем оптимальные варианты. Консультация по подбору - бесплатно.',
      popular: true,
      tags: ['комплектующие', 'подбор', 'консультация']
    },
    {
      id: 12,
      category: 'pricing',
      question: 'Есть ли скидки для постоянных клиентов?',
      answer: 'Да! Для постоянных клиентов действует система скидок: после 3-го обращения - 5%, после 5-го - 10%, после 10-го - 15%. Также действуют сезонные акции и специальные предложения. Следите за новостями на нашем сайте и в социальных сетях.',
      popular: false,
      tags: ['скидки', 'постоянные клиенты', 'акции']
    }
  ];

  const filteredFAQ = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const popularQuestions = faqItems.filter(item => item.popular);

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Часто задаваемые вопросы</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Найдите ответы на самые популярные вопросы о наших услугах
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tech-gray" />
              <Input
                placeholder="Поиск по вопросам и ответам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-lg py-3"
              />
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 ${
                selectedCategory === category.id 
                  ? 'bg-tech-blue text-white' 
                  : 'text-tech-gray hover:text-tech-blue'
              }`}
            >
              <Icon name={category.icon as any} size={16} />
              <span>{category.name}</span>
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main FAQ */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="HelpCircle" size={24} className="text-tech-blue" />
                  <span>
                    {selectedCategory === 'all' ? 'Все вопросы' : categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                </CardTitle>
                <CardDescription>
                  Найдено {filteredFAQ.length} вопросов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQ.map((item) => (
                    <AccordionItem key={item.id} value={`item-${item.id}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center space-x-2">
                          <span>{item.question}</span>
                          {item.popular && (
                            <Badge className="bg-orange-100 text-orange-800 text-xs">
                              Популярный
                            </Badge>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <p className="text-tech-gray leading-relaxed">{item.answer}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4 pt-2 border-t">
                            <Button variant="ghost" size="sm" className="text-tech-gray hover:text-tech-blue">
                              <Icon name="ThumbsUp" size={16} className="mr-2" />
                              Полезно
                            </Button>
                            <Button variant="ghost" size="sm" className="text-tech-gray hover:text-tech-blue">
                              <Icon name="ThumbsDown" size={16} className="mr-2" />
                              Не помогло
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {filteredFAQ.length === 0 && (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="mx-auto text-tech-gray mb-4" />
                    <h3 className="text-lg font-semibold text-tech-dark mb-2">Ничего не найдено</h3>
                    <p className="text-tech-gray mb-4">
                      Попробуйте изменить поисковый запрос или выберите другую категорию
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                    >
                      Сбросить фильтры
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} className="text-orange-500" />
                  <span>Популярные вопросы</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {popularQuestions.slice(0, 5).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedCategory(item.category);
                        setSearchQuery('');
                      }}
                      className="w-full text-left p-3 rounded-lg hover:bg-tech-blue/5 transition-colors"
                    >
                      <p className="text-sm font-medium text-tech-dark line-clamp-2">
                        {item.question}
                      </p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Help */}
            <Card className="bg-gradient-to-br from-tech-blue to-blue-700 text-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <Icon name="Headphones" size={32} className="mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Нужна помощь?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Не нашли ответ на свой вопрос? Свяжитесь с нами!
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-white text-tech-blue hover:bg-gray-100">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Позвонить
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-tech-blue">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Написать
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <Icon name="AlertTriangle" size={32} className="mx-auto mb-3 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Экстренная помощь</h3>
                  <p className="text-sm text-red-700 mb-4">
                    Критическая проблема? Звоните круглосуточно!
                  </p>
                  <a 
                    href="tel:+79991234567"
                    className="block w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Icon name="Phone" size={16} className="inline mr-2" />
                    +7 (999) 123-45-67
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Useful Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Link" size={20} className="text-tech-blue" />
                  <span>Полезные ссылки</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="/services" className="block p-2 rounded hover:bg-tech-blue/5 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Icon name="Wrench" size={16} className="text-tech-blue" />
                      <span className="text-sm">Наши услуги</span>
                    </div>
                  </a>
                  <a href="/prices" className="block p-2 rounded hover:bg-tech-blue/5 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Icon name="DollarSign" size={16} className="text-tech-blue" />
                      <span className="text-sm">Прайс-лист</span>
                    </div>
                  </a>
                  <a href="/contacts" className="block p-2 rounded hover:bg-tech-blue/5 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} className="text-tech-blue" />
                      <span className="text-sm">Контакты</span>
                    </div>
                  </a>
                  <a href="/reviews" className="block p-2 rounded hover:bg-tech-blue/5 transition-colors">
                    <div className="flex items-center space-x-2">
                      <Icon name="Star" size={16} className="text-tech-blue" />
                      <span className="text-sm">Отзывы</span>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Still Have Questions */}
        <Card className="mt-12 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
            <p className="text-lg mb-6 opacity-90">
              Наши специалисты готовы ответить на любые вопросы и помочь решить вашу проблему
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Icon name="Phone" size={20} className="mr-2" />
                Задать вопрос по телефону
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать на email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;