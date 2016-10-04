import {Component,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'command',
    template:`<div class = "command">
              <button (click)="onProcessTicket('Approved')" color="primary" md-raised-button>Accept</button>
              <button (click) = "onProcessTicket('Rejected')" color="accent" md-raised-button>Reject</button>
              </div>
             `,
    styleUrls: ['./app.component.css']
})

export class CommandComponent {
     @Output() public processTicket = new EventEmitter<string>();

    onProcessTicket(approval:string) {
        console.log(approval)
        this.processTicket.next(approval);
    }
}


