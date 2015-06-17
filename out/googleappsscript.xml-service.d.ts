/// <reference path="googleappsscript.types.d.ts" />

declare module GoogleAppsScript {
  export module XML_Service {
    /**
     * This service allows scripts to parse, navigate, and programmatically create XML documents.
     * 
     *      // Log the title and labels for the first page of blog posts on the Google Apps Developer blog.
     *      function parseXml() {
     *        var url = 'http://googleappsdeveloper.blogspot.com/atom.xml';
     *        var xml = UrlFetchApp.fetch(url).getContentText();
     *        var document = XmlService.parse(xml);
     *        var root = document.getRootElement();
     *        var atom = XmlService.getNamespace('http://www.w3.org/2005/Atom');
     *      
     *        var entries = document.getRootElement().getChildren('entry', atom);
     *        for (var i = 0; i < entries.length; i++) {
     *          var title = entries[i].getChild('title', atom).getText();
     *          var categoryElements = entries[i].getChildren('category', atom);
     *          var labels = [];
     *          for (var j = 0; j < categoryElements.length; j++) {
     *            labels.push(categoryElements[j].getAttribute('term').getValue());
     *          }
     *          Logger.log('%s (%s)', title, labels.join(', '));
     *        }
     *      }
     *      
     *      // Create and log an XML representation of the threads in your Gmail inbox.
     *      function createXml() {
     *        var root = XmlService.createElement('threads');
     *        var threads = GmailApp.getInboxThreads();
     *        for (var i = 0; i < threads.length; i++) {
     *          var child = XmlService.createElement('thread')
     *              .setAttribute('messageCount', threads[i].getMessageCount())
     *              .setAttribute('isUnread', threads[i].isUnread())
     *              .setText(threads[i].getFirstMessageSubject());
     *          root.addContent(child);
     *        }
     *        var document = XmlService.createDocument(root);
     *        var xml = XmlService.getPrettyFormat().format(document);
     *        Logger.log(xml);
     *      }
     */
    export interface XmlService {
      ContentTypes: ContentType
      createCdata(text: String): Cdata;
      createComment(text: String): Comment;
      createDocType(elementName: String): DocType;
      createDocType(elementName: String, systemId: String): DocType;
      createDocType(elementName: String, publicId: String, systemId: String): DocType;
      createDocument(): Document;
      createDocument(rootElement: Element): Document;
      createElement(name: String): Element;
      createElement(name: String, namespace: Namespace): Element;
      createText(text: String): Text;
      getCompactFormat(): Format;
      getNamespace(uri: String): Namespace;
      getNamespace(prefix: String, uri: String): Namespace;
      getNoNamespace(): Namespace;
      getPrettyFormat(): Format;
      getRawFormat(): Format;
      getXmlNamespace(): Namespace;
      parse(xml: String): Document;
    }

    /**
     * A representation of an XML Comment node.
     */
    export interface Comment {
      detach(): Content;
      getParentElement(): Element;
      getText(): String;
      getValue(): String;
      setText(text: String): Comment;
    }

    /**
     * A representation of an XML CDATASection node.
     * 
     *      // Create and log an XML document that shows how special characters like '<', '>', and '&' are 
     *      // stored in a CDATASection node as compared to in a Text node.
     *      var illegalCharacters = '<em>The Amazing Adventures of Kavalier & Clay</em>';
     *      var cdata = XmlService.createCdata(illegalCharacters);
     *      var text = XmlService.createText(illegalCharacters);
     *      var root = XmlService.createElement('root').addContent(cdata).addContent(text);
     *      var document = XmlService.createDocument(root);
     *      var xml = XmlService.getPrettyFormat().format(document);
     *      Logger.log(xml);
     */
    export interface Cdata {
      append(text: String): Text;
      detach(): Content;
      getParentElement(): Element;
      getText(): String;
      getValue(): String;
      setText(text: String): Text;
    }

    /**
     * A representation of an XML attribute.
     * 
     *      // Reads the first and last name of each person and adds a new attribute with the full name.
     *      var xml = '\
     *          <roster> \
     *            <person first="John" last="Doe"/> \
     *            <person first="Mary" last="Smith"/> \
     *          </roster>';
     *      var document = XmlService.parse(xml);
     *      var people = document.getRootElement().getChildren('person');
     *      for (var i = 0; i < people.length; i++) {
     *        var person = people[i];
     *        var firstName = person.getAttribute('first').getValue();
     *        var lastName = person.getAttribute('last').getValue();
     *        person.setAttribute('full', firstName + ' ' + lastName);
     *      }
     *      xml = XmlService.getPrettyFormat().format(document);
     *      Logger.log(xml);
     */
    export interface Attribute {
      getName(): String;
      getNamespace(): Namespace;
      getValue(): String;
      setName(name: String): Attribute;
      setNamespace(namespace: Namespace): Attribute;
      setValue(value: String): Attribute;
    }

    /**
     * A representation of an XML EntityReference node.
     */
    export interface EntityRef {
      detach(): Content;
      getName(): String;
      getParentElement(): Element;
      getPublicId(): String;
      getSystemId(): String;
      getValue(): String;
      setName(name: String): EntityRef;
      setPublicId(id: String): EntityRef;
      setSystemId(id: String): EntityRef;
    }

