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
        expect(notes.addNote('Jeff', 'Second attempt', 'Hello, I am Jeff', colors.green)).to.be.equal('New note added! with title: Second attempt.');
      });
    });
  });
});
