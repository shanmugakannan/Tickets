import { Component } from '@angular/core'

@Component({
  selector:'inputform',
  template:`
<form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
<div ngModelGroup="search" name="searchby">
<input type = "text" name="searchById" required minlength="3" [(ngModel)]="searchId"
#searchRef = "ngModel">
<input type = "text" name="searchByName" required minlength="3" [(ngModel)]="searchName"
#searchRef = "ngModel">
</div>
<div *ngIf = searchRef.errors?.required>Required</div>
<div *ngIf = searchRef.errors?.minlength>Minimum {{searchRef.errors?.minlength.requiredLength}} characters</div>
<button type="submit">Submit</button>
</form>
`
})
export class InputComponent{
  searchId:string = "2"
  searchName:string = "Ticket"
  onSubmit(formValue){
    console.log(formValue);
  }
}
