//It is needing put Input() in import and aim class
import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { Moment } from 'src/app/Moment';
@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
@Output() onSubmit = new EventEmitter<Moment>()//It is sending data of the form
@Input() btnText!:string;
@Input() momentData: Moment | null = null;//It is working to show edit button.

momentForm!: UntypedFormGroup

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new UntypedFormGroup({// Part  of the fields form
      id:new UntypedFormControl(''),
      title:new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('' ,[Validators.required]),
      image:new UntypedFormControl(''),
    });
  }

  get title(){
    return this.momentForm.get('title')!;
  }

get description(){
  return this.momentForm.get('description')!;
}

  onFileSelected(event:any){  //It/is taking image
    const file: File= event.target.files[0];
    this.momentForm.patchValue({image:file});
  }

  submit(){
    if(this.momentForm.invalid){
      return;
    }
    //console.log("Envio de formulário");
    console.log(this.momentForm.value);
    this.onSubmit.emit(this.momentForm.value);// Data form are transmitting this way
  }

}
