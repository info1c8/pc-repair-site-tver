import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все статьи', count: 15 },
    { id: 'tips', name: 'Советы', count: 6 },
    { id: 'news', name: 'Новости', count: 4 },
    { id: 'guides', name: 'Руководства', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Как продлить жизнь вашего компьютера: 10 простых советов',
      excerpt: 'Узнайте, как правильно ухаживать за компьютером, чтобы он служил вам долгие годы без поломок и замедлений.',
      content: 'Правильный уход за компьютером может значительно продлить срок его службы...',
      category: 'tips',
      author: 'Алексей Петров',
      date: '15 марта 2024',
      readTime: '5 мин',
      image: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      tags: ['уход', 'профилактика', 'советы'],
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: 'SSD vs HDD: что выбрать в 2024 году?',
      excerpt: 'Подробное сравнение твердотельных и жестких дисков. Разбираем плюсы, минусы и оптимальные сценарии использования.',
      content: 'Выбор между SSD и HDD остается актуальным вопросом...',
      category: 'guides',
      author: 'Мария Сидорова',
      date: '10 марта 2024',
      readTime: '8 мин',
      image: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      tags: ['SSD', 'HDD', 'накопители'],
      views: 980,
      featured: false
    },
    {
      id: 3,
      title: 'Новые процессоры Intel 14-го поколения: обзор и тестирование',
      excerpt: 'Первые впечатления от новых процессоров Intel. Производительность, энергопотребление и стоит ли обновляться.',
      content: 'Intel представила новое поколение процессоров...',
      category: 'news',
      author: 'Дмитрий Козлов',
      date: '5 марта 2024',
      readTime: '12 мин',
      image: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      tags: ['Intel', 'процессоры', 'тестирование'],
      views: 1450,
      featured: true
    },
    {
      id: 4,
      title: 'Как защитить компьютер от вирусов: полное руководство',
      excerpt: 'Комплексный подход к защите компьютера от вредоносного ПО. От выбора антивируса до настройки безопасности.',
      content: 'Защита компьютера от вирусов требует комплексного подхода...',
      category: 'guides',
      author: 'Алексей Петров',
      date: '28 февраля 2024',
      readTime: '10 мин',
      image: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      tags: ['безопасность', 'антивирус', 'защита'],
      views: 890,
      featured: false
    },
    {
      id: 5,
      title: 'Признаки того, что пора менять блок питания',
      excerpt: 'Как понять, что блок питания выходит из строя? Основные симптомы и способы диагностики неисправностей.',
      content: 'Блок питания - одна из самых важных частей компьютера...',
      category: 'tips',
      author: 'Мария Сидорова',
      date: '22 февраля 2024',
      readTime: '6 мин',
      image: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      tags: ['блок питания', 'диагностика', 'неисправности'],
      views: 720,
      featured: false
    },
    {
      id: 6,
      title: 'Windows 11: стоит ли обновляться и как это сделать правильно',
      excerpt: 'Подробный гид по обновлению до Windows 11. Системные требования, новые функции и возможные проблемы.',
      content: 'Windows 11 предлагает множество новых возможностей...',
      category: 'guides',
      author: 'Дмитрий Козлов',
      date: '18 февраля 2024',
      readTime: '15 мин',
      image: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      tags: ['Windows 11', 'обновление', 'установка'],
      views: 1680,
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Блог КомпМастер</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Полезные статьи, советы и новости из мира компьютерных технологий
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-tech-dark mb-6">Рекомендуемые статьи</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className="bg-tech-blue">{categories.find(c => c.id === post.category)?.name}</Badge>
                    <Badge variant="outline">Рекомендуем</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-tech-dark mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-tech-gray text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-tech-gray">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tech-gray" />
              <Input
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-tech-blue' : ''}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-video md:aspect-square bg-gray-200 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant="outline">
                            {categories.find(c => c.id === post.category)?.name}
                          </Badge>
                          {post.featured && (
                            <Badge className="bg-orange-100 text-orange-800">
                              Рекомендуем
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-tech-dark mb-3 hover:text-tech-blue cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-tech-gray mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-tech-gray">
                            <span className="flex items-center space-x-1">
                              <Icon name="User" size={14} />
                              <span>{post.author}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Icon name="Calendar" size={14} />
                              <span>{post.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Icon name="Clock" size={14} />
                              <span>{post.readTime}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Icon name="Eye" size={14} />
                              <span>{post.views}</span>
                            </span>
                          </div>
                          <Button variant="outline" size="sm">
                            Читать далее
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Icon name="Search" size={48} className="mx-auto text-tech-gray mb-4" />
                  <h3 className="text-lg font-semibold text-tech-dark mb-2">Статьи не найдены</h3>
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
                </CardContent>
              </Card>
            )}

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>
                    <Icon name="ChevronLeft" size={16} />
                  </Button>
                  <Button className="bg-tech-blue">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">
                    <Icon name="ChevronRight" size={16} />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-tech-blue to-blue-700 text-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <Icon name="Mail" size={32} className="mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Подписка на новости</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Получайте новые статьи и полезные советы на email
                  </p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Ваш email"
                      className="bg-white text-tech-dark"
                    />
                    <Button className="w-full bg-white text-tech-blue hover:bg-gray-100">
                      Подписаться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} className="text-orange-500" />
                  <span>Популярные статьи</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 5)
                    .map((post, index) => (
                    <div key={post.id} className="flex space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-tech-blue/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-tech-blue">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-tech-dark line-clamp-2 hover:text-tech-blue cursor-pointer">
                          {post.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1 text-xs text-tech-gray">
                          <Icon name="Eye" size={12} />
                          <span>{post.views}</span>
                          <Icon name="Clock" size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags Cloud */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Tag" size={20} className="text-tech-blue" />
                  <span>Популярные теги</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-tech-blue hover:text-white transition-colors"
                      onClick={() => setSearchQuery(tag)}
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">Нужна помощь?</h3>
                <p className="text-sm text-green-700 mb-4">
                  Не нашли ответ в наших статьях? Обратитесь к специалистам!
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Получить консультацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;