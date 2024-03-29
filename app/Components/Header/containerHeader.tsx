import { ReactNode } from 'react'

export function HeaderContainer({ children }: { children: ReactNode }) {
  return (
    <>
    <header className="sticky top-0 z-30 h-20 w-full  py-3 bg-gray-50   w-full border-b border-b-1 border-gray-200">
      {children}
    </header>

    </>
  )
}