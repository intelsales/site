
'use client';

import { Target, Users, Zap, Award } from 'lucide-react';
import { Card } from './ui/card';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada estratégia é desenvolvida com foco em ROI mensurável e crescimento sustentável.'
    },
    {
      icon: Users,
      title: 'Especialistas em PME',
      description: 'Entendemos os desafios únicos das pequenas e médias empresas brasileiras.'
    },
    {
      icon: Zap,
      title: 'Implementação Rápida',
      description: 'Soluções práticas que podem ser implementadas imediatamente em seu negócio.'
    },
    {
      icon: Award,
      title: 'Resultados Comprovados',
      description: 'Mais de 500 PMEs já transformaram seus resultados com nossas soluções.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Sobre a <span className="gradient-text">IntelSales</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Somos especialistas em transformar dados em estratégias de vendas inteligentes 
            para pequenas e médias empresas que querem crescer de forma acelerada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-white border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Nossa Missão
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Democratizar o acesso a análises de dados avançadas e estratégias de geomarketing 
              para PMEs brasileiras, permitindo que compitam em igualdade com grandes corporações.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Acreditamos que toda empresa, independente do tamanho, merece ter acesso a insights 
              de qualidade que podem transformar seus resultados e acelerar seu crescimento.
            </p>
          </div>

          <div className="bg-neutral-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Por que escolher a IntelSales?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-neutral-600">
                  <strong className="text-neutral-900">Metodologia comprovada:</strong> Processos testados em centenas de PMEs
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-neutral-600">
                  <strong className="text-neutral-900">Tecnologia avançada:</strong> Ferramentas de última geração adaptadas para PMEs
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-neutral-600">
                  <strong className="text-neutral-900">Suporte personalizado:</strong> Acompanhamento próximo durante toda a jornada
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-neutral-600">
                  <strong className="text-neutral-900">ROI garantido:</strong> Resultados mensuráveis em até 30 dias
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
