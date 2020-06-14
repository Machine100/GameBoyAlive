import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameboy',
  templateUrl: './gameboy.component.html',
  styleUrls: ['./gameboy.component.scss']
})
export class GameboyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scramblePattern() {
    console.log('at scramblePattern()')
    for (let i=0; i<9; i++) {
      for (let j=0; j<9; j++) {
        for (let k=0; k<9; k++) {
          const randomNumber = Math.floor(Math.random() * 3)
          const id: string = j.toString() + k.toString()
          console.log('rnd:', randomNumber, 'id:', id)
          if (randomNumber === 0) { document.getElementById(id).style.backgroundColor = '#FAFAFA' }
          if (randomNumber === 1) { document.getElementById(id).style.backgroundColor = '#AAAAAA' }
          if (randomNumber === 2) { document.getElementById(id).style.backgroundColor = '#444444' }
          if (randomNumber === 3) { document.getElementById(id).style.backgroundColor = '#5AA5AA' }

        }
      }
      //@@@ add delay here
    }
  }
}
