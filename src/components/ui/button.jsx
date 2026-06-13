import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-normal ring-offset-background transition-[transform,background-color,color,border-color] duration-200 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Action Blue pill — the signature Apple action
        default: "rounded-full bg-primary text-primary-foreground hover:bg-primary/90",
        // Subtle destructive utility
        destructive:
          "rounded-full border border-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground",
        // Ghost pill: transparent with a blue ring
        outline:
          "rounded-full border border-primary text-primary bg-transparent hover:bg-primary/5",
        secondary:
          "rounded-sm bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Quiet utility action
        ghost: "rounded-sm text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-11 px-7",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
