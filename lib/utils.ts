import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface FormatCurrencyOptions {
  amount: number
  local?: string
  currency?: string
  decimalPlaces?: number
}

export const formatCurrency = ({
  amount,
  local = 'en-US',
  currency = 'INR',
  decimalPlaces = 2
}: FormatCurrencyOptions) => {
  const formatter = new Intl.NumberFormat(local, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: decimalPlaces
  })

  if (currency === 'INR') {
    amount = amount * 74.28
  }

  return isNaN(amount) ? '--' : formatter.format(amount)
}

export const capitalize = (text: string) => {
  const lower = text.toLowerCase()
  const first = lower.charAt(0).toUpperCase()
  return first + lower.slice(1)
}