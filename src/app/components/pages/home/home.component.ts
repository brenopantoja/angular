import { Component, OnInit } from '@angular/core';

import {MomentService} from 'src/app/services/moment.service';


import {Moment} from 'src/app/Moment';

import {environment} from 'src/environments/environment';


import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = [];
 // noMoments: Moment[] =[];
  moments: Moment[] =[];

  baseApiUrl = environment.baseApiUrl;

// it is searching
faSearch = faSearch;//It is propriety of the bloom icon
seachTerm: string ="";

  constructor(private momentService: MomentService ) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items)=>{
    const data =  items.data
    data.map((item)=> {
      item.created_at = new Date (item.created_at!).toLocaleDateString(
        'pt-BR'
      );

    });

    this.allMoments= data;
    this.moments = data;
    });
  }
  search(e: Event): void {
    const target = e.target as HTMLInputElement; // It is working search with HTML
    const value = target.value;

    this.moments = this.allMoments.filter((moment) =>

      moment.title.toLowerCase().includes(value)// LowerCase()It is acessing type High case or lower case
    );//includes() It is working search text

  }
}
