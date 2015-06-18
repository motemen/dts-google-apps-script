/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare module GoogleAppsScript {
  export module Document {
    /**
     * The document service creates and opens Documents that can be edited.
     * 
     *      // Open a document by ID.
     *      var doc = DocumentApp.openById('DOCUMENT_ID_GOES_HERE');
     *     
     *      // Create and open a document.
     *      doc = DocumentApp.create('Document Name');
     */
    export interface DocumentApp {
      Attribute: Attribute
      ElementType: ElementType
      FontFamily: FontFamily
      GlyphType: GlyphType
      HorizontalAlignment: HorizontalAlignment
      ParagraphHeading: ParagraphHeading
      TextAlignment: TextAlignment
      VerticalAlignment: VerticalAlignment
      create(name: String): Document;
      getActiveDocument(): Document;
      getUi(): Base.Ui;
      openById(id: String): Document;
      openByUrl(url: String): Document;
    }

    /**
     * An object representing a bookmark.
     * 
     *      // Insert a bookmark at the cursor position and log its ID.
     *      var doc = DocumentApp.getActiveDocument();
     *      var cursor = doc.getCursor();
     *      var bookmark = doc.addBookmark(cursor);
     *      Logger.log(bookmark.getId());
     */
    export interface Bookmark {
      getId(): String;
      getPosition(): Position;
      remove(): void;
    }

    /**
     * An element representing a document body. The Body may contain ListItem,
     *  Paragraph, Table, and TableOfContents elements. For more information on
     *  document structure, see the
     *  guide to extending Google Docs.
     * 
     * The Body typically contains the full document contents except for the
     *  HeaderSection, FooterSection, and any FootnoteSection elements.
     * 
     *      var doc = DocumentApp.getActiveDocument();
     *      var body = doc.getBody();
     *      
     *      // Append a paragraph and a page break to the document body section directly.
     *      body.appendParagraph("A paragraph.");
     *      body.appendPageBreak();
     */
    export interface Body {
      appendHorizontalRule(): HorizontalRule;
      appendImage(image: Base.BlobSource): InlineImage;
      appendImage(image: InlineImage): InlineImage;
      appendListItem(listItem: ListItem): ListItem;
      appendListItem(text: String): ListItem;
      appendPageBreak(): PageBreak;
      appendPageBreak(pageBreak: PageBreak): PageBreak;
      appendParagraph(paragraph: Paragraph): Paragraph;
      appendParagraph(text: String): Paragraph;
      appendTable(): Table;
      appendTable(cells: String[][]): Table;
      appendTable(table: Table): Table;
      clear(): Body;
      copy(): Body;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getImages(): InlineImage[];
      getListItems(): ListItem[];
      getMarginBottom(): Number;
      getMarginLeft(): Number;
      getMarginRight(): Number;
      getMarginTop(): Number;
      getNumChildren(): Integer;
      getPageHeight(): Number;
      getPageWidth(): Number;
      getParagraphs(): Paragraph[];
      getParent(): ContainerElement;
      getTables(): Table[];
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;
      insertListItem(childIndex: Integer, text: String): ListItem;
      insertPageBreak(childIndex: Integer): PageBreak;
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;
      insertParagraph(childIndex: Integer, text: String): Paragraph;
      insertTable(childIndex: Integer): Table;
      insertTable(childIndex: Integer, cells: String[][]): Table;
      insertTable(childIndex: Integer, table: Table): Table;
      removeChild(child: Element): Body;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): Body;
      setMarginBottom(marginBottom: Number): Body;
      setMarginLeft(marginLeft: Number): Body;
      setMarginRight(marginRight: Number): Body;
      setMarginTop(marginTop: Number): Body;
      setPageHeight(pageHeight: Number): Body;
      setPageWidth(pageWidth: Number): Body;
      setText(text: String): Body;
      setTextAlignment(textAlignment: TextAlignment): Body;
      getFootnotes(): Footnote[];
      getLinkUrl(): String;
      getNextSibling(): Element;
      getPreviousSibling(): Element;
      isAtDocumentEnd(): Boolean;
      setLinkUrl(url: String): Body;
    }

    /**
     * An element representing a function separator in a mathematical Equation. An
     *  EquationFunctionArgumentSeparator cannot contain any other element. For more information
     *  on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface EquationFunctionArgumentSeparator {
      copy(): EquationFunctionArgumentSeparator;
      getAttributes(): Object;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      merge(): EquationFunctionArgumentSeparator;
      removeFromParent(): EquationFunctionArgumentSeparator;
      setAttributes(attributes: Object): EquationFunctionArgumentSeparator;
    }

    /**
     * An element representing a function in a mathematical Equation. An
     *  EquationFunction may contain EquationFunction,
     *  EquationFunctionArgumentSeparator, EquationSymbol, and Text elements. For
     *  more information on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface EquationFunction {
      clear(): EquationFunction;
      copy(): EquationFunction;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getCode(): String;
      getLinkUrl(): String;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      merge(): EquationFunction;
      removeFromParent(): EquationFunction;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): EquationFunction;
      setLinkUrl(url: String): EquationFunction;
      setTextAlignment(textAlignment: TextAlignment): EquationFunction;
    }

    /**
     * An element representing a mathematical expression. An Equation may contain
     *  EquationFunction, EquationSymbol, and Text elements.  For more
     *  information on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface Equation {
      clear(): Equation;
      copy(): Equation;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getLinkUrl(): String;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      merge(): Equation;
      removeFromParent(): Equation;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): Equation;
      setLinkUrl(url: String): Equation;
      setTextAlignment(textAlignment: TextAlignment): Equation;
    }

    /**
     * An element representing a footnote. Each Footnote is contained within a ListItem
     *  or Paragraph and has a corresponding FootnoteSection element for the footnote's
     *  contents. The Footnote itself cannot contain any other element. For more information on
     *  document structure, see the
     *  guide to extending Google Docs.
     */
    export interface Footnote {
      copy(): Footnote;
      getAttributes(): Object;
      getFootnoteContents(): FootnoteSection;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      removeFromParent(): Footnote;
      setAttributes(attributes: Object): Footnote;
    }

    /**
     * An element representing a footer section. A
     *  Document typically contains at most one
     *  FooterSection. The FooterSection may contain ListItem, Paragraph,
     *  and Table elements. For more information on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface FooterSection {
      appendHorizontalRule(): HorizontalRule;
      appendImage(image: Base.BlobSource): InlineImage;
      appendImage(image: InlineImage): InlineImage;
      appendListItem(listItem: ListItem): ListItem;
      appendListItem(text: String): ListItem;
      appendParagraph(paragraph: Paragraph): Paragraph;
      appendParagraph(text: String): Paragraph;
      appendTable(): Table;
      appendTable(cells: String[][]): Table;
      appendTable(table: Table): Table;
      clear(): FooterSection;
      copy(): FooterSection;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getImages(): InlineImage[];
      getListItems(): ListItem[];
      getNumChildren(): Integer;
      getParagraphs(): Paragraph[];
      getParent(): ContainerElement;
      getTables(): Table[];
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;
      insertListItem(childIndex: Integer, text: String): ListItem;
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;
      insertParagraph(childIndex: Integer, text: String): Paragraph;
      insertTable(childIndex: Integer): Table;
      insertTable(childIndex: Integer, cells: String[][]): Table;
      insertTable(childIndex: Integer, table: Table): Table;
      removeChild(child: Element): FooterSection;
      removeFromParent(): FooterSection;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): FooterSection;
      setText(text: String): FooterSection;
      setTextAlignment(textAlignment: TextAlignment): FooterSection;
      getFootnotes(): Footnote[];
      getLinkUrl(): String;
      getNextSibling(): Element;
      getPreviousSibling(): Element;
      isAtDocumentEnd(): Boolean;
      setLinkUrl(url: String): FooterSection;
    }

    /**
     * A document, containing rich text and elements such as tables and lists.
     * 
     * Documents may be opened or created using DocumentApp.
     * 
     *      // Open a document by ID.
     *      var doc = DocumentApp.openById("<my-id>");
     *     
     *      // Create and open a document.
     *      doc = DocumentApp.create("Document Title");
     */
    export interface Document {
      addBookmark(position: Position): Bookmark;
      addEditor(emailAddress: String): Document;
      addEditor(user: Base.User): Document;
      addEditors(emailAddresses: String[]): Document;
      addFooter(): FooterSection;
      addHeader(): HeaderSection;
      addNamedRange(name: String, range: Range): NamedRange;
      addViewer(emailAddress: String): Document;
      addViewer(user: Base.User): Document;
      addViewers(emailAddresses: String[]): Document;
      getAs(contentType: String): Base.Blob;
      getBlob(): Base.Blob;
      getBody(): Body;
      getBookmark(id: String): Bookmark;
      getBookmarks(): Bookmark[];
      getCursor(): Position;
      getEditors(): Base.User[];
      getFooter(): FooterSection;
      getFootnotes(): Footnote[];
      getHeader(): HeaderSection;
      getId(): String;
      getName(): String;
      getNamedRangeById(id: String): NamedRange;
      getNamedRanges(): NamedRange[];
      getNamedRanges(name: String): NamedRange[];
      getSelection(): Range;
      getUrl(): String;
      getViewers(): Base.User[];
      newPosition(element: Element, offset: Integer): Position;
      newRange(): RangeBuilder;
      removeEditor(emailAddress: String): Document;
      removeEditor(user: Base.User): Document;
      removeViewer(emailAddress: String): Document;
      removeViewer(user: Base.User): Document;
      saveAndClose(): void;
      setCursor(position: Position): Document;
      setName(name: String): Document;
      setSelection(range: Range): Document;
    }

    /**
     * An element representing a symbol in a mathematical Equation. An EquationSymbol
     *  cannot contain any other element. For more information on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface EquationSymbol {
      copy(): EquationSymbol;
      getAttributes(): Object;
      getCode(): String;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      merge(): EquationSymbol;
      removeFromParent(): EquationSymbol;
      setAttributes(attributes: Object): EquationSymbol;
    }

    /**
     * A generic element that may contain other elements. All elements that may contain child elements,
     *  such as Paragraph, inherit from ContainerElement.
     */
    export interface ContainerElement {
      asBody(): Body;
      asEquation(): Equation;
      asFooterSection(): FooterSection;
      asFootnoteSection(): FootnoteSection;
      asHeaderSection(): HeaderSection;
      asListItem(): ListItem;
      asParagraph(): Paragraph;
      asTable(): Table;
      asTableCell(): TableCell;
      asTableOfContents(): TableOfContents;
      asTableRow(): TableRow;
      clear(): ContainerElement;
      copy(): ContainerElement;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getLinkUrl(): String;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      merge(): ContainerElement;
      removeFromParent(): ContainerElement;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): ContainerElement;
      setLinkUrl(url: String): ContainerElement;
      setTextAlignment(textAlignment: TextAlignment): ContainerElement;
    }

    /**
     * An element representing a page break. A PageBreak can be contained within a
     *  ListItem or Paragraph, unless the ListItem or Paragraph is within
     *  a Table, HeaderSection, FooterSection, or FootnoteSection. A
     *  PageBreak cannot itself contain any other element. For more information on document
     *  structure, see the
     *  guide to extending Google Docs.
     */
    export interface PageBreak {
      copy(): PageBreak;
      getAttributes(): Object;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      removeFromParent(): PageBreak;
      setAttributes(attributes: Object): PageBreak;
    }

    /**
     * A Range that has a name and ID to allow later retrieval. Names are not
     *  necessarily unique; several different ranges in the same document may share the same name, much
     *  like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML. Once a
     *  NamedRange has been added to a document, it cannot be modified, only removed.
     * 
     * A NamedRange can be accessed by any script that accesses the document. To avoid
     *  unintended conflicts between scripts, consider prefixing range names with a unique string.
     * 
     *      // Create a named range that includes every table in the document.
     *      var doc = DocumentApp.getActiveDocument();
     *      var rangeBuilder = doc.newRange();
     *      var tables = doc.getBody().getTables();
     *      for (var i = 0; i < tables.length; i++) {
     *        rangeBuilder.addElement(tables[i]);
     *      }
     *      doc.addNamedRange('myUniquePrefix-tables', rangeBuilder.build());
     */
    export interface NamedRange {
      getId(): String;
      getName(): String;
      getRange(): Range;
      remove(): void;
    }

    /**
     * An element representing a list item. A ListItem is a Paragraph that is
     *  associated with a list ID. A ListItem may contain Equation, Footnote,
     *  HorizontalRule, InlineDrawing, InlineImage, PageBreak, and
     *  Text elements. For more information on document structure, see the
     *  guide to extending Google Docs.
     * 
     * ListItems may not contain new-line characters. New-line characters ("\n") are
     *  converted to line-break characters ("\r").
     * 
     * ListItems with the same list ID belong to the same list and are numbered accordingly.
     *  The ListItems for a given list are not required to be adjacent in the document or even
     *  have the same parent element. Two items belonging to the same list may exist anywhere in the
     *  document while maintaining consecutive numbering, as the following example illustrates:
     * 
     *      var body = DocumentApp.getActiveDocument().getBody();
     *     
     *      // Append a new list item to the body.
     *      var item1 = body.appendListItem('Item 1');
     *     
     *      // Log the new list item's list ID.
     *      Logger.log(item1.getListId());
     *     
     *      // Append a table after the list item.
     *      body.appendTable([
     *        ['Cell 1', 'Cell 2']
     *      ]);
     *     
     *      // Append a second list item with the same list ID. The two items are treated as the same list,
     *      // despite not being consecutive.
     *      var item2 = body.appendListItem('Item 2');
     *      item2.setListId(item1);
     */
    export interface ListItem {
      appendHorizontalRule(): HorizontalRule;
      appendInlineImage(image: Base.BlobSource): InlineImage;
      appendInlineImage(image: InlineImage): InlineImage;
      appendPageBreak(): PageBreak;
      appendPageBreak(pageBreak: PageBreak): PageBreak;
      appendText(text: String): Text;
      appendText(text: Text): Text;
      clear(): ListItem;
      copy(): ListItem;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAlignment(): HorizontalAlignment;
      getAttributes(): Object;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getGlyphType(): GlyphType;
      getHeading(): ParagraphHeading;
      getIndentEnd(): Number;
      getIndentFirstLine(): Number;
      getIndentStart(): Number;
      getLineSpacing(): Number;
      getLinkUrl(): String;
      getListId(): String;
      getNestingLevel(): Integer;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getSpacingAfter(): Number;
      getSpacingBefore(): Number;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertInlineImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertInlineImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertPageBreak(childIndex: Integer): PageBreak;
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;
      insertText(childIndex: Integer, text: String): Text;
      insertText(childIndex: Integer, text: Text): Text;
      isAtDocumentEnd(): Boolean;
      isLeftToRight(): Boolean;
      merge(): ListItem;
      removeChild(child: Element): ListItem;
      removeFromParent(): ListItem;
      replaceText(searchPattern: String, replacement: String): Element;
      setAlignment(alignment: HorizontalAlignment): ListItem;
      setAttributes(attributes: Object): ListItem;
      setGlyphType(glyphType: GlyphType): ListItem;
      setHeading(heading: ParagraphHeading): ListItem;
      setIndentEnd(indentEnd: Number): ListItem;
      setIndentFirstLine(indentFirstLine: Number): ListItem;
      setIndentStart(indentStart: Number): ListItem;
      setLeftToRight(leftToRight: Boolean): ListItem;
      setLineSpacing(multiplier: Number): ListItem;
      setLinkUrl(url: String): ListItem;
      setListId(listItem: ListItem): ListItem;
      setNestingLevel(nestingLevel: Integer): ListItem;
      setSpacingAfter(spacingAfter: Number): ListItem;
      setSpacingBefore(spacingBefore: Number): ListItem;
      setText(text: String): void;
      setTextAlignment(textAlignment: TextAlignment): ListItem;
    }

    /**
     * An element representing a footnote section. A FootnoteSection contains the text that
     *  corresponds to a Footnote. The FootnoteSection may contain ListItem or
     *  Paragraph elements. For more information on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface FootnoteSection {
      appendParagraph(paragraph: Paragraph): Paragraph;
      appendParagraph(text: String): Paragraph;
      clear(): FootnoteSection;
      copy(): FootnoteSection;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParagraphs(): Paragraph[];
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;
      insertParagraph(childIndex: Integer, text: String): Paragraph;
      removeChild(child: Element): FootnoteSection;
      removeFromParent(): FootnoteSection;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): FootnoteSection;
      setText(text: String): FootnoteSection;
      setTextAlignment(textAlignment: TextAlignment): FootnoteSection;
      getFootnotes(): Footnote[];
      getLinkUrl(): String;
      isAtDocumentEnd(): Boolean;
      setLinkUrl(url: String): FootnoteSection;
    }

    /**
     * An element representing an embedded image. An InlineImage can be contained within a
     *  ListItem or Paragraph, unless the ListItem or Paragraph is within
     *  a FootnoteSection. An InlineImage cannot itself contain any other element. For
     *  more information on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface InlineImage {
      copy(): InlineImage;
      getAs(contentType: String): Base.Blob;
      getAttributes(): Object;
      getBlob(): Base.Blob;
      getHeight(): Integer;
      getLinkUrl(): String;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      getWidth(): Integer;
      isAtDocumentEnd(): Boolean;
      merge(): InlineImage;
      removeFromParent(): InlineImage;
      setAttributes(attributes: Object): InlineImage;
      setHeight(height: Integer): InlineImage;
      setLinkUrl(url: String): InlineImage;
      setWidth(width: Integer): InlineImage;
    }

    /**
     * An element representing a header section. A
     *  Document typically
     *  contains at most one HeaderSection. The HeaderSection may contain
     *  ListItem, Paragraph, and Table elements. For more information on document
     *  structure, see the
     *  guide to extending Google Docs.
     */
    export interface HeaderSection {
      appendHorizontalRule(): HorizontalRule;
      appendImage(image: Base.BlobSource): InlineImage;
      appendImage(image: InlineImage): InlineImage;
      appendListItem(listItem: ListItem): ListItem;
      appendListItem(text: String): ListItem;
      appendParagraph(paragraph: Paragraph): Paragraph;
      appendParagraph(text: String): Paragraph;
      appendTable(): Table;
      appendTable(cells: String[][]): Table;
      appendTable(table: Table): Table;
      clear(): HeaderSection;
      copy(): HeaderSection;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getImages(): InlineImage[];
      getListItems(): ListItem[];
      getNumChildren(): Integer;
      getParagraphs(): Paragraph[];
      getParent(): ContainerElement;
      getTables(): Table[];
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;
      insertListItem(childIndex: Integer, text: String): ListItem;
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;
      insertParagraph(childIndex: Integer, text: String): Paragraph;
      insertTable(childIndex: Integer): Table;
      insertTable(childIndex: Integer, cells: String[][]): Table;
      insertTable(childIndex: Integer, table: Table): Table;
      removeChild(child: Element): HeaderSection;
      removeFromParent(): HeaderSection;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): HeaderSection;
      setText(text: String): HeaderSection;
      setTextAlignment(textAlignment: TextAlignment): HeaderSection;
      getFootnotes(): Footnote[];
      getLinkUrl(): String;
      getNextSibling(): Element;
      getPreviousSibling(): Element;
      isAtDocumentEnd(): Boolean;
      setLinkUrl(url: String): HeaderSection;
    }

    /**
     * An element representing an embedded drawing. An InlineDrawing can be contained within a
     *  ListItem or Paragraph, unless the ListItem or Paragraph is within
     *  a FootnoteSection. An InlineDrawing cannot itself contain any other element. For
     *  more information on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface InlineDrawing {
      copy(): InlineDrawing;
      getAttributes(): Object;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      merge(): InlineDrawing;
      removeFromParent(): InlineDrawing;
      setAttributes(attributes: Object): InlineDrawing;
    }

    /**
     * An element representing an horizontal rule. A HorizontalRule can be contained within a
     *  ListItem or Paragraph, but cannot itself contain any other element. For more
     *  information on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface HorizontalRule {
      copy(): HorizontalRule;
      getAttributes(): Object;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      removeFromParent(): HorizontalRule;
      setAttributes(attributes: Object): HorizontalRule;
    }

    /**
     * A range of elements in a document. The user's selection is represented as a
     *  Range, among other uses. Scripts can only access the selection of the user who is running
     *  the script, and only if the script is
     *  bound to the document.
     * 
     *      // Bold all selected text.
     *      var selection = DocumentApp.getActiveDocument().getSelection();
     *      if (selection) {
     *        var elements = selection.getRangeElements();
     *        for (var i = 0; i < elements.length; i++) {
     *          var element = elements[i];
     *     
     *          // Only modify elements that can be edited as text; skip images and other non-text elements.
     *          if (element.getElement().editAsText) {
     *            var text = element.getElement().editAsText();
     *     
     *            // Bold the selected part of the element, or the full element if it's completely selected.
     *            if (element.isPartial()) {
     *              text.setBold(element.getStartOffset(), element.getEndOffsetInclusive(), true);
     *            } else {
     *              text.setBold(true);
     *            }
     *          }
     *        }
     *      }
     */
    export interface Range {
      getRangeElements(): RangeElement[];
      getSelectedElements(): RangeElement[];
    }

    /**
     * A reference to a location in the document, relative to a specific element. The user's cursor is
     *  represented as a Position, among other uses. Scripts can only access the cursor of the
     *  user who is running the script, and only if the script is
     *  bound to the document.
     * 
     *      // Insert some text at the cursor position and make it bold.
     *      var cursor = DocumentApp.getActiveDocument().getCursor();
     *      if (cursor) {
     *        // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
     *        // containing element doesn't allow insertions, so show the user an error message.
     *        var element = cursor.insertText('ಠ‿ಠ');
     *        if (element) {
     *          element.setBold(true);
     *        } else {
     *          DocumentApp.getUi().alert('Cannot insert text here.');
     *        }
     *      } else {
     *        DocumentApp.getUi().alert('Cannot find a cursor.');
     *      }
     */
    export interface Position {
      getElement(): Element;
      getOffset(): Integer;
      getSurroundingText(): Text;
      getSurroundingTextOffset(): Integer;
      insertBookmark(): Bookmark;
      insertInlineImage(image: Base.BlobSource): InlineImage;
      insertText(text: String): Text;
    }

    /**
     * A builder used to construct Range objects from document elements.
     * 
     *      // Change the user's selection to a range that includes every table in the document.
     *      var doc = DocumentApp.getActiveDocument();
     *      var rangeBuilder = doc.newRange();
     *      var tables = doc.getBody().getTables();
     *      for (var i = 0; i < tables.length; i++) {
     *        rangeBuilder.addElement(tables[i]);
     *      }
     *      doc.setSelection(rangeBuilder.build());
     */
    export interface RangeBuilder {
      addElement(element: Element): RangeBuilder;
      addElement(textElement: Text, startOffset: Integer, endOffsetInclusive: Integer): RangeBuilder;
      addElementsBetween(startElement: Element, endElementInclusive: Element): RangeBuilder;
      addElementsBetween(startTextElement: Text, startOffset: Integer, endTextElementInclusive: Text, endOffsetInclusive: Integer): RangeBuilder;
      addRange(range: Range): RangeBuilder;
      build(): Range;
      getRangeElements(): RangeElement[];
      getSelectedElements(): RangeElement[];
    }

    /**
     * An element containing a table of contents. A TableOfContents may contain
     *  ListItem, Paragraph, and Table elements, although the contents of a
     *  TableOfContents are usually generated automatically by Google Docs. For more information
     *  on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface TableOfContents {
      clear(): TableOfContents;
      copy(): TableOfContents;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getLinkUrl(): String;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      removeFromParent(): TableOfContents;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): TableOfContents;
      setLinkUrl(url: String): TableOfContents;
      setTextAlignment(textAlignment: TextAlignment): TableOfContents;
    }

    /**
     * An element representing a paragraph. A Paragraph may contain Equation,
     *  Footnote, HorizontalRule, InlineDrawing, InlineImage,
     *  PageBreak, and Text elements. For more information on document structure, see the
     *  guide to extending Google Docs.
     * 
     * Paragraphs may not contain new-line characters. New-line characters ("\n") are
     *  converted to line-break characters ("\r").
     * 
     *      var body = DocumentApp.getActiveDocument().getBody();
     *     
     *      // Append a document header paragraph.
     *      var header = body.appendParagraph("A Document");
     *      header.setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *     
     *      // Append a section header paragraph.
     *      var section = body.appendParagraph("Section 1");
     *      section.setHeading(DocumentApp.ParagraphHeading.HEADING2);
     *     
     *      // Append a regular paragraph.
     *      body.appendParagraph("This is a typical paragraph.");
     */
    export interface Paragraph {
      appendHorizontalRule(): HorizontalRule;
      appendInlineImage(image: Base.BlobSource): InlineImage;
      appendInlineImage(image: InlineImage): InlineImage;
      appendPageBreak(): PageBreak;
      appendPageBreak(pageBreak: PageBreak): PageBreak;
      appendText(text: String): Text;
      appendText(text: Text): Text;
      clear(): Paragraph;
      copy(): Paragraph;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAlignment(): HorizontalAlignment;
      getAttributes(): Object;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getHeading(): ParagraphHeading;
      getIndentEnd(): Number;
      getIndentFirstLine(): Number;
      getIndentStart(): Number;
      getLineSpacing(): Number;
      getLinkUrl(): String;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getSpacingAfter(): Number;
      getSpacingBefore(): Number;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertInlineImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertInlineImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertPageBreak(childIndex: Integer): PageBreak;
      insertPageBreak(childIndex: Integer, pageBreak: PageBreak): PageBreak;
      insertText(childIndex: Integer, text: String): Text;
      insertText(childIndex: Integer, text: Text): Text;
      isAtDocumentEnd(): Boolean;
      isLeftToRight(): Boolean;
      merge(): Paragraph;
      removeChild(child: Element): Paragraph;
      removeFromParent(): Paragraph;
      replaceText(searchPattern: String, replacement: String): Element;
      setAlignment(alignment: HorizontalAlignment): Paragraph;
      setAttributes(attributes: Object): Paragraph;
      setHeading(heading: ParagraphHeading): Paragraph;
      setIndentEnd(indentEnd: Number): Paragraph;
      setIndentFirstLine(indentFirstLine: Number): Paragraph;
      setIndentStart(indentStart: Number): Paragraph;
      setLeftToRight(leftToRight: Boolean): Paragraph;
      setLineSpacing(multiplier: Number): Paragraph;
      setLinkUrl(url: String): Paragraph;
      setSpacingAfter(spacingAfter: Number): Paragraph;
      setSpacingBefore(spacingBefore: Number): Paragraph;
      setText(text: String): void;
      setTextAlignment(textAlignment: TextAlignment): Paragraph;
    }

    /**
     * An element representing a table cell. A TableCell is always contained within a
     *  TableRow and may contain ListItem, Paragraph, or Table elements.
     *  For more information on document structure, see the
     *  guide to extending Google Docs.
     */
    export interface TableCell {
      appendHorizontalRule(): HorizontalRule;
      appendImage(image: Base.BlobSource): InlineImage;
      appendImage(image: InlineImage): InlineImage;
      appendListItem(listItem: ListItem): ListItem;
      appendListItem(text: String): ListItem;
      appendParagraph(paragraph: Paragraph): Paragraph;
      appendParagraph(text: String): Paragraph;
      appendTable(): Table;
      appendTable(cells: String[][]): Table;
      appendTable(table: Table): Table;
      clear(): TableCell;
      copy(): TableCell;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getBackgroundColor(): String;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getLinkUrl(): String;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getPaddingBottom(): Number;
      getPaddingLeft(): Number;
      getPaddingRight(): Number;
      getPaddingTop(): Number;
      getParent(): ContainerElement;
      getParentRow(): TableRow;
      getParentTable(): Table;
      getPreviousSibling(): Element;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      getVerticalAlignment(): VerticalAlignment;
      getWidth(): Number;
      insertHorizontalRule(childIndex: Integer): HorizontalRule;
      insertImage(childIndex: Integer, image: Base.BlobSource): InlineImage;
      insertImage(childIndex: Integer, image: InlineImage): InlineImage;
      insertListItem(childIndex: Integer, listItem: ListItem): ListItem;
      insertListItem(childIndex: Integer, text: String): ListItem;
      insertParagraph(childIndex: Integer, paragraph: Paragraph): Paragraph;
      insertParagraph(childIndex: Integer, text: String): Paragraph;
      insertTable(childIndex: Integer): Table;
      insertTable(childIndex: Integer, cells: String[][]): Table;
      insertTable(childIndex: Integer, table: Table): Table;
      isAtDocumentEnd(): Boolean;
      merge(): TableCell;
      removeChild(child: Element): TableCell;
      removeFromParent(): TableCell;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): TableCell;
      setBackgroundColor(color: String): TableCell;
      setLinkUrl(url: String): TableCell;
      setPaddingBottom(paddingBottom: Number): TableCell;
      setPaddingLeft(paddingLeft: Number): TableCell;
      setPaddingRight(paddingTop: Number): TableCell;
      setPaddingTop(paddingTop: Number): TableCell;
      setText(text: String): TableCell;
      setTextAlignment(textAlignment: TextAlignment): TableCell;
      setVerticalAlignment(alignment: VerticalAlignment): TableCell;
      setWidth(width: Number): TableCell;
    }

    /**
     * An element representing a table. A Table may only contain TableRow elements. For
     *  more information on document structure, see the
     *  guide to extending Google Docs.
     * 
     * When creating a Table that contains a large number of rows or cells, consider building
     *  it from a string array, as shown in the following example.
     * 
     *      var body = DocumentApp.getActiveDocument().getBody();
     *     
     *      // Create a two-dimensional array containing the cell contents.
     *      var cells = [
     *        ['Row 1, Cell 1', 'Row 1, Cell 2'],
     *        ['Row 2, Cell 1', 'Row 2, Cell 2']
     *      ];
     *     
     *      // Build a table from the array.
     *      body.appendTable(cells);
     */
    export interface Table {
      appendTableRow(): TableRow;
      appendTableRow(tableRow: TableRow): TableRow;
      clear(): Table;
      copy(): Table;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getBorderColor(): String;
      getBorderWidth(): Number;
      getCell(rowIndex: Integer, cellIndex: Integer): TableCell;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getColumnWidth(columnIndex: Integer): Number;
      getLinkUrl(): String;
      getNextSibling(): Element;
      getNumChildren(): Integer;
      getNumRows(): Integer;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getRow(rowIndex: Integer): TableRow;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertTableRow(childIndex: Integer): TableRow;
      insertTableRow(childIndex: Integer, tableRow: TableRow): TableRow;
      isAtDocumentEnd(): Boolean;
      removeChild(child: Element): Table;
      removeFromParent(): Table;
      removeRow(rowIndex: Integer): TableRow;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): Table;
      setBorderColor(color: String): Table;
      setBorderWidth(width: Number): Table;
      setColumnWidth(columnIndex: Integer, width: Number): Table;
      setLinkUrl(url: String): Table;
      setTextAlignment(textAlignment: TextAlignment): Table;
    }

    /**
     * A wrapper around an Element with a possible start and end offset. These offsets allow a
     *  range of characters within a Text
     *  element to be represented in search results, document selections, and named ranges.
     */
    export interface RangeElement {
      getElement(): Element;
      getEndOffsetInclusive(): Integer;
      getStartOffset(): Integer;
      isPartial(): Boolean;
    }

    /**
     * An element representing a rich text region. All text in a
     *  Document is contained within Text
     *  elements.  A Text element can be contained within an Equation,
     *  EquationFunction, ListItem, or Paragraph, but cannot itself contain any
     *  other element. For more information on document structure, see the
     *  guide to extending Google Docs.
     * 
     *      var body = DocumentApp.getActiveDocument().getBody();
     *     
     *      // Use editAsText to obtain a single text element containing
     *      // all the characters in the document.
     *      var text = body.editAsText();
     *     
     *      // Insert text at the beginning of the document.
     *      text.insertText(0, 'Inserted text.\n');
     *     
     *      // Insert text at the end of the document.
     *      text.appendText('\nAppended text.');
     *     
     *      // Make the first half of the document blue.
     *      text.setForegroundColor(0, text.getText().length / 2, '#00FFFF');
     */
    export interface Text {
      appendText(text: String): Text;
      copy(): Text;
      deleteText(startOffset: Integer, endOffsetInclusive: Integer): Text;
      editAsText(): Text;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getAttributes(offset: Integer): Object;
      getBackgroundColor(): String;
      getBackgroundColor(offset: Integer): String;
      getFontFamily(): String;
      getFontFamily(offset: Integer): String;
      getFontSize(): Integer;
      getFontSize(offset: Integer): Integer;
      getForegroundColor(): String;
      getForegroundColor(offset: Integer): String;
      getLinkUrl(): String;
      getLinkUrl(offset: Integer): String;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getTextAlignment(offset: Integer): TextAlignment;
      getTextAttributeIndices(): Integer[];
      getType(): ElementType;
      insertText(offset: Integer, text: String): Text;
      isAtDocumentEnd(): Boolean;
      isBold(): Boolean;
      isBold(offset: Integer): Boolean;
      isItalic(): Boolean;
      isItalic(offset: Integer): Boolean;
      isStrikethrough(): Boolean;
      isStrikethrough(offset: Integer): Boolean;
      isUnderline(): Boolean;
      isUnderline(offset: Integer): Boolean;
      merge(): Text;
      removeFromParent(): Text;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(startOffset: Integer, endOffsetInclusive: Integer, attributes: Object): Text;
      setAttributes(attributes: Object): Text;
      setBackgroundColor(startOffset: Integer, endOffsetInclusive: Integer, color: String): Text;
      setBackgroundColor(color: String): Text;
      setBold(bold: Boolean): Text;
      setBold(startOffset: Integer, endOffsetInclusive: Integer, bold: Boolean): Text;
      setFontFamily(startOffset: Integer, endOffsetInclusive: Integer, fontFamilyName: String): Text;
      setFontFamily(fontFamilyName: String): Text;
      setFontSize(size: Integer): Text;
      setFontSize(startOffset: Integer, endOffsetInclusive: Integer, size: Integer): Text;
      setForegroundColor(startOffset: Integer, endOffsetInclusive: Integer, color: String): Text;
      setForegroundColor(color: String): Text;
      setItalic(italic: Boolean): Text;
      setItalic(startOffset: Integer, endOffsetInclusive: Integer, italic: Boolean): Text;
      setLinkUrl(startOffset: Integer, endOffsetInclusive: Integer, url: String): Text;
      setLinkUrl(url: String): Text;
      setStrikethrough(strikethrough: Boolean): Text;
      setStrikethrough(startOffset: Integer, endOffsetInclusive: Integer, strikethrough: Boolean): Text;
      setText(text: String): Text;
      setTextAlignment(startOffset: Integer, endOffsetInclusive: Integer, textAlignment: TextAlignment): Text;
      setTextAlignment(textAlignment: TextAlignment): Text;
      setUnderline(underline: Boolean): Text;
      setUnderline(startOffset: Integer, endOffsetInclusive: Integer, underline: Boolean): Text;
    }

    /**
     * An element representing a region that is unknown or cannot be affected by a script, such as a
     *  page number.
     */
    export interface UnsupportedElement {
      copy(): UnsupportedElement;
      getAttributes(): Object;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      merge(): UnsupportedElement;
      removeFromParent(): UnsupportedElement;
      setAttributes(attributes: Object): UnsupportedElement;
    }

    /**
     * 
     * Deprecated. The methods getFontFamily() and setFontFamily(String) now use string
     *      names for fonts instead of this enum. Although this enum is deprecated, it will remain
     *      available for compatibility with older scripts.
     * An enumeration of the supported fonts.
     * 
     * Use the FontFamily enumeration to set the font for a range of
     *  text, element or document.
     * 
     *      var body = DocumentApp.getActiveDocument().getBody();
     *     
     *      // Insert a paragraph at the start of the document.
     *      body.insertParagraph(0, "Hello, Apps Script!");
     *     
     *      // Set the document font to Calibri.
     *      body.editAsText().setFontFamily(DocumentApp.FontFamily.CALIBRI);
     *     
     *      // Set the first paragraph font to Arial.
     *      body.getParagraphs()[0].setFontFamily(DocumentApp.FontFamily.ARIAL);
     *     
     *      // Set "Apps Script" to Comic Sans MS.
     *      var text = 'Apps Script';
     *      var a = body.getText().indexOf(text);
     *      var b = a + text.length - 1;
     *      body.editAsText().setFontFamily(a, b, DocumentApp.FontFamily.COMIC_SANS_MS);
     */
    export enum FontFamily { AMARANTH, ARIAL, ARIAL_BLACK, ARIAL_NARROW, ARVO, CALIBRI, CAMBRIA, COMIC_SANS_MS, CONSOLAS, CORSIVA, COURIER_NEW, DANCING_SCRIPT, DROID_SANS, DROID_SERIF, GARAMOND, GEORGIA, GLORIA_HALLELUJAH, GREAT_VIBES, LOBSTER, MERRIWEATHER, PACIFICO, PHILOSOPHER, POIRET_ONE, QUATTROCENTO, ROBOTO, SHADOWS_INTO_LIGHT, SYNCOPATE, TAHOMA, TIMES_NEW_ROMAN, TREBUCHET_MS, UBUNTU, VERDANA }

    /**
     * An element representing a table row. A TableRow is always contained within a
     *  Table and may only contain TableCell elements. For more information on document
     *  structure, see the
     *  guide to extending Google Docs.
     */
    export interface TableRow {
      appendTableCell(): TableCell;
      appendTableCell(textContents: String): TableCell;
      appendTableCell(tableCell: TableCell): TableCell;
      clear(): TableRow;
      copy(): TableRow;
      editAsText(): Text;
      findElement(elementType: ElementType): RangeElement;
      findElement(elementType: ElementType, from: RangeElement): RangeElement;
      findText(searchPattern: String): RangeElement;
      findText(searchPattern: String, from: RangeElement): RangeElement;
      getAttributes(): Object;
      getCell(cellIndex: Integer): TableCell;
      getChild(childIndex: Integer): Element;
      getChildIndex(child: Element): Integer;
      getLinkUrl(): String;
      getMinimumHeight(): Integer;
      getNextSibling(): Element;
      getNumCells(): Integer;
      getNumChildren(): Integer;
      getParent(): ContainerElement;
      getParentTable(): Table;
      getPreviousSibling(): Element;
      getText(): String;
      getTextAlignment(): TextAlignment;
      getType(): ElementType;
      insertTableCell(childIndex: Integer): TableCell;
      insertTableCell(childIndex: Integer, textContents: String): TableCell;
      insertTableCell(childIndex: Integer, tableCell: TableCell): TableCell;
      isAtDocumentEnd(): Boolean;
      merge(): TableRow;
      removeCell(cellIndex: Integer): TableCell;
      removeChild(child: Element): TableRow;
      removeFromParent(): TableRow;
      replaceText(searchPattern: String, replacement: String): Element;
      setAttributes(attributes: Object): TableRow;
      setLinkUrl(url: String): TableRow;
      setMinimumHeight(minHeight: Integer): TableRow;
      setTextAlignment(textAlignment: TextAlignment): TableRow;
    }

    /**
     * An enumeration of the element attributes.
     * 
     * Use attributes to compose custom styles. For example:
     * 
     *      // Define a style with yellow background.
     *      var highlightStyle = {};
     *      highlightStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFF00';
     *      highlightStyle[DocumentApp.Attribute.BOLD] = true;
     *     
     *      // Insert "Hello", highlighted.
     *      DocumentApp.getActiveDocument().editAsText()
     *        .insertText(0, 'Hello\n')
     *        .setAttributes(0, 4, highlightStyle);
     */
    export enum Attribute { BACKGROUND_COLOR, BOLD, BORDER_COLOR, BORDER_WIDTH, CODE, FONT_FAMILY, FONT_SIZE, FOREGROUND_COLOR, HEADING, HEIGHT, HORIZONTAL_ALIGNMENT, INDENT_END, INDENT_FIRST_LINE, INDENT_START, ITALIC, GLYPH_TYPE, LEFT_TO_RIGHT, LINE_SPACING, LINK_URL, LIST_ID, MARGIN_BOTTOM, MARGIN_LEFT, MARGIN_RIGHT, MARGIN_TOP, NESTING_LEVEL, MINIMUM_HEIGHT, PADDING_BOTTOM, PADDING_LEFT, PADDING_RIGHT, PADDING_TOP, PAGE_HEIGHT, PAGE_WIDTH, SPACING_AFTER, SPACING_BEFORE, STRIKETHROUGH, UNDERLINE, VERTICAL_ALIGNMENT, WIDTH }

    /**
     * An enumeration of the supported glyph types.
     * 
     * Use the GlyphType enumeration to set the bullet type for list
     *  items.
     * 
     *      var body = DocumentApp.getActiveDocument().getBody();
     *     
     *      // Insert at list item, with the default nesting level of zero.
     *       body.appendListItem("Item 1");
     *     
     *       // Append a second list item, with a nesting level of one, indented one inch.
     *       // The two items will have different bullet glyphs.
     *       body.appendListItem("Item 2").setNestingLevel(1).setIndentStart(72)
     *           .setGlyphType(DocumentApp.GlyphType.SQUARE_BULLET);
     */
    export enum GlyphType { BULLET, HOLLOW_BULLET, SQUARE_BULLET, NUMBER, LATIN_UPPER, LATIN_LOWER, ROMAN_UPPER, ROMAN_LOWER }

    /**
     * A generic element. Document contents are
     *  represented as elements. For example, ListItem, Paragraph, and Table
     *  are elements and inherit all of the methods defined by Element, such as
     *  getType().
     * Implementing classes
     * 
     * NameBrief description
     * 
     * BodyAn element representing a document body.
     * 
     * ContainerElementA generic element that may contain other elements.
     * 
     * EquationAn element representing a mathematical expression.
     * 
     * EquationFunctionAn element representing a function in a mathematical Equation.
     * 
     * EquationFunctionArgumentSeparatorAn element representing a function separator in a mathematical Equation.
     * 
     * EquationSymbolAn element representing a symbol in a mathematical Equation.
     * 
     * FooterSectionAn element representing a footer section.
     * 
     * FootnoteAn element representing a footnote.
     * 
     * FootnoteSectionAn element representing a footnote section.
     * 
     * HeaderSectionAn element representing a header section.
     * 
     * HorizontalRuleAn element representing an horizontal rule.
     * 
     * InlineDrawingAn element representing an embedded drawing.
     * 
     * InlineImageAn element representing an embedded image.
     * 
     * ListItemAn element representing a list item.
     * 
     * PageBreakAn element representing a page break.
     * 
     * ParagraphAn element representing a paragraph.
     * 
     * TableAn element representing a table.
     * 
     * TableCellAn element representing a table cell.
     * 
     * TableOfContentsAn element containing a table of contents.
     * 
     * TableRowAn element representing a table row.
     * 
     * TextAn element representing a rich text region.
     * 
     * UnsupportedElementAn element representing a region that is unknown or cannot be affected by a script, such as a
     *  page number.
     */
    export interface Element {
      asBody(): Body;
      asEquation(): Equation;
      asEquationFunction(): EquationFunction;
      asEquationFunctionArgumentSeparator(): EquationFunctionArgumentSeparator;
      asEquationSymbol(): EquationSymbol;
      asFooterSection(): FooterSection;
      asFootnote(): Footnote;
      asFootnoteSection(): FootnoteSection;
      asHeaderSection(): HeaderSection;
      asHorizontalRule(): HorizontalRule;
      asInlineDrawing(): InlineDrawing;
      asInlineImage(): InlineImage;
      asListItem(): ListItem;
      asPageBreak(): PageBreak;
      asParagraph(): Paragraph;
      asTable(): Table;
      asTableCell(): TableCell;
      asTableOfContents(): TableOfContents;
      asTableRow(): TableRow;
      asText(): Text;
      copy(): Element;
      getAttributes(): Object;
      getNextSibling(): Element;
      getParent(): ContainerElement;
      getPreviousSibling(): Element;
      getType(): ElementType;
      isAtDocumentEnd(): Boolean;
      merge(): Element;
      removeFromParent(): Element;
      setAttributes(attributes: Object): Element;
    }

    /**
     * An enumeration of all the element types.
     * 
     * Use the ElementType enumeration to check the type of a given
     *  element, for instance:
     * 
     *      var firstChild = DocumentApp.getActiveDocument().getBody().getChild(0);
     *      if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
     *        // It's a paragraph, apply a paragraph heading.
     *        firstChild.asParagraph().setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *      }
     */
    export enum ElementType { BODY_SECTION, COMMENT_SECTION, DOCUMENT, EQUATION, EQUATION_FUNCTION, EQUATION_FUNCTION_ARGUMENT_SEPARATOR, EQUATION_SYMBOL, FOOTER_SECTION, FOOTNOTE, FOOTNOTE_SECTION, HEADER_SECTION, HORIZONTAL_RULE, INLINE_DRAWING, INLINE_IMAGE, LIST_ITEM, PAGE_BREAK, PARAGRAPH, TABLE, TABLE_CELL, TABLE_OF_CONTENTS, TABLE_ROW, TEXT, UNSUPPORTED }

    /**
     * An enumeration of the supported vertical alignment types.
     * 
     * Use the VerticalAlignment enumeration to set the vertical
     *  alignment of table cells.
     * 
     *      var body = DocumentApp.getActiveDocument().getBody();
     *     
     *      // Append table containing two cells.
     *      var table = body.appendTable([['Top', 'Center', 'Bottom']]);
     *     
     *      // Align the first cell's contents to the top.
     *      table.getCell(0, 0).setVerticalAlignment(DocumentApp.VerticalAlignment.TOP);
     *     
     *      // Align the second cell's contents to the center.
     *      table.getCell(0, 1).setVerticalAlignment(DocumentApp.VerticalAlignment.CENTER);
     *     
     *      // Align the third cell's contents to the bottom.
     *      table.getCell(0, 2).setVerticalAlignment(DocumentApp.VerticalAlignment.BOTTOM);
     */
    export enum VerticalAlignment { BOTTOM, CENTER, TOP }

    /**
     * An enumeration of the type of text alignments.
     * 
     *      // Make the first character in the first paragraph be superscript.
     *      var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
     *      text.setTextAlignment(0, 0, DocumentApp.TextAlignment.SUPERSCRIPT);
     */
    export enum TextAlignment { NORMAL, SUPERSCRIPT, SUBSCRIPT }

    /**
     * An enumeration of the standard paragraph headings.
     * 
     * Use the ParagraphHeading enumeration to configure
     *  the heading style for ParagraphElement.
     * 
     *      var body = DocumentApp.getActiveDocument().getBody();
     *     
     *      // Append a paragraph, with heading 1.
     *      var par1 = body.appendParagraph("Title");
     *      par1.setHeading(DocumentApp.ParagraphHeading.HEADING1);
     *     
     *      // Append a paragraph, with heading 2.
     *      var par2 = body.appendParagraph("SubTitle");
     *      par2.setHeading(DocumentApp.ParagraphHeading.HEADING2);
     *     
     *      // Append a paragraph, with normal heading.
     *      var par3 = body.appendParagraph("Text");
     *      par3.setHeading(DocumentApp.ParagraphHeading.NORMAL);
     */
    export enum ParagraphHeading { NORMAL, HEADING1, HEADING2, HEADING3, HEADING4, HEADING5, HEADING6, TITLE, SUBTITLE }

    /**
     * An enumeration of the supported horizontal alignment types.
     * 
     * Use the HorizontalAlignment enumeration to manipulate the
     *  alignment of Paragraph contents.
     * 
     *      var body = DocumentApp.getActiveDocument().getBody();
     *     
     *      // Insert a paragraph and a table at the start of document.
     *      var par1 = body.insertParagraph(0, "Center");
     *      var table = body.insertTable(1, [['Left', 'Right']]);
     *      var par2 = table.getCell(0, 0).getChild(0).asParagraph();
     *      var par3 = table.getCell(0, 0).getChild(0).asParagraph();
     *     
     *      // Center align the first paragraph.
     *      par1.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
     *     
     *      // Left align the first cell.
     *      par2.setAlignment(DocumentApp.HorizontalAlignment.LEFT);
     *     
     *      // Right align the second cell.
     *      par3.setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
     */
    export enum HorizontalAlignment { LEFT, CENTER, RIGHT, JUSTIFY }

  }
}

declare var DocumentApp: GoogleAppsScript.Document.DocumentApp;