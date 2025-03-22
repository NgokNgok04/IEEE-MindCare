interface TabIcon {
  focused: boolean;
  icon: any;
  title: string;
}
interface Articles {
  source: any;
  title: string;
}
interface ToggleJournal {
  selected: "recent" | "history";
  setSelected: (value: "recent" | "history") => void;
}
interface HistoryJournal {
  mood: number;
  date: Date;
  textJournal: string;
}
