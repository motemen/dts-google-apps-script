/// <reference path="googleappsscript.types.d.ts" />
/// <reference path="googleappsscript.base.d.ts" />

declare module GoogleAppsScript {
  export module Gmail {
    /**
     * A thread in a user's Gmail account.
     */
    export interface GmailThread {
      addLabel(label: GmailLabel): GmailThread;
      getFirstMessageSubject(): String;
      getId(): String;
      getLabels(): GmailLabel[];
      getLastMessageDate(): Date;
      getMessageCount(): Integer;
      getMessages(): GmailMessage[];
      getPermalink(): String;
      hasStarredMessages(): Boolean;
      isImportant(): Boolean;
      isInChats(): Boolean;
      isInInbox(): Boolean;
      isInSpam(): Boolean;
      isInTrash(): Boolean;
      isUnread(): Boolean;
      markImportant(): GmailThread;
      markRead(): GmailThread;
      markUnimportant(): GmailThread;
      markUnread(): GmailThread;
      moveToArchive(): GmailThread;
      moveToInbox(): GmailThread;
      moveToSpam(): GmailThread;
      moveToTrash(): GmailThread;
      refresh(): GmailThread;
      removeLabel(label: GmailLabel): GmailThread;
      reply(body: String): GmailThread;
      reply(body: String, options: Object): GmailThread;
      replyAll(body: String): GmailThread;
      replyAll(body: String, options: Object): GmailThread;
    }

    /**
     * A user-created label in a user's Gmail account.
     */
    export interface GmailLabel {
      addToThread(thread: GmailThread): GmailLabel;
      addToThreads(threads: GmailThread[]): GmailLabel;
      deleteLabel(): void;
      getName(): String;
      getThreads(): GmailThread[];
      getThreads(start: Integer, max: Integer): GmailThread[];
      getUnreadCount(): Integer;
      removeFromThread(thread: GmailThread): GmailLabel;
      removeFromThreads(threads: GmailThread[]): GmailLabel;
    }

    /**
     * An attachment from Gmail. This is a regular
     *  Blob except that it has an extra
     *  getSize() method that is faster than calling getBytes().length and does
     *  not count against the Gmail read quota.
     * 
     *      // Logs information about any attachments in the first 100 inbox threads.
     *      var threads = GmailApp.getInboxThreads(0, 100);
     *      var msgs = GmailApp.getMessagesForThreads(threads);
     *      for (var i = 0 ; i < msgs.length; i++) {
     *        for (var j = 0; j < msgs[i].length; j++) {
     *          var attachments = msgs[i][j].getAttachments();
     *          for (var k = 0; k < attachments.length; k++) {
     *            Logger.log('Message "%s" contains the attachment "%s" (%s bytes)',
     *                       msgs[i][j].getSubject(), attachments[k].getName(), attachments[k].getSize());
     *          }
     *        }
     *      }
     */
    export interface GmailAttachment {
      copyBlob(): Base.Blob;
      getAs(contentType: String): Base.Blob;
      getBytes(): Byte[];
      getContentType(): String;
      getDataAsString(): String;
      getDataAsString(charset: String): String;
      getName(): String;
      getSize(): Integer;
      isGoogleType(): Boolean;
      setBytes(data: Byte[]): Base.Blob;
      setContentType(contentType: String): Base.Blob;
      setContentTypeFromExtension(): Base.Blob;
      setDataFromString(string: String): Base.Blob;
      setDataFromString(string: String, charset: String): Base.Blob;
      setName(name: String): Base.Blob;
      getAllBlobs(): Base.Blob[];
    }

    /**
     * A message in a user's Gmail account.
     */
    export interface GmailMessage {
      forward(recipient: String): GmailMessage;
      forward(recipient: String, options: Object): GmailMessage;
      getAttachments(): GmailAttachment[];
      getBcc(): String;
      getBody(): String;
      getCc(): String;
      getDate(): Date;
      getFrom(): String;
      getId(): String;
      getPlainBody(): String;
      getRawContent(): String;
      getReplyTo(): String;
      getSubject(): String;
      getThread(): GmailThread;
      getTo(): String;
      isDraft(): Boolean;
      isInChats(): Boolean;
      isInInbox(): Boolean;
      isInTrash(): Boolean;
      isStarred(): Boolean;
      isUnread(): Boolean;
      markRead(): GmailMessage;
      markUnread(): GmailMessage;
      moveToTrash(): GmailMessage;
      refresh(): GmailMessage;
      reply(body: String): GmailMessage;
      reply(body: String, options: Object): GmailMessage;
      replyAll(body: String): GmailMessage;
      replyAll(body: String, options: Object): GmailMessage;
      star(): GmailMessage;
      unstar(): GmailMessage;
    }

