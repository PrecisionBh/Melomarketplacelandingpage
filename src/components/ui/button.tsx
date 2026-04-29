import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-semibold transition rounded-xl"

    const variants = {
      default: "bg-primary text-white hover:opacity-90",
      outline: "border border-border bg-background hover:bg-secondary",
      ghost: "hover:bg-secondary",
    }

    const sizes = {
      default: "px-4 py-2",
      sm: "px-4 py-2 text-sm",
      lg: "h-14 px-8 text-base",
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"