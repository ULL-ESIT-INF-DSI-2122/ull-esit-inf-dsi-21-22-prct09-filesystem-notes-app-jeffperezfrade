import 'mocha';
import * as fs from 'fs';
import {expect} from 'chai';
import {TextNotes, colors} from '../src/TextNotes/TextNotes.class';

describe('Practica 9 - Tests', () => {
  const notes: TextNotes = TextNotes.getNotes();
  describe('TextNotes class tests', () => {
    it('The object \'notes\' is not null', () => {
      expect(notes).not.to.be.equal(null);
    });
    it('getNotes() function returns \'notes\'', () => {
      expect(TextNotes.getNotes()).to.be.eql(notes);
    });

    describe('addNote() method tests', ()=> {
      it('notes.addNote() returns New note added! with title: First attempt.', () => {
        expect(notes.addNote('Jeff', 'First attempt', 'Hello, I am Jeff', colors.green)).to.be.equal('New note added! with title: First attempt.');
      });
      it('notes.addNote() returns New note added! with title: Second attempt.', () => {
        expect(notes.addNote('Jeff', 'Second attempt', 'Hello, I am Jeff', colors.blue)).to.be.equal('New note added! with title: Second attempt.');
      });
      it('notes.addNote() returns New note added! with title: Third attempt.', () => {
        expect(notes.addNote('Jack', 'Third attempt', 'Hello, I am Jack', colors.yellow)).to.be.equal('New note added! with title: Third attempt.');
      });
      it('notes.addNote() returns Error: Note title taken!', () => {
        expect(notes.addNote('Jeff', 'First attempt', 'Hello, I am Jeff', colors.green)).to.be.equal('Error: Note title taken!');
      });
    });

    describe('modifyNote() method tests', () => {
      it('notes.modifyNote() returns Successfully modified note! with title: First attempt', () => {
        expect(notes.modifyNote('Jeff', 'First attempt', 'Hi, Jeff is my name', colors.red)).to.be.equal('Successfully modified note! with title: First attempt');
      });
      it('notes.modifyNote() returns Error: User not found!', () => {
        expect(notes.modifyNote('Erick', 'First attempt', 'Hi Erick', colors.blue)).to.be.equal('Error: User not found!');
      });
      it('notes.modifyNote() returns Error: Title does not exist!', () => {
        expect(notes.modifyNote('Jeff', 'Fifth attempt', 'Hi, Jeff is my name', colors.red)).to.be.equal('Error: Title does not exist!');
      });
    });

    describe('deleteNote() method tests', () => {
      it('notes.deleteNote() should return:  Note deleted! with title: First attempt', () => {
        expect(notes.deleteNote('Jeff', 'First attempt')).to.be.equal('Note deleted! with title: First attempt');
      });
      it('notes.deleteNote() should return:  Error: Title does not exist!', () => {
        expect(notes.deleteNote('Jeff', 'Fourth attempt')).to.be.equal('Error: Title does not exist!');
      });
      it('notes.deleteNote() should return:  Error: User not found!', () => {
        expect(notes.deleteNote('Jake', 'First attempt')).to.be.equal('Error: User not found!');
      });
    });
  });
});

fs.rmdirSync('./database', {recursive: true});
