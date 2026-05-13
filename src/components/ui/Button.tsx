import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-flamingo text-white hover:bg-flamingo-dark shadow-sm hover:shadow": variant === "default",
            "bg-red-500 text-white hover:bg-red-600": variant === "destructive",
            "border border-input bg-background hover:bg-gray-100 hover:text-ink": variant === "outline",
            "bg-gray-100 text-ink hover:bg-gray-200": variant === "secondary",
            "hover:bg-gray-100 hover:text-ink": variant === "ghost",
            "underline-offset-4 hover:underline text-indigo-600": variant === "link",
            "h-10 px-6 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-12 px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
