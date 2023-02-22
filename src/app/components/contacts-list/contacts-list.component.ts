import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit, OnDestroy {
  // Creating a contacts list
  contactsList: IContact[] = [];
  selectedContact: IContact | undefined;

  // Service Subscription
  subscription: Subscription | undefined;

  // Injecting the service in the constructor
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    // Getting the contacts list the service is providing
    this.contactService
      .getContacts()
      .then((contacts: IContact[]) => (this.contactsList = contacts))
      .catch((error) => console.error(`There is an error: ${error}.`))
      .finally(() => console.log(`Contacts List Query finished.`));
  }

  getContactDetail(id: number) {
    // console.log(`Getting the info of the contact${id}`);
    this.subscription = this.contactService
      .getContactById(id)
      ?.subscribe((contact: IContact) => (this.selectedContact = contact));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
