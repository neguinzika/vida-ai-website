import Link from "next/link"
import { Check, Sparkles, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Navbar } from "@/components/custom/navbar"
import { Footer } from "@/components/custom/footer"

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Escolha o plano{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              ideal para você
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comece gratuitamente e evolua conforme suas necessidades
          </p>
        </div>
      </section>

      {/* Planos */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Grátis */}
            <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Plano Grátis
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">R$ 0</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-gray-600">
                  Perfeito para começar
                </p>
              </CardHeader>
              <CardContent className="px-6 pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Até 10 transações por mês</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Análise básica de gastos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Registro de peso semanal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Cálculo de calorias básico</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-50">
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gray-400 text-xs">✕</span>
                    </div>
                    <span className="text-gray-500">Relatórios avançados</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-50">
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gray-400 text-xs">✕</span>
                    </div>
                    <span className="text-gray-500">Sugestões de refeições</span>
                  </li>
                </ul>
                <Link href="/login" className="block">
                  <Button className="w-full" variant="outline" size="lg">
                    Começar grátis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Mensal */}
            <Card className="border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Mais Popular
                </span>
              </div>
              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Plano Mensal
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">R$ 6,90</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-gray-600">
                  Acesso completo ao financeiro
                </p>
              </CardHeader>
              <CardContent className="px-6 pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Transações ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Análise avançada de gastos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Projeção de metas financeiras</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Alertas inteligentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Relatórios completos</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-50">
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gray-400 text-xs">✕</span>
                    </div>
                    <span className="text-gray-500">Módulo de saúde completo</span>
                  </li>
                </ul>
                <Link href="/login" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600" size="lg">
                    Assinar agora
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Completo */}
            <Card className="border-2 border-green-500 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Plano Completo
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">R$ 9,90</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-gray-600">
                  Financeiro + Saúde completo
                </p>
              </CardHeader>
              <CardContent className="px-6 pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Tudo do Plano Mensal +</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Módulo de saúde completo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Sugestões de refeições ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Registro diário de peso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Gráficos avançados de evolução</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Suporte prioritário</span>
                  </li>
                </ul>
                <Link href="/login" className="block">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600" size="lg">
                    Assinar agora
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Posso cancelar a qualquer momento?
                  </h3>
                  <p className="text-gray-600">
                    Sim! Você pode cancelar sua assinatura a qualquer momento sem custos adicionais. 
                    Seu acesso continuará até o final do período pago.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Como funciona o período de teste?
                  </h3>
                  <p className="text-gray-600">
                    O Plano Grátis não tem limite de tempo. Você pode usar indefinidamente 
                    e fazer upgrade quando quiser para desbloquear mais funcionalidades.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Posso mudar de plano depois?
                  </h3>
                  <p className="text-gray-600">
                    Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                    As mudanças entram em vigor imediatamente.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Meus dados ficam salvos se eu cancelar?
                  </h3>
                  <p className="text-gray-600">
                    Sim! Seus dados ficam salvos por 90 dias após o cancelamento. Se você 
                    reativar nesse período, tudo estará lá esperando por você.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
