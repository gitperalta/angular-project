import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string = 'Anonymous';
  @Output() messageEmitter: EventEmitter<string> = new EventEmitter<string>();

  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeigh: 'bold',
  };

  ngOnInit(): void {
    // Instructions before render the
    console.log('ngOnInit component greeting');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Previous Value', changes['name'].previousValue);
    console.log('New Value', changes['name'].currentValue);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy component finished render');
  }

  // Click type event in DOM & send text to the father component example
  sendMessage(): void {
    // alert(`Hi, ${this.name}. Alert dispatched from a button click.`);
    this.messageEmitter.emit(
      `Hi, ${this.name}. Alert dispatched from a button click.`
    );
  }
}

/**
 * *Components Life Cicle
 *  */

//* 1. ngOnChanges
//* 2. ngOnInit
/// 3. ngAfterContentChecked
/// 5. ngAfterViewInit
/// 6. ngAfterViewChecked
/// 7. ngAfterContentChecked
/// 8. ngAfterViewChecked
//* 9. ngOnDestroy
