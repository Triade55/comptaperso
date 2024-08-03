import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMontantInCFA(montant: number,devise:boolean=true) {
  const m = new Intl.NumberFormat(["ban", "id"]).format(montant)
  return `${m} ${devise?'FCFA':''}`
}
export function getDate(date:Date) {
  let month = ['Jan','Fev','Mars','Juin','Juillet','Août','Septembre','Octobre','Novembre','Decembre']
  return month[date.getMonth()] + ' ' + date.getDate() + ' , ' + date.getFullYear();
}