export const ALL_TAGS = [
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
  "Todo",
] as const;

export type NoteTag = (typeof ALL_TAGS)[number];

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: NoteTag;
}

export interface CreateNote {
  title: string;
  content: string;
  tag: NoteTag;
}
