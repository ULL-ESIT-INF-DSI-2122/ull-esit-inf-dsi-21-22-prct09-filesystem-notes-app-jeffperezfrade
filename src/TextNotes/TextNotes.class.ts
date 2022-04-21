import * as fs from 'fs';
import * as chalk from 'chalk';
import * as yargs from 'yargs';
/**
 * Enum that contains all the notes colors.
 */
export enum colors {
    green = 'green',
    yellow = 'yellow',
    blue = 'blue',
    red = 'red'
}

export class TextNotes {
  private static notes: TextNotes;

  private constructor() {}

  get notes(): TextNotes {
    if (!fs.existsSync(`./database`)) {
      fs.mkdirSync(`./database`, {recursive: true});
    }
    if (!TextNotes.notes) TextNotes.notes = new TextNotes();
    return TextNotes.notes;
  }

  public static addNote(name: string, title: string, body: string, color: colors): string {
    
  }
}
