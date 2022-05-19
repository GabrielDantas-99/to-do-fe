import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.scss']
})
export class ReadAllComponent implements OnInit {

  finished = 0;
  list: Todo[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
      this.countFinished();
    })
  }

  countFinished(): void {
    for (let todo of this.list) {
      if (todo.finalizada) {
        this.finished++
      }
    }
  }

}
