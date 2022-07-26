import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/Moment';

import { MomentService } from 'src/app/services/moment.service';

import { Routes } from '@angular/router';

import {MessagesService} from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText= 'Compartilhar !'; //It is showing in message button


  constructor( private momentService:MomentService, private messageService: MessagesService) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messageService.add("Momentos adicionado com sucesso !!");

   // this.messagesService.add(`Momento adicionado com sucesso!`);

    //this.router.navigate(['/']);
  }

    //await this.momentService.createMoment(formData).subscribe();
}
