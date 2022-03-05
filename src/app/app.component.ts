import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters : boolean = false;
  useNumbers : boolean = false;
  useSymbols : boolean = false;
  pwlength = 8;

  onUseLettersChange() {
    this.useLetters = !this.useLetters;
  }

  onUseNumbersChange() {
    this.useNumbers = !this.useNumbers;
  }

  onUseSymbolsChange() {
    this.useSymbols = !this.useSymbols;
  }

  onLengthChange(event: any) {
    this.pwlength = event.target.value;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.pwlength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
