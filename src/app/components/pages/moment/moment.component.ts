import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

import{ ActivatedRoute} from '@angular/router';

import {MomentService}  from 'src/app/services/moment.service';

import { MessagesService } from 'src/app/services/messages.service';

import { Router } from '@angular/router';

import { CommentService } from 'src/app/services/comment/comment.service';

import { Coment } from 'src/app/Coment';

import {Moment} from 'src/app/Moment';

import { environment } from 'src/environments/environment';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
moment?:Moment;
baseApiUrl = environment.baseApiUrl;

faTimes = faTimes;
faEdit = faEdit;

commentForm! : FormGroup;
  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private commentService: CommentService

    ) {
       }
    //It is working with id of the URL
/*
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService
    .getMoment(id)
    .subscribe((item)=> (this.moment = item.data));
  }*/
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    });

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
  }


 // It is deleting the user id:


 async removeHandler(id: number) {
  if (id) {
    await this.momentService.removeMoment(id).subscribe();

    this.messagesService.add(`Momento excluído com sucesso!`);

    this.router.navigate(['/']);
  }
}
// It is using to comment form
  get text(){
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }


  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return;
    }

    const data: Coment = this.commentForm.value;

    data.momentId = Number(this.moment!.id);

    await this.commentService
      .createComment(data)
      .subscribe((coment) => this.moment!.comments!.push(coment.data));

    this.messagesService.add(`Comentário adicionado!`);

    this.commentForm.reset();

    formDirective.resetForm();
  }

}





