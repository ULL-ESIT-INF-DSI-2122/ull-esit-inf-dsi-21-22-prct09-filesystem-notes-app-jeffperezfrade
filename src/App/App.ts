import * as yargs from 'yargs';
import {TextNotes, colors} from '../TextNotes/TextNotes.class';
/**
 * Creating constants due to Sonar Cloud duplications.
 * Removing the type annotation 'string' due to code s
 */
const noteTitleString = 'Note title';
const userNameString = 'User name';
const noteColorString = 'Note color';
/**
 * TextNotes object.
 */
const textNotes: TextNotes = TextNotes.getNotes();
/**
 * Adding new note command line.
 */
yargs.command({
  command: 'add',
  describe: 'Add new note',
  builder: {
    user: {
      describe: userNameString,
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: noteTitleString,
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: noteColorString,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // Default color: blue.
    let noteColor: colors = colors.blue;
    // Check if the arguments are strings.
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
      describe: userNameString,
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: noteTitleString,
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: noteColorString,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // Default color: blue.
    let noteColor: colors = colors.blue;
    // Check if the arguments are strings.
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
      describe: userNameString,
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: noteTitleString,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // Check if the arguments are strings.
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
      describe: userNameString,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // Check if the arguments are strings.
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
      describe: userNameString,
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: noteTitleString,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // Check if the arguments are strings.
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
