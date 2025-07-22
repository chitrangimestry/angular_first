import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { Component,EventEmitter,Input,Output, computed, input, output} from '@angular/core';

/*
type User = {
  id: string;
  avatar: string;
  name: string;
};*/

interface User {
    id: string;
    avatar: string;
    name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Decorator Approach
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter();

  //Property Approach
  // avatar = input.required<string>();
  // name = input.required<string>();

  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  //Method Approach
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
