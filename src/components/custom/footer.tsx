import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V+</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Vida+ AI
              </span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              Organize sua vida financeira e sua saúde em um só lugar. 
              Tecnologia inteligente para facilitar sua rotina.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/funcionalidades" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="/planos" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Planos
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/login" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vida+ AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
