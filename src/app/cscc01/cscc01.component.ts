import { Component, OnInit } from '@angular/core';
import {MarkdownService} from 'ngx-markdown';
import {MatBottomSheet} from '@angular/material';
import {AttendanceComponent} from './attendance/attendance.component';

@Component({
  selector: 'app-cscc01',
  templateUrl: './cscc01.component.html',
  styleUrls: ['./cscc01.component.scss']
})
export class Cscc01Component implements OnInit {

  classes: Array<{title: string, subtitle: string, markdownURL: string, released: boolean}> = [
    {title: 'Week 2', subtitle: 'Using Git and Github', markdownURL: '/assets/notes/cscc01/git.md', released: true},
    {title: 'Week 3', subtitle: 'User Stories', markdownURL: '/assets/notes/cscc01/agile.md', released: true},
    {title: 'Week 4', subtitle: 'REST', markdownURL: '/assets/notes/cscc01/rest.md', released: true},
    {title: 'Week 5', subtitle: 'Practicing Scrum', markdownURL: '/assets/notes/cscc01/scrum.md', released: true},
    {title: 'Week 6', subtitle: 'neo4j', markdownURL: '/assets/notes/cscc01/neo.md', released: false},
  ];

  constructor(
    private markdownService: MarkdownService,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {

  }

  openBottom(): void {
    this.bottomSheet.open(AttendanceComponent);
  }

}
