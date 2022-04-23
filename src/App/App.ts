import * as yargs from 'yargs';
import {TextNotes, colors} from '../TextNotes/TextNotes.class';
/**
 * TextNotes object.
 */
const textNotes: TextNotes = TextNotes.getNotes();
/**
 * Creating constants due to Sonar Cloud duplications.
 * Removing the type annotation 'string' due to code s
 */
const noteTitle = 'Note title';
const userName = 'User name';
const noteColor = 'Note color';
/**
 * Adding new note command line.
 */
yargs.command({
  command: 'add',
  describe: 'Add new note',
  builder: {
    user: {
      describe: userName,
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: noteTitle,
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: noteColor,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // Default color: blue.
    let noteColor: colors = colors.blue;
    if (
      typeof argv.color === 'string' &&
      typeof argv.body === 'string' &&
      typeof argv.title === 'string' &&
      typeof argv.user === 'string'
    ) {
      Object.values(colors).forEach((color) => {
        if (argv.color === color) noteColor = color;
      });
      textNotes.addNote(argv.user, argv.title, argv.body, noteColor);
    }
  },
});
/**
 * Modify notes command line.
 */
yargs.command({
  command: 'modify',
  describe: 'Modify note',
  builder: {
    user: {
      describe: userName,
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: noteTitle,
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: noteColor,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // Default color: blue.
    let noteColor: colors = colors.blue;
    if (
      typeof argv.color === 'string' &&
      typeof argv.body === 'string' &&
      typeof argv.title === 'string' &&
      typeof argv.user === 'string'
    ) {
      Object.values(colors).forEach((color) => {
        if (argv.color === color) noteColor = color;
      });
      textNotes.modifyNote(argv.user, argv.title, argv.body, noteColor);
    }
  },
});
/**
 * Delete note command line.
 */
yargs.command({
  command: 'delete',
  describe: 'Delete note',
  builder: {
    user: {
      describe: userName,
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: noteTitle,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (
      typeof argv.title === 'string' &&
      typeof argv.user === 'string'
    ) textNotes.deleteNote(argv.user, argv.title);
  },
});
/**
 * List notes command line.
 */
yargs.command({
  command: 'list',
  describe: 'List all notes',
  builder: {
    user: {
      describe: userName,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') textNotes.listNotes(argv.user);
  },
});
/**
 * Print note command line.
 */
yargs.command({
  command: 'print',
  describe: 'Print note',
  builder: {
    user: {
      describe: userName,
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: noteTitle,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (
      typeof argv.title === 'string' &&
      typeof argv.user === 'string'
    ) textNotes.printNote(argv.user, argv.title);
  },
});
/**
 * Important to process the arguments.
 */
yargs.parse();
