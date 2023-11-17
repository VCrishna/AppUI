import { GithubService } from '../service/github.service';
import { Component, OnInit } from '@angular/core';
import { LeetCodeQuestion } from './LeetCodeQuestion';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-leetcode',
  templateUrl: './leetcode.component.html',
  styleUrls: ['./leetcode.component.css'],
})
export class LeetcodeComponent implements OnInit {
  leetCodeQuestions: LeetCodeQuestion[] = [];
  selectedQuestion: LeetCodeQuestion | null = null;
  questionContent: string = '';
  solutionContent: string = '';

  questionContentSafe?: SafeHtml;
  solutionContentSafe?: SafeHtml;

  constructor(
    private githubService: GithubService,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.githubService.getFileContent().subscribe((dirs) => {
      dirs.forEach((dir: any) => {
        const splitName = dir.name.split('-');
        const question: LeetCodeQuestion = {
          number: parseInt(splitName[0], 10),
          name: splitName.slice(1).join('-'),
          link: `https://github.com/VCrishna/LeetCode/tree/main/${dir.name}`,
          readmeUrl: dir.path + '/README.md',
          solutionUrl: dir.path + '/' + splitName.slice(1).join('-') + '.java',
        };
        this.leetCodeQuestions.push(question);
      });
      // Sort the leetCodeQuestions array based on the question number in ascending order
      this.leetCodeQuestions.sort((a, b) => a.number - b.number);

      console.log(this.leetCodeQuestions);
    });
  }

  onSelectQuestion(question: LeetCodeQuestion): void {
    this.renderer.addClass(this.document.body, 'no-scroll');
    this.selectedQuestion = question;
    this.githubService.getFileContent(question.readmeUrl).subscribe((data) => {
      this.questionContent = atob(data.content);
      this.questionContentSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.questionContent
      );
    });
    this.githubService
      .getFileContent(question.solutionUrl)
      .subscribe((data) => {
        this.solutionContent = atob(data.content);
        this.solutionContentSafe = this.sanitizer.bypassSecurityTrustHtml(
          this.solutionContent
        );
      });
  }
  closeQuestion(): void {
    this.selectedQuestion = null;
    this.renderer.removeClass(this.document.body, 'no-scroll');
  }
  closeOnOutsideClick(event: MouseEvent): void {
    const modalContent = document.querySelector('.modal-content');
    if (
      modalContent &&
      !this._isDescendant(
        modalContent as HTMLElement,
        event.target as HTMLElement
      )
    ) {
      this.closeQuestion();
    }
  }

  // Adjust the function signature to accept nullable HTMLElement
  private _isDescendant(
    parent: HTMLElement | null,
    child: HTMLElement | null
  ): boolean {
    let node: HTMLElement | null = child;
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentElement;
    }
    return false;
  }
}
