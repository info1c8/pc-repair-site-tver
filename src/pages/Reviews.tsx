import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const reviews = [
    {
      id: 1,
      name: 'Алексей Михайлов',
      rating: 5,
      date: '15 января 2024',
      service: 'Ремонт материнской платы',
      text: 'Отличная работа! Компьютер не включался уже неделю, думал придется покупать новый. Мастера быстро нашли проблему и починили материнскую плату. Цена адекватная, работа качественная. Рекомендую!',
      verified: true,
      helpful: 12,
      response: 'Спасибо за отзыв, Алексей! Рады, что смогли помочь восстановить ваш компьютер. Обращайтесь, если понадобится помощь!'
    },
    {
      id: 2,
      name: 'Мария Козлова',
      rating: 5,
      date: '3 февраля 2024',
      service: 'Восстановление данных',
      text: 'Случайно удалила важные рабочие документы и фотографии. Обратилась в КомпМастер, и они смогли восстановить практически все файлы! Очень профессиональный подход, объяснили весь процесс. Огромное спасибо!',
      verified: true,
      helpful: 8,
      response: 'Мария, благодарим за доверие! Очень важно было сохранить ваши данные. Не забывайте делать резервные копии!'
    },
    {
      id: 3,
      name: 'Дмитрий Сергеев',
      rating: 5,
      date: '22 февраля 2024',
      service: 'Модернизация ПК',
      text: 'Модернизировали мой старый компьютер - добавили SSD, увеличили память, поставили новую видеокарту. Теперь работает как новый! Мастера подобрали все компоненты под мой бюджет. Очень доволен результатом.',
      verified: true,
      helpful: 15,
      response: null
    },
    {
      id: 4,
      name: 'Елена Петрова',
      rating: 4,
      date: '5 марта 2024',
      service: 'Чистка от вирусов',
      text: 'Компьютер сильно тормозил, постоянно выскакивала реклама. Мастера быстро почистили систему от вирусов, установили хороший антивирус. Единственный минус - пришлось ждать мастера дольше обещанного времени.',
      verified: true,
      helpful: 6,
      response: 'Елена, извиняемся за задержку! Мы работаем над улучшением пунктуальности наших мастеров.'
    },
    {
      id: 5,
      name: 'Игорь Волков',
      rating: 5,
      date: '18 марта 2024',
      service: 'Установка Windows 11',
      text: 'Нужно было установить Windows 11 на новый компьютер. Мастер приехал точно в назначенное время, быстро установил систему, все драйвера, настроил программы. Работа выполнена на отлично!',
      verified: true,
      helpful: 9,
      response: null
    },
    {
      id: 6,
      name: 'Анна Смирнова',
      rating: 5,
      date: '2 апреля 2024',
      service: 'Ремонт ноутбука',
      text: 'Ноутбук перегревался и выключался. Оказалось, забилась пыль и высохла термопаста. Мастера почистили, заменили термопасту, теперь работает тихо и не греется. Спасибо за качественную работу!',
      verified: true,
      helpful: 7,
      response: 'Анна, рады помочь! Рекомендуем проводить профилактическую чистку раз в год.'
    },
    {
      id: 7,
      name: 'Сергей Николаев',
      rating: 4,
      date: '15 апреля 2024',
      service: 'Настройка сети',
      text: 'Помогли настроить домашнюю сеть и Wi-Fi. Теперь интернет работает стабильно во всех комнатах. Мастер объяснил, как пользоваться роутером. Хорошая работа, но цена показалась немного завышенной.',
      verified: true,
      helpful: 4,
      response: null
    },
    {
      id: 8,
      name: 'Ольга Иванова',
      rating: 5,
      date: '28 апреля 2024',
      service: 'Диагностика',
      text: 'Компьютер стал работать медленно. Мастера провели полную диагностику, выявили проблемы с жестким диском и памятью. Предложили варианты решения с разным бюджетом. Очень профессиональный подход!',
      verified: true,
      helpful: 11,
      response: 'Ольга, спасибо за отзыв! Важно вовремя выявить проблемы, чтобы избежать потери данных.'
    }
  ];

  const stats = {
    totalReviews: reviews.length,
    averageRating: 4.8,
    ratingDistribution: {
      5: 6,
      4: 2,
      3: 0,
      2: 0,
      1: 0
    }
  };

  const filteredReviews = filterRating 
    ? reviews.filter(review => review.rating === filterRating)
    : reviews;

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Отзывы клиентов</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Читайте реальные отзывы наших клиентов и делитесь своим опытом
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-tech-blue mb-2">{stats.totalReviews}</div>
              <div className="text-tech-gray">Всего отзывов</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-tech-blue mr-2">{stats.averageRating}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon 
                      key={star} 
                      name="Star" 
                      size={20} 
                      className={`${star <= Math.floor(stats.averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="text-tech-gray">Средняя оценка</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-tech-gray">Довольных клиентов</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-tech-blue mb-2">24ч</div>
              <div className="text-tech-gray">Среднее время ответа</div>
            </CardContent>
          </Card>
        </div>

        {/* Rating Distribution */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Распределение оценок</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-sm font-medium">{rating}</span>
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-tech-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution] / stats.totalReviews) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-tech-gray w-8">
                    {stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution]}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                    className={filterRating === rating ? 'bg-tech-blue text-white' : ''}
                  >
                    Показать
                  </Button>
                </div>
              ))}
            </div>
            {filterRating && (
              <div className="mt-4 text-center">
                <Button 
                  variant="outline" 
                  onClick={() => setFilterRating(null)}
                >
                  Показать все отзывы
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Tabs defaultValue="reviews" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="reviews">Все отзывы</TabsTrigger>
            <TabsTrigger value="write">Написать отзыв</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews">
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                          <span className="text-tech-blue font-semibold">
                            {review.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-tech-dark">{review.name}</h3>
                            {review.verified && (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                <Icon name="CheckCircle" size={12} className="mr-1" />
                                Проверен
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Icon 
                                  key={star} 
                                  name="Star" 
                                  size={16} 
                                  className={`${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-tech-gray">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">{review.service}</Badge>
                    </div>
                    
                    <p className="text-tech-gray mb-4 leading-relaxed">{review.text}</p>
                    
                    {review.response && (
                      <div className="bg-tech-blue/5 p-4 rounded-lg mb-4">
                        <div className="flex items-start space-x-3">
                          <Icon name="MessageCircle" size={16} className="text-tech-blue mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-tech-dark mb-1">Ответ от КомпМастер:</p>
                            <p className="text-sm text-tech-gray">{review.response}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm" className="text-tech-gray hover:text-tech-blue">
                        <Icon name="ThumbsUp" size={16} className="mr-2" />
                        Полезно ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm" className="text-tech-gray hover:text-tech-blue">
                        <Icon name="Share2" size={16} className="mr-2" />
                        Поделиться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Загрузить еще отзывы
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="write">
            <Card>
              <CardHeader>
                <CardTitle>Оставить отзыв</CardTitle>
                <CardDescription>
                  Поделитесь своим опытом работы с нашей компанией
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Email *</label>
                      <Input type="email" placeholder="example@mail.ru" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-tech-dark mb-2">Услуга</label>
                    <Input placeholder="Какую услугу вы заказывали?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-tech-dark mb-2">Оценка *</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingClick(star)}
                          className="focus:outline-none"
                        >
                          <Icon 
                            name="Star" 
                            size={32} 
                            className={`transition-colors ${
                              star <= selectedRating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300 hover:text-yellow-200'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                    {selectedRating > 0 && (
                      <p className="text-sm text-tech-gray mt-2">
                        Ваша оценка: {selectedRating} из 5 звезд
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-tech-dark mb-2">Отзыв *</label>
                    <Textarea 
                      placeholder="Расскажите о своем опыте работы с нашей компанией..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="agree" className="rounded border-gray-300" required />
                    <label htmlFor="agree" className="text-sm text-tech-gray">
                      Я согласен на публикацию отзыва и обработку персональных данных *
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-tech-blue hover:bg-blue-700">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Review Guidelines */}
            <Card className="mt-8 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Info" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Правила написания отзывов</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Пишите честно о своем опыте</li>
                      <li>• Указывайте конкретные детали услуги</li>
                      <li>• Избегайте нецензурной лексики</li>
                      <li>• Отзыв будет опубликован после модерации</li>
                      <li>• Мы отвечаем на все отзывы в течение 24 часов</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-tech-blue to-blue-700 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Станьте нашим следующим довольным клиентом!</h3>
            <p className="text-lg mb-6 opacity-90">
              Присоединяйтесь к сотням клиентов, которые доверили нам свою технику
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-tech-blue hover:bg-gray-100">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать услугу
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

export default Reviews;