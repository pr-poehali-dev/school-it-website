import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const courses = [
    {
      title: 'Frontend разработка',
      description: 'React, TypeScript, современные инструменты',
      icon: 'Code2',
      color: 'from-purple-500 to-pink-500',
      duration: '6 месяцев',
      level: 'Начальный'
    },
    {
      title: 'Backend разработка',
      description: 'Node.js, Python, базы данных',
      icon: 'Server',
      color: 'from-blue-500 to-cyan-500',
      duration: '8 месяцев',
      level: 'Средний'
    },
    {
      title: 'Мобильная разработка',
      description: 'React Native, iOS, Android',
      icon: 'Smartphone',
      color: 'from-violet-500 to-purple-500',
      duration: '7 месяцев',
      level: 'Средний'
    },
    {
      title: 'Data Science',
      description: 'Python, ML, анализ данных',
      icon: 'Database',
      color: 'from-emerald-500 to-teal-500',
      duration: '10 месяцев',
      level: 'Продвинутый'
    }
  ];

  const benefits = [
    { icon: 'Users', title: 'Живое обучение', text: 'Занятия с преподавателями в реальном времени' },
    { icon: 'Trophy', title: 'Реальные проекты', text: 'Портфолио из 5+ коммерческих проектов' },
    { icon: 'Briefcase', title: 'Трудоустройство', text: 'Помощь в поиске работы и стажировки' },
    { icon: 'Zap', title: 'Современный стек', text: 'Актуальные технологии 2024 года' }
  ];

  const teachers = [
    { name: 'Алексей Иванов', role: 'Senior Frontend Developer', company: 'Яндекс', experience: '8 лет' },
    { name: 'Мария Петрова', role: 'Tech Lead', company: 'VK', experience: '10 лет' },
    { name: 'Дмитрий Сидоров', role: 'Data Scientist', company: 'Сбер', experience: '7 лет' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Icon name="Code" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">IT School</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#courses" className="text-gray-700 hover:text-purple-600 transition-colors">Курсы</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">О школе</a>
            <a href="#teachers" className="text-gray-700 hover:text-purple-600 transition-colors">Преподаватели</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Записаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Стань IT-специалистом
              <br />
              <span className="gradient-text">за 6 месяцев</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Обучение программированию с нуля до трудоустройства. Живые занятия, реальные проекты, поддержка наставников
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6 animate-pulse-glow">
                Начать обучение
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-purple-300 hover:bg-purple-50">
                Бесплатный урок
              </Button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slide-up">
            <div>
              <div className="text-4xl font-bold gradient-text">500+</div>
              <div className="text-gray-600">Выпускников</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">95%</div>
              <div className="text-gray-600">Трудоустройство</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">20+</div>
              <div className="text-gray-600">Экспертов</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text">4.9</div>
              <div className="text-gray-600">Рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            Наши <span className="gradient-text">курсы</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Выбери свой путь в IT</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <Card 
                key={idx} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-300 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                <CardContent className="p-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={course.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">{course.duration}</span>
                    <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">{course.level}</span>
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-purple-50">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Почему выбирают нас</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={benefit.icon as any} size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-purple-100">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            Наши <span className="gradient-text">преподаватели</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Эксперты из ведущих IT-компаний</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teachers.map((teacher, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {teacher.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
                  <p className="text-purple-600 font-semibold mb-1">{teacher.role}</p>
                  <p className="text-gray-600 mb-2">{teacher.company}</p>
                  <p className="text-sm text-gray-500">Опыт: {teacher.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4">
            Остались <span className="gradient-text">вопросы?</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Свяжитесь с нами, и мы поможем выбрать курс</p>
          
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-purple-200 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-purple-200 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, что вас интересует..." 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-purple-200 focus:border-purple-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 flex justify-center gap-8">
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Icon name="Mail" size={20} />
              <span>info@itschool.ru</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Icon name="Phone" size={20} />
              <span>+7 (999) 123-45-67</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Icon name="Code" size={24} />
            </div>
            <span className="text-2xl font-bold">IT School</span>
          </div>
          <p className="text-gray-400 mb-6">Твой путь в IT начинается здесь</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Github" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-8">© 2024 IT School. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
