import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const missions = [
    {
      title: "ОПЕРАЦИЯ ОРЁЛ",
      description: "Тактическое планирование и координация воздушных операций",
      status: "ЗАВЕРШЕНО",
      image: "/img/5d91c590-fc92-4a7a-a0d7-c6eb8d9c3850.jpg"
    },
    {
      title: "ОПЕРАЦИЯ ФЕНИКС",
      description: "Разведывательные миссии и сбор разведданных",
      status: "В ПРОЦЕССЕ",
      image: "/img/a5d24866-ac1b-41c0-a999-8fdede33a26d.jpg"
    }
  ];

  const skills = [
    { name: "Тактическое планирование", level: 95 },
    { name: "Командование отрядом", level: 90 },
    { name: "Воздушная разведка", level: 85 },
    { name: "Огневая поддержка", level: 88 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"%3E%3Cg fill-opacity=\"0.03\"%3E%3Cpolygon fill=\"%23ffffff\" points=\"50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40\"/%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center space-y-6">
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold tracking-wider">
              СТАТУС: АКТИВЕН
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              ARMA 3 TACTICAL
            </h1>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Профессиональный тактический оператор с опытом выполнения 
                сложных боевых задач и координации воздушных операций
              </p>
              
              <div className="flex justify-center gap-4 pt-6">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold">
                  <Icon name="Target" className="mr-2" />
                  ПРОСМОТР МИССИЙ
                </Button>
                
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
                  <Icon name="Radio" className="mr-2" />
                  СВЯЗЬ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">АКТИВНЫЕ МИССИИ</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Текущие тактические операции и завершенные боевые задачи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {missions.map((mission, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden group hover:border-primary transition-colors">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={mission.image} 
                    alt={mission.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      mission.status === "ЗАВЕРШЕНО" 
                        ? "bg-green-600 hover:bg-green-700" 
                        : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    {mission.status}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{mission.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {mission.description}
                  </p>
                  
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Eye" className="mr-2" />
                    ДЕТАЛИ МИССИИ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">ТАКТИЧЕСКИЕ НАВЫКИ</h2>
              <p className="text-muted-foreground text-lg">
                Профессиональные компетенции и область специализации
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">КОМАНДНЫЙ ЦЕНТР</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Radio" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">СВЯЗЬ</h3>
                <p className="text-muted-foreground">Радиосвязь 24/7</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="MapPin" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">МЕСТОПОЛОЖЕНИЕ</h3>
                <p className="text-muted-foreground">База "Альтис"</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Shield" size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">СТАТУС</h3>
                <p className="text-muted-foreground">Готов к операции</p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
              <Icon name="Phone" className="mr-2" />
              УСТАНОВИТЬ СВЯЗЬ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 ARMA 3 TACTICAL • СЕКРЕТНОСТЬ ГАРАНТИРОВАНА
          </p>
        </div>
      </footer>
    </div>
  );
}