    /**
     * A representation of an XML Element node.
     * 
     *      // Adds up the values listed in a sample XML document and adds a new element with the total.
     *      var xml = '\
     *          <things> \
     *            <plates>12</plates> \
     *            <bowls>18</bowls> \
     *            <cups>25</cups> \
     *          </things>';
     *      var document = XmlService.parse(xml);
     *      var root = document.getRootElement();
     *      var items = root.getChildren();
     *      var total = 0;
     *      for (var i = 0; i < items.length; i++) {
     *        total += Number(items[i].getText());
     *      }
     *      var totalElement = XmlService.createElement('total').setText(total);
     *      root.addContent(totalElement);
     *      xml = XmlService.getPrettyFormat().format(document);
     *      Logger.log(xml);
     */
    export interface Element {
      addContent(content: Content): Element;
      addContent(index: Integer, content: Content): Element;
      cloneContent(): Content[];
      detach(): Content;
      getAllContent(): Content[];
      getAttribute(name: String): Attribute;
      getAttribute(name: String, namespace: Namespace): Attribute;
      getAttributes(): Attribute[];
      getChild(name: String): Element;
      getChild(name: String, namespace: Namespace): Element;
      getChildText(name: String): String;
      getChildText(name: String, namespace: Namespace): String;
      getChildren(): Element[];
      getChildren(name: String): Element[];
      getChildren(name: String, namespace: Namespace): Element[];
      getContent(index: Integer): Content;
      getContentSize(): Integer;
      getDescendants(): Content[];
      getDocument(): Document;
      getName(): String;
      getNamespace(): Namespace;
      getNamespace(prefix: String): Namespace;
      getParentElement(): Element;
      getQualifiedName(): String;
      getText(): String;
      getValue(): String;
      isAncestorOf(other: Element): Boolean;
      isRootElement(): Boolean;
      removeAttribute(attribute: Attribute): Boolean;
      removeAttribute(attributeName: String): Boolean;
      removeAttribute(attributeName: String, namespace: Namespace): Boolean;
      removeContent(): Content[];
      removeContent(content: Content): Boolean;
      removeContent(index: Integer): Content;
      setAttribute(attribute: Attribute): Element;
      setAttribute(name: String, value: String): Element;
      setAttribute(name: String, value: String, namespace: Namespace): Element;
      setName(name: String): Element;
      setNamespace(namespace: Namespace): Element;
      setText(text: String): Element;
    }

    /**
     * A formatter for outputting an XML document, with three pre-defined formats that can be further
     *  customized.
     * 
     *      // Log an XML document with specified formatting options.
     *      var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
     *      var document = XmlService.parse(xml);
     *      var output = XmlService.getCompactFormat()
     *          .setLineSeparator('\n')
     *          .setEncoding('UTF-8')
     *          .setIndent('   ')
     *          .format(document);
     *      Logger.log(output);
     */
    export interface Format {
      format(document: Document): String;
      format(element: Element): String;
      setEncoding(encoding: String): Format;
      setIndent(indent: String): Format;
      setLineSeparator(separator: String): Format;
      setOmitDeclaration(omitDeclaration: Boolean): Format;
      setOmitEncoding(omitEncoding: Boolean): Format;
    }

    /**
     * A representation of an XML ProcessingInstruction node.
     */
    export interface ProcessingInstruction {
      detach(): Content;
      getData(): String;
      getParentElement(): Element;
      getTarget(): String;
      getValue(): String;
    }

    /**
     * A representation of an XML namespace.
     */
    export interface Namespace {
      getPrefix(): String;
      getURI(): String;
    }

    /**
     * A representation of an XML document.
     */
    export interface Document {
      addContent(content: Content): Document;
      addContent(index: Integer, content: Content): Document;
      cloneContent(): Content[];
      detachRootElement(): Element;
      getAllContent(): Content[];
      getContent(index: Integer): Content;
      getContentSize(): Integer;
      getDescendants(): Content[];
      getDocType(): DocType;
      getRootElement(): Element;
      hasRootElement(): Boolean;
      removeContent(): Content[];
      removeContent(content: Content): Boolean;
      removeContent(index: Integer): Content;
      setDocType(docType: DocType): Document;
      setRootElement(element: Element): Document;
    }

    /**
     * A representation of an XML Text node.
     */
    export interface Text {
      append(text: String): Text;
      detach(): Content;
      getParentElement(): Element;
      getText(): String;
      getValue(): String;
      setText(text: String): Text;
    }

    /**
     * A representation of an XML DocumentType node.
     */
    export interface DocType {
      detach(): Content;
      getElementName(): String;
      getInternalSubset(): String;
      getParentElement(): Element;
      getPublicId(): String;
      getSystemId(): String;
      getValue(): String;
      setElementName(name: String): DocType;
      setInternalSubset(data: String): DocType;
      setPublicId(id: String): DocType;
      setSystemId(id: String): DocType;
    }

    /**
     * A representation of a generic XML node.
     * Implementing classes
     * 
     * NameBrief description
     * 
     * CdataA representation of an XML CDATASection node.
     * 
     * CommentA representation of an XML Comment node.
     * 
     * DocTypeA representation of an XML DocumentType node.
     * 
     * ElementA representation of an XML Element node.
     * 
     * EntityRefA representation of an XML EntityReference node.
     * 
     * ProcessingInstructionA representation of an XML ProcessingInstruction node.
     * 
     * TextA representation of an XML Text node.
     */
    export interface Content {
      asCdata(): Cdata;
      asComment(): Comment;
      asDocType(): DocType;
      asElement(): Element;
      asEntityRef(): EntityRef;
      asProcessingInstruction(): ProcessingInstruction;
      asText(): Text;
      detach(): Content;
      getParentElement(): Element;
      getType(): ContentType;
      getValue(): String;
    }

    /**
     * An enumeration representing the types of XML content nodes.
     */
    export enum ContentType { CDATA, COMMENT, DOCTYPE, ELEMENT, ENTITYREF, PROCESSINGINSTRUCTION, TEXT }

  }
}

declare var XmlService: GoogleAppsScript.XML_Service.XmlService;