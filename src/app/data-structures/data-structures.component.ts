import { Component } from '@angular/core';
import { DataStructure } from './DataStructure'; // Adjust the path based on your file's location
import { DATA_STRUCTURES_CONTENT } from './DATA_STRUCTURES_CONTENT';

// ... rest of your component code

@Component({
  selector: 'app-data-structures',
  templateUrl: './data-structures.component.html',
  styleUrls: ['./data-structures.component.css'],
})
export class DataStructuresComponent {
  isExpanded: boolean[] = [];
  currentlyExpanded: number | null = null; // Store the index of the currently expanded item

  toggleItem(index: number) {
    if (this.currentlyExpanded === index) {
      // If the clicked item is the one that's currently expanded, collapse it
      this.isExpanded[index] = false;
      this.currentlyExpanded = null;
    } else {
      // Otherwise, collapse all items
      this.isExpanded.fill(false);

      // And expand the clicked item
      this.isExpanded[index] = true;
      this.currentlyExpanded = index;
    }
  }

  items: DataStructure[] = DATA_STRUCTURES_CONTENT;
  
  public name() {
    console.log('hello');
  }
}
