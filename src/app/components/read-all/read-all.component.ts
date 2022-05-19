import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.scss']
})
export class ReadAllComponent implements OnInit {

  list: Todo[] = [
    {
      titulo: "Teste",
      descricao: "Testando",
      deadLine: new Date,
      finalizada: false
    },
    {
      titulo: "Teste 2",
      descricao: "Testando 2",
      deadLine: new Date,
      finalizada: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
