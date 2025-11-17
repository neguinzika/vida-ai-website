"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrar com API futuramente
    console.log("Formulário enviado")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Voltar */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar para o site</span>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V+</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Vida+ AI
            </span>
          </div>
          <p className="text-gray-600">
            {isLogin ? "Bem-vindo de volta!" : "Crie sua conta gratuitamente"}
          </p>
        </div>

        {/* Card de Login/Cadastro */}
        <Card className="border-2 border-gray-200 shadow-xl">
          <CardHeader className="text-center pb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isLogin ? "Entrar na sua conta" : "Criar nova conta"}
            </h2>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome (apenas no cadastro) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Nome completo
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      className="pl-10 h-12 border-gray-300 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="pl-10 h-12 border-gray-300 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Senha */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 h-12 border-gray-300 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Confirmar Senha (apenas no cadastro) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-gray-700">
                    Confirmar senha
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 h-12 border-gray-300 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Esqueceu a senha (apenas no login) */}
              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                    Esqueceu a senha?
                  </a>
                </div>
              )}

              {/* Botão Submit */}
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                {isLogin ? "Entrar" : "Criar conta"}
              </Button>
            </form>

            {/* Divisor */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">ou</span>
              </div>
            </div>

            {/* Toggle Login/Cadastro */}
            <div className="text-center">
              <p className="text-gray-600">
                {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {isLogin ? "Criar conta" : "Fazer login"}
                </button>
              </p>
            </div>

            {/* Nota sobre API */}
            {!isLogin && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 text-center">
                  Ao criar uma conta, você concorda com nossos{" "}
                  <a href="#" className="underline">Termos de Uso</a> e{" "}
                  <a href="#" className="underline">Política de Privacidade</a>
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Nota de desenvolvimento */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            <strong>Nota:</strong> Esta é uma interface de demonstração. 
            A integração com a API será implementada em breve.
          </p>
        </div>
      </div>
    </div>
  )
}
