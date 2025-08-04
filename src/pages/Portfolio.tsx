import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'Все проекты', count: 24 },
    { id: 'repair', name: 'Ремонт', count: 12 },
    { id: 'upgrade', name: 'Модернизация', count: 8 },
    { id: 'recovery', name: 'Восстановление данных', count: 4 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Восстановление игрового ПК после залития',
      category: 'repair',
      client: 'Частный клиент',
      duration: '3 дня',
      difficulty: 'Высокая',
      description: 'Компьютер был залит водой, не включался. Требовалось восстановление материнской платы и других компонентов.',
      problem: 'Клиент случайно пролил воду на системный блок. Компьютер перестал включаться, появился запах гари.',
      solution: 'Полная разборка, очистка от окислов, замена поврежденных компонентов, тестирование.',
      result: 'ПК полностью восстановлен, все данные сохранены, производительность не пострадала.',
      technologies: ['Материнская плата', 'Блок питания', 'Оперативная память'],
      beforeImage: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      afterImage: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      testimonial: 'Думал, что компьютер безнадежно испорчен. Мастера КомпМастер смогли его восстановить!',
      cost: '15000₽',
      featured: true
    },
    {
      id: 2,
      title: 'Модернизация офисных компьютеров',
      category: 'upgrade',
      client: 'ООО "ТехноСфера"',
      duration: '2 недели',
      difficulty: 'Средняя',
      description: 'Модернизация 15 офисных компьютеров для повышения производительности работы с графическими программами.',
      problem: 'Старые компьютеры не справлялись с современными задачами, долго загружались программы.',
      solution: 'Установка SSD дисков, увеличение ОЗУ до 16GB, замена видеокарт на более производительные.',
      result: 'Скорость работы увеличилась в 3 раза, сотрудники стали работать более эффективно.',
      technologies: ['SSD Samsung', 'DDR4 память', 'Видеокарты GTX 1650'],
      beforeImage: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      afterImage: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      testimonial: 'Отличная работа! Компьютеры стали работать как новые. Рекомендуем КомпМастер!',
      cost: '180000₽',
      featured: true
    },
    {
      id: 3,
      title: 'Восстановление данных с поврежденного SSD',
      category: 'recovery',
      client: 'Фотостудия "Кадр"',
      duration: '5 дней',
      difficulty: 'Очень высокая',
      description: 'Восстановление 2TB фотографий с поврежденного SSD диска после скачка напряжения.',
      problem: 'SSD диск перестал определяться после скачка напряжения, на нем хранились уникальные фотографии.',
      solution: 'Использование профессионального оборудования для восстановления данных с поврежденных чипов памяти.',
      result: 'Восстановлено 95% данных, все важные фотографии сохранены.',
      technologies: ['PC-3000 SSD', 'Программное восстановление', 'Чистая комната'],
      beforeImage: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      afterImage: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      testimonial: 'Спасли нашу студию! Думали, что потеряли все работы клиентов.',
      cost: '25000₽',
      featured: true
    },
    {
      id: 4,
      title: 'Ремонт ноутбука с перегревом',
      category: 'repair',
      client: 'Студент МГУ',
      duration: '1 день',
      difficulty: 'Низкая',
      description: 'Ноутбук сильно грелся и выключался во время работы. Требовалась чистка и замена термопасты.',
      problem: 'Ноутбук начал сильно шуметь, греться и самопроизвольно выключаться.',
      solution: 'Полная разборка, чистка от пыли, замена термопасты на процессоре и видеокарте.',
      result: 'Температура снизилась на 20°C, ноутбук работает тихо и стабильно.',
      technologies: ['Термопаста Arctic MX-4', 'Профессиональная чистка'],
      beforeImage: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      afterImage: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      testimonial: 'Быстро и качественно! Ноутбук как новый.',
      cost: '2500₽',
      featured: false
    },
    {
      id: 5,
      title: 'Сборка игрового ПК высокого класса',
      category: 'upgrade',
      client: 'Киберспортсмен',
      duration: '2 дня',
      difficulty: 'Средняя',
      description: 'Сборка мощного игрового компьютера для профессионального киберспорта с жидкостным охлаждением.',
      problem: 'Нужен был мощный ПК для игр в 4K разрешении с высоким FPS.',
      solution: 'Подбор топовых комплектующих, сборка с жидкостным охлаждением, тонкая настройка.',
      result: 'ПК выдает стабильные 144+ FPS в современных играх на максимальных настройках.',
      technologies: ['RTX 4080', 'Intel i7-13700K', 'Жидкостное охлаждение'],
      beforeImage: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      afterImage: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      testimonial: 'Идеальная сборка! Теперь могу играть на профессиональном уровне.',
      cost: '250000₽',
      featured: false
    },
    {
      id: 6,
      title: 'Восстановление сервера после сбоя RAID',
      category: 'recovery',
      client: 'IT-компания "ДатаПро"',
      duration: '1 неделя',
      difficulty: 'Очень высокая',
      description: 'Восстановление данных с сервера после одновременного выхода из строя двух дисков в RAID-5.',
      problem: 'Одновременно вышли из строя 2 диска в RAID-5 массиве, сервер не загружался.',
      solution: 'Восстановление данных с поврежденных дисков, пересборка массива, восстановление файловой системы.',
      result: 'Восстановлено 98% данных, сервер полностью работоспособен.',
      technologies: ['RAID восстановление', 'Серверное оборудование', 'Linux'],
      beforeImage: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      afterImage: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      testimonial: 'Профессионалы высочайшего уровня! Спасли наш бизнес.',
      cost: '45000₽',
      featured: true
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { label: 'Выполненных проектов', value: '500+', icon: 'CheckCircle' },
    { label: 'Довольных клиентов', value: '450+', icon: 'Users' },
    { label: 'Лет опыта', value: '5+', icon: 'Calendar' },
    { label: 'Успешных восстановлений', value: '98%', icon: 'Award' }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Наши работы</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Примеры успешно выполненных проектов и довольные клиенты
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-tech-blue/10 rounded-full flex items-center justify-center">
                  <Icon name={stat.icon as any} size={32} className="text-tech-blue" />
                </div>
                <div className="text-3xl font-bold text-tech-blue mb-2">{stat.value}</div>
                <div className="text-tech-gray">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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
              <span>{category.name}</span>
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-tech-dark mb-6">Избранные проекты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.filter(p => p.featured).slice(0, 3).map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img 
                      src={project.beforeImage} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-tech-blue">
                        {categories.find(c => c.id === project.category)?.name}
                      </Badge>
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        Избранное
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-tech-dark mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-tech-gray text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-tech-gray mb-4">
                      <span>Клиент: {project.client}</span>
                      <span>{project.duration}</span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          Подробнее
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                          <DialogDescription>
                            {project.client} • {project.duration} • Сложность: {project.difficulty}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <h4 className="font-semibold mb-2">До ремонта</h4>
                            <img src={project.beforeImage} alt="До" className="w-full rounded-lg" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">После ремонта</h4>
                            <img src={project.afterImage} alt="После" className="w-full rounded-lg" />
                          </div>
                        </div>
                        
                        <div className="space-y-4 mt-6">
                          <div>
                            <h4 className="font-semibold text-tech-dark mb-2">Проблема</h4>
                            <p className="text-tech-gray">{project.problem}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-tech-dark mb-2">Решение</h4>
                            <p className="text-tech-gray">{project.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-tech-dark mb-2">Результат</h4>
                            <p className="text-tech-gray">{project.result}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-tech-dark mb-2">Использованные технологии</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="outline">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-tech-blue/5 p-4 rounded-lg">
                            <h4 className="font-semibold text-tech-dark mb-2">Отзыв клиента</h4>
                            <p className="text-tech-gray italic">"{project.testimonial}"</p>
                          </div>
                          
                          <div className="flex justify-between items-center pt-4 border-t">
                            <span className="text-lg font-bold text-tech-blue">Стоимость: {project.cost}</span>
                            <Button className="bg-tech-blue hover:bg-blue-700">
                              Заказать похожую услугу
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gray-200 overflow-hidden relative">
                <img 
                  src={project.beforeImage} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Badge className={`${
                    project.difficulty === 'Очень высокая' ? 'bg-red-500' :
                    project.difficulty === 'Высокая' ? 'bg-orange-500' :
                    project.difficulty === 'Средняя' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}>
                    {project.difficulty}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline">
                    {categories.find(c => c.id === project.category)?.name}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-orange-100 text-orange-800 text-xs">
                      Избранное
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-tech-dark mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-tech-gray text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="space-y-2 text-xs text-tech-gray mb-4">
                  <div className="flex justify-between">
                    <span>Клиент:</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Срок:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Стоимость:</span>
                    <span className="font-bold text-tech-blue">{project.cost}</span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-tech-blue hover:bg-blue-700">
                      Подробнее
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      <DialogDescription>
                        {project.client} • {project.duration} • Сложность: {project.difficulty}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold mb-2">До ремонта</h4>
                        <img src={project.beforeImage} alt="До" className="w-full rounded-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">После ремонта</h4>
                        <img src={project.afterImage} alt="После" className="w-full rounded-lg" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      <div>
                        <h4 className="font-semibold text-tech-dark mb-2">Проблема</h4>
                        <p className="text-tech-gray">{project.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-tech-dark mb-2">Решение</h4>
                        <p className="text-tech-gray">{project.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-tech-dark mb-2">Результат</h4>
                        <p className="text-tech-gray">{project.result}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-tech-dark mb-2">Использованные технологии</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-tech-blue/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-tech-dark mb-2">Отзыв клиента</h4>
                        <p className="text-tech-gray italic">"{project.testimonial}"</p>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-lg font-bold text-tech-blue">Стоимость: {project.cost}</span>
                        <Button className="bg-tech-blue hover:bg-blue-700">
                          Заказать похожую услугу
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-16 bg-gradient-to-r from-tech-blue to-blue-700 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Хотите стать нашим следующим успешным проектом?</h3>
            <p className="text-lg mb-6 opacity-90">
              Доверьте свою технику профессионалам с многолетним опытом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                <Icon name="Phone" size={20} className="mr-2" />
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tech-blue">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;