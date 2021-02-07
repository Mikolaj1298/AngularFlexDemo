import {Component} from '@angular/core';
import {OptionModel} from './models/option.model';
import {ApartmentModel} from './models/Apartment.model';
import {AddressModel} from './models/Address.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFlexDemo';
  public apartmentList: ApartmentModel[];
  public homeOptions: OptionModel[];
  public appMode: number;
  public newsList: { label: string, id: number }[];
  public messageList: { label: string }[];
  public apartmentsLoading: boolean;

  constructor() {
    this.homeOptions = [{
      label: 'Wyślij zaproszenie',
      description: 'Wybierz lokal \n' +
        'i zaproś osobę',
      icon: 'supervisor_account',
      type: 'invitations',
      compRef: null
    }, {
      label: 'Wzory umów',
      description: 'Przeglądaj',
      icon: 'assignment',
      type: 'contracts',
      compRef: null
    }, {
      label: 'Statystyki',
      description: 'Zobacz szczegóły',
      icon: 'trending_up',
      type: 'invitations',
      compRef: null
    }, {
      label: 'Dodaj',
      description: 'Zobacz szczegóły',
      icon: 'add',
      type: 'invitations',
      compRef: null
    }];
    this.apartmentList = [{
      id: 1,
      maxLocatorsNumber: 4,
      roomsNumber: 2,
      livingArea: 12,
      address: new AddressModel('Polska',
        'Dolnoslaskie',
        'Wrocław',
        'Kilińskiego',
        '12',
        '2')
    }, {
      id: 1,
      maxLocatorsNumber: 4,
      roomsNumber: 2,
      livingArea: 12,
      address: new AddressModel('Polska',
        'Dolnoslaskie',
        'Wrocław',
        'Kilińskiego',
        '12',
        '2')
    }, ];
    this.newsList = [];
    this.messageList = [];
  }
}
