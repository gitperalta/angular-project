import { Component, OnInit } from '@angular/core';

// Base Type for the example

export type Product = {
  name: string;
  price: number;
  description: string;
};

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss'],
})
export class BasicListComponent implements OnInit {
  elementsList: Product[] = [
    {
      name: 'milk',
      price: 10,
      description: 'white milk',
    },
    {
      name: 'meat',
      price: 20,
      description: 'pig meat',
    },
  ];

  loading: boolean = true;

  option: number = 0;

  ngOnInit(): void {}

  loadingChange(): void {
    this.loading = !this.loading;
  }

  chooseOption(chosenOption: number) {
    this.option = chosenOption; // Change in the rendered elements
  }
}
