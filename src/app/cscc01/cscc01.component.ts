import { Component, OnInit } from '@angular/core';
import {MarkdownService} from 'ngx-markdown';

@Component({
  selector: 'app-cscc01',
  templateUrl: './cscc01.component.html',
  styleUrls: ['./cscc01.component.scss']
})
export class Cscc01Component implements OnInit {

  classes = [
    {title: 'Week 2', subtitle: 'Using Git and Github', markdownURL: '/assets/notes/cscc01/git.md'},
  ];

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
  }

}
