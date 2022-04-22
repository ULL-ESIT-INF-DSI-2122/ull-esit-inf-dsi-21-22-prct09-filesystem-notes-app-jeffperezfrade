import * as yargs from 'yargs';
import {TextNotes, colors} from '../TextNotes/TextNotes.class';
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
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
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
        if (argv.color == color) {
          noteColor = color;
        }
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
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
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
        if (argv.color == color) {
          noteColor = color;
        }
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
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (
      typeof argv.title === 'string' &&
      typeof argv.user === 'string'
    ) {
      textNotes.deleteNote(argv.user, argv.title);
    }
  },
});
/**
 * List notes commnad line.
 */
yargs.command({
  command: 'list',
  describe: 'List all notes',
  builder: {
    user: {
      describe: 'User name',
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
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
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
