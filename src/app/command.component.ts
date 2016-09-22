import {Component,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'command',
    template:`<div class = "command">
              <button (click)="onAccepted()" md-raised-button>Accept</button>
              <button (click) = "onRejected()" md-raised-button>Reject</button>
              </div>
             `,
    styleUrls: ['./app.component.css']
})

export class CommandComponent {
    @Output() accept = new EventEmitter();
    @Output() reject = new EventEmitter();

    onAccepted() {
        this.accept.next();
    }

    onRejected() {
        this.reject.next();
    }

}


