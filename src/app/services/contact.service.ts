import { Injectable } from '@angular/core';

// Importing the mock contact list
import { CONTACTS } from '../mocks/contacts.mock';
import { IContact } from '../models/contact.interface';

// Importing an Observable form rxjs
import { Observable, observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  getContacts(): Promise<IContact[]> {
    return Promise.resolve(CONTACTS); // Returns a Contacts List
  }

  getContactById(id: number): Observable<IContact> | undefined {
    // Getting the entire contact by the contact id
    const contact = CONTACTS.find((c: IContact) => c.id === id);

    // Creating an Observable
    let observable: Observable<IContact> = new Observable((observer) => {
      observer.next(contact); // Emit a value to any subscribed component
      observer.complete();
    });

    if (contact) {
      return observable;
    } else {
      return;
    }
  }
}
