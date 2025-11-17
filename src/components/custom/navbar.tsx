"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V+</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Vida+ AI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link href="/funcionalidades" className="text-gray-700 hover:text-blue-600 transition-colors">
              Funcionalidades
            </Link>
            <Link href="/planos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Planos
            </Link>
            <Link href="/login">
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/funcionalidades"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link
              href="/planos"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Planos
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
