import { Component, OnInit } from '@angular/core';
import { Algorithm } from './algorithm.model';
import { ALGORITHMS_CONTENT } from './algorithms-content';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css'],
})
export class AlgorithmsComponent implements OnInit {
  categories: string[] = Array.from(
    new Set(ALGORITHMS_CONTENT.map((algo) => algo.category))
  );

  algorithms: Algorithm[] = ALGORITHMS_CONTENT;

  isCategoryExpanded: { [category: string]: boolean } = {};
  isAlgorithmExpanded: { [algorithmName: string]: boolean } = {};

  ngOnInit(): void {
    // Initialization logic, if needed, can be added here
  }

  toggleCategory(category: string): void {
    this.isCategoryExpanded[category] = !this.isCategoryExpanded[category];
  }

  toggleAlgorithm(algorithmName: string): void {
    console.log(algorithmName);
    this.isAlgorithmExpanded = {
      ...this.isAlgorithmExpanded,
      [algorithmName]: !this.isAlgorithmExpanded[algorithmName],
    };
  }
}
