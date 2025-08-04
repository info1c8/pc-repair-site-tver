import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      title: 'Телефоны',
      icon: 'Phone',
      items: [
        { label: 'Основной', value: '+7 (4822) 123-456', action: 'tel:+74822123456' },
        { label: 'Мобильный', value: '+7 (999) 123-45-67', action: 'tel:+79991234567' },
        { label: 'WhatsApp', value: '+7 (999) 123-45-67', action: 'https://wa.me/79991234567' }
      ]
    },
    {
      title: 'Email',
      icon: 'Mail',
      items: [
        { label: 'Общие вопросы', value: 'info@kompmaster-tver.ru', action: 'mailto:info@kompmaster-tver.ru' },
        { label: 'Техподдержка', value: 'support@kompmaster-tver.ru', action: 'mailto:support@kompmaster-tver.ru' },
        { label: 'Заказы', value: 'orders@kompmaster-tver.ru', action: 'mailto:orders@kompmaster-tver.ru' }
      ]
    },
    {
      title: 'Адрес',
      icon: 'MapPin',
      items: [
        { label: 'Офис', value: 'г. Тверь, ул. Советская, 25', action: '#' },
        { label: 'Индекс', value: '170100', action: '#' },
        { label: 'Ориентир', value: 'Рядом с ТЦ "Олимп"', action: '#' }
      ]
    }
  ];

  const workingHours = [
    { day: 'Понедельник', hours: '9:00 - 18:00', isToday: false },
    { day: 'Вторник', hours: '9:00 - 18:00', isToday: false },
    { day: 'Среда', hours: '9:00 - 18:00', isToday: true },
    { day: 'Четверг', hours: '9:00 - 18:00', isToday: false },
    { day: 'Пятница', hours: '9:00 - 18:00', isToday: false },
    { day: 'Суббота', hours: '10:00 - 16:00', isToday: false },
    { day: 'Воскресенье', hours: 'Выходной', isToday: false }
  ];

  const socialLinks = [
    { name: 'ВКонтакте', icon: 'MessageCircle', url: '#', color: 'bg-blue-600' },
    { name: 'Telegram', icon: 'Send', url: '#', color: 'bg-blue-500' },
    { name: 'WhatsApp', icon: 'MessageCircle', url: '#', color: 'bg-green-500' },
    { name: 'Viber', icon: 'Phone', url: '#', color: 'bg-purple-500' }
  ];

  const faqItems = [
    {
      question: 'Как быстро вы можете приехать?',
      answer: 'В пределах Твери мы можем приехать в течение 2-4 часов после заявки. В срочных случаях - в течение часа.'
    },
    {
      question: 'Сколько стоит выезд мастера?',
      answer: 'Выезд мастера в пределах Твери бесплатный. Диагностика стоит 500₽, но засчитывается при заказе ремонта.'
    },
    {
      question: 'Какая гарантия на ремонт?',
      answer: 'Мы предоставляем гарантию 3 месяца на все виды работ. На установленные запчасти действует гарантия производителя.'
    },
    {
      question: 'Можно ли оплатить картой?',
      answer: 'Да, мы принимаем оплату наличными и банковскими картами. Также возможна безналичная оплата для юридических лиц.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Контакты</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Icon name="Phone" size={32} className="mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Срочный вызов</h3>
              <p className="mb-4 opacity-90">Приедем в течение часа</p>
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Вызвать мастера
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Icon name="MessageCircle" size={32} className="mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Онлайн чат</h3>
              <p className="mb-4 opacity-90">Ответим в течение 5 минут</p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Написать в чат
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Icon name="Video" size={32} className="mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Видеоконсультация</h3>
              <p className="mb-4 opacity-90">Диагностика по видеосвязи</p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Запланировать звонок
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-tech-dark">Отправить сообщение</CardTitle>
              <CardDescription>Заполните форму и мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-tech-dark mb-2">Имя *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-tech-dark mb-2">Телефон *</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tech-dark mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@mail.ru"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tech-dark mb-2">Тема обращения</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Кратко опишите проблему"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-tech-dark mb-2">Сообщение *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Подробно опишите вашу проблему или вопрос..."
                    rows={5}
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="urgent" className="rounded border-gray-300" />
                  <label htmlFor="urgent" className="text-sm text-tech-gray">
                    Срочное обращение (ответим в течение часа)
                  </label>
                </div>
                
                <Button type="submit" className="w-full bg-tech-blue hover:bg-blue-700">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name={section.icon as any} size={20} className="text-tech-blue" />
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center">
                        <span className="text-tech-gray">{item.label}:</span>
                        <a 
                          href={item.action}
                          className="text-tech-blue hover:underline font-medium"
                        >
                          {item.value}
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-tech-blue" />
                  <span>Режим работы</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center p-2 rounded ${
                        schedule.isToday ? 'bg-tech-blue/10 border border-tech-blue/20' : ''
                      }`}
                    >
                      <span className={`${schedule.isToday ? 'font-semibold text-tech-blue' : 'text-tech-gray'}`}>
                        {schedule.day}
                        {schedule.isToday && <Badge className="ml-2 bg-tech-blue text-xs">Сегодня</Badge>}
                      </span>
                      <span className={`${schedule.isToday ? 'font-semibold text-tech-blue' : 'text-tech-dark'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-tech-dark text-center mb-8">Мы в социальных сетях</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform`}
              >
                <Icon name={social.icon as any} size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-tech-dark text-center mb-8">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-tech-dark mb-3">{item.question}</h3>
                  <p className="text-tech-gray">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Как нас найти</CardTitle>
            <CardDescription className="text-center">
              г. Тверь, ул. Советская, 25 (рядом с ТЦ "Олимп")
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-tech-gray">
                <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                <p>Интерактивная карта</p>
                <p className="text-sm">г. Тверь, ул. Советская, 25</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button className="bg-tech-blue hover:bg-blue-700">
                <Icon name="Navigation" size={20} className="mr-2" />
                Построить маршрут
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="mt-12 bg-red-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Icon name="AlertTriangle" size={24} className="text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-800 mb-2">Экстренная помощь</h3>
                <p className="text-red-700 mb-3">
                  Если ваш компьютер полностью не работает и это критично для работы или учебы, 
                  звоните по номеру экстренной помощи:
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="tel:+79991234567" 
                    className="text-xl font-bold text-red-600 hover:underline"
                  >
                    +7 (999) 123-45-67
                  </a>
                  <Badge className="bg-red-600">24/7</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;