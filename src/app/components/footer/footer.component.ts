import { Component, OnInit } from '@angular/core';
import { members } from 'src/app/models/member.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  members: any[] = members;
  selectedLanguage: string;
  languages: any[] = [
    { name: 'English' },
    { name: 'Vietnam' },
    { name: 'Korea' },
    { name: 'Japan' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
