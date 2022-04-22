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

  public static getNotes(): TextNotes {
    if (!fs.existsSync(`./database`)) {
      fs.mkdirSync(`./database`, {recursive: true});
    }
    if (!TextNotes.notes) TextNotes.notes = new TextNotes();
    return TextNotes.notes;
  }

  public addNote(name: string, title: string, body: string, color: colors): string {
    const joinTitle = title.split(' ').join('');
    const fileStructure = `{ "title": "${title}", "body": "${body}" , "color": "${color}" }`;
    // Check if the user exists already.
    if (fs.existsSync(`.database/${name}`) == true) {
      // Check if the title already exists.
      if (fs.existsSync(`./database/${name}/${joinTitle}.json`) == false) {
        // We add it with the structure
        fs.writeFileSync(`./database/${name}/${joinTitle}.json`, fileStructure);
        console.log(chalk.green(`New note added! with title: ${title}.`));
        return `New note added! with title: ${title}.`;
      } else {
        console.log(chalk.red(`Error: Note title taken!`));
        return `Error: Note title taken!`;
      }
    } else {
      fs.mkdirSync(`./database/${name}`, {recursive: true});
      fs.writeFileSync(`./database/${name}/${joinTitle}.json`, fileStructure);
      console.log(chalk.green(`New note added! with title: ${title}.`));
      return `New note added! with title: ${title}.`;
    }
  }
  public modifyNote(name: string, title: string, body: string, color: colors): string {
    const joinTitle = title.split(' ').join('');
    const fileStructure = `{ "title": "${title}", "body": "${body}" , "color": "${color}" }`;
    // Check if user exists already.
    if (fs.existsSync(`./database/${name}`) == true) {
      if (fs.existsSync(`./database/${name}/${joinTitle}.json`) == true) {
        // Modifing note.
        fs.writeFileSync(`./database/${name}/${joinTitle}.json`, fileStructure);
        console.log(chalk.green(`Successfully modified note! with title: ${title}`));
        return `Successfully modified note! with title: ${title}`;
      } else {
        console.log(chalk.red(`Error: Title does not exist!`));
        return `Error: Title does not exist!`;
      }
    } else {
      console.log(chalk.red(`Error: User not found!`));
      return `Error: User not found!`;
    }
  }
  public deleteNote(name: string, title: string): string {
    const joinTitle = title.split(' ').join('');
    // Check if the user exists already.
    if (fs.existsSync(`./database/${name}`) == true) {
      // Check if the title exists.
      if (fs.existsSync(`./database/${name}/${joinTitle}.json`) == true) {
        // Delete the file
        fs.rmSync(`./database/${name}/${joinTitle}.json`);
        console.log(chalk.green(`Note deleted! with title ${title}`));
        return `Note deleted! with title ${title}`;
      } else {
        // Error if the title does not exist.
        console.log(chalk.red(`Error: Title does not exist!`));
        return `Error: Title does not exist!`;
      }
    } else {
      // Error if the user does not exist.
      console.log(chalk.red(`Error: User not found!`));
      return `Error: User not found!`;
    }
  }
  public listNotes(name: string): string {
    // Check if user exists
    if (fs.existsSync(`./database/${name}`) == true) {
      console.log(chalk.white('Your notes: ' + '\n'));
      let fileNames: string = '';
      // Find all notes
      fs.readdirSync(`./database/${name}/`).forEach((note) => {
        const data = fs.readFileSync(`./database/${name}/${note}`);
        const dataJSON = JSON.parse(data.toString());
        console.log(chalk.keyword(dataJSON.color)(`- ${dataJSON.title}` + '\n'));
        fileNames += `- ${dataJSON.title}` + '\n';
      });
      return fileNames;
    } else {
      console.log(chalk.red(`Error: User not found!`));
      return `Error: User not found!`;
    }
  }
}
