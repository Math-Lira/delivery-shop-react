import { Link, LinkProps, useLocation } from 'react-router-dom'

export interface NavLinkProps extends LinkProps {}

export function Navlink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 font-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
