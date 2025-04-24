import { Store } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="min-h-screen grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between"></div>
      <div className="flex items-center gap-3 text-lg text-foreground">
        <Store className="h-5 w-5" />
        <span className="font-semibold">delivery.shop</span>
      </div>
      <footer className="text-sm">
        Painel do Parceiro &copy; delivery.shop - {new Date().getFullYear()}
      </footer>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
