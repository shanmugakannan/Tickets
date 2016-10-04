import {Injectable} from '@angular/core';
import {ApiService} from '../services/api.service';

@Injectable()
export class TicketService{
    constructor(private api:ApiService){}

    getTickets(){
    return this.api.get('ticket/getadmintickets/snatarajapillai');
    }
}

