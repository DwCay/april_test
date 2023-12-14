import placeholder from '../assets/placeholder.png'
export function imageСheck(url: string): string {
  const arrUrl = url.split('/');
  const isCorrectUrl = (url.includes('https://') || url.includes('http://')) && !arrUrl[arrUrl.length - 1].includes('any')
  return isCorrectUrl ? url : placeholder;
}