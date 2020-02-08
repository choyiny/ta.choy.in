import { Component, OnInit } from '@angular/core';
import {MarkdownService} from 'ngx-markdown';

@Component({
  selector: 'app-cscd01',
  templateUrl: './cscd01.component.html',
  styleUrls: ['./cscd01.component.scss']
})
export class Cscd01Component implements OnInit {

  classes: Array<{title: string, subtitle: string, markdownURL: string, released: boolean}> = [
    {title: 'Project', subtitle: 'Open Source Projects', markdownURL: '/assets/notes/cscd01/project.md', released: true}
  ];

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
  }

}
