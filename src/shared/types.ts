export enum SelectedPage {
  Inicio = "inicio",
  Beneficios = "beneficios",
  Clases = "clases",
  Contáctanos = "contactanos",
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
