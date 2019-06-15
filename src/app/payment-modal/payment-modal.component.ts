import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent implements OnInit {

  progress: number;
  max = 100;
  running: number;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
    const self = this;

    self.progress = 0;
    self.running = setInterval(() => {
      const progress = self.progress + Math.random() * 40 + 10;
      if (progress > self.max) {
        self.progress = 100;
        clearInterval(self.running);
        self.running = undefined;
      } else {
        self.progress = progress;
      }
    }, Math.random() * 2000);
  }

}
