// lc-patterns.component.ts
import { Component } from '@angular/core';
import { Pattern } from './lc-patterns.model';
import { LC_PATTERNS_CONTENT } from './LC_PATTERNS_CONTENT';

@Component({
  selector: 'app-lc-patterns',
  templateUrl: './lc-patterns.component.html',
  styleUrls: ['./lc-patterns.component.css'],
})
export class LcPatternsComponent {
  patterns: Pattern[] = LC_PATTERNS_CONTENT;
  isExpanded: boolean[] = [];
  currentlyExpanded: number | null = null;

  togglePattern(index: number) {
    if (this.currentlyExpanded === index) {
      this.isExpanded[index] = false;
      this.currentlyExpanded = null;
    } else {
      this.isExpanded.fill(false);
      this.isExpanded[index] = true;
      this.currentlyExpanded = index;
    }
  }
}
