/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare module GoogleAppsScript {
  export module Contacts {
    /**
     * Address field in a contact.
     */
    export interface AddressField {
      deleteAddressField(): void;
      getAddress(): String;
      getLabel(): Object;
      isPrimary(): Boolean;
      setAddress(address: String): AddressField;
      setAsPrimary(): AddressField;
      setLabel(field: Field): AddressField;
      setLabel(label: String): AddressField;
    }

    /**
     * This class allows users to access their own Google Contacts and create, remove, and update
     *  contacts listed therein.
     */
    export interface ContactsApp {
      ExtendedField: ExtendedField
      Field: Field
      Gender: Gender
      Month: Base.Month
      Priority: Priority
      Sensitivity: Sensitivity
      createContact(givenName: String, familyName: String, email: String): Contact;
      createContactGroup(name: String): ContactGroup;
      deleteContact(contact: Contact): void;
      deleteContactGroup(group: ContactGroup): void;
      getContact(emailAddress: String): Contact;
      getContactById(id: String): Contact;
      getContactGroup(name: String): ContactGroup;
      getContactGroupById(id: String): ContactGroup;
      getContactGroups(): ContactGroup[];
      getContacts(): Contact[];
      getContactsByAddress(query: String): Contact[];
      getContactsByAddress(query: String, label: Field): Contact[];
      getContactsByAddress(query: String, label: String): Contact[];
      getContactsByCompany(query: String): Contact[];
      getContactsByCustomField(query: Object, label: ExtendedField): Contact[];
      getContactsByDate(month: Base.Month, day: Integer, label: Field): Contact[];
      getContactsByDate(month: Base.Month, day: Integer, year: Integer, label: Field): Contact[];
      getContactsByDate(month: Base.Month, day: Integer, year: Integer, label: String): Contact[];
      getContactsByDate(month: Base.Month, day: Integer, label: String): Contact[];
      getContactsByEmailAddress(query: String): Contact[];
      getContactsByEmailAddress(query: String, label: Field): Contact[];
      getContactsByEmailAddress(query: String, label: String): Contact[];
      getContactsByGroup(group: ContactGroup): Contact[];
      getContactsByIM(query: String): Contact[];
      getContactsByIM(query: String, label: Field): Contact[];
      getContactsByIM(query: String, label: String): Contact[];
      getContactsByJobTitle(query: String): Contact[];
      getContactsByName(query: String): Contact[];
      getContactsByName(query: String, label: Field): Contact[];
      getContactsByNotes(query: String): Contact[];
      getContactsByPhone(query: String): Contact[];
      getContactsByPhone(query: String, label: Field): Contact[];
      getContactsByPhone(query: String, label: String): Contact[];
      getContactsByUrl(query: String): Contact[];
      getContactsByUrl(query: String, label: Field): Contact[];
      getContactsByUrl(query: String, label: String): Contact[];
      findByEmailAddress(email: String): Contact;
      findContactGroup(name: String): ContactGroup;
      getAllContacts(): Contact[];
    }

    /**
     * A Contact contains the name, address, and various contact details of a contact.
     */
    export interface Contact {
      addAddress(label: Object, address: String): AddressField;
      addCompany(company: String, title: String): CompanyField;
      addCustomField(label: Object, content: Object): CustomField;
      addDate(label: Object, month: Base.Month, day: Integer, year: Integer): DateField;
      addEmail(label: Object, address: String): EmailField;
      addIM(label: Object, address: String): IMField;
      addPhone(label: Object, number: String): PhoneField;
      addToGroup(group: ContactGroup): Contact;
      addUrl(label: Object, url: String): UrlField;
      deleteContact(): void;
      getAddresses(): AddressField[];
      getAddresses(label: Object): AddressField[];
      getCompanies(): CompanyField[];
      getContactGroups(): ContactGroup[];
      getCustomFields(): CustomField[];
      getCustomFields(label: Object): CustomField[];
      getDates(): DateField[];
      getDates(label: Object): DateField[];
      getEmails(): EmailField[];
      getEmails(label: Object): EmailField[];
      getFamilyName(): String;
      getFullName(): String;
      getGivenName(): String;
      getIMs(): IMField[];
      getIMs(label: Object): IMField[];
      getId(): String;
      getInitials(): String;
      getLastUpdated(): Date;
      getMaidenName(): String;
      getMiddleName(): String;
      getNickname(): String;
      getNotes(): String;
      getPhones(): PhoneField[];
      getPhones(label: Object): PhoneField[];
      getPrefix(): String;
      getPrimaryEmail(): String;
      getShortName(): String;
      getSuffix(): String;
      getUrls(): UrlField[];
      getUrls(label: Object): UrlField[];
      removeFromGroup(group: ContactGroup): Contact;
      setFamilyName(familyName: String): Contact;
      setFullName(fullName: String): Contact;
      setGivenName(givenName: String): Contact;
      setInitials(initials: String): Contact;
      setMaidenName(maidenName: String): Contact;
      setMiddleName(middleName: String): Contact;
      setNickname(nickname: String): Contact;
      setNotes(notes: String): Contact;
      setPrefix(prefix: String): Contact;
      setShortName(shortName: String): Contact;
      setSuffix(suffix: String): Contact;
      getEmailAddresses(): String[];
      getHomeAddress(): String;
      getHomeFax(): String;
      getHomePhone(): String;
      getMobilePhone(): String;
      getPager(): String;
      getUserDefinedField(key: String): String;
      getUserDefinedFields(): Object;
      getWorkAddress(): String;
      getWorkFax(): String;
      getWorkPhone(): String;
      setHomeAddress(addr: String): void;
      setHomeFax(phone: String): void;
      setHomePhone(phone: String): void;
      setMobilePhone(phone: String): void;
      setPager(phone: String): void;
      setPrimaryEmail(primaryEmail: String): void;
      setUserDefinedField(key: String, value: String): void;
      setUserDefinedFields(o: Object): void;
      setWorkAddress(addr: String): void;
      setWorkFax(phone: String): void;
      setWorkPhone(phone: String): void;
    }

    /**
     * Company field in a Contact.
     */
    export interface CompanyField {
      deleteCompanyField(): void;
      getCompanyName(): String;
      getJobTitle(): String;
      isPrimary(): Boolean;
      setAsPrimary(): CompanyField;
      setCompanyName(company: String): CompanyField;
      setJobTitle(title: String): CompanyField;
    }

    /**
     * An email field in a Contact.
     */
    export interface EmailField {
      deleteEmailField(): void;
      getAddress(): String;
      getDisplayName(): String;
      getLabel(): Object;
      isPrimary(): Boolean;
      setAddress(address: String): EmailField;
      setAsPrimary(): EmailField;
      setDisplayName(name: String): EmailField;
      setLabel(field: Field): EmailField;
      setLabel(label: String): EmailField;
    }

    /**
     * A custom field in a Contact.
     */
    export interface CustomField {
      deleteCustomField(): void;
      getLabel(): Object;
      getValue(): Object;
      setLabel(field: ExtendedField): CustomField;
      setLabel(label: String): CustomField;
      setValue(value: Object): CustomField;
    }

    /**
     * A phone number field in a Contact.
     */
    export interface PhoneField {
      deletePhoneField(): void;
      getLabel(): Object;
      getPhoneNumber(): String;
      isPrimary(): Boolean;
      setAsPrimary(): PhoneField;
      setLabel(field: Field): PhoneField;
      setLabel(label: String): PhoneField;
      setPhoneNumber(number: String): PhoneField;
    }

    /**
     * A ContactGroup is is a group of contacts.
     */
    export interface ContactGroup {
      addContact(contact: Contact): ContactGroup;
      deleteGroup(): void;
      getContacts(): Contact[];
      getId(): String;
      getName(): String;
      isSystemGroup(): Boolean;
      removeContact(contact: Contact): ContactGroup;
      setName(name: String): ContactGroup;
      getGroupName(): String;
      setGroupName(name: String): void;
    }

    /**
     * An enum for extended contacts fields.
     */
    export enum ExtendedField { HOBBY, MILEAGE, LANGUAGE, GENDER, BILLING_INFORMATION, DIRECTORY_SERVER, SENSITIVITY, PRIORITY, HOME, WORK, USER, OTHER }

    /**
     * A date field in a Contact.
     */
    export interface DateField {
      deleteDateField(): void;
      getDay(): Integer;
      getLabel(): Object;
      getMonth(): Base.Month;
      getYear(): Integer;
      setDate(month: Base.Month, day: Integer): DateField;
      setDate(month: Base.Month, day: Integer, year: Integer): DateField;
      setLabel(label: Field): DateField;
      setLabel(label: String): DateField;
    }

    /**
     * A URL field in a Contact.
     */
    export interface UrlField {
      deleteUrlField(): void;
      getAddress(): String;
      getLabel(): Object;
      isPrimary(): Boolean;
      setAddress(address: String): UrlField;
      setAsPrimary(): UrlField;
      setLabel(field: Field): UrlField;
      setLabel(label: String): UrlField;
    }

    /**
     * An instant messaging field in a Contact.
     */
    export interface IMField {
      deleteIMField(): void;
      getAddress(): String;
      getLabel(): Object;
      isPrimary(): Boolean;
      setAddress(address: String): IMField;
      setAsPrimary(): IMField;
      setLabel(field: Field): IMField;
      setLabel(label: String): IMField;
    }

    /**
     * An enum for contact sensitivity.
     */
    export enum Sensitivity { CONFIDENTIAL, NORMAL, PERSONAL, PRIVATE }

    /**
     * An enum for contact gender.
     */
    export enum Gender { MALE, FEMALE }

    /**
     * An enum for contact priority.
     */
    export enum Priority { HIGH, LOW, NORMAL }

    /**
     * An enum for contacts fields.
     */
    export enum Field { FULL_NAME, GIVEN_NAME, MIDDLE_NAME, FAMILY_NAME, MAIDEN_NAME, NICKNAME, SHORT_NAME, INITIALS, PREFIX, SUFFIX, HOME_EMAIL, WORK_EMAIL, BIRTHDAY, ANNIVERSARY, HOME_ADDRESS, WORK_ADDRESS, ASSISTANT_PHONE, CALLBACK_PHONE, MAIN_PHONE, PAGER, HOME_FAX, WORK_FAX, HOME_PHONE, WORK_PHONE, MOBILE_PHONE, GOOGLE_VOICE, NOTES, GOOGLE_TALK, AIM, YAHOO, SKYPE, QQ, MSN, ICQ, JABBER, BLOG, FTP, PROFILE, HOME_PAGE, WORK_WEBSITE, HOME_WEBSITE, JOB_TITLE, COMPANY }

  }
}

declare var ContactsApp: GoogleAppsScript.Contacts.ContactsApp;