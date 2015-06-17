/// <reference path="googleappsscript.types.d.ts" />
/// <reference path="googleappsscript.base.d.ts" />

declare module GoogleAppsScript {
  export module Sites {
    /**
     * A Comment attached to any Sites page.
     */
    export interface Comment {
      deleteComment(): void;
      getAuthorEmail(): String;
      getAuthorName(): String;
      getContent(): String;
      getDatePublished(): Date;
      getLastUpdated(): Date;
      getParent(): Page;
      setContent(content: String): Comment;
      setParent(parent: Page): Comment;
    }

    /**
     * A Sites Attachment such as a file attached to a page.
     * 
     *  Note that an Attachment is a Blob and can be used anywhere Blob input is expected.
     * 
     *      var filesPage = SitesApp.getSite('example.com', 'mysite').getChildByName("files");
     *      var attachments = filesPage.getAttachments();
     *     
     *      // DocsList.createFile accepts a blob input. Since an Attachment is just a blob, we can
     *      // just pass it directly to that method
     *      var file = DocsList.createFile(attachments[0]);
     */
    export interface Attachment {
      deleteAttachment(): void;
      getAs(contentType: String): Base.Blob;
      getAttachmentType(): AttachmentType;
      getBlob(): Base.Blob;
      getContentType(): String;
      getDatePublished(): Date;
      getDescription(): String;
      getLastUpdated(): Date;
      getParent(): Page;
      getTitle(): String;
      getUrl(): String;
      setContentType(contentType: String): Attachment;
      setDescription(description: String): Attachment;
      setFrom(blob: Base.BlobSource): Attachment;
      setParent(parent: Page): Attachment;
      setTitle(title: String): Attachment;
      setUrl(url: String): Attachment;
    }

    /**
     * A Sites ListItem - a list element from a Sites List page.
     */
    export interface ListItem {
      deleteListItem(): void;
      getDatePublished(): Date;
      getLastUpdated(): Date;
      getParent(): Page;
      getValueByIndex(index: Integer): String;
      getValueByName(name: String): String;
      setParent(parent: Page): ListItem;
      setValueByIndex(index: Integer, value: String): ListItem;
      setValueByName(name: String, value: String): ListItem;
    }

    /**
     * Create and access Google Sites.
     */
    export interface SitesApp {
      AttachmentType: AttachmentType
      PageType: PageType
      copySite(domain: String, name: String, title: String, summary: String, site: Site): Site;
      createSite(domain: String, name: String, title: String, summary: String): Site;
      getActivePage(): Page;
      getActiveSite(): Site;
      getAllSites(domain: String): Site[];
      getAllSites(domain: String, start: Integer, max: Integer): Site[];
      getPageByUrl(url: String): Page;
      getSite(name: String): Site;
      getSite(domain: String, name: String): Site;
      getSiteByUrl(url: String): Site;
      getSites(): Site[];
      getSites(start: Integer, max: Integer): Site[];
      getSites(domain: String): Site[];
      getSites(domain: String, start: Integer, max: Integer): Site[];
    }

    /**
     * A Sites Column - a column from a Sites List page.
     */
    export interface Column {
      deleteColumn(): void;
      getName(): String;
      getParent(): Page;
      setName(name: String): Column;
    }

    /**
     * A typesafe enum for sites page type.
     */
    export enum PageType { WEB_PAGE, LIST_PAGE, ANNOUNCEMENT, ANNOUNCEMENTS_PAGE, FILE_CABINET_PAGE }

    /**
     * A typesafe enum for sites attachment type.
     */
    export enum AttachmentType { WEB, HOSTED }

