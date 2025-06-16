
'use client';

import { ArrowRight, BarChart3, MapPin, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-16 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Transforme dados em{' '}
              <span className="gradient-text">vendas inteligentes</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Potencialize sua PME com análise de dados avançada e geomarketing estratégico. 
              Descubra oportunidades ocultas e acelere seu crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contato')}
                size="lg"
                className="gradient-purple text-white hover:opacity-90 transition-opacity group"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('sobre')}
                variant="outline"
                size="lg"
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="animate-fade-in delay-200">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-white border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900">Análise de Dados</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Insights precisos para decisões estratégicas
                </p>
              </Card>

              <Card className="p-6 bg-white border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900">Geomarketing</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Localização estratégica para máximo impacto
                </p>
              </Card>

              <Card className="p-6 bg-white border-neutral-200 shadow-sm hover:shadow-md transition-shadow col-span-2">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900">Crescimento Acelerado</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Estratégias comprovadas para PMEs que querem crescer rapidamente
                </p>
                <div className="mt-4 flex space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">+150%</div>
                    <div className="text-xs text-neutral-500">Aumento médio em vendas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">30 dias</div>
                    <div className="text-xs text-neutral-500">Para ver resultados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">500+</div>
                    <div className="text-xs text-neutral-500">PMEs atendidas</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
