export function translateNum(num) {
  if (typeof num !== "number") return num;

  if (num < 10000) return num;
  if (num > 10000 && num < 100000) return (num/10000).toFixed(1) + '万';
  if (num > 100000 && num < 100000000) return Math.round(num/10000) + '万';
  return (num/100000000).toFixed(1) + '亿'
}