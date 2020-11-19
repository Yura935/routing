import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-cenzor',
  templateUrl: './works-cenzor.component.html',
  styleUrls: ['./works-cenzor.component.scss']
})
export class WorksCenzorComponent implements OnInit {
  word = '';
  text = '';
  badWords = 'java, tottenham';
  wordBorderColor = 'gray';
  textBorderColor = 'gray';
  inputPlaceholder = 'word here...';
  areaPlaceholder = 'text here...';
  constructor() { }

  ngOnInit(): void {
  }

  addWord(): void {
    if (this.word.length > 0) {
      if (this.badWords.length == 0) {
        this.badWords += `${this.word}`;
      }
      else {
        this.badWords += `, ${this.word}`;
      }
      this.word = '';
      this.wordBorderColor = 'gray';
      this.inputPlaceholder = 'word here...'
    }
    else {
      this.wordBorderColor = 'red';
      this.inputPlaceholder = 'Please write a word!'
    }
  }
  reset(): void {
    this.badWords = '';
  }
  clear(): void{
    this.text = '';
    this.textBorderColor = 'gray';
  }
  cenzor(): void {
    if (this.text.length > 0) {
      let str = this.text.split(' ');
      let words = this.badWords.split(', ');
      for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < words.length; j++) {
          if (str[i] == words[j]) {
            let length = str[i].length
            str[i] = '';
            for (let k = 0; k < length; k++) {
              str[i] += '*';
            }
          }
          else {
            str[i] = str[i];
          }
        }
        this.text = '';
        str.forEach(element => {
          this.text += `${element} `;
        });

        this.textBorderColor = 'green';
        this.areaPlaceholder = 'text here...'
      }
    }
    else {
      this.text = '';
      this.textBorderColor = 'red';
      this.areaPlaceholder = 'Please write a word!'
    }
  }
}
