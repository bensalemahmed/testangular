import { Component, OnInit } from '@angular/core';
import {TestService } from './test.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private testService: TestService) {}
  // todoForm = new FormGroup({
  //   title: new FormControl('', Validators.required),
  //   desc: new FormControl('', [Validators.required, Validators.maxLength(20)]),

  //   DONE: new FormControl('')
  // });

  datas;
  ngOnInit() {
    this.testService.getTodos().subscribe(res => {
      console.log(res.json()) ;
      this.datas = res.json().data;
  });
}}
