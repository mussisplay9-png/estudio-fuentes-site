import { CONTACT_EMAIL, WHATSAPP_NUMBER, mailtoSubject, whatsappMessage, type Lang } from '../data/site';

export function getWhatsAppLink(lang: Lang): string {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, '');
  if (digits) {
    return `https://wa.me/${digits}?text=${encodeURIComponent(whatsappMessage[lang])}`;
  }
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailtoSubject[lang])}`;
}
