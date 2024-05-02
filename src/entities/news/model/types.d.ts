export interface INews {
  id: number;
  title: string;
  by: string;
  kids?: number[];
  type: string;
  url: string;
  time: number;
  text?: string;
  parent?: string;
  score?: number;
}

export type IComment = Exclude<INews, 'url', 'score'>