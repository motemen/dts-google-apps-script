/// <reference path="google-apps-script.types.d.ts" />

declare module GoogleAppsScript {
  export module UI {
    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard push-button widget.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // create a button and give it a click handler
     *        var button = app.createButton("click me!").setId("button");
     *        button.addClickHandler(app.createServerHandler("handlerFunction"));
     *        app.add(button);
     *        return app;
     *      }
     *     
     *      function handlerFunction(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.getElementById("button").setText("I was clicked!");
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Button documentation here.
     */
    export interface Button {
      addBlurHandler(handler: Handler): Button;
      addClickHandler(handler: Handler): Button;
      addFocusHandler(handler: Handler): Button;
      addKeyDownHandler(handler: Handler): Button;
      addKeyPressHandler(handler: Handler): Button;
      addKeyUpHandler(handler: Handler): Button;
      addMouseDownHandler(handler: Handler): Button;
      addMouseMoveHandler(handler: Handler): Button;
      addMouseOutHandler(handler: Handler): Button;
      addMouseOverHandler(handler: Handler): Button;
      addMouseUpHandler(handler: Handler): Button;
      addMouseWheelHandler(handler: Handler): Button;
      addStyleDependentName(styleName: String): Button;
      addStyleName(styleName: String): Button;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): Button;
      setEnabled(enabled: Boolean): Button;
      setFocus(focus: Boolean): Button;
      setHTML(html: String): Button;
      setHeight(height: String): Button;
      setId(id: String): Button;
      setLayoutData(layout: Object): Button;
      setPixelSize(width: Integer, height: Integer): Button;
      setSize(width: String, height: String): Button;
      setStyleAttribute(attribute: String, value: String): Button;
      setStyleAttributes(attributes: Object): Button;
      setStyleName(styleName: String): Button;
      setStylePrimaryName(styleName: String): Button;
      setTabIndex(index: Integer): Button;
      setTag(tag: String): Button;
      setText(text: String): Button;
      setTitle(title: String): Button;
      setVisible(visible: Boolean): Button;
      setWidth(width: String): Button;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that represents a simple <a> element. That is, a hyperlink to a different page.
     * 
     *  By design, these hyperlinks always open in a new page. Links that reload the current page are
     *  not allowed.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // Creates a link to your favorite search engine.
     *        var anchor = app.createAnchor("a link", "http://www.google.com");
     *        app.add(anchor);
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Anchor documentation here.
     */
    export interface Anchor {
      addBlurHandler(handler: Handler): Anchor;
      addClickHandler(handler: Handler): Anchor;
      addFocusHandler(handler: Handler): Anchor;
      addKeyDownHandler(handler: Handler): Anchor;
      addKeyPressHandler(handler: Handler): Anchor;
      addKeyUpHandler(handler: Handler): Anchor;
      addMouseDownHandler(handler: Handler): Anchor;
      addMouseMoveHandler(handler: Handler): Anchor;
      addMouseOutHandler(handler: Handler): Anchor;
      addMouseOverHandler(handler: Handler): Anchor;
      addMouseUpHandler(handler: Handler): Anchor;
      addMouseWheelHandler(handler: Handler): Anchor;
      addStyleDependentName(styleName: String): Anchor;
      addStyleName(styleName: String): Anchor;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): Anchor;
      setDirection(direction: Component): Anchor;
      setEnabled(enabled: Boolean): Anchor;
      setFocus(focus: Boolean): Anchor;
      setHTML(html: String): Anchor;
      setHeight(height: String): Anchor;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): Anchor;
      setHref(href: String): Anchor;
      setId(id: String): Anchor;
      setLayoutData(layout: Object): Anchor;
      setName(name: String): Anchor;
      setPixelSize(width: Integer, height: Integer): Anchor;
      setSize(width: String, height: String): Anchor;
      setStyleAttribute(attribute: String, value: String): Anchor;
      setStyleAttributes(attributes: Object): Anchor;
      setStyleName(styleName: String): Anchor;
      setStylePrimaryName(styleName: String): Anchor;
      setTabIndex(index: Integer): Anchor;
      setTag(tag: String): Anchor;
      setTarget(target: String): Anchor;
      setText(text: String): Anchor;
      setTitle(title: String): Anchor;
      setVisible(visible: Boolean): Anchor;
      setWidth(width: String): Anchor;
      setWordWrap(wordWrap: Boolean): Anchor;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * An absolute panel positions all of its children absolutely, allowing them to overlap.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var button = app.createButton("a button");
     *        var panel = app.createAbsolutePanel();
     *        // add a widget at position (10, 20)
     *        panel.add(button, 10, 20);
     *        app.add(panel);
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the AbsolutePanel documentation here.
     */
    export interface AbsolutePanel {
      add(widget: Widget): AbsolutePanel;
      add(widget: Widget, left: Integer, top: Integer): AbsolutePanel;
      addStyleDependentName(styleName: String): AbsolutePanel;
      addStyleName(styleName: String): AbsolutePanel;
      clear(): AbsolutePanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      remove(index: Integer): AbsolutePanel;
      remove(widget: Widget): AbsolutePanel;
      setHeight(height: String): AbsolutePanel;
      setId(id: String): AbsolutePanel;
      setLayoutData(layout: Object): AbsolutePanel;
      setPixelSize(width: Integer, height: Integer): AbsolutePanel;
      setSize(width: String, height: String): AbsolutePanel;
      setStyleAttribute(attribute: String, value: String): AbsolutePanel;
      setStyleAttributes(attributes: Object): AbsolutePanel;
      setStyleName(styleName: String): AbsolutePanel;
      setStylePrimaryName(styleName: String): AbsolutePanel;
      setTag(tag: String): AbsolutePanel;
      setTitle(title: String): AbsolutePanel;
      setVisible(visible: Boolean): AbsolutePanel;
      setWidgetPosition(widget: Widget, left: Integer, top: Integer): AbsolutePanel;
      setWidth(width: String): AbsolutePanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Create user interfaces for use inside Google Apps or as standalone services.
     */
    export interface UiApp {
      DateTimeFormat: DateTimeFormat
      FileType: FileType
      HorizontalAlignment: HorizontalAlignment
      VerticalAlignment: VerticalAlignment
      createApplication(): UiInstance;
      getActiveApplication(): UiInstance;
      getUserAgent(): String;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A text box that shows a DatePicker when the user focuses on it.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var handler = app.createServerHandler("change");
     *        var dateBox = app.createDateBox().addValueChangeHandler(handler).setId("datebox");
     *        app.add(dateBox);
     *        return app;
     *      }
     *     
     *      function change(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("The value of the date box changed to " +
     *            eventInfo.parameter.datebox));
     *         return app;
     *       }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DateBox documentation here.
     */
    export interface DateBox {
      addStyleDependentName(styleName: String): DateBox;
      addStyleName(styleName: String): DateBox;
      addValueChangeHandler(handler: Handler): DateBox;
      getId(): String;
      getTag(): String;
      getType(): String;
      hideDatePicker(): DateBox;
      setAccessKey(accessKey: Char): DateBox;
      setEnabled(enabled: Boolean): DateBox;
      setFireEventsForInvalid(fireEvents: Boolean): DateBox;
      setFocus(focus: Boolean): DateBox;
      setFormat(dateTimeFormat: DateTimeFormat): DateBox;
      setHeight(height: String): DateBox;
      setId(id: String): DateBox;
      setLayoutData(layout: Object): DateBox;
      setName(name: String): DateBox;
      setPixelSize(width: Integer, height: Integer): DateBox;
      setSize(width: String, height: String): DateBox;
      setStyleAttribute(attribute: String, value: String): DateBox;
      setStyleAttributes(attributes: Object): DateBox;
      setStyleName(styleName: String): DateBox;
      setStylePrimaryName(styleName: String): DateBox;
      setTabIndex(index: Integer): DateBox;
      setTag(tag: String): DateBox;
      setTitle(title: String): DateBox;
      setValue(date: Date): DateBox;
      setVisible(visible: Boolean): DateBox;
      setWidth(width: String): DateBox;
      showDatePicker(): DateBox;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that wraps its contents in a border with a caption that appears in the upper left
     *  corner of the border. This is an implementation of the fieldset HTML element.
     * 
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     * 
     *  Note also that the placement of the caption in a caption panel will vary slightly from browser to
     *  browser, so this widget is not a good choice when precise cross-browser layout is needed.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var panel = app.createCaptionPanel("my caption!");
     *        panel.add(app.createButton("a button inside..."));
     *        app.add(panel);
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the CaptionPanel documentation here.
     */
    export interface CaptionPanel {
      add(widget: Widget): CaptionPanel;
      addStyleDependentName(styleName: String): CaptionPanel;
      addStyleName(styleName: String): CaptionPanel;
      clear(): CaptionPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      setCaptionText(text: String): CaptionPanel;
      setContentWidget(widget: Widget): CaptionPanel;
      setHeight(height: String): CaptionPanel;
      setId(id: String): CaptionPanel;
      setLayoutData(layout: Object): CaptionPanel;
      setPixelSize(width: Integer, height: Integer): CaptionPanel;
      setSize(width: String, height: String): CaptionPanel;
      setStyleAttribute(attribute: String, value: String): CaptionPanel;
      setStyleAttributes(attributes: Object): CaptionPanel;
      setStyleName(styleName: String): CaptionPanel;
      setStylePrimaryName(styleName: String): CaptionPanel;
      setTag(tag: String): CaptionPanel;
      setText(text: String): CaptionPanel;
      setTitle(title: String): CaptionPanel;
      setVisible(visible: Boolean): CaptionPanel;
      setWidget(widget: Widget): CaptionPanel;
      setWidth(width: String): CaptionPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A StackPanel that wraps each item in a 2x3 grid (six box), which allows users to add
     *  rounded corners.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DecoratedStackPanel documentation here.
     */
    export interface DecoratedStackPanel {
      add(widget: Widget): DecoratedStackPanel;
      add(widget: Widget, text: String): DecoratedStackPanel;
      add(widget: Widget, text: String, asHtml: Boolean): DecoratedStackPanel;
      addStyleDependentName(styleName: String): DecoratedStackPanel;
      addStyleName(styleName: String): DecoratedStackPanel;
      clear(): DecoratedStackPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      remove(index: Integer): DecoratedStackPanel;
      remove(widget: Widget): DecoratedStackPanel;
      setHeight(height: String): DecoratedStackPanel;
      setId(id: String): DecoratedStackPanel;
      setLayoutData(layout: Object): DecoratedStackPanel;
      setPixelSize(width: Integer, height: Integer): DecoratedStackPanel;
      setSize(width: String, height: String): DecoratedStackPanel;
      setStackText(index: Integer, text: String): DecoratedStackPanel;
      setStackText(index: Integer, text: String, asHtml: Boolean): DecoratedStackPanel;
      setStyleAttribute(attribute: String, value: String): DecoratedStackPanel;
      setStyleAttributes(attributes: Object): DecoratedStackPanel;
      setStyleName(styleName: String): DecoratedStackPanel;
      setStylePrimaryName(styleName: String): DecoratedStackPanel;
      setTag(tag: String): DecoratedStackPanel;
      setTitle(title: String): DecoratedStackPanel;
      setVisible(visible: Boolean): DecoratedStackPanel;
      setWidth(width: String): DecoratedStackPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A TabBar that wraps each tab in a 2x3 grid (six box), which allows users to add rounded corners.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DecoratedTabBar documentation here.
     */
    export interface DecoratedTabBar {
      addBeforeSelectionHandler(handler: Handler): DecoratedTabBar;
      addSelectionHandler(handler: Handler): DecoratedTabBar;
      addStyleDependentName(styleName: String): DecoratedTabBar;
      addStyleName(styleName: String): DecoratedTabBar;
      addTab(title: String): DecoratedTabBar;
      addTab(title: String, asHtml: Boolean): DecoratedTabBar;
      addTab(widget: Widget): DecoratedTabBar;
      getId(): String;
      getTag(): String;
      getType(): String;
      selectTab(index: Integer): DecoratedTabBar;
      setHeight(height: String): DecoratedTabBar;
      setId(id: String): DecoratedTabBar;
      setLayoutData(layout: Object): DecoratedTabBar;
      setPixelSize(width: Integer, height: Integer): DecoratedTabBar;
      setSize(width: String, height: String): DecoratedTabBar;
      setStyleAttribute(attribute: String, value: String): DecoratedTabBar;
      setStyleAttributes(attributes: Object): DecoratedTabBar;
      setStyleName(styleName: String): DecoratedTabBar;
      setStylePrimaryName(styleName: String): DecoratedTabBar;
      setTabEnabled(index: Integer, enabled: Boolean): DecoratedTabBar;
      setTabText(index: Integer, text: String): DecoratedTabBar;
      setTag(tag: String): DecoratedTabBar;
      setTitle(title: String): DecoratedTabBar;
      setVisible(visible: Boolean): DecoratedTabBar;
      setWidth(width: String): DecoratedTabBar;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A TabPanel that uses a DecoratedTabBar with rounded corners.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DecoratedTabPanel documentation here.
     */
    export interface DecoratedTabPanel {
      add(widget: Widget): DecoratedTabPanel;
      add(widget: Widget, text: String): DecoratedTabPanel;
      add(widget: Widget, text: String, asHtml: Boolean): DecoratedTabPanel;
      add(widget: Widget, tabWidget: Widget): DecoratedTabPanel;
      addBeforeSelectionHandler(handler: Handler): DecoratedTabPanel;
      addSelectionHandler(handler: Handler): DecoratedTabPanel;
      addStyleDependentName(styleName: String): DecoratedTabPanel;
      addStyleName(styleName: String): DecoratedTabPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      selectTab(index: Integer): DecoratedTabPanel;
      setAnimationEnabled(animationEnabled: Boolean): DecoratedTabPanel;
      setHeight(height: String): DecoratedTabPanel;
      setId(id: String): DecoratedTabPanel;
      setLayoutData(layout: Object): DecoratedTabPanel;
      setPixelSize(width: Integer, height: Integer): DecoratedTabPanel;
      setSize(width: String, height: String): DecoratedTabPanel;
      setStyleAttribute(attribute: String, value: String): DecoratedTabPanel;
      setStyleAttributes(attributes: Object): DecoratedTabPanel;
      setStyleName(styleName: String): DecoratedTabPanel;
      setStylePrimaryName(styleName: String): DecoratedTabPanel;
      setTag(tag: String): DecoratedTabPanel;
      setTitle(title: String): DecoratedTabPanel;
      setVisible(visible: Boolean): DecoratedTabPanel;
      setWidth(width: String): DecoratedTabPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard check box widget.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var handler = app.createServerHandler("change");
     *        var check = app.createCheckBox("click me").addValueChangeHandler(handler);
     *        app.add(check);
     *        return app;
     *      }
     *     
     *      function change() {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("The value changed!"));
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the CheckBox documentation here.
     */
    export interface CheckBox {
      addBlurHandler(handler: Handler): CheckBox;
      addClickHandler(handler: Handler): CheckBox;
      addFocusHandler(handler: Handler): CheckBox;
      addKeyDownHandler(handler: Handler): CheckBox;
      addKeyPressHandler(handler: Handler): CheckBox;
      addKeyUpHandler(handler: Handler): CheckBox;
      addMouseDownHandler(handler: Handler): CheckBox;
      addMouseMoveHandler(handler: Handler): CheckBox;
      addMouseOutHandler(handler: Handler): CheckBox;
      addMouseOverHandler(handler: Handler): CheckBox;
      addMouseUpHandler(handler: Handler): CheckBox;
      addMouseWheelHandler(handler: Handler): CheckBox;
      addStyleDependentName(styleName: String): CheckBox;
      addStyleName(styleName: String): CheckBox;
      addValueChangeHandler(handler: Handler): CheckBox;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): CheckBox;
      setEnabled(enabled: Boolean): CheckBox;
      setFocus(focus: Boolean): CheckBox;
      setFormValue(formValue: String): CheckBox;
      setHTML(html: String): CheckBox;
      setHeight(height: String): CheckBox;
      setId(id: String): CheckBox;
      setLayoutData(layout: Object): CheckBox;
      setName(name: String): CheckBox;
      setPixelSize(width: Integer, height: Integer): CheckBox;
      setSize(width: String, height: String): CheckBox;
      setStyleAttribute(attribute: String, value: String): CheckBox;
      setStyleAttributes(attributes: Object): CheckBox;
      setStyleName(styleName: String): CheckBox;
      setStylePrimaryName(styleName: String): CheckBox;
      setTabIndex(index: Integer): CheckBox;
      setTag(tag: String): CheckBox;
      setText(text: String): CheckBox;
      setTitle(title: String): CheckBox;
      setValue(value: Boolean): CheckBox;
      setValue(value: Boolean, fireEvents: Boolean): CheckBox;
      setVisible(visible: Boolean): CheckBox;
      setWidth(width: String): CheckBox;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A date picker widget.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var handler = app.createServerHandler("change");
     *        var picker = app.createDatePicker().addValueChangeHandler(handler).setId("picker");
     *        app.add(picker);
     *        return app;
     *      }
     *     
     *      function change(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("The value of the date picker changed to " +
     *            eventInfo.parameter.picker));
     *         return app;
     *       }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DatePicker documentation here.
     */
    export interface DatePicker {
      addStyleDependentName(styleName: String): DatePicker;
      addStyleName(styleName: String): DatePicker;
      addValueChangeHandler(handler: Handler): DatePicker;
      getId(): String;
      getTag(): String;
      getType(): String;
      setCurrentMonth(date: Date): DatePicker;
      setHeight(height: String): DatePicker;
      setId(id: String): DatePicker;
      setLayoutData(layout: Object): DatePicker;
      setName(name: String): DatePicker;
      setPixelSize(width: Integer, height: Integer): DatePicker;
      setSize(width: String, height: String): DatePicker;
      setStyleAttribute(attribute: String, value: String): DatePicker;
      setStyleAttributes(attributes: Object): DatePicker;
      setStyleName(styleName: String): DatePicker;
      setStylePrimaryName(styleName: String): DatePicker;
      setTag(tag: String): DatePicker;
      setTitle(title: String): DatePicker;
      setValue(date: Date): DatePicker;
      setVisible(visible: Boolean): DatePicker;
      setWidth(width: String): DatePicker;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * An event handler that runs in the user's browser without needing a call back to the server.
     *  These will, in general, run much faster than ServerHandlers but they are also more
     *  limited in what they can do.
     * 
     *  Any method that accepts a "Handler" parameter can accept a ClientHandler.
     * 
     *  If you set validators on a ClientHandler, they will be checked before the handler performs its
     *  actions. The actions will only be performed if the validators succeed.
     * 
     *  If you have multiple ClientHandlers for the same event on the same widget, they will perform
     *  their actions in the order that they were added.
     * 
     *  An example of using client handlers:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var button = app.createButton("Say Hello");
     *     
     *        // Create a label with the "Hello World!" text and hide it for now
     *        var label = app.createLabel("Hello World!").setVisible(false);
     *     
     *        // Create a new handler that does not require the server.
     *        // We give the handler two actions to perform on different targets.
     *        // The first action disables the widget that invokes the handler
     *        // and the second displays the label.
     *        var handler = app.createClientHandler()
     *          .forEventSource().setEnabled(false)
     *          .forTargets(label).setVisible(true);
     *     
     *        // Add our new handler to be invoked when the button is clicked
     *        button.addClickHandler(handler);
     *     
     *        app.add(button);
     *        app.add(label);
     *        return app;
     *      }
     */
    export interface ClientHandler {
      forEventSource(): ClientHandler;
      forTargets(...widgets: Object[]): ClientHandler;
      getId(): String;
      getTag(): String;
      getType(): String;
      setEnabled(enabled: Boolean): ClientHandler;
      setHTML(html: String): ClientHandler;
      setId(id: String): ClientHandler;
      setStyleAttribute(row: Integer, column: Integer, attribute: String, value: String): ClientHandler;
      setStyleAttribute(attribute: String, value: String): ClientHandler;
      setStyleAttributes(row: Integer, column: Integer, attributes: Object): ClientHandler;
      setStyleAttributes(attributes: Object): ClientHandler;
      setTag(tag: String): ClientHandler;
      setText(text: String): ClientHandler;
      setValue(value: Boolean): ClientHandler;
      setVisible(visible: Boolean): ClientHandler;
      validateEmail(widget: Widget): ClientHandler;
      validateInteger(widget: Widget): ClientHandler;
      validateLength(widget: Widget, min: Integer, max: Integer): ClientHandler;
      validateMatches(widget: Widget, pattern: String): ClientHandler;
      validateMatches(widget: Widget, pattern: String, flags: String): ClientHandler;
      validateNotEmail(widget: Widget): ClientHandler;
      validateNotInteger(widget: Widget): ClientHandler;
      validateNotLength(widget: Widget, min: Integer, max: Integer): ClientHandler;
      validateNotMatches(widget: Widget, pattern: String): ClientHandler;
      validateNotMatches(widget: Widget, pattern: String, flags: String): ClientHandler;
      validateNotNumber(widget: Widget): ClientHandler;
      validateNotOptions(widget: Widget, options: String[]): ClientHandler;
      validateNotRange(widget: Widget, min: Number, max: Number): ClientHandler;
      validateNotSum(widgets: Widget[], sum: Integer): ClientHandler;
      validateNumber(widget: Widget): ClientHandler;
      validateOptions(widget: Widget, options: String[]): ClientHandler;
      validateRange(widget: Widget, min: Number, max: Number): ClientHandler;
      validateSum(widgets: Widget[], sum: Integer): ClientHandler;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A SimplePanel that wraps its contents in stylized boxes, which can be used to add rounded
     *  corners to a Widget.
     * 
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DecoratorPanel documentation here.
     */
    export interface DecoratorPanel {
      add(widget: Widget): DecoratorPanel;
      addStyleDependentName(styleName: String): DecoratorPanel;
      addStyleName(styleName: String): DecoratorPanel;
      clear(): DecoratorPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      setHeight(height: String): DecoratorPanel;
      setId(id: String): DecoratorPanel;
      setLayoutData(layout: Object): DecoratorPanel;
      setPixelSize(width: Integer, height: Integer): DecoratorPanel;
      setSize(width: String, height: String): DecoratorPanel;
      setStyleAttribute(attribute: String, value: String): DecoratorPanel;
      setStyleAttributes(attributes: Object): DecoratorPanel;
      setStyleName(styleName: String): DecoratorPanel;
      setStylePrimaryName(styleName: String): DecoratorPanel;
      setTag(tag: String): DecoratorPanel;
      setTitle(title: String): DecoratorPanel;
      setVisible(visible: Boolean): DecoratorPanel;
      setWidget(widget: Widget): DecoratorPanel;
      setWidth(width: String): DecoratorPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A form of popup that has a caption area at the top and can be dragged by the
     *  user. Unlike a PopupPanel, calls to setWidth(width) and
     *  setHeight(height) will set the width and height of the dialog box
     *  itself, even if a widget has not been added as yet.
     * 
     *  In general it's not recommended to add this panel as a child of another widget or of the app
     *  as that will make it behave like any other inline panel and not act as a popup. Instead, create
     *  the popup and then use its show() and hide() methods to show and hide it. See
     *  the example below.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the DialogBox documentation here.
     * 
     *  Here is an example showing how to use the dialog box widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // Create a dialog box.
     *        var dialog = app.createDialogBox();
     *        // Set the position and dimensions.
     *        dialog.setPopupPosition(100, 100).setSize(500, 500);
     *        // Show the dialog. Note that it does not have to be "added" to the UiInstance.
     *        dialog.show();
     *        return app;
     *      }
     */
    export interface DialogBox {
      add(widget: Widget): DialogBox;
      addAutoHidePartner(partner: Component): DialogBox;
      addCloseHandler(handler: Handler): DialogBox;
      addStyleDependentName(styleName: String): DialogBox;
      addStyleName(styleName: String): DialogBox;
      clear(): DialogBox;
      getId(): String;
      getTag(): String;
      getType(): String;
      hide(): DialogBox;
      setAnimationEnabled(animationEnabled: Boolean): DialogBox;
      setAutoHideEnabled(enabled: Boolean): DialogBox;
      setGlassEnabled(enabled: Boolean): DialogBox;
      setGlassStyleName(styleName: String): DialogBox;
      setHTML(html: String): DialogBox;
      setHeight(height: String): DialogBox;
      setId(id: String): DialogBox;
      setLayoutData(layout: Object): DialogBox;
      setModal(modal: Boolean): DialogBox;
      setPixelSize(width: Integer, height: Integer): DialogBox;
      setPopupPosition(left: Integer, top: Integer): DialogBox;
      setPopupPositionAndShow(a: Component): DialogBox;
      setPreviewingAllNativeEvents(previewing: Boolean): DialogBox;
      setSize(width: String, height: String): DialogBox;
      setStyleAttribute(attribute: String, value: String): DialogBox;
      setStyleAttributes(attributes: Object): DialogBox;
      setStyleName(styleName: String): DialogBox;
      setStylePrimaryName(styleName: String): DialogBox;
      setTag(tag: String): DialogBox;
      setText(text: String): DialogBox;
      setTitle(title: String): DialogBox;
      setVisible(visible: Boolean): DialogBox;
      setWidget(widget: Widget): DialogBox;
      setWidth(width: String): DialogBox;
      show(): DialogBox;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that wraps the HTML <input type='file'> element. This widget
     *  must be used within a FormPanel.
     * 
     *  The result of a FileUpload is a "Blob" which can we used in various other functions. Below is an
     *  example of how to use FileUpload.
     * 
     *      function doGet(e) {
     *     
     *      var app = UiApp.createApplication().setTitle("Upload CSV to Sheet");
     *        var formContent = app.createVerticalPanel();
     *        formContent.add(app.createFileUpload().setName('thefile'));
     *        formContent.add(app.createSubmitButton());
     *        var form = app.createFormPanel();
     *        form.add(formContent);
     *        app.add(form);
     *        return app;
     *      }
     *     
     *      function doPost(e) {
     *        // data returned is a blob for FileUpload widget
     *        var fileBlob = e.parameter.thefile;
     *        var doc = DocsList.createFile(fileBlob);
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the FileUpload documentation here.
     */
    export interface FileUpload {
      addChangeHandler(handler: Handler): FileUpload;
      addStyleDependentName(styleName: String): FileUpload;
      addStyleName(styleName: String): FileUpload;
      getId(): String;
      getTag(): String;
      getType(): String;
      setEnabled(enabled: Boolean): FileUpload;
      setHeight(height: String): FileUpload;
      setId(id: String): FileUpload;
      setLayoutData(layout: Object): FileUpload;
      setName(name: String): FileUpload;
      setPixelSize(width: Integer, height: Integer): FileUpload;
      setSize(width: String, height: String): FileUpload;
      setStyleAttribute(attribute: String, value: String): FileUpload;
      setStyleAttributes(attributes: Object): FileUpload;
      setStyleName(styleName: String): FileUpload;
      setStylePrimaryName(styleName: String): FileUpload;
      setTag(tag: String): FileUpload;
      setTitle(title: String): FileUpload;
      setVisible(visible: Boolean): FileUpload;
      setWidth(width: String): FileUpload;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A "file-open" dialog for Google Drive. Unlike most UiApp objects, DocsListDialog
     *  should not be added to the UiInstance. The
     *  example below shows how to display a DocsListDialog in the
     *  new version of Google Sheets.
     * 
     * Note that HTML service offers a similar but superior
     *  feature, Google Picker. In almost all
     *  cases, using Google Picker is preferable.
     * 
     *      function onOpen() {
     *        SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     *            .createMenu('Custom Menu')
     *            .addItem('Select file', 'showDialog')
     *            .addToUi();
     *      }
     *     
     *      function showDialog() {
     *        // Dummy call to DriveApp to ensure the OAuth dialog requests Google Drive scope, so that the
     *        // getOAuthToken() call below returns a token with the necessary permissions.
     *        DriveApp.getRootFolder();
     *     
     *        var app = UiApp.createApplication()
     *            .setWidth(570)
     *            .setHeight(352);
     *     
     *        var serverHandler = app.createServerHandler('pickerHandler');
     *     
     *        app.createDocsListDialog()
     *           .addCloseHandler(serverHandler)
     *           .addSelectionHandler(serverHandler)
     *           .setOAuthToken(ScriptApp.getOAuthToken())
     *           .showDocsPicker();
     *     
     *        SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     *           .showModalDialog(app,' ');
     *      }
     *     
     *      function pickerHandler(e) {
     *        var action = e.parameter.eventType;
     *        var app = UiApp.getActiveApplication();
     *     
     *        if (action == 'selection') {
     *          var doc = e.parameter.items[0];
     *          var id = doc.id;
     *          var name = doc.name;
     *          var url = doc.url;
     *          app.add(app.createLabel('You picked '));
     *          app.add(app.createAnchor(name, url));
     *          app.add(app.createLabel('(ID: ' + id + ').'));
     *        } else if (action == 'close') {
     *          app.add(app.createLabel('You clicked "Cancel".'));
     *        }
     *      
     *        return app;
     *      }
     */
    export interface DocsListDialog {
      addCloseHandler(handler: Handler): DocsListDialog;
      addSelectionHandler(handler: Handler): DocsListDialog;
      addView(fileType: FileType): DocsListDialog;
      getId(): String;
      getType(): String;
      setDialogTitle(title: String): DocsListDialog;
      setHeight(height: Integer): DocsListDialog;
      setInitialView(fileType: FileType): DocsListDialog;
      setMultiSelectEnabled(multiSelectEnabled: Boolean): DocsListDialog;
      setOAuthToken(oAuthToken: String): DocsListDialog;
      setWidth(width: Integer): DocsListDialog;
      showDocsPicker(): DocsListDialog;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that formats its child widgets using the default HTML layout behavior.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var panel = app.createFlowPanel();
     *        panel.add(app.createButton("button 1"));
     *        panel.add(app.createButton("button 2"));
     *        app.add(panel);
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the FlowPanel documentation here.
     */
    export interface FlowPanel {
      add(widget: Widget): FlowPanel;
      addStyleDependentName(styleName: String): FlowPanel;
      addStyleName(styleName: String): FlowPanel;
      clear(): FlowPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      insert(widget: Widget, beforeIndex: Integer): FlowPanel;
      remove(index: Integer): FlowPanel;
      remove(widget: Widget): FlowPanel;
      setHeight(height: String): FlowPanel;
      setId(id: String): FlowPanel;
      setLayoutData(layout: Object): FlowPanel;
      setPixelSize(width: Integer, height: Integer): FlowPanel;
      setSize(width: String, height: String): FlowPanel;
      setStyleAttribute(attribute: String, value: String): FlowPanel;
      setStyleAttributes(attributes: Object): FlowPanel;
      setStyleName(styleName: String): FlowPanel;
      setStylePrimaryName(styleName: String): FlowPanel;
      setTag(tag: String): FlowPanel;
      setTitle(title: String): FlowPanel;
      setVisible(visible: Boolean): FlowPanel;
      setWidth(width: String): FlowPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A simple panel that makes its contents focusable, and adds the ability to catch mouse and
     *  keyboard events.
     * 
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var focus = app.createFocusPanel();
     *        var flow = app.createFlowPanel();
     *        flow.add(app.createButton("button 1"));
     *        flow.add(app.createButton("button 2"));
     *        focus.add(flow);
     *        app.add(focus);
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the FocusPanel documentation here.
     */
    export interface FocusPanel {
      add(widget: Widget): FocusPanel;
      addBlurHandler(handler: Handler): FocusPanel;
      addClickHandler(handler: Handler): FocusPanel;
      addFocusHandler(handler: Handler): FocusPanel;
      addKeyDownHandler(handler: Handler): FocusPanel;
      addKeyPressHandler(handler: Handler): FocusPanel;
      addKeyUpHandler(handler: Handler): FocusPanel;
      addMouseDownHandler(handler: Handler): FocusPanel;
      addMouseMoveHandler(handler: Handler): FocusPanel;
      addMouseOutHandler(handler: Handler): FocusPanel;
      addMouseOverHandler(handler: Handler): FocusPanel;
      addMouseUpHandler(handler: Handler): FocusPanel;
      addMouseWheelHandler(handler: Handler): FocusPanel;
      addStyleDependentName(styleName: String): FocusPanel;
      addStyleName(styleName: String): FocusPanel;
      clear(): FocusPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): FocusPanel;
      setFocus(focus: Boolean): FocusPanel;
      setHeight(height: String): FocusPanel;
      setId(id: String): FocusPanel;
      setLayoutData(layout: Object): FocusPanel;
      setPixelSize(width: Integer, height: Integer): FocusPanel;
      setSize(width: String, height: String): FocusPanel;
      setStyleAttribute(attribute: String, value: String): FocusPanel;
      setStyleAttributes(attributes: Object): FocusPanel;
      setStyleName(styleName: String): FocusPanel;
      setStylePrimaryName(styleName: String): FocusPanel;
      setTabIndex(index: Integer): FocusPanel;
      setTag(tag: String): FocusPanel;
      setTitle(title: String): FocusPanel;
      setVisible(visible: Boolean): FocusPanel;
      setWidget(widget: Widget): FocusPanel;
      setWidth(width: String): FocusPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that wraps its contents in an HTML <FORM> element.
     * 
     *  This panel can be used with a SubmitButton to post form values to the server. All
     *  children of this panel (direct, or even children of sub-panels) that have a setName function
     *  and have been given a name will have their values sent to the server when the form is submitted.
     *  The submit can be handled in the special "doPost" function, as shown in the example.
     * 
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var form = app.createFormPanel();
     *        var flow = app.createFlowPanel();
     *        flow.add(app.createTextBox().setName("textBox"));
     *        flow.add(app.createListBox().setName("listBox").addItem("option 1").addItem("option 2"));
     *        flow.add(app.createSubmitButton("Submit"));
     *        form.add(flow);
     *        app.add(form);
     *        return app;
     *      }
     *     
     *      function doPost(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("Form submitted. The text box's value was '" +
     *            eventInfo.parameter.textBox +
     *            "' and the list box's value was '" +
     *            eventInfo.parameter.listBox + "'"));
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the FormPanel documentation here.
     */
    export interface FormPanel {
      add(widget: Widget): FormPanel;
      addStyleDependentName(styleName: String): FormPanel;
      addStyleName(styleName: String): FormPanel;
      addSubmitCompleteHandler(handler: Handler): FormPanel;
      addSubmitHandler(handler: Handler): FormPanel;
      clear(): FormPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAction(action: String): FormPanel;
      setEncoding(encoding: String): FormPanel;
      setHeight(height: String): FormPanel;
      setId(id: String): FormPanel;
      setLayoutData(layout: Object): FormPanel;
      setMethod(method: String): FormPanel;
      setPixelSize(width: Integer, height: Integer): FormPanel;
      setSize(width: String, height: String): FormPanel;
      setStyleAttribute(attribute: String, value: String): FormPanel;
      setStyleAttributes(attributes: Object): FormPanel;
      setStyleName(styleName: String): FormPanel;
      setStylePrimaryName(styleName: String): FormPanel;
      setTag(tag: String): FormPanel;
      setTitle(title: String): FormPanel;
      setVisible(visible: Boolean): FormPanel;
      setWidget(widget: Widget): FormPanel;
      setWidth(width: String): FormPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A flexible table that creates cells on demand. It can be jagged (that is,
     *  each row can contain a different number of cells) and individual cells can be
     *  set to span multiple rows or columns.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        app.add(app.createFlexTable()
     *          .insertRow(0).insertRow(0).insertRow(0)
     *          .insertCell(0, 0)
     *          .insertCell(0, 1)
     *          .insertCell(0, 2)
     *          .insertCell(1, 0)
     *          .insertCell(1, 1)
     *          .insertCell(2, 0)
     *          .setBorderWidth(5).setCellPadding(10).setCellSpacing(10));
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the FlexTable documentation here.
     */
    export interface FlexTable {
      addCell(row: Integer): FlexTable;
      addClickHandler(handler: Handler): FlexTable;
      addStyleDependentName(styleName: String): FlexTable;
      addStyleName(styleName: String): FlexTable;
      clear(): FlexTable;
      getId(): String;
      getTag(): String;
      getType(): String;
      insertCell(beforeRow: Integer, beforeColumn: Integer): FlexTable;
      insertRow(beforeRow: Integer): FlexTable;
      removeCell(row: Integer, column: Integer): FlexTable;
      removeCells(row: Integer, column: Integer, num: Integer): FlexTable;
      removeRow(row: Integer): FlexTable;
      setBorderWidth(width: Integer): FlexTable;
      setCellPadding(padding: Integer): FlexTable;
      setCellSpacing(spacing: Integer): FlexTable;
      setColumnStyleAttribute(column: Integer, attribute: String, value: String): FlexTable;
      setColumnStyleAttributes(column: Integer, attributes: Object): FlexTable;
      setHeight(height: String): FlexTable;
      setId(id: String): FlexTable;
      setLayoutData(layout: Object): FlexTable;
      setPixelSize(width: Integer, height: Integer): FlexTable;
      setRowStyleAttribute(row: Integer, attribute: String, value: String): FlexTable;
      setRowStyleAttributes(row: Integer, attributes: Object): FlexTable;
      setSize(width: String, height: String): FlexTable;
      setStyleAttribute(row: Integer, column: Integer, attribute: String, value: String): FlexTable;
      setStyleAttribute(attribute: String, value: String): FlexTable;
      setStyleAttributes(row: Integer, column: Integer, attributes: Object): FlexTable;
      setStyleAttributes(attributes: Object): FlexTable;
      setStyleName(styleName: String): FlexTable;
      setStylePrimaryName(styleName: String): FlexTable;
      setTag(tag: String): FlexTable;
      setText(row: Integer, column: Integer, text: String): FlexTable;
      setTitle(title: String): FlexTable;
      setVisible(visible: Boolean): FlexTable;
      setWidget(row: Integer, column: Integer, widget: Widget): FlexTable;
      setWidth(width: String): FlexTable;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that lays all of its widgets out in a single horizontal column.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var panel = app.createHorizontalPanel();
     *        panel.add(app.createButton("button 1"));
     *        panel.add(app.createButton("button 2"));
     *        app.add(panel);
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the HorizontalPanel documentation here.
     */
    export interface HorizontalPanel {
      add(widget: Widget): HorizontalPanel;
      addStyleDependentName(styleName: String): HorizontalPanel;
      addStyleName(styleName: String): HorizontalPanel;
      clear(): HorizontalPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      remove(index: Integer): HorizontalPanel;
      remove(widget: Widget): HorizontalPanel;
      setBorderWidth(width: Integer): HorizontalPanel;
      setCellHeight(widget: Widget, height: String): HorizontalPanel;
      setCellHorizontalAlignment(widget: Widget, horizontalAlignment: HorizontalAlignment): HorizontalPanel;
      setCellVerticalAlignment(widget: Widget, verticalAlignment: VerticalAlignment): HorizontalPanel;
      setCellWidth(widget: Widget, width: String): HorizontalPanel;
      setHeight(height: String): HorizontalPanel;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): HorizontalPanel;
      setId(id: String): HorizontalPanel;
      setLayoutData(layout: Object): HorizontalPanel;
      setPixelSize(width: Integer, height: Integer): HorizontalPanel;
      setSize(width: String, height: String): HorizontalPanel;
      setSpacing(spacing: Integer): HorizontalPanel;
      setStyleAttribute(attribute: String, value: String): HorizontalPanel;
      setStyleAttributes(attributes: Object): HorizontalPanel;
      setStyleName(styleName: String): HorizontalPanel;
      setStylePrimaryName(styleName: String): HorizontalPanel;
      setTag(tag: String): HorizontalPanel;
      setTitle(title: String): HorizontalPanel;
      setVerticalAlignment(verticalAlignment: VerticalAlignment): HorizontalPanel;
      setVisible(visible: Boolean): HorizontalPanel;
      setWidth(width: String): HorizontalPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that displays the image at a given URL.
     *  
     *  The image can be in 'unclipped' mode (the default) or 'clipped' mode.
     *  In clipped mode, a viewport is overlaid on top of the image so that a subset of the image will be
     *  displayed. In unclipped mode, there is no viewport - the entire image will be
     *  visible. Whether an image is in clipped or unclipped mode depends on how the
     *  image is constructed, and how it is transformed after construction. Methods
     *  will operate differently depending on the mode that the image is in. These
     *  differences are detailed in the documentation for each method.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // The very first Google Doodle!
     *        app.add(app.createImage("http://www.google.com/logos/googleburn.jpg"));
     *        // Just the man in the middle
     *        app.add(app.createImage("http://www.google.com/logos/googleburn.jpg", 118, 0, 50, 106));
     *        return app;
     *      }
     * 
     *  Due to browser-specific HTML constructions needed to achieve the clipping effect, certain CSS
     *  attributes, such as padding and background, may not work as expected when an image is in clipped
     *  mode. These limitations can usually be easily worked around by encapsulating the image in a
     *  container widget that can itself be styled.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Image documentation here.
     */
    export interface Image {
      addClickHandler(handler: Handler): Image;
      addErrorHandler(handler: Handler): Image;
      addLoadHandler(handler: Handler): Image;
      addMouseDownHandler(handler: Handler): Image;
      addMouseMoveHandler(handler: Handler): Image;
      addMouseOutHandler(handler: Handler): Image;
      addMouseOverHandler(handler: Handler): Image;
      addMouseUpHandler(handler: Handler): Image;
      addMouseWheelHandler(handler: Handler): Image;
      addStyleDependentName(styleName: String): Image;
      addStyleName(styleName: String): Image;
      getId(): String;
      getTag(): String;
      getType(): String;
      setHeight(height: String): Image;
      setId(id: String): Image;
      setLayoutData(layout: Object): Image;
      setPixelSize(width: Integer, height: Integer): Image;
      setResource(resource: Component): Image;
      setSize(width: String, height: String): Image;
      setStyleAttribute(attribute: String, value: String): Image;
      setStyleAttributes(attributes: Object): Image;
      setStyleName(styleName: String): Image;
      setStylePrimaryName(styleName: String): Image;
      setTag(tag: String): Image;
      setTitle(title: String): Image;
      setUrl(url: String): Image;
      setUrlAndVisibleRect(url: String, left: Integer, top: Integer, width: Integer, height: Integer): Image;
      setVisible(visible: Boolean): Image;
      setVisibleRect(left: Integer, top: Integer, width: Integer, height: Integer): Image;
      setWidth(width: String): Image;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that contains arbitrary text, not interpreted as HTML.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        app.add(app.createLabel("Hello World!"));
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Label documentation here.
     */
    export interface Label {
      addClickHandler(handler: Handler): Label;
      addMouseDownHandler(handler: Handler): Label;
      addMouseMoveHandler(handler: Handler): Label;
      addMouseOutHandler(handler: Handler): Label;
      addMouseOverHandler(handler: Handler): Label;
      addMouseUpHandler(handler: Handler): Label;
      addMouseWheelHandler(handler: Handler): Label;
      addStyleDependentName(styleName: String): Label;
      addStyleName(styleName: String): Label;
      getId(): String;
      getTag(): String;
      getType(): String;
      setDirection(direction: Component): Label;
      setHeight(height: String): Label;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): Label;
      setId(id: String): Label;
      setLayoutData(layout: Object): Label;
      setPixelSize(width: Integer, height: Integer): Label;
      setSize(width: String, height: String): Label;
      setStyleAttribute(attribute: String, value: String): Label;
      setStyleAttributes(attributes: Object): Label;
      setStyleName(styleName: String): Label;
      setStylePrimaryName(styleName: String): Label;
      setTag(tag: String): Label;
      setText(text: String): Label;
      setTitle(title: String): Label;
      setVisible(visible: Boolean): Label;
      setWidth(width: String): Label;
      setWordWrap(wordWrap: Boolean): Label;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that contains arbitrary text, not interpreted as HTML.
     * 
     *  This widget uses a <span> element, causing it to be displayed with inline layout.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the InlineLabel documentation here.
     */
    export interface InlineLabel {
      addClickHandler(handler: Handler): InlineLabel;
      addMouseDownHandler(handler: Handler): InlineLabel;
      addMouseMoveHandler(handler: Handler): InlineLabel;
      addMouseOutHandler(handler: Handler): InlineLabel;
      addMouseOverHandler(handler: Handler): InlineLabel;
      addMouseUpHandler(handler: Handler): InlineLabel;
      addMouseWheelHandler(handler: Handler): InlineLabel;
      addStyleDependentName(styleName: String): InlineLabel;
      addStyleName(styleName: String): InlineLabel;
      getId(): String;
      getTag(): String;
      getType(): String;
      setDirection(direction: Component): InlineLabel;
      setHeight(height: String): InlineLabel;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): InlineLabel;
      setId(id: String): InlineLabel;
      setLayoutData(layout: Object): InlineLabel;
      setPixelSize(width: Integer, height: Integer): InlineLabel;
      setSize(width: String, height: String): InlineLabel;
      setStyleAttribute(attribute: String, value: String): InlineLabel;
      setStyleAttributes(attributes: Object): InlineLabel;
      setStyleName(styleName: String): InlineLabel;
      setStylePrimaryName(styleName: String): InlineLabel;
      setTag(tag: String): InlineLabel;
      setText(text: String): InlineLabel;
      setTitle(title: String): InlineLabel;
      setVisible(visible: Boolean): InlineLabel;
      setWidth(width: String): InlineLabel;
      setWordWrap(wordWrap: Boolean): InlineLabel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A rectangular grid that can contain text, html, or a child widget within its cells. It must be
     *  resized explicitly to the desired number of rows and columns.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        app.add(app.createGrid(3, 3)
     *            .setBorderWidth(1)
     *            .setCellSpacing(10)
     *            .setCellPadding(10)
     *            .setText(0, 0, "X")
     *            .setText(1, 1, "X")
     *            .setText(2, 2, "X")
     *            .setText(0, 1, "O")
     *            .setText(0, 2, "O")
     *            .setStyleAttribute(0, 0, "color", "red")
     *            .setStyleAttribute(1, 1, "color", "red")
     *            .setStyleAttribute(2, 2, "color", "red")
     *            .setStyleAttribute(0, 1, "color", "blue")
     *            .setStyleAttribute(0, 2, "color", "blue"));
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Grid documentation here.
     */
    export interface Grid {
      addClickHandler(handler: Handler): Grid;
      addStyleDependentName(styleName: String): Grid;
      addStyleName(styleName: String): Grid;
      clear(): Grid;
      getId(): String;
      getTag(): String;
      getType(): String;
      resize(rows: Integer, columns: Integer): Grid;
      setBorderWidth(width: Integer): Grid;
      setCellPadding(padding: Integer): Grid;
      setCellSpacing(spacing: Integer): Grid;
      setColumnStyleAttribute(column: Integer, attribute: String, value: String): Grid;
      setColumnStyleAttributes(column: Integer, attributes: Object): Grid;
      setHeight(height: String): Grid;
      setId(id: String): Grid;
      setLayoutData(layout: Object): Grid;
      setPixelSize(width: Integer, height: Integer): Grid;
      setRowStyleAttribute(row: Integer, attribute: String, value: String): Grid;
      setRowStyleAttributes(row: Integer, attributes: Object): Grid;
      setSize(width: String, height: String): Grid;
      setStyleAttribute(row: Integer, column: Integer, attribute: String, value: String): Grid;
      setStyleAttribute(attribute: String, value: String): Grid;
      setStyleAttributes(row: Integer, column: Integer, attributes: Object): Grid;
      setStyleAttributes(attributes: Object): Grid;
      setStyleName(styleName: String): Grid;
      setStylePrimaryName(styleName: String): Grid;
      setTag(tag: String): Grid;
      setText(row: Integer, column: Integer, text: String): Grid;
      setTitle(title: String): Grid;
      setVisible(visible: Boolean): Grid;
      setWidget(row: Integer, column: Integer, widget: Widget): Grid;
      setWidth(width: String): Grid;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that contains arbitrary text, which is interpreted as HTML.
     * 
     *  Only basic HTML markup such as bold, italic, etc. are allowed; in particular, scripts will be
     *  stripped out completely.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        app.add(app.createHTML("<b>Hello World!</b>"));
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the HTML documentation here.
     */
    export interface HTML {
      addClickHandler(handler: Handler): HTML;
      addMouseDownHandler(handler: Handler): HTML;
      addMouseMoveHandler(handler: Handler): HTML;
      addMouseOutHandler(handler: Handler): HTML;
      addMouseOverHandler(handler: Handler): HTML;
      addMouseUpHandler(handler: Handler): HTML;
      addMouseWheelHandler(handler: Handler): HTML;
      addStyleDependentName(styleName: String): HTML;
      addStyleName(styleName: String): HTML;
      getId(): String;
      getTag(): String;
      getType(): String;
      setDirection(direction: Component): HTML;
      setHTML(html: String): HTML;
      setHeight(height: String): HTML;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): HTML;
      setId(id: String): HTML;
      setLayoutData(layout: Object): HTML;
      setPixelSize(width: Integer, height: Integer): HTML;
      setSize(width: String, height: String): HTML;
      setStyleAttribute(attribute: String, value: String): HTML;
      setStyleAttributes(attributes: Object): HTML;
      setStyleName(styleName: String): HTML;
      setStylePrimaryName(styleName: String): HTML;
      setTag(tag: String): HTML;
      setText(text: String): HTML;
      setTitle(title: String): HTML;
      setVisible(visible: Boolean): HTML;
      setWidth(width: String): HTML;
      setWordWrap(wordWrap: Boolean): HTML;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Represents a hidden field for storing data in the user's browser that can be passed back to a
     *  handler as a "callback element".
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // Note that the name "appState" for callbacks, and the id "hidden" for
     *        // getting a reference to the widget, are not required to be the same.
     *        var hidden = app.createHidden("appState", "0").setId("hidden");
     *        app.add(hidden);
     *        var handler = app.createServerHandler("click").addCallbackElement(hidden);
     *        app.add(app.createButton("click me!", handler));
     *        app.add(app.createLabel("clicked 0 times").setId("label"));
     *        return app;
     *      }
     *     
     *      function click(eventInfo) {
     *        var app = UiApp.createApplication();
     *        // We have the value of the hidden field because it was a callback element.
     *        var numClicks = Number(eventInfo.parameter.appState);
     *        numClicks++;
     *        // Just store the number as a string. We could actually store arbitrarily complex data
     *        // here using JSON.stringify() to turn a JavaScript object into a string to store, and
     *        // JSON.parse() to turn the string back into an object.
     *        app.getElementById("hidden").setValue(String(numClicks));
     *        app.getElementById("label").setText("clicked " + numClicks + " times");
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Hidden documentation here.
     */
    export interface Hidden {
      addStyleDependentName(styleName: String): Hidden;
      addStyleName(styleName: String): Hidden;
      getId(): String;
      getTag(): String;
      getType(): String;
      setDefaultValue(value: String): Hidden;
      setHeight(height: String): Hidden;
      setID(id: String): Hidden;
      setId(id: String): Hidden;
      setLayoutData(layout: Object): Hidden;
      setName(name: String): Hidden;
      setPixelSize(width: Integer, height: Integer): Hidden;
      setSize(width: String, height: String): Hidden;
      setStyleAttribute(attribute: String, value: String): Hidden;
      setStyleAttributes(attributes: Object): Hidden;
      setStyleName(styleName: String): Hidden;
      setStylePrimaryName(styleName: String): Hidden;
      setTag(tag: String): Hidden;
      setTitle(title: String): Hidden;
      setValue(value: String): Hidden;
      setVisible(visible: Boolean): Hidden;
      setWidth(width: String): Hidden;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A widget that presents a list of choices to the user, either as a list box or
     *  as a drop-down list.
     * 
     *  Here is an example usage, which should be executed from within a spreadsheet bound script.
     * 
     *      // execute this in a spreadsheet
     *      function show() {
     *        var doc = SpreadsheetApp.getActiveSpreadsheet();
     *        var app = UiApp.createApplication().setTitle('My Application');
     *        var panel = app.createVerticalPanel();
     *        var lb = app.createListBox(true).setId('myId').setName('myLbName');
     *     
     *        // add items to ListBox
     *        lb.setVisibleItemCount(3);
     *        lb.addItem('first');
     *        lb.addItem('second');
     *        lb.addItem('third');
     *        lb.addItem('fourth');
     *        lb.addItem('fifth');
     *        lb.addItem('sixth');
     *     
     *        panel.add(lb);
     *        var button = app.createButton('press me');
     *        var handler = app.createServerClickHandler('click').addCallbackElement(panel);
     *        button.addClickHandler(handler);
     *        panel.add(button);
     *        app.add(panel);
     *        doc.show(app);
     *      }
     * 
     *      function click(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        // get values of ListBox
     *        var value = eventInfo.parameter.myLbName;
     *        // multi select box returns a comma separated string
     *        var n = value.split(',');
     *     
     *        var doc = SpreadsheetApp.getActiveSpreadsheet();
     *        doc.getRange('a1').setValue(value);
     *        doc.getRange('b1').setValue('there are ' + n.length + ' items selected');
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the ListBox documentation here.
     */
    export interface ListBox {
      addBlurHandler(handler: Handler): ListBox;
      addChangeHandler(handler: Handler): ListBox;
      addClickHandler(handler: Handler): ListBox;
      addFocusHandler(handler: Handler): ListBox;
      addItem(text: String): ListBox;
      addItem(text: String, value: String): ListBox;
      addKeyDownHandler(handler: Handler): ListBox;
      addKeyPressHandler(handler: Handler): ListBox;
      addKeyUpHandler(handler: Handler): ListBox;
      addMouseDownHandler(handler: Handler): ListBox;
      addMouseMoveHandler(handler: Handler): ListBox;
      addMouseOutHandler(handler: Handler): ListBox;
      addMouseOverHandler(handler: Handler): ListBox;
      addMouseUpHandler(handler: Handler): ListBox;
      addMouseWheelHandler(handler: Handler): ListBox;
      addStyleDependentName(styleName: String): ListBox;
      addStyleName(styleName: String): ListBox;
      clear(): ListBox;
      getId(): String;
      getTag(): String;
      getType(): String;
      removeItem(index: Integer): ListBox;
      setAccessKey(accessKey: Char): ListBox;
      setEnabled(enabled: Boolean): ListBox;
      setFocus(focus: Boolean): ListBox;
      setHeight(height: String): ListBox;
      setId(id: String): ListBox;
      setItemSelected(index: Integer, selected: Boolean): ListBox;
      setItemText(index: Integer, text: String): ListBox;
      setLayoutData(layout: Object): ListBox;
      setName(name: String): ListBox;
      setPixelSize(width: Integer, height: Integer): ListBox;
      setSelectedIndex(index: Integer): ListBox;
      setSize(width: String, height: String): ListBox;
      setStyleAttribute(attribute: String, value: String): ListBox;
      setStyleAttributes(attributes: Object): ListBox;
      setStyleName(styleName: String): ListBox;
      setStylePrimaryName(styleName: String): ListBox;
      setTabIndex(index: Integer): ListBox;
      setTag(tag: String): ListBox;
      setTitle(title: String): ListBox;
      setValue(index: Integer, value: String): ListBox;
      setVisible(visible: Boolean): ListBox;
      setVisibleItemCount(count: Integer): ListBox;
      setWidth(width: String): ListBox;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard menu bar widget.
     * 
     *  A menu bar can contain any number of menu items,
     *  each of which can either fire an event handler or open a cascaded menu bar.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the MenuBar documentation here.
     */
    export interface MenuBar {
      addCloseHandler(handler: Handler): MenuBar;
      addItem(item: MenuItem): MenuBar;
      addItem(text: String, asHtml: Boolean, command: Handler): MenuBar;
      addItem(text: String, asHtml: Boolean, subMenu: MenuBar): MenuBar;
      addItem(text: String, command: Handler): MenuBar;
      addItem(text: String, subMenu: MenuBar): MenuBar;
      addSeparator(): MenuBar;
      addSeparator(separator: MenuItemSeparator): MenuBar;
      addStyleDependentName(styleName: String): MenuBar;
      addStyleName(styleName: String): MenuBar;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAnimationEnabled(animationEnabled: Boolean): MenuBar;
      setAutoOpen(autoOpen: Boolean): MenuBar;
      setHeight(height: String): MenuBar;
      setId(id: String): MenuBar;
      setLayoutData(layout: Object): MenuBar;
      setPixelSize(width: Integer, height: Integer): MenuBar;
      setSize(width: String, height: String): MenuBar;
      setStyleAttribute(attribute: String, value: String): MenuBar;
      setStyleAttributes(attributes: Object): MenuBar;
      setStyleName(styleName: String): MenuBar;
      setStylePrimaryName(styleName: String): MenuBar;
      setTag(tag: String): MenuBar;
      setTitle(title: String): MenuBar;
      setVisible(visible: Boolean): MenuBar;
      setWidth(width: String): MenuBar;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that can "pop up" over other widgets. It overlays the browser's
     *  client area (and any previously-created popups).
     * 
     *  In general it's not recommended to add this panel as a child of another widget or of the app
     *  as that will make it behave like any other inline panel and not act as a popup. Instead, create
     *  the popup and then use its show() and hide() methods to show and hide it. See
     *  the example below.
     * 
     *  To make the popup stay at a fixed location rather than scrolling with the page, try setting the
     *  'position', 'fixed' style on it with setStyleAttribute(attribute, value).
     * 
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the PopupPanel documentation here.
     * 
     *  Here is an example showing how to use the popup panel widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // Create a popup panel and set it to be modal.
     *        var popupPanel = app.createPopupPanel(false, true);
     *        // Add a button to the panel and set the dimensions and position.
     *        popupPanel.add(app.createButton()).setWidth("100px").setHeight("100px")
     *            .setPopupPosition(100, 100);
     *        // Show the panel. Note that it does not have to be "added" to the UiInstance.
     *        popupPanel.show();
     *        return app;
     *      }
     */
    export interface PopupPanel {
      add(widget: Widget): PopupPanel;
      addAutoHidePartner(partner: Component): PopupPanel;
      addCloseHandler(handler: Handler): PopupPanel;
      addStyleDependentName(styleName: String): PopupPanel;
      addStyleName(styleName: String): PopupPanel;
      clear(): PopupPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      hide(): PopupPanel;
      setAnimationEnabled(animationEnabled: Boolean): PopupPanel;
      setAutoHideEnabled(enabled: Boolean): PopupPanel;
      setGlassEnabled(enabled: Boolean): PopupPanel;
      setGlassStyleName(styleName: String): PopupPanel;
      setHeight(height: String): PopupPanel;
      setId(id: String): PopupPanel;
      setLayoutData(layout: Object): PopupPanel;
      setModal(modal: Boolean): PopupPanel;
      setPixelSize(width: Integer, height: Integer): PopupPanel;
      setPopupPosition(left: Integer, top: Integer): PopupPanel;
      setPopupPositionAndShow(a: Component): PopupPanel;
      setPreviewingAllNativeEvents(previewing: Boolean): PopupPanel;
      setSize(width: String, height: String): PopupPanel;
      setStyleAttribute(attribute: String, value: String): PopupPanel;
      setStyleAttributes(attributes: Object): PopupPanel;
      setStyleName(styleName: String): PopupPanel;
      setStylePrimaryName(styleName: String): PopupPanel;
      setTag(tag: String): PopupPanel;
      setTitle(title: String): PopupPanel;
      setVisible(visible: Boolean): PopupPanel;
      setWidget(widget: Widget): PopupPanel;
      setWidth(width: String): PopupPanel;
      show(): PopupPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A text box that visually masks its input to prevent eavesdropping.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var text = app.createPasswordTextBox().setName("text");
     *        var handler = app.createServerHandler("test").addCallbackElement(text);
     *        app.add(text);
     *        app.add(app.createButton("Test", handler));
     *        app.add(app.createLabel("0 characters").setId("label"));
     *        return app;
     *      }
     *     
     *      function test(eventInfo) {
     *        var app = UiApp.createApplication();
     *        // Because the text box was named "text" and added as a callback element to the
     *        // button's click event, we have its value available in eventInfo.parameter.text.
     *        var pass = eventInfo.parameter.text;
     *        var isStrong =
     *            pass.length >= 10 && /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass);
     *        var label = app.getElementById("label");
     *        if (isStrong) {
     *          label.setText("Strong! Well, not really, but this is just an example.")
     *              .setStyleAttribute("color", "green");
     *        } else {
     *          label.setText("Weak! Use at least 10 characters, with uppercase, lowercase, and digits")
     *              .setStyleAttribute("color", "red");
     *        }
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the PasswordTextBox documentation here.
     */
    export interface PasswordTextBox {
      addBlurHandler(handler: Handler): PasswordTextBox;
      addChangeHandler(handler: Handler): PasswordTextBox;
      addClickHandler(handler: Handler): PasswordTextBox;
      addFocusHandler(handler: Handler): PasswordTextBox;
      addKeyDownHandler(handler: Handler): PasswordTextBox;
      addKeyPressHandler(handler: Handler): PasswordTextBox;
      addKeyUpHandler(handler: Handler): PasswordTextBox;
      addMouseDownHandler(handler: Handler): PasswordTextBox;
      addMouseMoveHandler(handler: Handler): PasswordTextBox;
      addMouseOutHandler(handler: Handler): PasswordTextBox;
      addMouseOverHandler(handler: Handler): PasswordTextBox;
      addMouseUpHandler(handler: Handler): PasswordTextBox;
      addMouseWheelHandler(handler: Handler): PasswordTextBox;
      addStyleDependentName(styleName: String): PasswordTextBox;
      addStyleName(styleName: String): PasswordTextBox;
      addValueChangeHandler(handler: Handler): PasswordTextBox;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): PasswordTextBox;
      setCursorPos(position: Integer): PasswordTextBox;
      setDirection(direction: Component): PasswordTextBox;
      setEnabled(enabled: Boolean): PasswordTextBox;
      setFocus(focus: Boolean): PasswordTextBox;
      setHeight(height: String): PasswordTextBox;
      setId(id: String): PasswordTextBox;
      setLayoutData(layout: Object): PasswordTextBox;
      setMaxLength(length: Integer): PasswordTextBox;
      setName(name: String): PasswordTextBox;
      setPixelSize(width: Integer, height: Integer): PasswordTextBox;
      setReadOnly(readOnly: Boolean): PasswordTextBox;
      setSelectionRange(position: Integer, length: Integer): PasswordTextBox;
      setSize(width: String, height: String): PasswordTextBox;
      setStyleAttribute(attribute: String, value: String): PasswordTextBox;
      setStyleAttributes(attributes: Object): PasswordTextBox;
      setStyleName(styleName: String): PasswordTextBox;
      setStylePrimaryName(styleName: String): PasswordTextBox;
      setTabIndex(index: Integer): PasswordTextBox;
      setTag(tag: String): PasswordTextBox;
      setText(text: String): PasswordTextBox;
      setTextAlignment(textAlign: Component): PasswordTextBox;
      setTitle(title: String): PasswordTextBox;
      setValue(value: String): PasswordTextBox;
      setValue(value: String, fireEvents: Boolean): PasswordTextBox;
      setVisible(visible: Boolean): PasswordTextBox;
      setVisibleLength(length: Integer): PasswordTextBox;
      setWidth(width: String): PasswordTextBox;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A normal push button with custom styling.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // create a button and give it a click handler
     *        var button = app.createPushButton().setText("click me!").setId("button");
     *        button.addClickHandler(app.createServerHandler("handlerFunction"));
     *        app.add(button);
     *        return app;
     *      }
     *     
     *      function handlerFunction(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("The button was clicked!"));
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the PushButton documentation here.
     */
    export interface PushButton {
      addBlurHandler(handler: Handler): PushButton;
      addClickHandler(handler: Handler): PushButton;
      addFocusHandler(handler: Handler): PushButton;
      addKeyDownHandler(handler: Handler): PushButton;
      addKeyPressHandler(handler: Handler): PushButton;
      addKeyUpHandler(handler: Handler): PushButton;
      addMouseDownHandler(handler: Handler): PushButton;
      addMouseMoveHandler(handler: Handler): PushButton;
      addMouseOutHandler(handler: Handler): PushButton;
      addMouseOverHandler(handler: Handler): PushButton;
      addMouseUpHandler(handler: Handler): PushButton;
      addMouseWheelHandler(handler: Handler): PushButton;
      addStyleDependentName(styleName: String): PushButton;
      addStyleName(styleName: String): PushButton;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): PushButton;
      setEnabled(enabled: Boolean): PushButton;
      setFocus(focus: Boolean): PushButton;
      setHTML(html: String): PushButton;
      setHeight(height: String): PushButton;
      setId(id: String): PushButton;
      setLayoutData(layout: Object): PushButton;
      setPixelSize(width: Integer, height: Integer): PushButton;
      setSize(width: String, height: String): PushButton;
      setStyleAttribute(attribute: String, value: String): PushButton;
      setStyleAttributes(attributes: Object): PushButton;
      setStyleName(styleName: String): PushButton;
      setStylePrimaryName(styleName: String): PushButton;
      setTabIndex(index: Integer): PushButton;
      setTag(tag: String): PushButton;
      setText(text: String): PushButton;
      setTitle(title: String): PushButton;
      setVisible(visible: Boolean): PushButton;
      setWidth(width: String): PushButton;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * An entry in a MenuBar.
     * 
     *  Menu items can either fire an event handler when they are clicked, or open a cascading sub-menu.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the MenuItem documentation here.
     */
    export interface MenuItem {
      addStyleDependentName(styleName: String): MenuItem;
      addStyleName(styleName: String): MenuItem;
      getId(): String;
      getTag(): String;
      getType(): String;
      setCommand(handler: Handler): MenuItem;
      setHTML(html: String): MenuItem;
      setHeight(height: String): MenuItem;
      setId(id: String): MenuItem;
      setPixelSize(width: Integer, height: Integer): MenuItem;
      setSize(width: String, height: String): MenuItem;
      setStyleAttribute(attribute: String, value: String): MenuItem;
      setStyleAttributes(attributes: Object): MenuItem;
      setStyleName(styleName: String): MenuItem;
      setStylePrimaryName(styleName: String): MenuItem;
      setSubMenu(subMenu: MenuBar): MenuItem;
      setTag(tag: String): MenuItem;
      setText(text: String): MenuItem;
      setTitle(title: String): MenuItem;
      setVisible(visible: Boolean): MenuItem;
      setWidth(width: String): MenuItem;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A mutually-exclusive selection radio button widget.
     * 
     *  This widget fires
     *  click events when the radio button is clicked, and value change events when the
     *  button becomes checked. Note, however, that browser limitations prevent
     *  value change events from being sent when the radio button is cleared as a side
     *  effect of another in the group being clicked.
     * 
     *  RadioButtons are grouped according to the following rules:
     * 
     * In the absence of a FormPanel, RadioButtons with the same name are part of the same
     *  group.
     *  
     * Within a FormPanel, all unnamed RadioButtons are part of the same group.
     *  
     * Within a FormPanel, all RadioButtons with the same name are part of the same group - but
     *      not part of the same group as RadioButtons with the same name outside of the
     *      FormPanel.
     * 
     *  Note that radio button selections within a group do not propagate to server handlers created with
     *  UiInstance#createServerHandler(). Instead, to capture values on the server, use
     *  doPost() or separate handlers for each RadioButton.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the RadioButton documentation here.
     */
    export interface RadioButton {
      addBlurHandler(handler: Handler): RadioButton;
      addClickHandler(handler: Handler): RadioButton;
      addFocusHandler(handler: Handler): RadioButton;
      addKeyDownHandler(handler: Handler): RadioButton;
      addKeyPressHandler(handler: Handler): RadioButton;
      addKeyUpHandler(handler: Handler): RadioButton;
      addMouseDownHandler(handler: Handler): RadioButton;
      addMouseMoveHandler(handler: Handler): RadioButton;
      addMouseOutHandler(handler: Handler): RadioButton;
      addMouseOverHandler(handler: Handler): RadioButton;
      addMouseUpHandler(handler: Handler): RadioButton;
      addMouseWheelHandler(handler: Handler): RadioButton;
      addStyleDependentName(styleName: String): RadioButton;
      addStyleName(styleName: String): RadioButton;
      addValueChangeHandler(handler: Handler): RadioButton;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): RadioButton;
      setEnabled(enabled: Boolean): RadioButton;
      setFocus(focus: Boolean): RadioButton;
      setFormValue(formValue: String): RadioButton;
      setHTML(html: String): RadioButton;
      setHeight(height: String): RadioButton;
      setId(id: String): RadioButton;
      setLayoutData(layout: Object): RadioButton;
      setName(name: String): RadioButton;
      setPixelSize(width: Integer, height: Integer): RadioButton;
      setSize(width: String, height: String): RadioButton;
      setStyleAttribute(attribute: String, value: String): RadioButton;
      setStyleAttributes(attributes: Object): RadioButton;
      setStyleName(styleName: String): RadioButton;
      setStylePrimaryName(styleName: String): RadioButton;
      setTabIndex(index: Integer): RadioButton;
      setTag(tag: String): RadioButton;
      setText(text: String): RadioButton;
      setTitle(title: String): RadioButton;
      setValue(value: Boolean): RadioButton;
      setValue(value: Boolean, fireEvents: Boolean): RadioButton;
      setVisible(visible: Boolean): RadioButton;
      setWidth(width: String): RadioButton;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A separator that can be placed in a MenuBar.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the MenuItemSeparator documentation here.
     */
    export interface MenuItemSeparator {
      addStyleDependentName(styleName: String): MenuItemSeparator;
      addStyleName(styleName: String): MenuItemSeparator;
      getId(): String;
      getTag(): String;
      getType(): String;
      setHeight(height: String): MenuItemSeparator;
      setId(id: String): MenuItemSeparator;
      setPixelSize(width: Integer, height: Integer): MenuItemSeparator;
      setSize(width: String, height: String): MenuItemSeparator;
      setStyleAttribute(attribute: String, value: String): MenuItemSeparator;
      setStyleAttributes(attributes: Object): MenuItemSeparator;
      setStyleName(styleName: String): MenuItemSeparator;
      setStylePrimaryName(styleName: String): MenuItemSeparator;
      setTag(tag: String): MenuItemSeparator;
      setTitle(title: String): MenuItemSeparator;
      setVisible(visible: Boolean): MenuItemSeparator;
      setWidth(width: String): MenuItemSeparator;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard push-button widget which will automatically reset its enclosing FormPanel if
     *  any.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var panel = app.createFlowPanel();
     *        panel.add(app.createTextBox().setText("some text"));
     *        panel.add(app.createResetButton("reset the textbox"));
     *        var form = app.createFormPanel();
     *        form.add(panel);
     *        app.add(form);
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the ResetButton documentation here.
     */
    export interface ResetButton {
      addBlurHandler(handler: Handler): ResetButton;
      addClickHandler(handler: Handler): ResetButton;
      addFocusHandler(handler: Handler): ResetButton;
      addKeyDownHandler(handler: Handler): ResetButton;
      addKeyPressHandler(handler: Handler): ResetButton;
      addKeyUpHandler(handler: Handler): ResetButton;
      addMouseDownHandler(handler: Handler): ResetButton;
      addMouseMoveHandler(handler: Handler): ResetButton;
      addMouseOutHandler(handler: Handler): ResetButton;
      addMouseOverHandler(handler: Handler): ResetButton;
      addMouseUpHandler(handler: Handler): ResetButton;
      addMouseWheelHandler(handler: Handler): ResetButton;
      addStyleDependentName(styleName: String): ResetButton;
      addStyleName(styleName: String): ResetButton;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): ResetButton;
      setEnabled(enabled: Boolean): ResetButton;
      setFocus(focus: Boolean): ResetButton;
      setHTML(html: String): ResetButton;
      setHeight(height: String): ResetButton;
      setId(id: String): ResetButton;
      setLayoutData(layout: Object): ResetButton;
      setPixelSize(width: Integer, height: Integer): ResetButton;
      setSize(width: String, height: String): ResetButton;
      setStyleAttribute(attribute: String, value: String): ResetButton;
      setStyleAttributes(attributes: Object): ResetButton;
      setStyleName(styleName: String): ResetButton;
      setStylePrimaryName(styleName: String): ResetButton;
      setTabIndex(index: Integer): ResetButton;
      setTag(tag: String): ResetButton;
      setText(text: String): ResetButton;
      setTitle(title: String): ResetButton;
      setVisible(visible: Boolean): ResetButton;
      setWidth(width: String): ResetButton;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A simple checkbox widget, with no label.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SimpleCheckBox documentation here.
     */
    export interface SimpleCheckBox {
      addBlurHandler(handler: Handler): SimpleCheckBox;
      addClickHandler(handler: Handler): SimpleCheckBox;
      addFocusHandler(handler: Handler): SimpleCheckBox;
      addKeyDownHandler(handler: Handler): SimpleCheckBox;
      addKeyPressHandler(handler: Handler): SimpleCheckBox;
      addKeyUpHandler(handler: Handler): SimpleCheckBox;
      addMouseDownHandler(handler: Handler): SimpleCheckBox;
      addMouseMoveHandler(handler: Handler): SimpleCheckBox;
      addMouseOutHandler(handler: Handler): SimpleCheckBox;
      addMouseOverHandler(handler: Handler): SimpleCheckBox;
      addMouseUpHandler(handler: Handler): SimpleCheckBox;
      addMouseWheelHandler(handler: Handler): SimpleCheckBox;
      addStyleDependentName(styleName: String): SimpleCheckBox;
      addStyleName(styleName: String): SimpleCheckBox;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): SimpleCheckBox;
      setChecked(checked: Boolean): SimpleCheckBox;
      setEnabled(enabled: Boolean): SimpleCheckBox;
      setFocus(focus: Boolean): SimpleCheckBox;
      setHeight(height: String): SimpleCheckBox;
      setId(id: String): SimpleCheckBox;
      setLayoutData(layout: Object): SimpleCheckBox;
      setName(name: String): SimpleCheckBox;
      setPixelSize(width: Integer, height: Integer): SimpleCheckBox;
      setSize(width: String, height: String): SimpleCheckBox;
      setStyleAttribute(attribute: String, value: String): SimpleCheckBox;
      setStyleAttributes(attributes: Object): SimpleCheckBox;
      setStyleName(styleName: String): SimpleCheckBox;
      setStylePrimaryName(styleName: String): SimpleCheckBox;
      setTabIndex(index: Integer): SimpleCheckBox;
      setTag(tag: String): SimpleCheckBox;
      setTitle(title: String): SimpleCheckBox;
      setVisible(visible: Boolean): SimpleCheckBox;
      setWidth(width: String): SimpleCheckBox;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that wraps its contents in a scrollable element.
     * 
     *  Note that this panel can contain at most one direct child widget. To add more children, make the
     *  child of this panel a different panel that can contain more than one child.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        // Create some long content.
     *        var vertical = app.createVerticalPanel();
     *        for (var i = 0; i < 100; ++i) {
     *          vertical.add(app.createButton("button " + i));
     *        }
     *        var scroll = app.createScrollPanel().setPixelSize(100, 100);
     *        scroll.add(vertical);
     *        app.add(scroll);
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the ScrollPanel documentation here.
     */
    export interface ScrollPanel {
      add(widget: Widget): ScrollPanel;
      addScrollHandler(handler: Handler): ScrollPanel;
      addStyleDependentName(styleName: String): ScrollPanel;
      addStyleName(styleName: String): ScrollPanel;
      clear(): ScrollPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAlwaysShowScrollBars(alwaysShow: Boolean): ScrollPanel;
      setHeight(height: String): ScrollPanel;
      setHorizontalScrollPosition(position: Integer): ScrollPanel;
      setId(id: String): ScrollPanel;
      setLayoutData(layout: Object): ScrollPanel;
      setPixelSize(width: Integer, height: Integer): ScrollPanel;
      setScrollPosition(position: Integer): ScrollPanel;
      setSize(width: String, height: String): ScrollPanel;
      setStyleAttribute(attribute: String, value: String): ScrollPanel;
      setStyleAttributes(attributes: Object): ScrollPanel;
      setStyleName(styleName: String): ScrollPanel;
      setStylePrimaryName(styleName: String): ScrollPanel;
      setTag(tag: String): ScrollPanel;
      setTitle(title: String): ScrollPanel;
      setVisible(visible: Boolean): ScrollPanel;
      setWidget(widget: Widget): ScrollPanel;
      setWidth(width: String): ScrollPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that stacks its children vertically, displaying only one at a time,
     *  with a header for each child which the user can click to display.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the StackPanel documentation here.
     */
    export interface StackPanel {
      add(widget: Widget): StackPanel;
      add(widget: Widget, text: String): StackPanel;
      add(widget: Widget, text: String, asHtml: Boolean): StackPanel;
      addStyleDependentName(styleName: String): StackPanel;
      addStyleName(styleName: String): StackPanel;
      clear(): StackPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      remove(index: Integer): StackPanel;
      remove(widget: Widget): StackPanel;
      setHeight(height: String): StackPanel;
      setId(id: String): StackPanel;
      setLayoutData(layout: Object): StackPanel;
      setPixelSize(width: Integer, height: Integer): StackPanel;
      setSize(width: String, height: String): StackPanel;
      setStackText(index: Integer, text: String): StackPanel;
      setStackText(index: Integer, text: String, asHtml: Boolean): StackPanel;
      setStyleAttribute(attribute: String, value: String): StackPanel;
      setStyleAttributes(attributes: Object): StackPanel;
      setStyleName(styleName: String): StackPanel;
      setStylePrimaryName(styleName: String): StackPanel;
      setTag(tag: String): StackPanel;
      setTitle(title: String): StackPanel;
      setVisible(visible: Boolean): StackPanel;
      setWidth(width: String): StackPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A simple radio button widget, with no label.
     * 
     *  SimpleRadioButtons are grouped according to the same rules as RadioButtons.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SimpleRadioButton documentation here.
     */
    export interface SimpleRadioButton {
      addBlurHandler(handler: Handler): SimpleRadioButton;
      addClickHandler(handler: Handler): SimpleRadioButton;
      addFocusHandler(handler: Handler): SimpleRadioButton;
      addKeyDownHandler(handler: Handler): SimpleRadioButton;
      addKeyPressHandler(handler: Handler): SimpleRadioButton;
      addKeyUpHandler(handler: Handler): SimpleRadioButton;
      addMouseDownHandler(handler: Handler): SimpleRadioButton;
      addMouseMoveHandler(handler: Handler): SimpleRadioButton;
      addMouseOutHandler(handler: Handler): SimpleRadioButton;
      addMouseOverHandler(handler: Handler): SimpleRadioButton;
      addMouseUpHandler(handler: Handler): SimpleRadioButton;
      addMouseWheelHandler(handler: Handler): SimpleRadioButton;
      addStyleDependentName(styleName: String): SimpleRadioButton;
      addStyleName(styleName: String): SimpleRadioButton;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): SimpleRadioButton;
      setChecked(checked: Boolean): SimpleRadioButton;
      setEnabled(enabled: Boolean): SimpleRadioButton;
      setFocus(focus: Boolean): SimpleRadioButton;
      setHeight(height: String): SimpleRadioButton;
      setId(id: String): SimpleRadioButton;
      setLayoutData(layout: Object): SimpleRadioButton;
      setName(name: String): SimpleRadioButton;
      setPixelSize(width: Integer, height: Integer): SimpleRadioButton;
      setSize(width: String, height: String): SimpleRadioButton;
      setStyleAttribute(attribute: String, value: String): SimpleRadioButton;
      setStyleAttributes(attributes: Object): SimpleRadioButton;
      setStyleName(styleName: String): SimpleRadioButton;
      setStylePrimaryName(styleName: String): SimpleRadioButton;
      setTabIndex(index: Integer): SimpleRadioButton;
      setTag(tag: String): SimpleRadioButton;
      setTitle(title: String): SimpleRadioButton;
      setVisible(visible: Boolean): SimpleRadioButton;
      setWidth(width: String): SimpleRadioButton;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that can contain only one widget.
     * 
     *  This panel is useful for adding styling effects to the child widget. To add more children, make
     *  the child of this panel a different panel that can contain more than one child.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var simple = app.createSimplePanel();
     *        var flow = app.createFlowPanel();
     *        flow.add(app.createButton("button 1"));
     *        flow.add(app.createButton("button 2"));
     *        simple.add(flow);
     *        app.add(simple);
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SimplePanel documentation here.
     */
    export interface SimplePanel {
      add(widget: Widget): SimplePanel;
      addStyleDependentName(styleName: String): SimplePanel;
      addStyleName(styleName: String): SimplePanel;
      clear(): SimplePanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      setHeight(height: String): SimplePanel;
      setId(id: String): SimplePanel;
      setLayoutData(layout: Object): SimplePanel;
      setPixelSize(width: Integer, height: Integer): SimplePanel;
      setSize(width: String, height: String): SimplePanel;
      setStyleAttribute(attribute: String, value: String): SimplePanel;
      setStyleAttributes(attributes: Object): SimplePanel;
      setStyleName(styleName: String): SimplePanel;
      setStylePrimaryName(styleName: String): SimplePanel;
      setTag(tag: String): SimplePanel;
      setTitle(title: String): SimplePanel;
      setVisible(visible: Boolean): SimplePanel;
      setWidget(widget: Widget): SimplePanel;
      setWidth(width: String): SimplePanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard push-button widget which will automatically submit its enclosing FormPanel if
     *  any.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var form = app.createFormPanel();
     *        var flow = app.createFlowPanel();
     *        flow.add(app.createTextBox().setName("textBox"));
     *        flow.add(app.createSubmitButton("Submit"));
     *        form.add(flow);
     *        app.add(form);
     *        return app;
     *      }
     *     
     *      function doPost(eventInfo) {
     *        var app = UiApp.getActiveApplication();
     *        app.add(app.createLabel("Form submitted. The text box's value was '" +
     *            eventInfo.parameter.textBox + "'"));
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SubmitButton documentation here.
     */
    export interface SubmitButton {
      addBlurHandler(handler: Handler): SubmitButton;
      addClickHandler(handler: Handler): SubmitButton;
      addFocusHandler(handler: Handler): SubmitButton;
      addKeyDownHandler(handler: Handler): SubmitButton;
      addKeyPressHandler(handler: Handler): SubmitButton;
      addKeyUpHandler(handler: Handler): SubmitButton;
      addMouseDownHandler(handler: Handler): SubmitButton;
      addMouseMoveHandler(handler: Handler): SubmitButton;
      addMouseOutHandler(handler: Handler): SubmitButton;
      addMouseOverHandler(handler: Handler): SubmitButton;
      addMouseUpHandler(handler: Handler): SubmitButton;
      addMouseWheelHandler(handler: Handler): SubmitButton;
      addStyleDependentName(styleName: String): SubmitButton;
      addStyleName(styleName: String): SubmitButton;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): SubmitButton;
      setEnabled(enabled: Boolean): SubmitButton;
      setFocus(focus: Boolean): SubmitButton;
      setHTML(html: String): SubmitButton;
      setHeight(height: String): SubmitButton;
      setId(id: String): SubmitButton;
      setLayoutData(layout: Object): SubmitButton;
      setPixelSize(width: Integer, height: Integer): SubmitButton;
      setSize(width: String, height: String): SubmitButton;
      setStyleAttribute(attribute: String, value: String): SubmitButton;
      setStyleAttributes(attributes: Object): SubmitButton;
      setStyleName(styleName: String): SubmitButton;
      setStylePrimaryName(styleName: String): SubmitButton;
      setTabIndex(index: Integer): SubmitButton;
      setTag(tag: String): SubmitButton;
      setText(text: String): SubmitButton;
      setTitle(title: String): SubmitButton;
      setVisible(visible: Boolean): SubmitButton;
      setWidth(width: String): SubmitButton;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * An event handler that runs on the server. These will, in general, run much slower than
     *  ClientHandlers but they are not limited in what they can do.
     * 
     *  Any method that accepts a "Handler" parameter can accept a ServerHandler.
     * 
     *  When a ServerHandler is invoked, the function it refers to is called on the Apps Script server in
     *  a "fresh" script. This means that no variable values will have survived from previous handlers or
     *  from the initial script that loaded the app. Global variables in the script will be re-evaluated,
     *  which means that it's a bad idea to do anything slow (like opening a Spreadsheet or fetching a
     *  Calendar) in a global variable.
     * 
     *  If you need to save state on the server, you can try using ScriptProperties or UserProperties.
     *  You can also add a Hidden field to your app storing the information you want to save
     *  and pass it back explicitly to handlers as a "callback element."
     * 
     *  If you set validators on a ServerHandler, they will be checked before the handler calls the
     *  server. The server will only be called if the validators succeed.
     * 
     *  If you have multiple ServerHandlers for the same event on the same widget, they will be called
     *  simultaneously.
     */
    export interface ServerHandler {
      addCallbackElement(widget: Widget): ServerHandler;
      getId(): String;
      getTag(): String;
      getType(): String;
      setCallbackFunction(functionToInvoke: String): ServerHandler;
      setId(id: String): ServerHandler;
      setTag(tag: String): ServerHandler;
      validateEmail(widget: Widget): ServerHandler;
      validateInteger(widget: Widget): ServerHandler;
      validateLength(widget: Widget, min: Integer, max: Integer): ServerHandler;
      validateMatches(widget: Widget, pattern: String): ServerHandler;
      validateMatches(widget: Widget, pattern: String, flags: String): ServerHandler;
      validateNotEmail(widget: Widget): ServerHandler;
      validateNotInteger(widget: Widget): ServerHandler;
      validateNotLength(widget: Widget, min: Integer, max: Integer): ServerHandler;
      validateNotMatches(widget: Widget, pattern: String): ServerHandler;
      validateNotMatches(widget: Widget, pattern: String, flags: String): ServerHandler;
      validateNotNumber(widget: Widget): ServerHandler;
      validateNotOptions(widget: Widget, options: String[]): ServerHandler;
      validateNotRange(widget: Widget, min: Number, max: Number): ServerHandler;
      validateNotSum(widgets: Widget[], sum: Integer): ServerHandler;
      validateNumber(widget: Widget): ServerHandler;
      validateOptions(widget: Widget, options: String[]): ServerHandler;
      validateRange(widget: Widget, min: Number, max: Number): ServerHandler;
      validateSum(widgets: Widget[], sum: Integer): ServerHandler;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that adds user-positioned splitters between each of its child widgets.
     * 
     *  This panel is similar to a DockLayoutPanel, but each pair of child widgets has a splitter
     *  between them that the user can drag.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SplitLayoutPanel documentation here.
     */
    export interface SplitLayoutPanel {
      add(widget: Widget): SplitLayoutPanel;
      addEast(widget: Widget, width: Number): SplitLayoutPanel;
      addNorth(widget: Widget, height: Number): SplitLayoutPanel;
      addSouth(widget: Widget, height: Number): SplitLayoutPanel;
      addStyleDependentName(styleName: String): SplitLayoutPanel;
      addStyleName(styleName: String): SplitLayoutPanel;
      addWest(widget: Widget, width: Number): SplitLayoutPanel;
      clear(): SplitLayoutPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      remove(index: Integer): SplitLayoutPanel;
      remove(widget: Widget): SplitLayoutPanel;
      setHeight(height: String): SplitLayoutPanel;
      setId(id: String): SplitLayoutPanel;
      setLayoutData(layout: Object): SplitLayoutPanel;
      setPixelSize(width: Integer, height: Integer): SplitLayoutPanel;
      setSize(width: String, height: String): SplitLayoutPanel;
      setStyleAttribute(attribute: String, value: String): SplitLayoutPanel;
      setStyleAttributes(attributes: Object): SplitLayoutPanel;
      setStyleName(styleName: String): SplitLayoutPanel;
      setStylePrimaryName(styleName: String): SplitLayoutPanel;
      setTag(tag: String): SplitLayoutPanel;
      setTitle(title: String): SplitLayoutPanel;
      setVisible(visible: Boolean): SplitLayoutPanel;
      setWidgetMinSize(widget: Widget, minSize: Integer): SplitLayoutPanel;
      setWidth(width: String): SplitLayoutPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A horizontal bar of folder-style tabs, most commonly used as part of a TabPanel.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the TabBar documentation here.
     */
    export interface TabBar {
      addBeforeSelectionHandler(handler: Handler): TabBar;
      addSelectionHandler(handler: Handler): TabBar;
      addStyleDependentName(styleName: String): TabBar;
      addStyleName(styleName: String): TabBar;
      addTab(title: String): TabBar;
      addTab(title: String, asHtml: Boolean): TabBar;
      addTab(widget: Widget): TabBar;
      getId(): String;
      getTag(): String;
      getType(): String;
      selectTab(index: Integer): TabBar;
      setHeight(height: String): TabBar;
      setId(id: String): TabBar;
      setLayoutData(layout: Object): TabBar;
      setPixelSize(width: Integer, height: Integer): TabBar;
      setSize(width: String, height: String): TabBar;
      setStyleAttribute(attribute: String, value: String): TabBar;
      setStyleAttributes(attributes: Object): TabBar;
      setStyleName(styleName: String): TabBar;
      setStylePrimaryName(styleName: String): TabBar;
      setTabEnabled(index: Integer, enabled: Boolean): TabBar;
      setTabText(index: Integer, text: String): TabBar;
      setTag(tag: String): TabBar;
      setTitle(title: String): TabBar;
      setVisible(visible: Boolean): TabBar;
      setWidth(width: String): TabBar;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that represents a tabbed set of pages, each of which contains another
     *  widget. Its child widgets are shown as the user selects the various tabs
     *  associated with them.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the TabPanel documentation here.
     */
    export interface TabPanel {
      add(widget: Widget): TabPanel;
      add(widget: Widget, text: String): TabPanel;
      add(widget: Widget, text: String, asHtml: Boolean): TabPanel;
      add(widget: Widget, tabWidget: Widget): TabPanel;
      addBeforeSelectionHandler(handler: Handler): TabPanel;
      addSelectionHandler(handler: Handler): TabPanel;
      addStyleDependentName(styleName: String): TabPanel;
      addStyleName(styleName: String): TabPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      selectTab(index: Integer): TabPanel;
      setAnimationEnabled(animationEnabled: Boolean): TabPanel;
      setHeight(height: String): TabPanel;
      setId(id: String): TabPanel;
      setLayoutData(layout: Object): TabPanel;
      setPixelSize(width: Integer, height: Integer): TabPanel;
      setSize(width: String, height: String): TabPanel;
      setStyleAttribute(attribute: String, value: String): TabPanel;
      setStyleAttributes(attributes: Object): TabPanel;
      setStyleName(styleName: String): TabPanel;
      setStylePrimaryName(styleName: String): TabPanel;
      setTag(tag: String): TabPanel;
      setTitle(title: String): TabPanel;
      setVisible(visible: Boolean): TabPanel;
      setWidth(width: String): TabPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * An item that can be contained within a Tree.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the TreeItem documentation here.
     */
    export interface TreeItem {
      addItem(text: String): TreeItem;
      addItem(item: TreeItem): TreeItem;
      addItem(widget: Widget): TreeItem;
      addStyleDependentName(styleName: String): TreeItem;
      addStyleName(styleName: String): TreeItem;
      clear(): TreeItem;
      getId(): String;
      getTag(): String;
      getType(): String;
      setHTML(html: String): TreeItem;
      setHeight(height: String): TreeItem;
      setId(id: String): TreeItem;
      setPixelSize(width: Integer, height: Integer): TreeItem;
      setSelected(selected: Boolean): TreeItem;
      setSize(width: String, height: String): TreeItem;
      setState(open: Boolean): TreeItem;
      setState(open: Boolean, fireEvents: Boolean): TreeItem;
      setStyleAttribute(attribute: String, value: String): TreeItem;
      setStyleAttributes(attributes: Object): TreeItem;
      setStyleName(styleName: String): TreeItem;
      setStylePrimaryName(styleName: String): TreeItem;
      setTag(tag: String): TreeItem;
      setText(text: String): TreeItem;
      setTitle(title: String): TreeItem;
      setUserObject(a: Object): TreeItem;
      setVisible(visible: Boolean): TreeItem;
      setWidget(widget: Widget): TreeItem;
      setWidth(width: String): TreeItem;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard hierarchical tree widget. The tree contains a hierarchy of
     *  TreeItems that the user can open, close, and select.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the Tree documentation here.
     */
    export interface Tree {
      add(widget: Widget): Tree;
      addBlurHandler(handler: Handler): Tree;
      addCloseHandler(handler: Handler): Tree;
      addFocusHandler(handler: Handler): Tree;
      addItem(text: String): Tree;
      addItem(item: TreeItem): Tree;
      addItem(widget: Widget): Tree;
      addKeyDownHandler(handler: Handler): Tree;
      addKeyPressHandler(handler: Handler): Tree;
      addKeyUpHandler(handler: Handler): Tree;
      addMouseDownHandler(handler: Handler): Tree;
      addMouseMoveHandler(handler: Handler): Tree;
      addMouseOutHandler(handler: Handler): Tree;
      addMouseOverHandler(handler: Handler): Tree;
      addMouseUpHandler(handler: Handler): Tree;
      addMouseWheelHandler(handler: Handler): Tree;
      addOpenHandler(handler: Handler): Tree;
      addSelectionHandler(handler: Handler): Tree;
      addStyleDependentName(styleName: String): Tree;
      addStyleName(styleName: String): Tree;
      clear(): Tree;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): Tree;
      setAnimationEnabled(animationEnabled: Boolean): Tree;
      setFocus(focus: Boolean): Tree;
      setHeight(height: String): Tree;
      setId(id: String): Tree;
      setLayoutData(layout: Object): Tree;
      setPixelSize(width: Integer, height: Integer): Tree;
      setSelectedItem(item: TreeItem): Tree;
      setSelectedItem(item: TreeItem, fireEvents: Boolean): Tree;
      setSize(width: String, height: String): Tree;
      setStyleAttribute(attribute: String, value: String): Tree;
      setStyleAttributes(attributes: Object): Tree;
      setStyleName(styleName: String): Tree;
      setStylePrimaryName(styleName: String): Tree;
      setTabIndex(index: Integer): Tree;
      setTag(tag: String): Tree;
      setTitle(title: String): Tree;
      setVisible(visible: Boolean): Tree;
      setWidth(width: String): Tree;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A ToggleButton is a stylish stateful button which allows the
     *  user to toggle between up and down states.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the ToggleButton documentation here.
     */
    export interface ToggleButton {
      addBlurHandler(handler: Handler): ToggleButton;
      addClickHandler(handler: Handler): ToggleButton;
      addFocusHandler(handler: Handler): ToggleButton;
      addKeyDownHandler(handler: Handler): ToggleButton;
      addKeyPressHandler(handler: Handler): ToggleButton;
      addKeyUpHandler(handler: Handler): ToggleButton;
      addMouseDownHandler(handler: Handler): ToggleButton;
      addMouseMoveHandler(handler: Handler): ToggleButton;
      addMouseOutHandler(handler: Handler): ToggleButton;
      addMouseOverHandler(handler: Handler): ToggleButton;
      addMouseUpHandler(handler: Handler): ToggleButton;
      addMouseWheelHandler(handler: Handler): ToggleButton;
      addStyleDependentName(styleName: String): ToggleButton;
      addStyleName(styleName: String): ToggleButton;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): ToggleButton;
      setDown(down: Boolean): ToggleButton;
      setEnabled(enabled: Boolean): ToggleButton;
      setFocus(focus: Boolean): ToggleButton;
      setHTML(html: String): ToggleButton;
      setHeight(height: String): ToggleButton;
      setId(id: String): ToggleButton;
      setLayoutData(layout: Object): ToggleButton;
      setPixelSize(width: Integer, height: Integer): ToggleButton;
      setSize(width: String, height: String): ToggleButton;
      setStyleAttribute(attribute: String, value: String): ToggleButton;
      setStyleAttributes(attributes: Object): ToggleButton;
      setStyleName(styleName: String): ToggleButton;
      setStylePrimaryName(styleName: String): ToggleButton;
      setTabIndex(index: Integer): ToggleButton;
      setTag(tag: String): ToggleButton;
      setText(text: String): ToggleButton;
      setTitle(title: String): ToggleButton;
      setVisible(visible: Boolean): ToggleButton;
      setWidth(width: String): ToggleButton;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A standard single-line text box.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var text = app.createTextBox().setName("text");
     *        var handler = app.createServerHandler("count").addCallbackElement(text);
     *        app.add(text);
     *        app.add(app.createButton("Count", handler));
     *        app.add(app.createLabel("0 characters").setId("label"));
     *        return app;
     *      }
     *     
     *      function count(eventInfo) {
     *        var app = UiApp.createApplication();
     *        // Because the text box was named "text" and added as a callback element to the
     *        // button's click event, we have its value available in eventInfo.parameter.text.
     *        app.getElementById("label").setText(eventInfo.parameter.text.length + " characters");
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the TextBox documentation here.
     */
    export interface TextBox {
      addBlurHandler(handler: Handler): TextBox;
      addChangeHandler(handler: Handler): TextBox;
      addClickHandler(handler: Handler): TextBox;
      addFocusHandler(handler: Handler): TextBox;
      addKeyDownHandler(handler: Handler): TextBox;
      addKeyPressHandler(handler: Handler): TextBox;
      addKeyUpHandler(handler: Handler): TextBox;
      addMouseDownHandler(handler: Handler): TextBox;
      addMouseMoveHandler(handler: Handler): TextBox;
      addMouseOutHandler(handler: Handler): TextBox;
      addMouseOverHandler(handler: Handler): TextBox;
      addMouseUpHandler(handler: Handler): TextBox;
      addMouseWheelHandler(handler: Handler): TextBox;
      addStyleDependentName(styleName: String): TextBox;
      addStyleName(styleName: String): TextBox;
      addValueChangeHandler(handler: Handler): TextBox;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): TextBox;
      setCursorPos(position: Integer): TextBox;
      setDirection(direction: Component): TextBox;
      setEnabled(enabled: Boolean): TextBox;
      setFocus(focus: Boolean): TextBox;
      setHeight(height: String): TextBox;
      setId(id: String): TextBox;
      setLayoutData(layout: Object): TextBox;
      setMaxLength(length: Integer): TextBox;
      setName(name: String): TextBox;
      setPixelSize(width: Integer, height: Integer): TextBox;
      setReadOnly(readOnly: Boolean): TextBox;
      setSelectionRange(position: Integer, length: Integer): TextBox;
      setSize(width: String, height: String): TextBox;
      setStyleAttribute(attribute: String, value: String): TextBox;
      setStyleAttributes(attributes: Object): TextBox;
      setStyleName(styleName: String): TextBox;
      setStylePrimaryName(styleName: String): TextBox;
      setTabIndex(index: Integer): TextBox;
      setTag(tag: String): TextBox;
      setText(text: String): TextBox;
      setTextAlignment(textAlign: Component): TextBox;
      setTitle(title: String): TextBox;
      setValue(value: String): TextBox;
      setValue(value: String, fireEvents: Boolean): TextBox;
      setVisible(visible: Boolean): TextBox;
      setVisibleLength(length: Integer): TextBox;
      setWidth(width: String): TextBox;
    }

    /**
     * 
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * A SuggestBox is a text box or text area which displays a
     *  pre-configured set of selections that match the user's input.
     * 
     *  This widget is not currently functional.
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the SuggestBox documentation here.
     */
    export interface SuggestBox {
      addKeyDownHandler(handler: Handler): SuggestBox;
      addKeyPressHandler(handler: Handler): SuggestBox;
      addKeyUpHandler(handler: Handler): SuggestBox;
      addSelectionHandler(handler: Handler): SuggestBox;
      addStyleDependentName(styleName: String): SuggestBox;
      addStyleName(styleName: String): SuggestBox;
      addValueChangeHandler(handler: Handler): SuggestBox;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): SuggestBox;
      setAnimationEnabled(animationEnabled: Boolean): SuggestBox;
      setAutoSelectEnabled(autoSelectEnabled: Boolean): SuggestBox;
      setFocus(focus: Boolean): SuggestBox;
      setHeight(height: String): SuggestBox;
      setId(id: String): SuggestBox;
      setLayoutData(layout: Object): SuggestBox;
      setLimit(limit: Integer): SuggestBox;
      setPixelSize(width: Integer, height: Integer): SuggestBox;
      setPopupStyleName(styleName: String): SuggestBox;
      setSize(width: String, height: String): SuggestBox;
      setStyleAttribute(attribute: String, value: String): SuggestBox;
      setStyleAttributes(attributes: Object): SuggestBox;
      setStyleName(styleName: String): SuggestBox;
      setStylePrimaryName(styleName: String): SuggestBox;
      setTabIndex(index: Integer): SuggestBox;
      setTag(tag: String): SuggestBox;
      setText(text: String): SuggestBox;
      setTitle(title: String): SuggestBox;
      setValue(value: String): SuggestBox;
      setValue(value: String, fireEvents: Boolean): SuggestBox;
      setVisible(visible: Boolean): SuggestBox;
      setWidth(width: String): SuggestBox;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A text box that allows multiple lines of text to be entered.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var text = app.createTextArea().setName("text");
     *        var handler = app.createServerHandler("count").addCallbackElement(text);
     *        app.add(text);
     *        app.add(app.createButton("Count", handler));
     *        app.add(app.createLabel("0 characters").setId("label"));
     *        return app;
     *      }
     *     
     *      function count(eventInfo) {
     *        var app = UiApp.createApplication();
     *        // Because the text area was named "text" and added as a callback element to the
     *        // button's click event, we have its value available in eventInfo.parameter.text.
     *        app.getElementById("label").setText(eventInfo.parameter.text.length + " characters");
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the TextArea documentation here.
     */
    export interface TextArea {
      addBlurHandler(handler: Handler): TextArea;
      addChangeHandler(handler: Handler): TextArea;
      addClickHandler(handler: Handler): TextArea;
      addFocusHandler(handler: Handler): TextArea;
      addKeyDownHandler(handler: Handler): TextArea;
      addKeyPressHandler(handler: Handler): TextArea;
      addKeyUpHandler(handler: Handler): TextArea;
      addMouseDownHandler(handler: Handler): TextArea;
      addMouseMoveHandler(handler: Handler): TextArea;
      addMouseOutHandler(handler: Handler): TextArea;
      addMouseOverHandler(handler: Handler): TextArea;
      addMouseUpHandler(handler: Handler): TextArea;
      addMouseWheelHandler(handler: Handler): TextArea;
      addStyleDependentName(styleName: String): TextArea;
      addStyleName(styleName: String): TextArea;
      addValueChangeHandler(handler: Handler): TextArea;
      getId(): String;
      getTag(): String;
      getType(): String;
      setAccessKey(accessKey: Char): TextArea;
      setCharacterWidth(width: Integer): TextArea;
      setCursorPos(position: Integer): TextArea;
      setDirection(direction: Component): TextArea;
      setEnabled(enabled: Boolean): TextArea;
      setFocus(focus: Boolean): TextArea;
      setHeight(height: String): TextArea;
      setId(id: String): TextArea;
      setLayoutData(layout: Object): TextArea;
      setName(name: String): TextArea;
      setPixelSize(width: Integer, height: Integer): TextArea;
      setReadOnly(readOnly: Boolean): TextArea;
      setSelectionRange(position: Integer, length: Integer): TextArea;
      setSize(width: String, height: String): TextArea;
      setStyleAttribute(attribute: String, value: String): TextArea;
      setStyleAttributes(attributes: Object): TextArea;
      setStyleName(styleName: String): TextArea;
      setStylePrimaryName(styleName: String): TextArea;
      setTabIndex(index: Integer): TextArea;
      setTag(tag: String): TextArea;
      setText(text: String): TextArea;
      setTextAlignment(textAlign: Component): TextArea;
      setTitle(title: String): TextArea;
      setValue(value: String): TextArea;
      setValue(value: String, fireEvents: Boolean): TextArea;
      setVisible(visible: Boolean): TextArea;
      setVisibleLines(lines: Integer): TextArea;
      setWidth(width: String): TextArea;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A panel that lays all of its widgets out in a single vertical column.
     * 
     *  Here is an example of how to use this widget:
     * 
     *      function doGet() {
     *        var app = UiApp.createApplication();
     *        var panel = app.createVerticalPanel();
     *        panel.add(app.createButton("button 1"));
     *        panel.add(app.createButton("button 2"));
     *        app.add(panel);
     *        return app;
     *      }
     * 
     *  Internally, UiApp widgets are built on top of the 
     *  Google Web Toolkit, and it can sometimes be helpful to look at the GWT documentation
     *  directly. You can find the VerticalPanel documentation
     *  here.
     */
    export interface VerticalPanel {
      add(widget: Widget): VerticalPanel;
      addStyleDependentName(styleName: String): VerticalPanel;
      addStyleName(styleName: String): VerticalPanel;
      clear(): VerticalPanel;
      getId(): String;
      getTag(): String;
      getType(): String;
      remove(index: Integer): VerticalPanel;
      remove(widget: Widget): VerticalPanel;
      setBorderWidth(width: Integer): VerticalPanel;
      setCellHeight(widget: Widget, height: String): VerticalPanel;
      setCellHorizontalAlignment(widget: Widget, horizontalAlignment: HorizontalAlignment): VerticalPanel;
      setCellVerticalAlignment(widget: Widget, verticalAlignment: VerticalAlignment): VerticalPanel;
      setCellWidth(widget: Widget, width: String): VerticalPanel;
      setHeight(height: String): VerticalPanel;
      setHorizontalAlignment(horizontalAlignment: HorizontalAlignment): VerticalPanel;
      setId(id: String): VerticalPanel;
      setLayoutData(layout: Object): VerticalPanel;
      setPixelSize(width: Integer, height: Integer): VerticalPanel;
      setSize(width: String, height: String): VerticalPanel;
      setSpacing(spacing: Integer): VerticalPanel;
      setStyleAttribute(attribute: String, value: String): VerticalPanel;
      setStyleAttributes(attributes: Object): VerticalPanel;
      setStyleName(styleName: String): VerticalPanel;
      setStylePrimaryName(styleName: String): VerticalPanel;
      setTag(tag: String): VerticalPanel;
      setTitle(title: String): VerticalPanel;
      setVerticalAlignment(verticalAlignment: VerticalAlignment): VerticalPanel;
      setVisible(visible: Boolean): VerticalPanel;
      setWidth(width: String): VerticalPanel;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Date and time format constants for widgets such as
     *  DateBox.
     * 
     *  These correspond to the predefined constants from the Google Web Toolkit. You can read
     *  more about these constants 
     *  here.
     */
    export enum DateTimeFormat { ISO_8601, RFC_2822, DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR_MINUTE, HOUR_MINUTE_SECOND, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A generic component object.
     * Implementing classes
     * 
     * NameBrief description
     * 
     * AbsolutePanelAn absolute panel positions all of its children absolutely, allowing them to overlap.
     * 
     * AnchorA widget that represents a simple <a> element.
     * 
     * ButtonA standard push-button widget.
     * 
     * CaptionPanelA panel that wraps its contents in a border with a caption that appears in the upper left
     *  corner of the border.
     * 
     * ChartA Chart object, which can be embedded into documents, UI elements, or used as a static image.
     * 
     * CheckBoxA standard check box widget.
     * 
     * ClientHandlerAn event handler that runs in the user's browser without needing a call back to the server.
     * 
     * ControlA user interface control object, that drives the data displayed by a DashboardPanel.
     * 
     * DashboardPanelA dashboard is a visual structure that enables the organization and management
     *  of multiple charts that share the same underlying data.
     * 
     * DateBoxA text box that shows a DatePicker when the user focuses on it.
     * 
     * DatePickerA date picker widget.
     * 
     * DecoratedStackPanelA StackPanel that wraps each item in a 2x3 grid (six box), which allows users to add
     *  rounded corners.
     * 
     * DecoratedTabBarA TabBar that wraps each tab in a 2x3 grid (six box), which allows users to add rounded corners.
     * 
     * DecoratedTabPanelA TabPanel that uses a DecoratedTabBar with rounded corners.
     * 
     * DecoratorPanelA SimplePanel that wraps its contents in stylized boxes, which can be used to add rounded
     *  corners to a Widget.
     * 
     * DialogBoxA form of popup that has a caption area at the top and can be dragged by the
     *  user.
     * 
     * DocsListDialogA "file-open" dialog for Google Drive.
     * 
     * EmbeddedChartRepresents a chart that has been embedded into a Spreadsheet.
     * 
     * FileUploadA widget that wraps the HTML <input type='file'> element.
     * 
     * FlexTableA flexible table that creates cells on demand.
     * 
     * FlowPanelA panel that formats its child widgets using the default HTML layout behavior.
     * 
     * FocusPanelA simple panel that makes its contents focusable, and adds the ability to catch mouse and
     *  keyboard events.
     * 
     * FormPanelA panel that wraps its contents in an HTML <FORM> element.
     * 
     * GridA rectangular grid that can contain text, html, or a child widget within its cells.
     * 
     * HTMLA widget that contains arbitrary text, which is interpreted as HTML.
     * 
     * HandlerBase interface for client and server handlers.
     * 
     * HiddenRepresents a hidden field for storing data in the user's browser that can be passed back to a
     *  handler as a "callback element".
     * 
     * HorizontalPanelA panel that lays all of its widgets out in a single horizontal column.
     * 
     * ImageA widget that displays the image at a given URL.
     * 
     * InlineLabelA widget that contains arbitrary text, not interpreted as HTML.
     * 
     * LabelA widget that contains arbitrary text, not interpreted as HTML.
     * 
     * ListBoxA widget that presents a list of choices to the user, either as a list box or
     *  as a drop-down list.
     * 
     * MenuBarA standard menu bar widget.
     * 
     * MenuItemAn entry in a MenuBar.
     * 
     * MenuItemSeparatorA separator that can be placed in a MenuBar.
     * 
     * PasswordTextBoxA text box that visually masks its input to prevent eavesdropping.
     * 
     * PopupPanelA panel that can "pop up" over other widgets.
     * 
     * PushButtonA normal push button with custom styling.
     * 
     * RadioButtonA mutually-exclusive selection radio button widget.
     * 
     * ResetButtonA standard push-button widget which will automatically reset its enclosing FormPanel if
     *  any.
     * 
     * ScrollPanelA panel that wraps its contents in a scrollable element.
     * 
     * ServerHandlerAn event handler that runs on the server.
     * 
     * SimpleCheckBoxA simple checkbox widget, with no label.
     * 
     * SimplePanelA panel that can contain only one widget.
     * 
     * SimpleRadioButtonA simple radio button widget, with no label.
     * 
     * SplitLayoutPanelA panel that adds user-positioned splitters between each of its child widgets.
     * 
     * StackPanelA panel that stacks its children vertically, displaying only one at a time,
     *  with a header for each child which the user can click to display.
     * 
     * SubmitButtonA standard push-button widget which will automatically submit its enclosing FormPanel if
     *  any.
     * 
     * SuggestBoxA SuggestBox is a text box or text area which displays a
     *  pre-configured set of selections that match the user's input.
     * 
     * TabBarA horizontal bar of folder-style tabs, most commonly used as part of a TabPanel.
     * 
     * TabPanelA panel that represents a tabbed set of pages, each of which contains another
     *  widget.
     * 
     * TextAreaA text box that allows multiple lines of text to be entered.
     * 
     * TextBoxA standard single-line text box.
     * 
     * ToggleButtonA ToggleButton is a stylish stateful button which allows the
     *  user to toggle between up and down states.
     * 
     * TreeA standard hierarchical tree widget.
     * 
     * TreeItemAn item that can be contained within a Tree.
     * 
     * VerticalPanelA panel that lays all of its widgets out in a single vertical column.
     * 
     * WidgetBase interface for UiApp widgets.
     */
    export interface Component {
      getId(): String;
      getType(): String;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * File type constants for the
     *  DocsListDialog.
     */
    export enum FileType { ALL, ALL_DOCS, DRAWINGS, DOCUMENTS, SPREADSHEETS, FOLDERS, RECENTLY_PICKED, PRESENTATIONS, FORMS, PHOTOS, PHOTO_ALBUMS, PDFS }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Horizontal alignment constants to use with setHorizontalAlignment methods in UiApp.
     */
    export enum HorizontalAlignment { LEFT, RIGHT, CENTER, DEFAULT, JUSTIFY, LOCALE_START, LOCALE_END }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Base interface for client and server handlers.
     * Implementing classes
     * 
     * NameBrief description
     * 
     * ClientHandlerAn event handler that runs in the user's browser without needing a call back to the server.
     * 
     * ServerHandlerAn event handler that runs on the server.
     */
    export interface Handler {
      getId(): String;
      getTag(): String;
      getType(): String;
      setId(id: String): Handler;
      setTag(tag: String): Handler;
      validateEmail(widget: Widget): Handler;
      validateInteger(widget: Widget): Handler;
      validateLength(widget: Widget, min: Integer, max: Integer): Handler;
      validateMatches(widget: Widget, pattern: String): Handler;
      validateMatches(widget: Widget, pattern: String, flags: String): Handler;
      validateNotEmail(widget: Widget): Handler;
      validateNotInteger(widget: Widget): Handler;
      validateNotLength(widget: Widget, min: Integer, max: Integer): Handler;
      validateNotMatches(widget: Widget, pattern: String): Handler;
      validateNotMatches(widget: Widget, pattern: String, flags: String): Handler;
      validateNotNumber(widget: Widget): Handler;
      validateNotOptions(widget: Widget, options: String[]): Handler;
      validateNotRange(widget: Widget, min: Number, max: Number): Handler;
      validateNotSum(widgets: Widget[], sum: Integer): Handler;
      validateNumber(widget: Widget): Handler;
      validateOptions(widget: Widget, options: String[]): Handler;
      validateRange(widget: Widget, min: Number, max: Number): Handler;
      validateSum(widgets: Widget[], sum: Integer): Handler;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * A representation of a user interface.
     * 
     *  You can use this to create a new user interface or manipulate an existing one.
     */
    export interface UiInstance {
      add(child: Widget): UiInstance;
      close(): UiInstance;
      createAbsolutePanel(): AbsolutePanel;
      createAnchor(text: String, asHtml: Boolean, href: String): Anchor;
      createAnchor(text: String, href: String): Anchor;
      createButton(): Button;
      createButton(html: String): Button;
      createButton(html: String, clickHandler: Handler): Button;
      createCaptionPanel(): CaptionPanel;
      createCaptionPanel(caption: String): CaptionPanel;
      createCaptionPanel(caption: String, asHtml: Boolean): CaptionPanel;
      createCheckBox(): CheckBox;
      createCheckBox(label: String): CheckBox;
      createCheckBox(label: String, asHtml: Boolean): CheckBox;
      createClientHandler(): ClientHandler;
      createDateBox(): DateBox;
      createDatePicker(): DatePicker;
      createDecoratedStackPanel(): DecoratedStackPanel;
      createDecoratedTabBar(): DecoratedTabBar;
      createDecoratedTabPanel(): DecoratedTabPanel;
      createDecoratorPanel(): DecoratorPanel;
      createDialogBox(): DialogBox;
      createDialogBox(autoHide: Boolean): DialogBox;
      createDialogBox(autoHide: Boolean, modal: Boolean): DialogBox;
      createDocsListDialog(): DocsListDialog;
      createFileUpload(): FileUpload;
      createFlexTable(): FlexTable;
      createFlowPanel(): FlowPanel;
      createFocusPanel(): FocusPanel;
      createFocusPanel(child: Widget): FocusPanel;
      createFormPanel(): FormPanel;
      createGrid(): Grid;
      createGrid(rows: Integer, columns: Integer): Grid;
      createHTML(): HTML;
      createHTML(html: String): HTML;
      createHTML(html: String, wordWrap: Boolean): HTML;
      createHidden(): Hidden;
      createHidden(name: String): Hidden;
      createHidden(name: String, value: String): Hidden;
      createHorizontalPanel(): HorizontalPanel;
      createImage(): Image;
      createImage(url: String): Image;
      createImage(url: String, left: Integer, top: Integer, width: Integer, height: Integer): Image;
      createInlineLabel(): InlineLabel;
      createInlineLabel(text: String): InlineLabel;
      createLabel(): Label;
      createLabel(text: String): Label;
      createLabel(text: String, wordWrap: Boolean): Label;
      createListBox(): ListBox;
      createListBox(isMultipleSelect: Boolean): ListBox;
      createMenuBar(): MenuBar;
      createMenuBar(vertical: Boolean): MenuBar;
      createMenuItem(text: String, asHtml: Boolean, command: Handler): MenuItem;
      createMenuItem(text: String, command: Handler): MenuItem;
      createMenuItemSeparator(): MenuItemSeparator;
      createPasswordTextBox(): PasswordTextBox;
      createPopupPanel(): PopupPanel;
      createPopupPanel(autoHide: Boolean): PopupPanel;
      createPopupPanel(autoHide: Boolean, modal: Boolean): PopupPanel;
      createPushButton(): PushButton;
      createPushButton(upText: String): PushButton;
      createPushButton(upText: String, clickHandler: Handler): PushButton;
      createPushButton(upText: String, downText: String): PushButton;
      createPushButton(upText: String, downText: String, clickHandler: Handler): PushButton;
      createRadioButton(name: String): RadioButton;
      createRadioButton(name: String, label: String): RadioButton;
      createRadioButton(name: String, label: String, asHtml: Boolean): RadioButton;
      createResetButton(): ResetButton;
      createResetButton(html: String): ResetButton;
      createResetButton(html: String, clickHandler: Handler): ResetButton;
      createScrollPanel(): ScrollPanel;
      createScrollPanel(child: Widget): ScrollPanel;
      createServerBlurHandler(): ServerHandler;
      createServerBlurHandler(functionName: String): ServerHandler;
      createServerChangeHandler(): ServerHandler;
      createServerChangeHandler(functionName: String): ServerHandler;
      createServerClickHandler(): ServerHandler;
      createServerClickHandler(functionName: String): ServerHandler;
      createServerCloseHandler(): ServerHandler;
      createServerCloseHandler(functionName: String): ServerHandler;
      createServerCommand(): ServerHandler;
      createServerCommand(functionName: String): ServerHandler;
      createServerErrorHandler(): ServerHandler;
      createServerErrorHandler(functionName: String): ServerHandler;
      createServerFocusHandler(): ServerHandler;
      createServerFocusHandler(functionName: String): ServerHandler;
      createServerHandler(): ServerHandler;
      createServerHandler(functionName: String): ServerHandler;
      createServerInitializeHandler(): ServerHandler;
      createServerInitializeHandler(functionName: String): ServerHandler;
      createServerKeyHandler(): ServerHandler;
      createServerKeyHandler(functionName: String): ServerHandler;
      createServerLoadHandler(): ServerHandler;
      createServerLoadHandler(functionName: String): ServerHandler;
      createServerMouseHandler(): ServerHandler;
      createServerMouseHandler(functionName: String): ServerHandler;
      createServerScrollHandler(): ServerHandler;
      createServerScrollHandler(functionName: String): ServerHandler;
      createServerSelectionHandler(): ServerHandler;
      createServerSelectionHandler(functionName: String): ServerHandler;
      createServerSubmitHandler(): ServerHandler;
      createServerSubmitHandler(functionName: String): ServerHandler;
      createServerValueChangeHandler(): ServerHandler;
      createServerValueChangeHandler(functionName: String): ServerHandler;
      createSimpleCheckBox(): SimpleCheckBox;
      createSimplePanel(): SimplePanel;
      createSimpleRadioButton(name: String): SimpleRadioButton;
      createSplitLayoutPanel(): SplitLayoutPanel;
      createStackPanel(): StackPanel;
      createSubmitButton(): SubmitButton;
      createSubmitButton(html: String): SubmitButton;
      createSuggestBox(): SuggestBox;
      createTabBar(): TabBar;
      createTabPanel(): TabPanel;
      createTextArea(): TextArea;
      createTextBox(): TextBox;
      createToggleButton(): ToggleButton;
      createToggleButton(upText: String): ToggleButton;
      createToggleButton(upText: String, clickHandler: Handler): ToggleButton;
      createToggleButton(upText: String, downText: String): ToggleButton;
      createTree(): Tree;
      createTreeItem(): TreeItem;
      createTreeItem(text: String): TreeItem;
      createTreeItem(child: Widget): TreeItem;
      createVerticalPanel(): VerticalPanel;
      getElementById(id: String): Component;
      getId(): String;
      isStandardsMode(): Boolean;
      loadComponent(componentName: String): Component;
      loadComponent(componentName: String, optAdvancedArgs: Object): Component;
      remove(index: Integer): UiInstance;
      remove(widget: Widget): UiInstance;
      setHeight(height: Integer): UiInstance;
      setStandardsMode(standardsMode: Boolean): UiInstance;
      setStyleAttribute(attribute: String, value: String): UiInstance;
      setTitle(title: String): UiInstance;
      setWidth(width: Integer): UiInstance;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Base interface for UiApp widgets.
     * Implementing classes
     * 
     * NameBrief description
     * 
     * AbsolutePanelAn absolute panel positions all of its children absolutely, allowing them to overlap.
     * 
     * AnchorA widget that represents a simple <a> element.
     * 
     * ButtonA standard push-button widget.
     * 
     * CaptionPanelA panel that wraps its contents in a border with a caption that appears in the upper left
     *  corner of the border.
     * 
     * ChartA Chart object, which can be embedded into documents, UI elements, or used as a static image.
     * 
     * CheckBoxA standard check box widget.
     * 
     * ControlA user interface control object, that drives the data displayed by a DashboardPanel.
     * 
     * DashboardPanelA dashboard is a visual structure that enables the organization and management
     *  of multiple charts that share the same underlying data.
     * 
     * DateBoxA text box that shows a DatePicker when the user focuses on it.
     * 
     * DatePickerA date picker widget.
     * 
     * DecoratedStackPanelA StackPanel that wraps each item in a 2x3 grid (six box), which allows users to add
     *  rounded corners.
     * 
     * DecoratedTabBarA TabBar that wraps each tab in a 2x3 grid (six box), which allows users to add rounded corners.
     * 
     * DecoratedTabPanelA TabPanel that uses a DecoratedTabBar with rounded corners.
     * 
     * DecoratorPanelA SimplePanel that wraps its contents in stylized boxes, which can be used to add rounded
     *  corners to a Widget.
     * 
     * DialogBoxA form of popup that has a caption area at the top and can be dragged by the
     *  user.
     * 
     * EmbeddedChartRepresents a chart that has been embedded into a Spreadsheet.
     * 
     * FileUploadA widget that wraps the HTML <input type='file'> element.
     * 
     * FlexTableA flexible table that creates cells on demand.
     * 
     * FlowPanelA panel that formats its child widgets using the default HTML layout behavior.
     * 
     * FocusPanelA simple panel that makes its contents focusable, and adds the ability to catch mouse and
     *  keyboard events.
     * 
     * FormPanelA panel that wraps its contents in an HTML <FORM> element.
     * 
     * GridA rectangular grid that can contain text, html, or a child widget within its cells.
     * 
     * HTMLA widget that contains arbitrary text, which is interpreted as HTML.
     * 
     * HiddenRepresents a hidden field for storing data in the user's browser that can be passed back to a
     *  handler as a "callback element".
     * 
     * HorizontalPanelA panel that lays all of its widgets out in a single horizontal column.
     * 
     * ImageA widget that displays the image at a given URL.
     * 
     * InlineLabelA widget that contains arbitrary text, not interpreted as HTML.
     * 
     * LabelA widget that contains arbitrary text, not interpreted as HTML.
     * 
     * ListBoxA widget that presents a list of choices to the user, either as a list box or
     *  as a drop-down list.
     * 
     * MenuBarA standard menu bar widget.
     * 
     * PasswordTextBoxA text box that visually masks its input to prevent eavesdropping.
     * 
     * PopupPanelA panel that can "pop up" over other widgets.
     * 
     * PushButtonA normal push button with custom styling.
     * 
     * RadioButtonA mutually-exclusive selection radio button widget.
     * 
     * ResetButtonA standard push-button widget which will automatically reset its enclosing FormPanel if
     *  any.
     * 
     * ScrollPanelA panel that wraps its contents in a scrollable element.
     * 
     * SimpleCheckBoxA simple checkbox widget, with no label.
     * 
     * SimplePanelA panel that can contain only one widget.
     * 
     * SimpleRadioButtonA simple radio button widget, with no label.
     * 
     * SplitLayoutPanelA panel that adds user-positioned splitters between each of its child widgets.
     * 
     * StackPanelA panel that stacks its children vertically, displaying only one at a time,
     *  with a header for each child which the user can click to display.
     * 
     * SubmitButtonA standard push-button widget which will automatically submit its enclosing FormPanel if
     *  any.
     * 
     * SuggestBoxA SuggestBox is a text box or text area which displays a
     *  pre-configured set of selections that match the user's input.
     * 
     * TabBarA horizontal bar of folder-style tabs, most commonly used as part of a TabPanel.
     * 
     * TabPanelA panel that represents a tabbed set of pages, each of which contains another
     *  widget.
     * 
     * TextAreaA text box that allows multiple lines of text to be entered.
     * 
     * TextBoxA standard single-line text box.
     * 
     * ToggleButtonA ToggleButton is a stylish stateful button which allows the
     *  user to toggle between up and down states.
     * 
     * TreeA standard hierarchical tree widget.
     * 
     * VerticalPanelA panel that lays all of its widgets out in a single vertical column.
     */
    export interface Widget {
      getId(): String;
      getType(): String;
    }

    /**
     * 
     * Deprecated. The UI service was
     *      
     *      deprecated on December 11, 2014. To create user interfaces, use the
     *      HTML service instead.
     * Vertical alignment constants to use with setVerticalAlignment methods in UiApp.
     */
    export enum VerticalAlignment { TOP, MIDDLE, BOTTOM }

  }
}

declare var UiApp: GoogleAppsScript.UI.UiApp;