import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
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

export function constructMetadata({
  title = 'CaseCobra - Custom high-quality phone-cases',
  description = 'Create custom high-quality phone cases in seconds',
  image = '/public/thumbnail.png',
  icons = '/src/app/favicon.ico'
}: {
    title?: string,
    description?: string,
    image?: string,
    icons?: string
  } = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images:[{url: image}]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@anonymia007'
    },
    icons,
    metadataBase: new URL('https://fone-case-shop.vercel.app')
  }
}
