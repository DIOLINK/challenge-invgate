export function randomTitle(): string {
  const title: string[] = [
    'La sombra del viento',
    'Cien años de soledad',
    '1984',
    'El principito',
    'Don Quijote de la Mancha',
  ];
  return title[Math.floor(Math.random() * title.length)];
}

export function randomBoolean(): boolean {
  return Math.random() >= 0.5;
}
