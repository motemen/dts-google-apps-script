/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare module GoogleAppsScript {
  export module Drive {
    /**
     * An enum representing classes of users who can access a file or folder, besides any individual
     *  users who have been explicitly given access. These properties can be accessed from
     *  DriveApp.Access.
     * 
     *      // Creates a folder that anyone on the Internet can read from and write to. (Domain
     *      // administrators can prohibit this setting for users of Google Apps for Business, Google Apps
     *      // for Education, or Google Apps for Your Domain.)
     *      var folder = DriveApp.createFolder('Shared Folder');
     *      folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
     */
    export enum Access { ANYONE, ANYONE_WITH_LINK, DOMAIN, DOMAIN_WITH_LINK, PRIVATE }

    /**
     * Allows scripts to create, find, and modify files and folders in Google Drive.
     * 
     *      // Log the name of every file in the user's Drive.
     *      var files = DriveApp.getFiles();
     *      while (files.hasNext()) {
     *        var file = files.next();
     *        Logger.log(file.getName());
     *      }
     */
    export interface DriveApp {
      Access: Access
      Permission: Permission
      addFile(child: File): Folder;
      addFolder(child: Folder): Folder;
      continueFileIterator(continuationToken: String): FileIterator;
      continueFolderIterator(continuationToken: String): FolderIterator;
      createFile(blob: Base.BlobSource): File;
      createFile(name: String, content: String): File;
      createFile(name: String, content: String, mimeType: String): File;
      createFolder(name: String): Folder;
      getFileById(id: String): File;
      getFiles(): FileIterator;
      getFilesByName(name: String): FileIterator;
      getFilesByType(mimeType: String): FileIterator;
      getFolderById(id: String): Folder;
      getFolders(): FolderIterator;
      getFoldersByName(name: String): FolderIterator;
      getRootFolder(): Folder;
      getStorageLimit(): Integer;
      getStorageUsed(): Integer;
      getTrashedFiles(): FileIterator;
      getTrashedFolders(): FolderIterator;
      removeFile(child: File): Folder;
      removeFolder(child: Folder): Folder;
      searchFiles(params: String): FileIterator;
      searchFolders(params: String): FolderIterator;
    }

    /**
     * A file in Google Drive. Files can be accessed or created from DriveApp.
     * 
     *      // Trash every untitled spreadsheet that hasn't been updated in a week.
     *      var files = DriveApp.getFilesByName('Untitled spreadsheet');
     *      while (files.hasNext()) {
     *        var file = files.next();
     *        if (new Date() - file.getLastUpdated() > 7 * 24 * 60 * 60 * 1000) {
     *          file.setTrashed(true);
     *        }
     *      }
     */
    export interface File {
      addCommenter(emailAddress: String): File;
      addCommenter(user: Base.User): File;
      addCommenters(emailAddresses: String[]): File;
      addEditor(emailAddress: String): File;
      addEditor(user: Base.User): File;
      addEditors(emailAddresses: String[]): File;
      addViewer(emailAddress: String): File;
      addViewer(user: Base.User): File;
      addViewers(emailAddresses: String[]): File;
      getAccess(email: String): Permission;
      getAccess(user: Base.User): Permission;
      getAs(contentType: String): Base.Blob;
      getBlob(): Base.Blob;
      getDateCreated(): Date;
      getDescription(): String;
      getDownloadUrl(): String;
      getEditors(): User[];
      getId(): String;
      getLastUpdated(): Date;
      getMimeType(): String;
      getName(): String;
      getOwner(): User;
      getParents(): FolderIterator;
      getSharingAccess(): Access;
      getSharingPermission(): Permission;
      getSize(): Integer;
      getThumbnail(): Base.Blob;
      getUrl(): String;
      getViewers(): User[];
      isShareableByEditors(): Boolean;
      isStarred(): Boolean;
      isTrashed(): Boolean;
      makeCopy(): File;
      makeCopy(destination: Folder): File;
      makeCopy(name: String): File;
      makeCopy(name: String, destination: Folder): File;
      removeCommenter(emailAddress: String): File;
      removeCommenter(user: Base.User): File;
      removeEditor(emailAddress: String): File;
      removeEditor(user: Base.User): File;
      removeViewer(emailAddress: String): File;
      removeViewer(user: Base.User): File;
      revokePermissions(user: String): File;
      revokePermissions(user: Base.User): File;
      setContent(content: String): File;
      setDescription(description: String): File;
      setName(name: String): File;
      setOwner(emailAddress: String): File;
      setOwner(user: Base.User): File;
      setShareableByEditors(shareable: Boolean): File;
      setSharing(accessType: Access, permissionType: Permission): File;
      setStarred(starred: Boolean): File;
      setTrashed(trashed: Boolean): File;
    }

    /**
     * An iterator that allows scripts to iterate over a potentially large collection of files. File
     *  iterators can be acccessed from DriveApp or a Folder.
     * 
     *      // Log the name of every file in the user's Drive.
     *      var files = DriveApp.getFiles();
     *      while (files.hasNext()) {
     *        var file = files.next();
     *        Logger.log(file.getName());
     *      }
     */
    export interface FileIterator {
      getContinuationToken(): String;
      hasNext(): Boolean;
      next(): File;
    }

    /**
     * A folder in Google Drive. Folders can be accessed or created from DriveApp.
     * 
     *      // Log the name of every folder in the user's Drive.
     *      var folders = DriveApp.getFolders();
     *      while (folders.hasNext()) {
     *        var folder = folders.next();
     *        Logger.log(folder.getName());
     *      }
     */
    export interface Folder {
      addEditor(emailAddress: String): Folder;
      addEditor(user: Base.User): Folder;
      addEditors(emailAddresses: String[]): Folder;
      addFile(child: File): Folder;
      addFolder(child: Folder): Folder;
      addViewer(emailAddress: String): Folder;
      addViewer(user: Base.User): Folder;
      addViewers(emailAddresses: String[]): Folder;
      createFile(blob: Base.BlobSource): File;
      createFile(name: String, content: String): File;
      createFile(name: String, content: String, mimeType: String): File;
      createFolder(name: String): Folder;
      getAccess(email: String): Permission;
      getAccess(user: Base.User): Permission;
      getDateCreated(): Date;
      getDescription(): String;
      getEditors(): User[];
      getFiles(): FileIterator;
      getFilesByName(name: String): FileIterator;
      getFilesByType(mimeType: String): FileIterator;
      getFolders(): FolderIterator;
      getFoldersByName(name: String): FolderIterator;
      getId(): String;
      getLastUpdated(): Date;
      getName(): String;
      getOwner(): User;
      getParents(): FolderIterator;
      getSharingAccess(): Access;
      getSharingPermission(): Permission;
      getSize(): Integer;
      getUrl(): String;
      getViewers(): User[];
      isShareableByEditors(): Boolean;
      isStarred(): Boolean;
      isTrashed(): Boolean;
      removeEditor(emailAddress: String): Folder;
      removeEditor(user: Base.User): Folder;
      removeFile(child: File): Folder;
      removeFolder(child: Folder): Folder;
      removeViewer(emailAddress: String): Folder;
      removeViewer(user: Base.User): Folder;
      revokePermissions(user: String): Folder;
      revokePermissions(user: Base.User): Folder;
      searchFiles(params: String): FileIterator;
      searchFolders(params: String): FolderIterator;
      setDescription(description: String): Folder;
      setName(name: String): Folder;
      setOwner(emailAddress: String): Folder;
      setOwner(user: Base.User): Folder;
      setShareableByEditors(shareable: Boolean): Folder;
      setSharing(accessType: Access, permissionType: Permission): Folder;
      setStarred(starred: Boolean): Folder;
      setTrashed(trashed: Boolean): Folder;
    }

    /**
     * An object that allows scripts to iterate over a potentially large collection of folders. Folder
     *  iterators can be acccessed from DriveApp, a File, or a Folder.
     * 
     *      // Log the name of every folder in the user's Drive.
     *      var folders = DriveApp.getFolders();
     *      while (folders.hasNext()) {
     *        var folder = folders.next();
     *        Logger.log(folder.getName());
     *      }
     */
    export interface FolderIterator {
      getContinuationToken(): String;
      hasNext(): Boolean;
      next(): Folder;
    }

    /**
     * An enum representing the permissions granted to users who can access a file or folder, besides
     *  any individual users who have been explicitly given access. These properties can be accessed from
     *  DriveApp.Permission.
     * 
     *      // Creates a folder that anyone on the Internet can read from and write to. (Domain
     *      // administrators can prohibit this setting for users of Google Apps for Business, Google Apps
     *      // for Education, or Google Apps for Your Domain.)
     *      var folder = DriveApp.createFolder('Shared Folder');
     *      folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
     */
    export enum Permission { VIEW, EDIT, COMMENT, OWNER, NONE }

    /**
     * A user associated with a file in Google Drive. Users can be accessed from
     *  File.getEditors(), Folder.getViewers(), and other methods.
     * 
     *      // Log the email address of all users who have edit access to a file.
     *      var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
     *      var editors = file.getEditors();
     *      for (var i = 0; i < editors.length; i++) {
     *        Logger.log(editors[i].getEmail());
     *      }
     */
    export interface User {
      getDomain(): String;
      getEmail(): String;
      getName(): String;
      getPhotoUrl(): String;
      getUserLoginId(): String;
    }

  }
}

declare var DriveApp: GoogleAppsScript.Drive.DriveApp;