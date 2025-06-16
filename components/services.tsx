
'use client';

import { BarChart3, MapPin, Target, Lightbulb, TrendingUp, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: BarChart3,
      title: 'Análise de Dados de Vendas',
      description: 'Transformamos seus dados históricos em insights acionáveis para otimizar performance.',
      features: ['Dashboard personalizado', 'Relatórios automatizados', 'KPIs estratégicos', 'Previsões de vendas'],
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Geomarketing Estratégico',
      description: 'Identifique os melhores locais para expansão e otimize sua presença geográfica.',
      features: ['Análise de mercado local', 'Mapeamento de concorrência', 'Definição de territórios', 'Otimização de rotas'],
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Segmentação de Clientes',
      description: 'Entenda melhor seu público e crie estratégias personalizadas para cada segmento.',
      features: ['Perfil de clientes', 'Análise comportamental', 'Personas detalhadas', 'Estratégias direcionadas'],
      color: 'purple'
    },
    {
      icon: Lightbulb,
      title: 'Consultoria Estratégica',
      description: 'Orientação especializada para implementar mudanças que geram resultados reais.',
      features: ['Diagnóstico completo', 'Plano de ação', 'Acompanhamento mensal', 'Suporte contínuo'],
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Otimização de Performance',
      description: 'Identifique gargalos e oportunidades para acelerar o crescimento das vendas.',
      features: ['Análise de funil', 'Otimização de processos', 'Automação de tarefas', 'Métricas de conversão'],
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Treinamento de Equipes',
      description: 'Capacite sua equipe com conhecimentos em análise de dados e vendas estratégicas.',
      features: ['Workshops práticos', 'Material didático', 'Certificação', 'Suporte pós-treinamento'],
      color: 'purple'
    }
  ];

  return (
    <section id="servicos" className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Soluções completas em análise de dados e geomarketing, 
            desenvolvidas especificamente para acelerar o crescimento de PMEs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <service.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => scrollToSection('contato')}
                variant="outline"
                size="sm"
                className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300"
              >
                Saiba Mais
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-neutral-600 mb-6">
              Cada PME é única. Desenvolvemos soluções sob medida para atender 
              às necessidades específicas do seu negócio.
            </p>
            <Button
              onClick={() => scrollToSection('contato')}
              size="lg"
              className="gradient-purple text-white hover:opacity-90 transition-opacity"
            >
              Fale com Nossos Especialistas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
