import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    tickets: Ticket[] = [
        {"id":183458,
        "targeturl":"paypal.com",
        "vanityurl":"vanity.com",
        "executor":"snatarajapillai"
         },
        {"id":232522,
         "targeturl":"paypalcorp.com",
         "vanityurl":"mytool.com/sdfsdf/sdf/sdf/qwewqe/234234324324324232432432/dsfsfdsfasfa/12343q4q43q",
         "executor":"miklu"
         },

        {"id":542522,
            "targeturl":"paypalcorp.com",
            "vanityurl":"rams.mytool.com",
            "executor":"naseetharaman"
        },
        {"id":542522,
            "targeturl":"paypalcorp.com",
            "vanityurl":"rams.mytool.com",
            "executor":"naseetharaman"
        },
        {"id":272522,
            "targeturl":"corp.com",
            "vanityurl":"mytool.bridge.com",
            "executor":"mfrank"
        },
        {"id":542522,
            "targeturl":"paypalcorp.com",
            "vanityurl":"rams.mytool.com",
            "executor":"naseetharaman"
        },
        {"id":642522,
            "targeturl":"paypalcorp.com",
            "vanityurl":"mytool.com",
            "executor":"naseetharaman"
        }
    ]

    OnProcessTicket(index:number)
    {
        console.log(index);
        this.tickets.splice(index,1);
    }
}

export class Ticket{
    id: number;
    targeturl: string;
    vanityurl :string;
    executor:string;
}



