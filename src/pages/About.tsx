import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  const team = [
    {
      name: 'Алексей Петров',
      position: 'Главный инженер',
      experience: '8 лет',
      specialization: 'Ремонт материнских плат, восстановление данных',
      certifications: ['Microsoft Certified', 'CompTIA A+', 'Intel Certified'],
      image: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg'
    },
    {
      name: 'Мария Сидорова',
      position: 'Системный администратор',
      experience: '6 лет',
      specialization: 'Настройка сетей, установка ПО, безопасность',
      certifications: ['Cisco CCNA', 'Microsoft MCSA', 'Linux Professional'],
      image: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Техник по ремонту',
      experience: '4 года',
      specialization: 'Модернизация ПК, замена комплектующих',
      certifications: ['Hardware Specialist', 'AMD Certified', 'NVIDIA Partner'],
      image: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg'
    }
  ];

  const achievements = [
    { number: '1000+', label: 'Довольных клиентов', icon: 'Users' },
    { number: '5', label: 'Лет на рынке', icon: 'Calendar' },
    { number: '24/7', label: 'Техподдержка', icon: 'Clock' },
    { number: '98%', label: 'Успешных ремонтов', icon: 'Award' }
  ];

  const values = [
    {
      title: 'Качество',
      description: 'Используем только оригинальные запчасти и проверенные методы ремонта',
      icon: 'Award'
    },
    {
      title: 'Скорость',
      description: 'Большинство проблем решаем в день обращения',
      icon: 'Zap'
    },
    {
      title: 'Честность',
      description: 'Прозрачные цены без скрытых доплат и переплат',
      icon: 'Shield'
    },
    {
      title: 'Надежность',
      description: 'Гарантия на все виды работ и долгосрочная поддержка',
      icon: 'CheckCircle'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Основание компании',
      description: 'Начали работу как небольшая мастерская по ремонту компьютеров'
    },
    {
      year: '2020',
      title: 'Расширение услуг',
      description: 'Добавили услуги по восстановлению данных и настройке сетей'
    },
    {
      year: '2021',
      title: 'Новый офис',
      description: 'Переехали в просторное помещение на ул. Советская'
    },
    {
      year: '2022',
      title: 'Сертификация',
      description: 'Получили официальные сертификаты от Microsoft и Intel'
    },
    {
      year: '2023',
      title: '1000-й клиент',
      description: 'Обслужили тысячного клиента и запустили программу лояльности'
    },
    {
      year: '2024',
      title: 'Новые технологии',
      description: 'Внедрили современное оборудование для восстановления данных'
    }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">О компании КомпМастер</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Мы - команда профессионалов, которая уже более 5 лет помогает жителям Твери решать проблемы с компьютерной техникой
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-tech-blue/10 rounded-full flex items-center justify-center">
                  <Icon name={achievement.icon as any} size={32} className="text-tech-blue" />
                </div>
                <div className="text-3xl font-bold text-tech-blue mb-2">{achievement.number}</div>
                <div className="text-tech-gray">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-tech-dark mb-6">Наша история</h2>
            <div className="space-y-4 text-tech-gray">
              <p>
                КомпМастер был основан в 2019 году группой энтузиастов, которые решили объединить свои знания 
                и опыт для помощи людям в решении проблем с компьютерной техникой.
              </p>
              <p>
                За годы работы мы выросли от небольшой мастерской до полноценного сервисного центра, 
                который предоставляет полный спектр услуг по ремонту и обслуживанию компьютеров.
              </p>
              <p>
                Сегодня мы гордимся тем, что помогли более чем 1000 клиентам, и продолжаем развиваться, 
                внедряя новые технологии и повышая качество наших услуг.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-tech-blue to-blue-700 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Наша миссия</h3>
            <p className="text-lg mb-6 opacity-90">
              Сделать компьютерные технологии доступными и понятными для каждого, 
              обеспечивая быстрый и качественный сервис.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Target" size={20} />
                <span>Индивидуальный подход к каждому клиенту</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Lightbulb" size={20} />
                <span>Постоянное развитие и обучение</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Heart" size={20} />
                <span>Забота о клиентах и их потребностях</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-tech-dark text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-tech-blue/10 rounded-full flex items-center justify-center">
                    <Icon name={value.icon as any} size={32} className="text-tech-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-tech-dark mb-3">{value.title}</h3>
                  <p className="text-tech-gray">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-tech-dark text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-tech-dark mb-1">{member.name}</h3>
                  <p className="text-tech-blue font-medium mb-2">{member.position}</p>
                  <Badge variant="outline" className="mb-3">
                    Опыт: {member.experience}
                  </Badge>
                  <p className="text-tech-gray text-sm mb-4">{member.specialization}</p>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-tech-dark">Сертификаты:</p>
                    {member.certifications.map((cert, certIndex) => (
                      <Badge key={certIndex} variant="secondary" className="text-xs mr-1">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-tech-dark text-center mb-12">История развития</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-tech-blue/20"></div>
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Badge className="mb-2 bg-tech-blue">{event.year}</Badge>
                        <h3 className="text-lg font-semibold text-tech-dark mb-2">{event.title}</h3>
                        <p className="text-tech-gray">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-tech-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-tech-dark text-center mb-12">Сертификаты и партнерства</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Microsoft', 'Intel', 'AMD', 'NVIDIA', 'Cisco', 'CompTIA', 'Linux', 'Apple'].map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-tech-gray">{cert}</span>
                </div>
                <p className="text-sm text-tech-gray">Сертифицированный партнер</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-tech-blue to-blue-700 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Готовы работать с профессионалами?</h3>
            <p className="text-lg mb-6 opacity-90">
              Доверьте свою технику опытным специалистам КомпМастер
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tech-blue">
                <Icon name="MapPin" size={20} className="mr-2" />
                Приехать в офис
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;