export interface Evidence {
  id: string;

  title: string;

  type:
    | "image"
    | "log"
    | "reading"
    | "diagram";

  value: string;

  description: string;
}