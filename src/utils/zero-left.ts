export const zeroLeft = (n: number) =>
    Math.floor(n).toString().padStart(2, '0'); // Math.floor arredonda para baixo, padStart coloca um zero a esquerda
