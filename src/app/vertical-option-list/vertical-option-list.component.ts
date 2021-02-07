import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {OptionModel} from '../models/option.model';
import {MatDialog} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';

@Component({
  selector: 'app-vertical-option-list',
  templateUrl: './vertical-option-list.component.html',
  styleUrls: ['./vertical-option-list.component.scss']
})
export class VerticalOptionListComponent implements OnInit {
  @Input() optionList: OptionModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectOption(type: ComponentType<any>): void {
    // switch (type) {
    //   case 'contracts':
    //     const dialogRef = this.dialog.open(type, {
    //       panelClass: 'transparent-dialog',
    //       width: '70vh',
    //       data: {
    //         mode: 3
    //       }
    //     });
        // dialogRef.componentInstance.close.subscribe(() => {
        //   dialogRef.close();
        // });
    }
  // }

}
