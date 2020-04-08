import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  value = false;
  msg = 'Love';
  name = 'list';
  direct = ['ok', 'value', 'this'];
  status = Math.random() > 0.5 ? 'Online' : 'Offline';
  constructor() {
    setTimeout(
      () => { this.value = true; }, 2000);
  }

  ngOnInit() {
  }
  getValue(e: any) {
    console.log(e.target.value);
    this.msg = e.target.value;

  }
  getColour() {
    return this.status === 'Online' ? 'green' : 'red';
  }
  changeText() {
    this.msg = 'What is my name';
  }
}
