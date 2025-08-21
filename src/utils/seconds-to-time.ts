export function secondsToTime(seconds: number): string {
    const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0'); // Math.floor arredonda para baixo, padStart coloca um zero a esquerda
    const min = zeroLeft((seconds / 60) % 60);
    const sec = zeroLeft((seconds % 60) % 60);

    return `${min}:${sec}`;
}
