import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Accessories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<any[]>([]);

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3X3' },
    { id: 'input', name: 'Ввод', icon: 'Mouse' },
    { id: 'storage', name: 'Накопители', icon: 'HardDrive' },
    { id: 'network', name: 'Сеть', icon: 'Wifi' },
    { id: 'audio', name: 'Аудио', icon: 'Headphones' },
    { id: 'cables', name: 'Кабели', icon: 'Cable' },
    { id: 'cooling', name: 'Охлаждение', icon: 'Fan' }
  ];

  const accessories = [
    {
      id: 1,
      name: 'Беспроводная мышь Logitech MX Master 3',
      category: 'input',
      price: '7500₽',
      oldPrice: '8500₽',
      image: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      popular: true,
      description: 'Профессиональная беспроводная мышь для работы и творчества',
      features: ['Точность 4000 DPI', 'Время работы 70 дней', 'USB-C зарядка', 'Совместимость с 3 устройствами']
    },
    {
      id: 2,
      name: 'SSD Samsung 980 PRO 1TB',
      category: 'storage',
      price: '8900₽',
      oldPrice: '10500₽',
      image: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      rating: 4.9,
      reviews: 89,
      inStock: true,
      popular: true,
      description: 'Высокоскоростной NVMe SSD для профессиональных задач',
      features: ['Скорость до 7000 МБ/с', 'Интерфейс PCIe 4.0', 'Гарантия 5 лет', 'Технология V-NAND']
    },
    {
      id: 3,
      name: 'Wi-Fi роутер ASUS AX6000',
      category: 'network',
      price: '12000₽',
      oldPrice: '14000₽',
      image: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      rating: 4.7,
      reviews: 67,
      inStock: true,
      popular: false,
      description: 'Мощный роутер для дома и офиса с поддержкой Wi-Fi 6',
      features: ['Wi-Fi 6 стандарт', 'Скорость до 6000 Мбит/с', '8 антенн', 'Покрытие до 300м²']
    },
    {
      id: 4,
      name: 'Наушники Sony WH-1000XM4',
      category: 'audio',
      price: '18500₽',
      oldPrice: '22000₽',
      image: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      rating: 4.9,
      reviews: 156,
      inStock: false,
      popular: true,
      description: 'Премиальные наушники с активным шумоподавлением',
      features: ['Шумоподавление', 'Время работы 30 часов', 'Быстрая зарядка', 'Hi-Res Audio']
    },
    {
      id: 5,
      name: 'USB-C хаб 7-в-1',
      category: 'cables',
      price: '2800₽',
      oldPrice: '3200₽',
      image: '/img/0fbe9063-ae66-4ee5-b2c3-ac81454d54f4.jpg',
      rating: 4.6,
      reviews: 43,
      inStock: true,
      popular: false,
      description: 'Многофункциональный хаб для ноутбуков с USB-C',
      features: ['7 портов', 'Поддержка 4K', 'Быстрая зарядка 100W', 'Алюминиевый корпус']
    },
    {
      id: 6,
      name: 'Кулер для процессора Noctua NH-D15',
      category: 'cooling',
      price: '9500₽',
      oldPrice: '11000₽',
      image: '/img/eac049bc-daac-468e-ab4c-d8b1611ffc90.jpg',
      rating: 4.9,
      reviews: 78,
      inStock: true,
      popular: false,
      description: 'Топовый воздушный кулер для процессоров',
      features: ['Охлаждение до 220W', 'Ультра-тихая работа', '6 лет гарантии', 'Совместимость с большинством сокетов']
    }
  ];

  const filteredAccessories = accessories.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: any) => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const totalPrice = cart.reduce((sum, item) => sum + parseInt(item.price.replace('₽', '').replace(' ', '')), 0);

  const services = [
    {
      service: 'Установка и настройка',
      price: '500₽',
      description: 'Подключение и настройка купленного оборудования'
    },
    {
      service: 'Консультация по выбору',
      price: 'Бесплатно',
      description: 'Помощь в выборе подходящих аксессуаров'
    },
    {
      service: 'Доставка по Твери',
      price: '300₽',
      description: 'Доставка товаров в пределах города'
    },
    {
      service: 'Гарантийное обслуживание',
      price: 'Включено',
      description: 'Гарантия на все продаваемые товары'
    }
  ];

  return (
    <div className="min-h-screen bg-tech-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-tech-dark mb-4">Компьютерные аксессуары</h1>
            <p className="text-xl text-tech-gray max-w-3xl mx-auto">
              Широкий выбор качественных аксессуаров и комплектующих для вашего компьютера
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="catalog">Каталог</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="cart">Корзина ({cart.length})</TabsTrigger>
            <TabsTrigger value="order">Заказать</TabsTrigger>
          </TabsList>

          <TabsContent value="catalog">
            <div className="space-y-8">
              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tech-gray" />
                    <Input
                      placeholder="Поиск товаров..."
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
                      className={`flex items-center space-x-2 ${
                        selectedCategory === category.id ? 'bg-tech-blue' : ''
                      }`}
                    >
                      <Icon name={category.icon as any} size={16} />
                      <span>{category.name}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAccessories.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="aspect-video bg-gray-200 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {item.popular && (
                        <Badge className="absolute top-2 left-2 bg-orange-500">
                          Хит продаж
                        </Badge>
                      )}
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="destructive">Нет в наличии</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-tech-dark line-clamp-2">
                          {item.name}
                        </h3>
                        
                        <p className="text-tech-gray text-sm line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[1,2,3,4,5].map(star => (
                              <Icon 
                                key={star} 
                                name="Star" 
                                size={14} 
                                className={`${star <= Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-tech-gray">({item.reviews})</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {item.features.slice(0, 2).map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-tech-blue">{item.price}</div>
                            {item.oldPrice && (
                              <div className="text-sm text-gray-400 line-through">{item.oldPrice}</div>
                            )}
                          </div>
                          <Button 
                            onClick={() => addToCart(item)}
                            disabled={!item.inStock || cart.some(cartItem => cartItem.id === item.id)}
                            className="bg-tech-blue hover:bg-blue-700"
                          >
                            {cart.some(cartItem => cartItem.id === item.id) ? 'В корзине' : 'В корзину'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredAccessories.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Icon name="Search" size={48} className="mx-auto text-tech-gray mb-4" />
                    <h3 className="text-lg font-semibold text-tech-dark mb-2">Товары не найдены</h3>
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
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Дополнительные услуги</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Полный сервис от выбора до установки и настройки
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{service.service}</CardTitle>
                        <Badge className={service.price === 'Бесплатно' || service.price === 'Включено' ? 'bg-green-600' : 'bg-tech-blue'}>
                          {service.price}
                        </Badge>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-tech-blue hover:bg-blue-700">
                        Заказать услугу
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Truck" size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Условия доставки</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Бесплатная доставка при заказе от 5000₽</li>
                        <li>• Доставка по Твери в день заказа</li>
                        <li>• Самовывоз из офиса бесплатно</li>
                        <li>• Доставка в область +50₽ за км</li>
                        <li>• Оплата при получении или картой</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cart">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-tech-dark mb-4">Корзина покупок</h2>
                <p className="text-tech-gray max-w-2xl mx-auto">
                  Выбранные товары и расчет стоимости
                </p>
              </div>

              {cart.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                      <Card key={item.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-tech-dark">{item.name}</h4>
                              <p className="text-sm text-tech-gray">{item.description}</p>
                              <div className="text-lg font-bold text-tech-blue">{item.price}</div>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Итого к оплате</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Товары ({cart.length}):</span>
                          <span className="font-semibold">{totalPrice.toLocaleString()}₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Доставка:</span>
                          <span className="font-semibold text-green-600">
                            {totalPrice >= 5000 ? 'Бесплатно' : '300₽'}
                          </span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-lg font-semibold">Итого:</span>
                          <span className="text-xl font-bold text-tech-blue">
                            {(totalPrice + (totalPrice >= 5000 ? 0 : 300)).toLocaleString()}₽
                          </span>
                        </div>
                        
                        <Button className="w-full bg-tech-blue hover:bg-blue-700">
                          <Icon name="ShoppingCart" size={20} className="mr-2" />
                          Оформить заказ
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Icon name="ShoppingCart" size={48} className="mx-auto text-tech-gray mb-4" />
                    <h3 className="text-lg font-semibold text-tech-dark mb-2">Корзина пуста</h3>
                    <p className="text-tech-gray mb-4">
                      Добавьте товары из каталога для оформления заказа
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        // Переключиться на вкладку каталога
                      }}
                    >
                      Перейти к покупкам
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="order">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Заказать аксессуары</CardTitle>
                  <CardDescription>
                    Оформите заказ или получите консультацию по выбору
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
                        <label className="block text-sm font-medium text-tech-dark mb-2">Телефон *</label>
                        <input 
                          type="tel" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                          placeholder="+7 (___) ___-__-__"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="example@mail.ru"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Что вас интересует?</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue"
                        placeholder="Опишите, какие аксессуары вам нужны, для каких задач..."
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-tech-dark mb-2">Бюджет</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue">
                        <option>До 3000₽</option>
                        <option>3000-10000₽</option>
                        <option>10000-25000₽</option>
                        <option>Свыше 25000₽</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Нужна установка и настройка (+500₽)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Доставка по адресу (+300₽)</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">Срочный заказ (в течение дня, +20%)</span>
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-tech-blue hover:bg-blue-700">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Award" size={20} className="text-tech-blue" />
                      <span>Наши преимущества</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-500" />
                        <span>Только оригинальные товары</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-500" />
                        <span>Гарантия на все товары</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-500" />
                        <span>Консультация по выбору</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-500" />
                        <span>Установка и настройка</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Truck" size={20} className="text-tech-blue" />
                      <span>Доставка и оплата</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Доставка по Твери:</span>
                        <span className="font-medium">300₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>При заказе от 5000₽:</span>
                        <span className="font-medium text-green-600">Бесплатно</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Самовывоз:</span>
                        <span className="font-medium text-green-600">Бесплатно</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Способы оплаты:</span>
                        <span className="font-medium">Наличные, карта</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <Icon name="Headphones" size={32} className="mx-auto mb-3 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Нужна помощь с выбором?</h3>
                    <p className="text-sm text-green-700 mb-4">
                      Наши специалисты помогут подобрать идеальные аксессуары
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Получить консультацию
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

export default Accessories;