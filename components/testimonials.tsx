
'use client';

import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'TechStart Soluções',
      role: 'CEO',
      content: 'A IntelSales transformou completamente nossa abordagem de vendas. Em 3 meses, aumentamos nossa receita em 180% usando as estratégias de geomarketing.',
      rating: 5,
      results: '+180% receita'
    },
    {
      name: 'João Santos',
      company: 'Distribuidora Regional',
      role: 'Diretor Comercial',
      content: 'Os insights de análise de dados nos ajudaram a identificar oportunidades que estavam invisíveis. Agora tomamos decisões baseadas em dados reais.',
      rating: 5,
      results: '+65% conversão'
    },
    {
      name: 'Ana Costa',
      company: 'Fashion Boutique',
      role: 'Proprietária',
      content: 'O suporte da equipe IntelSales é excepcional. Eles não apenas entregam relatórios, mas nos ensinam a interpretar e agir sobre os dados.',
      rating: 5,
      results: '+120% vendas'
    },
    {
      name: 'Carlos Oliveira',
      company: 'Construtora Moderna',
      role: 'Sócio-Diretor',
      content: 'Graças ao geomarketing estratégico, conseguimos escolher os melhores locais para nossos empreendimentos. O ROI foi imediato.',
      rating: 5,
      results: '+200% ROI'
    },
    {
      name: 'Fernanda Lima',
      company: 'Clínica Saúde+',
      role: 'Administradora',
      content: 'A segmentação de clientes nos permitiu criar campanhas muito mais efetivas. Nosso custo de aquisição diminuiu 40%.',
      rating: 5,
      results: '-40% CAC'
    },
    {
      name: 'Roberto Mendes',
      company: 'Supermercado Família',
      role: 'Gerente Geral',
      content: 'Implementamos as recomendações da IntelSales e vimos resultados em menos de 30 dias. A metodologia deles realmente funciona.',
      rating: 5,
      results: '+90% margem'
    }
  ];

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Cases de <span className="gradient-text">Sucesso</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Veja como outras PMEs transformaram seus resultados com nossas soluções 
            de análise de dados e geomarketing estratégico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-purple-200" />
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-neutral-600 mb-6 text-sm leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-neutral-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral-500 text-xs">
                      {testimonial.role}
                    </p>
                    <p className="text-neutral-500 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold gradient-text">
                      {testimonial.results}
                    </div>
                    <div className="text-xs text-neutral-500">
                      Resultado
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-neutral-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Resultados que Falam por Si
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-neutral-600">PMEs Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">150%</div>
                <div className="text-sm text-neutral-600">Aumento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">30</div>
                <div className="text-sm text-neutral-600">Dias para Resultados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                <div className="text-sm text-neutral-600">Satisfação</div>
              </div>
            </div>
            <p className="text-neutral-600">
              Junte-se a centenas de PMEs que já transformaram seus resultados com a IntelSales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
