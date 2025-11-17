import { TrendingUp, Target, Bell, FileText, Apple, Utensils, Scale, BarChart3, PiggyBank, Calendar, Heart, Activity } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/custom/navbar"
import { Footer } from "@/components/custom/footer"

export default function FuncionalidadesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Funcionalidades{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Completas
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tudo que você precisa para organizar suas finanças e cuidar da sua saúde
          </p>
        </div>
      </section>

      {/* Módulo Financeiro */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              💰 Módulo Financeiro
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Controle Total das Suas Finanças
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ferramentas inteligentes para gerenciar seu dinheiro com facilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Análise Automática */}
            <Card className="border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Análise Automática
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Categorização inteligente de todos os seus gastos. O sistema aprende 
                  com seus padrões e organiza tudo automaticamente.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Categorias personalizáveis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Detecção de padrões
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Histórico completo
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Projeção de Metas */}
            <Card className="border-2 border-green-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Projeção de Metas
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Defina objetivos financeiros e acompanhe seu progresso em tempo real 
                  com projeções inteligentes.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Metas personalizadas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Projeções realistas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Acompanhamento visual
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Alertas Inteligentes */}
            <Card className="border-2 border-yellow-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <Bell className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Alertas Inteligentes
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Notificações personalizadas para você nunca perder prazos importantes 
                  ou ultrapassar limites.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Vencimentos de contas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Limites de gastos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    Oportunidades de economia
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Relatórios Simples */}
            <Card className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Relatórios Simples
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Visualize seus dados financeiros de forma clara com gráficos e 
                  relatórios fáceis de entender.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Relatórios mensais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Gráficos interativos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Exportação de dados
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Planejamento */}
            <Card className="border-2 border-indigo-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <PiggyBank className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Planejamento Financeiro
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Crie orçamentos mensais e acompanhe quanto você pode gastar em 
                  cada categoria.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    Orçamento por categoria
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    Controle de gastos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    Sugestões de economia
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Calendário */}
            <Card className="border-2 border-cyan-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Calendário Financeiro
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Visualize todas as suas contas e compromissos financeiros em um 
                  calendário intuitivo.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Visão mensal/anual
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Lembretes automáticos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    Sincronização
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulo Saúde */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              🍎 Módulo Saúde
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cuide da Sua Saúde com Inteligência
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ferramentas baseadas em ciência para melhorar seus hábitos alimentares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Calorias Recomendadas */}
            <Card className="border-2 border-green-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Apple className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Calorias Recomendadas
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cálculo personalizado baseado em seu perfil, objetivos e nível de 
                  atividade física.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Cálculo científico
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Ajuste por objetivo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Macronutrientes
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sugestões de Refeições */}
            <Card className="border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Utensils className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sugestões de Refeições
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Receitas balanceadas e saudáveis que se encaixam no seu plano 
                  alimentar diário.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Receitas variadas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Informações nutricionais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Lista de compras
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Registro de Peso */}
            <Card className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Scale className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Registro de Peso
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Acompanhe sua evolução de peso ao longo do tempo com registros 
                  simples e rápidos.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Registro diário
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Histórico completo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Lembretes
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Gráficos de Evolução */}
            <Card className="border-2 border-orange-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Gráficos de Evolução
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Visualize seu progresso com gráficos claros e motivadores que mostram 
                  sua jornada.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Gráficos de peso
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Tendências
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    Comparações
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Metas de Saúde */}
            <Card className="border-2 border-pink-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Metas de Saúde
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Defina objetivos de saúde e acompanhe seu progresso com metas 
                  personalizadas.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    Peso ideal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    IMC saudável
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                    Hábitos alimentares
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Acompanhamento */}
            <Card className="border-2 border-teal-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Acompanhamento Diário
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Registre suas refeições e atividades para um acompanhamento completo 
                  da sua rotina.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                    Diário alimentar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                    Registro de água
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                    Atividades físicas
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