    /**
     * Provides access to Gmail threads, messages, and labels.
     */
    export interface GmailApp {
      createLabel(name: String): GmailLabel;
      deleteLabel(label: GmailLabel): GmailApp;
      getAliases(): String[];
      getChatThreads(): GmailThread[];
      getChatThreads(start: Integer, max: Integer): GmailThread[];
      getDraftMessages(): GmailMessage[];
      getInboxThreads(): GmailThread[];
      getInboxThreads(start: Integer, max: Integer): GmailThread[];
      getInboxUnreadCount(): Integer;
      getMessageById(id: String): GmailMessage;
      getMessagesForThread(thread: GmailThread): GmailMessage[];
      getMessagesForThreads(threads: GmailThread[]): GmailMessage[][];
      getPriorityInboxThreads(): GmailThread[];
      getPriorityInboxThreads(start: Integer, max: Integer): GmailThread[];
      getPriorityInboxUnreadCount(): Integer;
      getSpamThreads(): GmailThread[];
      getSpamThreads(start: Integer, max: Integer): GmailThread[];
      getSpamUnreadCount(): Integer;
      getStarredThreads(): GmailThread[];
      getStarredThreads(start: Integer, max: Integer): GmailThread[];
      getStarredUnreadCount(): Integer;
      getThreadById(id: String): GmailThread;
      getTrashThreads(): GmailThread[];
      getTrashThreads(start: Integer, max: Integer): GmailThread[];
      getUserLabelByName(name: String): GmailLabel;
      getUserLabels(): GmailLabel[];
      markMessageRead(message: GmailMessage): GmailApp;
      markMessageUnread(message: GmailMessage): GmailApp;
      markMessagesRead(messages: GmailMessage[]): GmailApp;
      markMessagesUnread(messages: GmailMessage[]): GmailApp;
      markThreadImportant(thread: GmailThread): GmailApp;
      markThreadRead(thread: GmailThread): GmailApp;
      markThreadUnimportant(thread: GmailThread): GmailApp;
      markThreadUnread(thread: GmailThread): GmailApp;
      markThreadsImportant(threads: GmailThread[]): GmailApp;
      markThreadsRead(threads: GmailThread[]): GmailApp;
      markThreadsUnimportant(threads: GmailThread[]): GmailApp;
      markThreadsUnread(threads: GmailThread[]): GmailApp;
      moveMessageToTrash(message: GmailMessage): GmailApp;
      moveMessagesToTrash(messages: GmailMessage[]): GmailApp;
      moveThreadToArchive(thread: GmailThread): GmailApp;
      moveThreadToInbox(thread: GmailThread): GmailApp;
      moveThreadToSpam(thread: GmailThread): GmailApp;
      moveThreadToTrash(thread: GmailThread): GmailApp;
      moveThreadsToArchive(threads: GmailThread[]): GmailApp;
      moveThreadsToInbox(threads: GmailThread[]): GmailApp;
      moveThreadsToSpam(threads: GmailThread[]): GmailApp;
      moveThreadsToTrash(threads: GmailThread[]): GmailApp;
      refreshMessage(message: GmailMessage): GmailApp;
      refreshMessages(messages: GmailMessage[]): GmailApp;
      refreshThread(thread: GmailThread): GmailApp;
      refreshThreads(threads: GmailThread[]): GmailApp;
      search(query: String): GmailThread[];
      search(query: String, start: Integer, max: Integer): GmailThread[];
      sendEmail(recipient: String, subject: String, body: String): GmailApp;
      sendEmail(recipient: String, subject: String, body: String, options: Object): GmailApp;
      starMessage(message: GmailMessage): GmailApp;
      starMessages(messages: GmailMessage[]): GmailApp;
      unstarMessage(message: GmailMessage): GmailApp;
      unstarMessages(messages: GmailMessage[]): GmailApp;
    }

  }
}

declare var GmailApp: GoogleAppsScript.Gmail.GmailApp;