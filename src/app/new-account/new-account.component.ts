import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
 // providers: [LoggingService],
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService){
    this.accountService.statusUpdated.subscribe(
      (status: string) => {
        alert('NEw Status: ' + status);
      }
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
   // this.loggingService.logStatusChange(accountStatus)
  }
}
