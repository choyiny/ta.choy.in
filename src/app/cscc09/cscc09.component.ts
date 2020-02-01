import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-cscc09',
  templateUrl: './cscc09.component.html',
  styleUrls: ['./cscc09.component.scss']
})
export class Cscc09Component implements OnInit {

  classes: Array<{title: string, subtitle: string, markdownURL: string, released: boolean}> = [
    {title: 'Project', subtitle: 'Technologies', markdownURL: '/assets/notes/cscc09/project.md', released: true}
  ];

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
  }

}
