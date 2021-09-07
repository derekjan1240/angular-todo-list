// export interface Task {
//   id?: number;
//   text: string;
//   isChecked: boolean;
// }

export class Task {
  id?: Number;
  text: String;
  isChecked: Boolean;

  constructor(id: Number, text: String = '', isChecked = false) {
    this.id = id;
    this.text = text;
    this.isChecked = isChecked;
  }
}
