"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  TrendingUp, 
  Heart, 
  Settings, 
  Menu, 
  X, 
  DollarSign, 
  Target, 
  PlusCircle,
  BarChart3,
  Calendar,
  Apple,
  Scale,
  Activity,
  Bell,
  User,
  LogOut
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"financeiro" | "saude">("financeiro")

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V+</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent hidden sm:block">
                Vida+ AI
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 
            transition-transform duration-300 z-30
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab("financeiro")}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${activeTab === "financeiro" 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Financeiro</span>
            </button>

            <button
              onClick={() => setActiveTab("saude")}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${activeTab === "saude" 
                  ? "bg-green-50 text-green-600" 
                  : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <Heart className="w-5 h-5" />
              <span className="font-medium">Saúde</span>
            </button>

            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Configurações</span>
            </button>

            <div className="pt-4 border-t border-gray-200 mt-4">
              <Link href="/">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Sair</span>
                </button>
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Financeiro Tab */}
          {activeTab === "financeiro" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Financeiro</h1>
                  <p className="text-gray-600 mt-1">Gerencie suas finanças com facilidade</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Nova Transação
                </Button>
              </div>

              {/* Cards de Resumo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-2 border-blue-100 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-sm text-green-600 font-medium">+12%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Saldo Total</p>
                    <p className="text-3xl font-bold text-gray-900">R$ 2.450,00</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-100 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-red-600 rotate-180" />
                      </div>
                      <span className="text-sm text-red-600 font-medium">-8%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Gastos do Mês</p>
                    <p className="text-3xl font-bold text-gray-900">R$ 1.280,00</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-100 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="text-sm text-green-600 font-medium">75%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Meta de Economia</p>
                    <p className="text-3xl font-bold text-gray-900">R$ 750,00</p>
                  </CardContent>
                </Card>
              </div>

              {/* Gráfico Placeholder */}
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Gastos por Categoria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Alimentação</span>
                        <span className="text-sm font-medium text-gray-900">R$ 450,00</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Transporte</span>
                        <span className="text-sm font-medium text-gray-900">R$ 320,00</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Lazer</span>
                        <span className="text-sm font-medium text-gray-900">R$ 280,00</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-purple-500 h-3 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">Outros</span>
                        <span className="text-sm font-medium text-gray-900">R$ 230,00</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-yellow-500 h-3 rounded-full" style={{ width: "23%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Adicionar Meta */}
              <Card className="border-2 border-blue-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Adicionar Nova Meta
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="meta-nome">Nome da Meta</Label>
                      <Input id="meta-nome" placeholder="Ex: Viagem de férias" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meta-valor">Valor Alvo</Label>
                      <Input id="meta-valor" type="number" placeholder="R$ 0,00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meta-prazo">Prazo</Label>
                      <Input id="meta-prazo" type="date" />
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Criar Meta
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Saúde Tab */}
          {activeTab === "saude" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Saúde</h1>
                  <p className="text-gray-600 mt-1">Acompanhe sua evolução e bem-estar</p>
                </div>
                <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Registrar Peso
                </Button>
              </div>

              {/* Cards de Resumo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-2 border-green-100 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Apple className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="text-sm text-green-600 font-medium">Meta diária</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Calorias Recomendadas</p>
                    <p className="text-3xl font-bold text-gray-900">2.100 kcal</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-100 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Scale className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-sm text-blue-600 font-medium">-2kg</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Peso Atual</p>
                    <p className="text-3xl font-bold text-gray-900">78,5 kg</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-100 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Activity className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="text-sm text-purple-600 font-medium">85%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Progresso da Meta</p>
                    <p className="text-3xl font-bold text-gray-900">75 kg</p>
                  </CardContent>
                </Card>
              </div>

              {/* Gráfico de Peso */}
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                    Evolução de Peso (Últimos 30 dias)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {[82, 81.5, 81, 80.5, 80, 79.5, 79, 78.5].map((peso, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div
                          className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg"
                          style={{ height: `${(peso / 85) * 100}%` }}
                        ></div>
                        <span className="text-xs text-gray-600">{peso}kg</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Registrar Peso */}
              <Card className="border-2 border-green-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-green-600" />
                    Registrar Peso
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="peso">Peso (kg)</Label>
                      <Input id="peso" type="number" step="0.1" placeholder="78.5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="data">Data</Label>
                      <Input id="data" type="date" />
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Salvar Registro
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sugestões de Refeições */}
              <Card className="border-2 border-blue-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Apple className="w-5 h-5 text-blue-600" />
                    Sugestões de Refeições para Hoje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Café da Manhã</h4>
                        <span className="text-sm text-blue-600 font-medium">420 kcal</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Omelete com 2 ovos, pão integral, abacate e suco de laranja natural
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Almoço</h4>
                        <span className="text-sm text-green-600 font-medium">680 kcal</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Frango grelhado, arroz integral, feijão, salada verde e legumes
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Jantar</h4>
                        <span className="text-sm text-purple-600 font-medium">550 kcal</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Peixe assado, batata doce, brócolis e salada de folhas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
