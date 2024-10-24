import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice =(price: number)=>{
  const formatter = Intl.NumberFormat('en-Us', {
    style:'currency',
    currency:'USD',
  }) 

  return formatter.format(price)
}
