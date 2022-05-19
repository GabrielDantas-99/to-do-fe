import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.scss']
})
export class ReadAllComponent implements OnInit {

  finished = 0;
  listFinished: Todo[] = [];
  list: Todo[] = [];

  constructor(private service: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(todo => {
        if (todo.finalizada) {
          this.listFinished.push(todo);
        } else {
          this.list.push(todo);
        }
      })
      this.finished = this.listFinished.length
    })
  }

  finalizar(item: Todo): void {
    item.finalizada = true;
    this.service.update(item).subscribe(() => {
      this.service.message('Task finalizada com sucesso!');
      this.list = this.list.filter(todo => todo.id !== item.id);
      this.finished++
    })
  }

  delete(id: any): void {
    this.service.delete(id).subscribe((resposta) => {
      if (resposta === null) {
        this.service.message('Task deletada com sucesso!');
        this.list = this.list.filter(todo => todo.id !== id);
      }
    })
  }

  finalizados(): void {
    this.router.navigate(['finalizados'])
  }

}
