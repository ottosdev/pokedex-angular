export function putZerosLeft(str: string | number, size = 3): string {
  let s = String(str);
  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s;
}

export function randomColors(opacidade = 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}
