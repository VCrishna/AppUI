import { Component } from '@angular/core';

@Component({
  selector: 'app-lc-patterns',
  templateUrl: './lc-patterns.component.html',
  styleUrls: ['./lc-patterns.component.css'],
})
export class LcPatternsComponent {
  items: any[] = [];
  isExpanded = new Array(this.items.length).fill(false);

  toggleItem(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];
  }
}
