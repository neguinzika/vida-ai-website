import { Target, Eye, Shield, Smartphone, Zap, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/custom/navbar"
import { Footer } from "@/components/custom/footer"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Sobre o{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Vida+ AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Uma plataforma inteligente que une tecnologia e bem-estar para 
            facilitar sua rotina financeira e de saúde
          </p>
        </div>
      </section>

      {/* O que é */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-blue-100 shadow-lg">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                O que é a API Vida+?
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Vida+ AI é uma plataforma completa que integra gestão financeira pessoal 
                  e acompanhamento de saúde em um único lugar. Nossa API inteligente analisa 
                  seus dados e fornece insights personalizados para melhorar sua qualidade de vida.
                </p>
                <p>
                  Desenvolvida com tecnologia de ponta, a plataforma utiliza algoritmos 
                  inteligentes para categorizar gastos automaticamente, sugerir metas 
                  financeiras realistas e calcular suas necessidades calóricas baseadas 
                  em dados científicos.
                </p>
                <p>
                  Nosso objetivo é simplificar o que é complexo: transformar números e 
                  dados em ações práticas que fazem diferença no seu dia a dia.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Privacidade */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-green-100 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Seus dados são privados
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Levamos sua privacidade a sério. Todos os seus dados são criptografados 
                  e armazenados com segurança. Você tem controle total sobre suas informações 
                  e pode deletá-las a qualquer momento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Não fornecemos diagnósticos
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Vida+ AI é uma ferramenta de organização e acompanhamento, não um 
                  serviço médico. Sempre consulte profissionais de saúde qualificados 
                  para diagnósticos e tratamentos médicos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Facilitar a rotina do usuário através de tecnologia inteligente e acessível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Simplicidade
                </h3>
                <p className="text-gray-600">
                  Transformar dados complexos em informações simples e acionáveis
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Eficiência
                </h3>
                <p className="text-gray-600">
                  Automatizar tarefas repetitivas para você focar no que importa
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Confiança
                </h3>
                <p className="text-gray-600">
                  Garantir segurança e privacidade em todas as suas informações
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visão Futura */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              🚀 Visão Futura
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que vem por aí
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estamos constantemente evoluindo para oferecer a melhor experiência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Aplicativo Mobile
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Em breve, você poderá acessar todas as funcionalidades do Vida+ AI 
                      diretamente do seu smartphone, com notificações em tempo real e 
                      sincronização automática.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Automações Inteligentes
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Planejamos implementar automações que aprendem com seus hábitos, 
                      sugerindo ações proativas para melhorar suas finanças e saúde 
                      de forma ainda mais personalizada.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Insights Avançados
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Análises preditivas que antecipam tendências nos seus gastos e 
                      sugerem ajustes na sua dieta baseados em padrões de comportamento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-100 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Integrações
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Conexão com bancos, cartões de crédito e aplicativos de saúde 
                      para importação automática de dados e experiência ainda mais fluida.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
