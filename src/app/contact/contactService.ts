import { Injectable } from '@angular/core';
import { ContactInterface } from './contactInterface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private storageKey = 'contactMessages';
  private contacts: ContactInterface[] = [];
  constructor() {
    this.loadContacts();
  }
  saveContact(contact: Omit<ContactInterface, 'date'>) {
    const newContact: ContactInterface = {
      ...contact,
      date: new Date().toISOString(),
    };
    this.contacts.push(newContact);
    this.saveContactsToLocalStorage();
    console.log('Saved contact:', newContact);
  }
  getContacts(): ContactInterface[] {
    return [...this.contacts];
  }
  private loadContacts() {
    const storedData = localStorage.getItem(this.storageKey);
    if (storedData) {
      try {
        this.contacts = JSON.parse(storedData) as ContactInterface[];
      } catch (e) {
        console.error('Error parsing contacts from local storage', e);
        this.contacts = [];
      }
    } else {
      this.contacts = [];
    }
  }
  private saveContactsToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.contacts));
  }
  clearContacts() {
    this.contacts = [];
    localStorage.removeItem(this.storageKey);
  }
  // The browser console command for deleting:
  // localStorage.removeItem('contactMessages');
}
