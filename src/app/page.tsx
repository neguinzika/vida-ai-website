import Link from "next/link"
import { ArrowRight, TrendingUp, Heart, Shield, Users, BarChart3, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/custom/navbar"
import { Footer } from "@/components/custom/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Organize sua vida{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  financeira e sua saúde
                </span>{" "}
                em um só lugar
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Vida+ AI é sua plataforma inteligente para gerenciar finanças pessoais 
                e acompanhar sua saúde com facilidade. Tudo que você precisa, em um só lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all">
                    Criar conta grátis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/funcionalidades">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-500 text-blue-600 hover:bg-blue-50">
                    Ver funcionalidades
                  </Button>
                </Link>
              </div>
            </div>

            {/* Dashboard Illustration */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <h3 className="font-semibold text-gray-900">Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <TrendingUp className="w-6 h-6 text-blue-600 mb-2" />
                      <p className="text-sm text-gray-600">Finanças</p>
                      <p className="text-2xl font-bold text-gray-900">R$ 2.450</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <Heart className="w-6 h-6 text-green-600 mb-2" />
                      <p className="text-sm text-gray-600">Saúde</p>
                      <p className="text-2xl font-bold text-gray-900">85%</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="h-2 bg-blue-200 rounded-full w-full"></div>
                    <div className="h-2 bg-green-200 rounded-full w-3/4"></div>
                    <div className="h-2 bg-blue-200 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo Financeiro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="border-2 border-blue-100 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Análise Automática</h4>
                        <p className="text-sm text-gray-600">Seus gastos organizados</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Projeção de Metas</h4>
                        <p className="text-sm text-gray-600">Alcance seus objetivos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Alertas Inteligentes</h4>
                        <p className="text-sm text-gray-600">Nunca perca um prazo</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                💰 Módulo Financeiro
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Controle total das suas finanças
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Análise automática dos seus gastos, projeção de metas financeiras e 
                alertas inteligentes para você nunca perder prazos importantes. 
                Relatórios simples e claros para decisões melhores.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Categorização automática de gastos
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Metas personalizadas de economia
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Relatórios mensais detalhados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo Saúde */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                🍎 Módulo Saúde
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Cuide da sua saúde com inteligência
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Calorias recomendadas personalizadas, sugestões de refeições balanceadas 
                e acompanhamento do seu progresso de peso. Tudo baseado em dados e 
                ciência para resultados reais.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Cálculo automático de calorias diárias
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Sugestões de refeições saudáveis
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Gráficos de evolução de peso
                </li>
              </ul>
            </div>
            <div>
              <Card className="border-2 border-green-100 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Apple className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Calorias Recomendadas</h4>
                        <p className="text-sm text-gray-600">Baseado no seu perfil</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Heart className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Sugestões de Refeições</h4>
                        <p className="text-sm text-gray-600">Receitas balanceadas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Progresso de Peso</h4>
                        <p className="text-sm text-gray-600">Acompanhe sua evolução</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-lg text-gray-600">
              Milhares de pessoas já transformaram suas vidas com Vida+ AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Finalmente consigo organizar minhas finanças e cuidar da minha saúde 
                  sem complicação. O app é super intuitivo!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">MC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Maria Clara</p>
                    <p className="text-sm text-gray-500">Usuária há 6 meses</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Os alertas financeiros me salvaram várias vezes! E as sugestões de 
                  refeições são ótimas para manter a dieta."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">RS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Roberto Silva</p>
                    <p className="text-sm text-gray-500">Usuário há 1 ano</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Perdi 8kg em 4 meses acompanhando pelo app. Os gráficos me motivam 
                  a continuar todos os dias!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ana Santos</p>
                    <p className="text-sm text-gray-500">Usuária há 4 meses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Comece gratuitamente hoje e descubra como é fácil organizar suas finanças e saúde
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all">
              Criar conta grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