    /**
     * A Page on a Google Site.
     */
    export interface Page {
      addColumn(name: String): Column;
      addHostedAttachment(blob: Base.BlobSource): Attachment;
      addHostedAttachment(blob: Base.BlobSource, description: String): Attachment;
      addListItem(values: String[]): ListItem;
      addWebAttachment(title: String, description: String, url: String): Attachment;
      createAnnouncement(title: String, html: String): Page;
      createAnnouncement(title: String, html: String, asDraft: Boolean): Page;
      createAnnouncementsPage(title: String, name: String, html: String): Page;
      createFileCabinetPage(title: String, name: String, html: String): Page;
      createListPage(title: String, name: String, html: String, columnNames: String[]): Page;
      createPageFromTemplate(title: String, name: String, template: Page): Page;
      createWebPage(title: String, name: String, html: String): Page;
      deletePage(): void;
      getAllDescendants(): Page[];
      getAllDescendants(options: Object): Page[];
      getAnnouncements(): Page[];
      getAnnouncements(optOptions: Object): Page[];
      getAttachments(): Attachment[];
      getAttachments(optOptions: Object): Attachment[];
      getAuthors(): String[];
      getChildByName(name: String): Page;
      getChildren(): Page[];
      getChildren(options: Object): Page[];
      getColumns(): Column[];
      getComments(): Comment[];
      getComments(optOptions: Object): Comment[];
      getDatePublished(): Date;
      getHtmlContent(): String;
      getIsDraft(): Boolean;
      getLastEdited(): Date;
      getLastUpdated(): Date;
      getListItems(): ListItem[];
      getListItems(optOptions: Object): ListItem[];
      getName(): String;
      getPageType(): PageType;
      getParent(): Page;
      getTextContent(): String;
      getTitle(): String;
      getUrl(): String;
      isDeleted(): Boolean;
      isTemplate(): Boolean;
      publishAsTemplate(name: String): Page;
      search(query: String): Page[];
      search(query: String, options: Object): Page[];
      setHtmlContent(html: String): Page;
      setIsDraft(draft: Boolean): Page;
      setName(name: String): Page;
      setParent(parent: Page): Page;
      setTitle(title: String): Page;
      addComment(content: String): Comment;
      getPageName(): String;
      getSelfLink(): String;
    }

    /**
     * An object representing a Google Site.
     */
    export interface Site {
      addEditor(emailAddress: String): Site;
      addEditor(user: Base.User): Site;
      addEditors(emailAddresses: String[]): Site;
      addOwner(email: String): Site;
      addOwner(user: Base.User): Site;
      addViewer(emailAddress: String): Site;
      addViewer(user: Base.User): Site;
      addViewers(emailAddresses: String[]): Site;
      createAnnouncementsPage(title: String, name: String, html: String): Page;
      createFileCabinetPage(title: String, name: String, html: String): Page;
      createListPage(title: String, name: String, html: String, columnNames: String[]): Page;
      createPageFromTemplate(title: String, name: String, template: Page): Page;
      createWebPage(title: String, name: String, html: String): Page;
      getAllDescendants(): Page[];
      getAllDescendants(options: Object): Page[];
      getChildByName(name: String): Page;
      getChildren(): Page[];
      getChildren(options: Object): Page[];
      getEditors(): Base.User[];
      getName(): String;
      getOwners(): Base.User[];
      getSummary(): String;
      getTemplates(): Page[];
      getTheme(): String;
      getTitle(): String;
      getUrl(): String;
      getViewers(): Base.User[];
      removeEditor(emailAddress: String): Site;
      removeEditor(user: Base.User): Site;
      removeOwner(email: String): Site;
      removeOwner(user: Base.User): Site;
      removeViewer(emailAddress: String): Site;
      removeViewer(user: Base.User): Site;
      search(query: String): Page[];
      search(query: String, options: Object): Page[];
      setSummary(summary: String): Site;
      setTheme(theme: String): Site;
      setTitle(title: String): Site;
      addCollaborator(email: String): Site;
      addCollaborator(user: Base.User): Site;
      createAnnouncement(title: String, html: String, parent: Page): Page;
      createComment(inReplyTo: String, html: String, parent: Page): Comment;
      createListItem(html: String, columnNames: String[], values: String[], parent: Page): ListItem;
      createWebAttachment(title: String, url: String, parent: Page): Attachment;
      deleteSite(): void;
      getAnnouncements(): Page[];
      getAnnouncementsPages(): Page[];
      getAttachments(): Attachment[];
      getCollaborators(): Base.User[];
      getComments(): Comment[];
      getFileCabinetPages(): Page[];
      getListItems(): ListItem[];
      getListPages(): Page[];
      getSelfLink(): String;
      getSiteName(): String;
      getWebAttachments(): Attachment[];
      getWebPages(): Page[];
      removeCollaborator(email: String): Site;
      removeCollaborator(user: Base.User): Site;
    }

  }
}

declare var SitesApp: GoogleAppsScript.Sites.SitesApp;