export type Navigation = {
  navigate: (scene: string) => void;
};

export type Navigation2 = {
  navigate: (scene: string, boardId: number) => void;
};

export type Navigation3 = {
  navigate3: (scene: string, boardId: number) => number;
};