/// <reference path="googleappsscript.types.d.ts" />
/// <reference path="googleappsscript.base.d.ts" />
/// <reference path="googleappsscript.drive.d.ts" />
/// <reference path="googleappsscript.charts.d.ts" />

declare module GoogleAppsScript {
  export module Spreadsheet {
    /**
     * This class allows users to open Google Sheets files and to create new ones. This class is
     *  the parent class for the Spreadsheet service.
     */
    export interface SpreadsheetApp {
      DataValidationCriteria: DataValidationCriteria
      ProtectionType: ProtectionType
      create(name: String): Spreadsheet;
      create(name: String, rows: Integer, columns: Integer): Spreadsheet;
      flush(): void;
      getActive(): Spreadsheet;
      getActiveRange(): Range;
      getActiveSheet(): Sheet;
      getActiveSpreadsheet(): Spreadsheet;
      getUi(): Base.Ui;
      newDataValidation(): DataValidationBuilder;
      open(file: Drive.File): Spreadsheet;
      openById(id: String): Spreadsheet;
      openByUrl(url: String): Spreadsheet;
      setActiveRange(range: Range): Range;
      setActiveSheet(sheet: Sheet): Sheet;
      setActiveSpreadsheet(newActiveSpreadsheet: Spreadsheet): void;
    }

    /**
     * The chart's position within a sheet.  Can be updated using the EmbeddedChart.modify()
     *  function.
     * 
     *      chart = chart.modify().setPosition(5, 5, 0, 0).build();
     *      sheet.updateChart(chart);
     */
    export interface ContainerInfo {
      getAnchorColumn(): Integer;
      getAnchorRow(): Integer;
      getOffsetX(): Integer;
      getOffsetY(): Integer;
    }

    /**
     * This class allows users to access existing data-validation rules. To create a new rule, see
     *  SpreadsheetApp.newDataValidation(), DataValidationBuilder, and
     *  Range.setDataValidation(rule).
     * 
     *      // Log information about the data-validation rule for cell A1.
     *      var cell = SpreadsheetApp.getActive().getRange('A1');
     *      var rule = cell.getDataValidation();
     *      if (rule != null) {
     *        var criteria = rule.getCriteriaType();
     *        var args = rule.getCriteriaValues();
     *        Logger.log('The data-validation rule is %s %s', criteria, args);
     *      } else {
     *        Logger.log('The cell does not have a data-validation rule.')
     *      }
     */
    export interface DataValidation {
      copy(): DataValidationBuilder;
      getAllowInvalid(): Boolean;
      getCriteriaType(): DataValidationCriteria;
      getCriteriaValues(): Object[];
      getHelpText(): String;
    }

    /**
     * Builder for bar charts. For more details, see the Gviz 
     *  documentation.
     */
    export interface EmbeddedBarChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedBarChartBuilder;
      reverseDirection(): EmbeddedBarChartBuilder;
      setBackgroundColor(cssValue: String): EmbeddedBarChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedBarChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedBarChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setOption(option: String, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedBarChartBuilder;
      setStacked(): EmbeddedBarChartBuilder;
      setTitle(chartTitle: String): EmbeddedBarChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setXAxisTitle(title: String): EmbeddedBarChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      setYAxisTitle(title: String): EmbeddedBarChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedBarChartBuilder;
      useLogScale(): EmbeddedBarChartBuilder;
    }

    /**
     * Builder for data-validation rules.
     * 
     *      // Set the data validation for cell A1 to require a value from B1:B10.
     *      var cell = SpreadsheetApp.getActive().getRange('A1');
     *      var range = SpreadsheetApp.getActive().getRange('B1:B10');
     *      var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
     *      cell.setDataValidation(rule);
     */
    export interface DataValidationBuilder {
      build(): DataValidation;
      copy(): DataValidationBuilder;
      getAllowInvalid(): Boolean;
      getCriteriaType(): DataValidationCriteria;
      getCriteriaValues(): Object[];
      getHelpText(): String;
      requireDate(): DataValidationBuilder;
      requireDateAfter(date: Date): DataValidationBuilder;
      requireDateBefore(date: Date): DataValidationBuilder;
      requireDateBetween(start: Date, end: Date): DataValidationBuilder;
      requireDateEqualTo(date: Date): DataValidationBuilder;
      requireDateNotBetween(start: Date, end: Date): DataValidationBuilder;
      requireDateOnOrAfter(date: Date): DataValidationBuilder;
      requireDateOnOrBefore(date: Date): DataValidationBuilder;
      requireFormulaSatisfied(formula: String): DataValidationBuilder;
      requireNumberBetween(start: Number, end: Number): DataValidationBuilder;
      requireNumberEqualTo(number: Number): DataValidationBuilder;
      requireNumberGreaterThan(number: Number): DataValidationBuilder;
      requireNumberGreaterThanOrEqualTo(number: Number): DataValidationBuilder;
      requireNumberLessThan(number: Number): DataValidationBuilder;
      requireNumberLessThanOrEqualTo(number: Number): DataValidationBuilder;
      requireNumberNotBetween(start: Number, end: Number): DataValidationBuilder;
      requireNumberNotEqualTo(number: Number): DataValidationBuilder;
      requireTextContains(text: String): DataValidationBuilder;
      requireTextDoesNotContain(text: String): DataValidationBuilder;
      requireTextEqualTo(text: String): DataValidationBuilder;
      requireTextIsEmail(): DataValidationBuilder;
      requireTextIsUrl(): DataValidationBuilder;
      requireValueInList(values: String[]): DataValidationBuilder;
      requireValueInList(values: String[], showDropdown: Boolean): DataValidationBuilder;
      requireValueInRange(range: Range): DataValidationBuilder;
      requireValueInRange(range: Range, showDropdown: Boolean): DataValidationBuilder;
      setAllowInvalid(allowInvalidData: Boolean): DataValidationBuilder;
      setHelpText(helpText: String): DataValidationBuilder;
      withCriteria(criteria: DataValidationCriteria, args: Object[]): DataValidationBuilder;
    }

    /**
     * Represents a chart that has been embedded into a Spreadsheet.
     * 
     * This example shows how to modify an existing chart:
     * 
     *      var sheet = SpreadsheetApp.getActiveSheet();
     *      var range = sheet.getRange("A2:B8")
     *      var chart = sheet.getCharts()[0];
     *      chart = chart.modify()
     *          .addRange(range)
     *          .setOption('title', 'Updated!')
     *          .setOption('animation.duration', 500)
     *          .setPosition(2,2,0,0)
     *          .build();
     *      sheet.updateChart(chart);
     * 
     * This example shows how to create a new chart:
     * 
     *      function newChart(range, sheet) {
     *        var sheet = SpreadsheetApp.getActiveSheet();
     *        var chartBuilder = sheet.newChart();
     *        chartBuilder.addRange(range)
     *            .setChartType(Charts.ChartType.LINE)
     *            .setOption('title', 'My Line Chart!');
     *        sheet.insertChart(chartBuilder.build());
     *      }
     */
    export interface EmbeddedChart {
      getAs(contentType: String): Base.Blob;
      getBlob(): Base.Blob;
      getContainerInfo(): ContainerInfo;
      getId(): String;
      getOptions(): Charts.ChartOptions;
      getRanges(): Range[];
      getType(): String;
      modify(): EmbeddedChartBuilder;
      setId(id: String): Charts.Chart;
    }

    /**
     * Builder for area charts. For more details, see the Gviz 
     *  documentation.
     */
    export interface EmbeddedAreaChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedAreaChartBuilder;
      setBackgroundColor(cssValue: String): EmbeddedAreaChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedAreaChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedAreaChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setOption(option: String, value: Object): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedAreaChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedAreaChartBuilder;
      setStacked(): EmbeddedAreaChartBuilder;
      setTitle(chartTitle: String): EmbeddedAreaChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setXAxisTitle(title: String): EmbeddedAreaChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      setYAxisTitle(title: String): EmbeddedAreaChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedAreaChartBuilder;
      useLogScale(): EmbeddedAreaChartBuilder;
    }

    /**
     * Builder for pie charts. For more details, see the Gviz 
     *  documentation.
     */
    export interface EmbeddedPieChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedPieChartBuilder;
      set3D(): EmbeddedPieChartBuilder;
      setBackgroundColor(cssValue: String): EmbeddedPieChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedPieChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedPieChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;
      setOption(option: String, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTitle(chartTitle: String): EmbeddedPieChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedPieChartBuilder;
    }

    /**
     * This builder allows you to edit an EmbeddedChart. Make sure to call
     *  sheet.updateChart(builder.build()) to save your changes.
     * 
     *      var sheet = SpreadsheetApp.getActiveSheet();
     *      var range = sheet.getRange("A1:B8");
     *      var chart = sheet.getCharts()[0];
     *      chart = chart.modify()
     *          .addRange(range)
     *          .setOption('title', 'Updated!')
     *          .setOption('animation.duration', 500)
     *          .setPosition(2,2,0,0)
     *          .build();
     *      sheet.updateChart(chart);
     */
    export interface EmbeddedChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setOption(option: String, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
    }

    /**
     * Builder for column charts. For more details, see the Gviz 
     *  documentation.
     */
    export interface EmbeddedColumnChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedColumnChartBuilder;
      setBackgroundColor(cssValue: String): EmbeddedColumnChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedColumnChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedColumnChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setOption(option: String, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedColumnChartBuilder;
      setStacked(): EmbeddedColumnChartBuilder;
      setTitle(chartTitle: String): EmbeddedColumnChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setXAxisTitle(title: String): EmbeddedColumnChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      setYAxisTitle(title: String): EmbeddedColumnChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedColumnChartBuilder;
      useLogScale(): EmbeddedColumnChartBuilder;
    }

    /**
     * Builder for line charts. For more details, see the Gviz 
     *  documentation.
     */
    export interface EmbeddedLineChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      reverseCategories(): EmbeddedLineChartBuilder;
      setBackgroundColor(cssValue: String): EmbeddedLineChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedLineChartBuilder;
      setCurveStyle(style: Charts.CurveStyle): EmbeddedLineChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedLineChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setOption(option: String, value: Object): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedLineChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setRange(start: Number, end: Number): EmbeddedLineChartBuilder;
      setTitle(chartTitle: String): EmbeddedLineChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setXAxisTitle(title: String): EmbeddedLineChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      setYAxisTitle(title: String): EmbeddedLineChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedLineChartBuilder;
      useLogScale(): EmbeddedLineChartBuilder;
    }

    /**
     * 
     * Deprecated. For spreadsheets created in the newer version of Google Sheets, use the more powerful
     *      Protection class instead. Although this class is deprecated, it will remain
     *      available for compatibility with the older version of Sheets.
     * Access and modify protected sheets in the older version of Google Sheets.
     */
    export interface PageProtection {
      addUser(email: String): void;
      getUsers(): String[];
      isProtected(): Boolean;
      removeUser(user: String): void;
      setProtected(protection: Boolean): void;
    }

    /**
     * Access and modify spreadsheet sheets. Common operations
     *  are renaming a sheet and accessing range objects from the sheet.
     */
    export interface Sheet {
      activate(): Sheet;
      appendRow(rowContents: Object[]): Sheet;
      autoResizeColumn(columnPosition: Integer): Sheet;
      clear(): Sheet;
      clear(options: Object): Sheet;
      clearContents(): Sheet;
      clearFormats(): Sheet;
      clearNotes(): Sheet;
      copyTo(spreadsheet: Spreadsheet): Sheet;
      deleteColumn(columnPosition: Integer): Sheet;
      deleteColumns(columnPosition: Integer, howMany: Integer): void;
      deleteRow(rowPosition: Integer): Sheet;
      deleteRows(rowPosition: Integer, howMany: Integer): void;
      getActiveCell(): Range;
      getActiveRange(): Range;
      getCharts(): EmbeddedChart[];
      getColumnWidth(columnPosition: Integer): Integer;
      getDataRange(): Range;
      getFrozenColumns(): Integer;
      getFrozenRows(): Integer;
      getIndex(): Integer;
      getLastColumn(): Integer;
      getLastRow(): Integer;
      getMaxColumns(): Integer;
      getMaxRows(): Integer;
      getName(): String;
      getParent(): Spreadsheet;
      getProtections(type: ProtectionType): Protection[];
      getRange(row: Integer, column: Integer): Range;
      getRange(row: Integer, column: Integer, numRows: Integer): Range;
      getRange(row: Integer, column: Integer, numRows: Integer, numColumns: Integer): Range;
      getRange(a1Notation: String): Range;
      getRowHeight(rowPosition: Integer): Integer;
      getSheetId(): Integer;
      getSheetName(): String;
      getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): Object[][];
      hideColumn(column: Range): void;
      hideColumns(columnIndex: Integer): void;
      hideColumns(columnIndex: Integer, numColumns: Integer): void;
      hideRow(row: Range): void;
      hideRows(rowIndex: Integer): void;
      hideRows(rowIndex: Integer, numRows: Integer): void;
      hideSheet(): Sheet;
      insertChart(chart: EmbeddedChart): void;
      insertColumnAfter(afterPosition: Integer): Sheet;
      insertColumnBefore(beforePosition: Integer): Sheet;
      insertColumns(columnIndex: Integer): void;
      insertColumns(columnIndex: Integer, numColumns: Integer): void;
      insertColumnsAfter(afterPosition: Integer, howMany: Integer): Sheet;
      insertColumnsBefore(beforePosition: Integer, howMany: Integer): Sheet;
      insertImage(blob: Base.Blob, column: Integer, row: Integer): void;
      insertImage(blob: Base.Blob, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): void;
      insertImage(url: String, column: Integer, row: Integer): void;
      insertImage(url: String, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): void;
      insertRowAfter(afterPosition: Integer): Sheet;
      insertRowBefore(beforePosition: Integer): Sheet;
      insertRows(rowIndex: Integer): void;
      insertRows(rowIndex: Integer, numRows: Integer): void;
      insertRowsAfter(afterPosition: Integer, howMany: Integer): Sheet;
      insertRowsBefore(beforePosition: Integer, howMany: Integer): Sheet;
      isSheetHidden(): Boolean;
      newChart(): EmbeddedChartBuilder;
      protect(): Protection;
      removeChart(chart: EmbeddedChart): void;
      setActiveRange(range: Range): Range;
      setActiveSelection(range: Range): Range;
      setActiveSelection(a1Notation: String): Range;
      setColumnWidth(columnPosition: Integer, width: Integer): Sheet;
      setFrozenColumns(columns: Integer): void;
      setFrozenRows(rows: Integer): void;
      setName(name: String): Sheet;
      setRowHeight(rowPosition: Integer, height: Integer): Sheet;
      showColumns(columnIndex: Integer): void;
      showColumns(columnIndex: Integer, numColumns: Integer): void;
      showRows(rowIndex: Integer): void;
      showRows(rowIndex: Integer, numRows: Integer): void;
      showSheet(): Sheet;
      sort(columnPosition: Integer): Sheet;
      sort(columnPosition: Integer, ascending: Boolean): Sheet;
      unhideColumn(column: Range): void;
      unhideRow(row: Range): void;
      updateChart(chart: EmbeddedChart): void;
      getSheetProtection(): PageProtection;
      setSheetProtection(permissions: PageProtection): void;
    }

    /**
     * Builder for table charts. For more details, see the Gviz 
     *  documentation.
     */
    export interface EmbeddedTableChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      enablePaging(enablePaging: Boolean): EmbeddedTableChartBuilder;
      enablePaging(pageSize: Integer): EmbeddedTableChartBuilder;
      enablePaging(pageSize: Integer, startPage: Integer): EmbeddedTableChartBuilder;
      enableRtlTable(rtlEnabled: Boolean): EmbeddedTableChartBuilder;
      enableSorting(enableSorting: Boolean): EmbeddedTableChartBuilder;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setFirstRowNumber(number: Integer): EmbeddedTableChartBuilder;
      setInitialSortingAscending(column: Integer): EmbeddedTableChartBuilder;
      setInitialSortingDescending(column: Integer): EmbeddedTableChartBuilder;
      setOption(option: String, value: Object): EmbeddedChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      showRowNumberColumn(showRowNumber: Boolean): EmbeddedTableChartBuilder;
      useAlternatingRowStyle(alternate: Boolean): EmbeddedTableChartBuilder;
    }

    /**
     * An enumeration representing the data-validation criteria that can be set on a range.
     * 
     *      // Change existing data-validation rules that require a date in 2013 to require a date in 2014.
     *      var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
     *      var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
     *      var sheet = SpreadsheetApp.getActiveSheet();
     *      var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
     *      var rules = range.getDataValidations();
     *     
     *      for (var i = 0; i < rules.length; i++) {
     *        for (var j = 0; j < rules[i].length; j++) {
     *          var rule = rules[i][j];
     *     
     *          if (rule != null) {
     *            var criteria = rule.getCriteriaType();
     *            var args = rule.getCriteriaValues();
     *      
     *            if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
     *                && args[0].getTime() == oldDates[0].getTime()
     *                && args[1].getTime() == oldDates[1].getTime()) {
     *              // Create a builder from the existing rule, then change the dates.
     *              rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
     *            }
     *          }
     *        }
     *      }
     *      range.setDataValidations(rules);
     */
    export enum DataValidationCriteria { DATE_AFTER, DATE_BEFORE, DATE_BETWEEN, DATE_EQUAL_TO, DATE_IS_VALID_DATE, DATE_NOT_BETWEEN, DATE_ON_OR_AFTER, DATE_ON_OR_BEFORE, NUMBER_BETWEEN, NUMBER_EQUAL_TO, NUMBER_GREATER_THAN, NUMBER_GREATER_THAN_OR_EQUAL_TO, NUMBER_LESS_THAN, NUMBER_LESS_THAN_OR_EQUAL_TO, NUMBER_NOT_BETWEEN, NUMBER_NOT_EQUAL_TO, TEXT_CONTAINS, TEXT_DOES_NOT_CONTAIN, TEXT_EQUAL_TO, TEXT_IS_VALID_EMAIL, TEXT_IS_VALID_URL, VALUE_IN_LIST, VALUE_IN_RANGE, CUSTOM_FORMULA }

    /**
     * Access and modify protected ranges and sheets. A protected range can protect either a static
     *  range of cells or a named range. A protected sheet may include unprotected regions. For
     *  spreadsheets created with the older version of Google Sheets, use the PageProtection
     *  class instead.
     * 
     *      // Protect range A1:B10, then remove all other users from the list of editors.
     *      var ss = SpreadsheetApp.getActive();
     *      var range = ss.getRange('A1:B10');
     *      var protection = range.protect().setDescription('Sample protected range');
     *     
     *      // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
     *      // permission comes from a group, the script will throw an exception upon removing the group.
     *      var me = Session.getEffectiveUser();
     *      protection.addEditor(me);
     *      protection.removeEditors(protection.getEditors());
     *      if (protection.canDomainEdit()) {
     *        protection.setDomainEdit(false);
     *      }
     * 
     *      // Remove all range protections in the spreadsheet that the user has permission to edit.
     *      var ss = SpreadsheetApp.getActive();
     *      var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
     *      for (var i = 0; i < protections.length; i++) {
     *        var protection = protections[i];
     *        if (protection.canEdit()) {
     *          protection.remove();
     *        }
     *      }
     * 
     *      // Protect the active sheet, then remove all other users from the list of editors.
     *      var sheet = SpreadsheetApp.getActiveSheet();
     *      var protection = sheet.protect().setDescription('Sample protected sheet');
     *     
     *      // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
     *      // permission comes from a group, the script will throw an exception upon removing the group.
     *      var me = Session.getEffectiveUser();
     *      protection.addEditor(me);
     *      protection.removeEditors(protection.getEditors());
     *      if (protection.canDomainEdit()) {
     *        protection.setDomainEdit(false);
     *      }
     */
    export interface Protection {
      addEditor(emailAddress: String): Protection;
      addEditor(user: Base.User): Protection;
      addEditors(emailAddresses: String[]): Protection;
      canDomainEdit(): Boolean;
      canEdit(): Boolean;
      getDescription(): String;
      getEditors(): Base.User[];
      getProtectionType(): ProtectionType;
      getRange(): Range;
      getRangeName(): String;
      getUnprotectedRanges(): Range[];
      remove(): void;
      removeEditor(emailAddress: String): Protection;
      removeEditor(user: Base.User): Protection;
      removeEditors(emailAddresses: String[]): Protection;
      setDescription(description: String): Protection;
      setDomainEdit(editable: Boolean): Protection;
      setRange(range: Range): Protection;
      setRangeName(rangeName: String): Protection;
      setUnprotectedRanges(ranges: Range[]): Protection;
    }

    /**
     * Builder for scatter charts. For more details, see the Gviz 
     *  documentation.
     */
    export interface EmbeddedScatterChartBuilder {
      addRange(range: Range): EmbeddedChartBuilder;
      asAreaChart(): EmbeddedAreaChartBuilder;
      asBarChart(): EmbeddedBarChartBuilder;
      asColumnChart(): EmbeddedColumnChartBuilder;
      asLineChart(): EmbeddedLineChartBuilder;
      asPieChart(): EmbeddedPieChartBuilder;
      asScatterChart(): EmbeddedScatterChartBuilder;
      asTableChart(): EmbeddedTableChartBuilder;
      build(): EmbeddedChart;
      getChartType(): Charts.ChartType;
      getContainer(): ContainerInfo;
      getRanges(): Range[];
      removeRange(range: Range): EmbeddedChartBuilder;
      setBackgroundColor(cssValue: String): EmbeddedScatterChartBuilder;
      setChartType(type: Charts.ChartType): EmbeddedChartBuilder;
      setColors(cssValues: String[]): EmbeddedScatterChartBuilder;
      setLegendPosition(position: Charts.Position): EmbeddedScatterChartBuilder;
      setLegendTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setOption(option: String, value: Object): EmbeddedChartBuilder;
      setPointStyle(style: Charts.PointStyle): EmbeddedScatterChartBuilder;
      setPosition(anchorRowPos: Integer, anchorColPos: Integer, offsetX: Integer, offsetY: Integer): EmbeddedChartBuilder;
      setTitle(chartTitle: String): EmbeddedScatterChartBuilder;
      setTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setXAxisLogScale(): EmbeddedScatterChartBuilder;
      setXAxisRange(start: Number, end: Number): EmbeddedScatterChartBuilder;
      setXAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setXAxisTitle(title: String): EmbeddedScatterChartBuilder;
      setXAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setYAxisLogScale(): EmbeddedScatterChartBuilder;
      setYAxisRange(start: Number, end: Number): EmbeddedScatterChartBuilder;
      setYAxisTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
      setYAxisTitle(title: String): EmbeddedScatterChartBuilder;
      setYAxisTitleTextStyle(textStyle: Charts.TextStyle): EmbeddedScatterChartBuilder;
    }

    /**
     * This class allows users to access and modify Google Sheets files. Common operations are adding
     *  new sheets and adding collaborators.
     */
    export interface Spreadsheet {
      addEditor(emailAddress: String): Spreadsheet;
      addEditor(user: Base.User): Spreadsheet;
      addEditors(emailAddresses: String[]): Spreadsheet;
      addMenu(name: String, subMenus: Object[]): void;
      addViewer(emailAddress: String): Spreadsheet;
      addViewer(user: Base.User): Spreadsheet;
      addViewers(emailAddresses: String[]): Spreadsheet;
      appendRow(rowContents: Object[]): Sheet;
      autoResizeColumn(columnPosition: Integer): Sheet;
      copy(name: String): Spreadsheet;
      deleteActiveSheet(): Sheet;
      deleteColumn(columnPosition: Integer): Sheet;
      deleteColumns(columnPosition: Integer, howMany: Integer): void;
      deleteRow(rowPosition: Integer): Sheet;
      deleteRows(rowPosition: Integer, howMany: Integer): void;
      deleteSheet(sheet: Sheet): void;
      duplicateActiveSheet(): Sheet;
      getActiveCell(): Range;
      getActiveRange(): Range;
      getActiveSheet(): Sheet;
      getAs(contentType: String): Base.Blob;
      getBlob(): Base.Blob;
      getColumnWidth(columnPosition: Integer): Integer;
      getDataRange(): Range;
      getEditors(): Base.User[];
      getFormUrl(): String;
      getFrozenColumns(): Integer;
      getFrozenRows(): Integer;
      getId(): String;
      getLastColumn(): Integer;
      getLastRow(): Integer;
      getName(): String;
      getNumSheets(): Integer;
      getOwner(): Base.User;
      getProtections(type: ProtectionType): Protection[];
      getRange(a1Notation: String): Range;
      getRangeByName(name: String): Range;
      getRowHeight(rowPosition: Integer): Integer;
      getSheetByName(name: String): Sheet;
      getSheetId(): Integer;
      getSheetName(): String;
      getSheetValues(startRow: Integer, startColumn: Integer, numRows: Integer, numColumns: Integer): Object[][];
      getSheets(): Sheet[];
      getSpreadsheetLocale(): String;
      getSpreadsheetTimeZone(): String;
      getUrl(): String;
      getViewers(): Base.User[];
      hideColumn(column: Range): void;
      hideRow(row: Range): void;
      insertColumnAfter(afterPosition: Integer): Sheet;
      insertColumnBefore(beforePosition: Integer): Sheet;
      insertColumnsAfter(afterPosition: Integer, howMany: Integer): Sheet;
      insertColumnsBefore(beforePosition: Integer, howMany: Integer): Sheet;
      insertImage(blob: Base.Blob, column: Integer, row: Integer): void;
      insertImage(blob: Base.Blob, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): void;
      insertImage(url: String, column: Integer, row: Integer): void;
      insertImage(url: String, column: Integer, row: Integer, offsetX: Integer, offsetY: Integer): void;
      insertRowAfter(afterPosition: Integer): Sheet;
      insertRowBefore(beforePosition: Integer): Sheet;
      insertRowsAfter(afterPosition: Integer, howMany: Integer): Sheet;
      insertRowsBefore(beforePosition: Integer, howMany: Integer): Sheet;
      insertSheet(): Sheet;
      insertSheet(sheetIndex: Integer): Sheet;
      insertSheet(sheetIndex: Integer, options: Object): Sheet;
      insertSheet(options: Object): Sheet;
      insertSheet(sheetName: String): Sheet;
      insertSheet(sheetName: String, sheetIndex: Integer): Sheet;
      insertSheet(sheetName: String, sheetIndex: Integer, options: Object): Sheet;
      insertSheet(sheetName: String, options: Object): Sheet;
      moveActiveSheet(pos: Integer): void;
      removeEditor(emailAddress: String): Spreadsheet;
      removeEditor(user: Base.User): Spreadsheet;
      removeMenu(name: String): void;
      removeNamedRange(name: String): void;
      removeViewer(emailAddress: String): Spreadsheet;
      removeViewer(user: Base.User): Spreadsheet;
      rename(newName: String): void;
      renameActiveSheet(newName: String): void;
      setActiveRange(range: Range): Range;
      setActiveSelection(range: Range): Range;
      setActiveSelection(a1Notation: String): Range;
      setActiveSheet(sheet: Sheet): Sheet;
      setColumnWidth(columnPosition: Integer, width: Integer): Sheet;
      setFrozenColumns(columns: Integer): void;
      setFrozenRows(rows: Integer): void;
      setNamedRange(name: String, range: Range): void;
      setRowHeight(rowPosition: Integer, height: Integer): Sheet;
      setSpreadsheetLocale(locale: String): void;
      setSpreadsheetTimeZone(timezone: String): void;
      show(userInterface: Object): void;
      sort(columnPosition: Integer): Sheet;
      sort(columnPosition: Integer, ascending: Boolean): Sheet;
      toast(msg: String): void;
      toast(msg: String, title: String): void;
      toast(msg: String, title: String, timeoutSeconds: Number): void;
      unhideColumn(column: Range): void;
      unhideRow(row: Range): void;
      updateMenu(name: String, subMenus: Object[]): void;
      getSheetProtection(): PageProtection;
      isAnonymousView(): Boolean;
      isAnonymousWrite(): Boolean;
      setAnonymousAccess(anonymousReadAllowed: Boolean, anonymousWriteAllowed: Boolean): void;
      setSheetProtection(permissions: PageProtection): void;
    }

    /**
     * Access and modify spreadsheet ranges.
     * 
     *  This class allows users to access and modify ranges in Google Sheets. A range can be
     *  a single cell in a sheet or a range of cells in a sheet.
     */
    export interface Range {
      activate(): Range;
      breakApart(): Range;
      canEdit(): Boolean;
      clear(): Range;
      clear(options: Object): Range;
      clearContent(): Range;
      clearDataValidations(): Range;
      clearFormat(): Range;
      clearNote(): Range;
      copyFormatToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyFormatToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyTo(destination: Range): void;
      copyTo(destination: Range, options: Object): void;
      copyValuesToRange(gridId: Integer, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      copyValuesToRange(sheet: Sheet, column: Integer, columnEnd: Integer, row: Integer, rowEnd: Integer): void;
      getA1Notation(): String;
      getBackground(): String;
      getBackgrounds(): String[][];
      getCell(row: Integer, column: Integer): Range;
      getColumn(): Integer;
      getDataSourceUrl(): String;
      getDataTable(): Charts.DataTable;
      getDataTable(firstRowIsHeader: Boolean): Charts.DataTable;
      getDataValidation(): DataValidation;
      getDataValidations(): DataValidation[][];
      getFontColor(): String;
      getFontColors(): String[][];
      getFontFamilies(): String[][];
      getFontFamily(): String;
      getFontLine(): String;
      getFontLines(): String[][];
      getFontSize(): Integer;
      getFontSizes(): Integer[][];
      getFontStyle(): String;
      getFontStyles(): String[][];
      getFontWeight(): String;
      getFontWeights(): String[][];
      getFormula(): String;
      getFormulaR1C1(): String;
      getFormulas(): String[][];
      getFormulasR1C1(): String[][];
      getGridId(): Integer;
      getHeight(): Integer;
      getHorizontalAlignment(): String;
      getHorizontalAlignments(): String[][];
      getLastColumn(): Integer;
      getLastRow(): Integer;
      getNote(): String;
      getNotes(): String[][];
      getNumColumns(): Integer;
      getNumRows(): Integer;
      getNumberFormat(): String;
      getNumberFormats(): String[][];
      getRow(): Integer;
      getRowIndex(): Integer;
      getSheet(): Sheet;
      getValue(): Object;
      getValues(): Object[][];
      getVerticalAlignment(): String;
      getVerticalAlignments(): String[][];
      getWidth(): Integer;
      getWrap(): Boolean;
      getWraps(): Boolean[][];
      isBlank(): Boolean;
      isEndColumnBounded(): Boolean;
      isEndRowBounded(): Boolean;
      isStartColumnBounded(): Boolean;
      isStartRowBounded(): Boolean;
      merge(): Range;
      mergeAcross(): Range;
      mergeVertically(): Range;
      moveTo(target: Range): void;
      offset(rowOffset: Integer, columnOffset: Integer): Range;
      offset(rowOffset: Integer, columnOffset: Integer, numRows: Integer): Range;
      offset(rowOffset: Integer, columnOffset: Integer, numRows: Integer, numColumns: Integer): Range;
      protect(): Protection;
      setBackground(color: String): Range;
      setBackgroundRGB(red: Integer, green: Integer, blue: Integer): Range;
      setBackgrounds(color: String[][]): Range;
      setBorder(top: Boolean, left: Boolean, bottom: Boolean, right: Boolean, vertical: Boolean, horizontal: Boolean): Range;
      setDataValidation(rule: DataValidation): Range;
      setDataValidations(rules: DataValidation[][]): Range;
      setFontColor(color: String): Range;
      setFontColors(colors: Object[][]): Range;
      setFontFamilies(fontFamilies: Object[][]): Range;
      setFontFamily(fontFamily: String): Range;
      setFontLine(fontLine: String): Range;
      setFontLines(fontLines: Object[][]): Range;
      setFontSize(size: Integer): Range;
      setFontSizes(sizes: Object[][]): Range;
      setFontStyle(fontStyle: String): Range;
      setFontStyles(fontStyles: Object[][]): Range;
      setFontWeight(fontWeight: String): Range;
      setFontWeights(fontWeights: Object[][]): Range;
      setFormula(formula: String): Range;
      setFormulaR1C1(formula: String): Range;
      setFormulas(formulas: String[][]): Range;
      setFormulasR1C1(formulas: String[][]): Range;
      setHorizontalAlignment(alignment: String): Range;
      setHorizontalAlignments(alignments: Object[][]): Range;
      setNote(note: String): Range;
      setNotes(notes: Object[][]): Range;
      setNumberFormat(numberFormat: String): Range;
      setNumberFormats(numberFormats: Object[][]): Range;
      setValue(value: Object): Range;
      setValues(values: Object[][]): Range;
      setVerticalAlignment(alignment: String): Range;
      setVerticalAlignments(alignments: Object[][]): Range;
      setWrap(isWrapEnabled: Boolean): Range;
      setWraps(isWrapEnabled: Object[][]): Range;
      sort(sortSpecObj: Object): Range;
    }

    /**
     * An enumeration representing the parts of a spreadsheet that can be protected from edits.
     * 
     *      // Remove all range protections in the spreadsheet that the user has permission to edit.
     *      var ss = SpreadsheetApp.getActive();
     *      var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
     *      for (var i = 0; i < protections.length; i++) {
     *        var protection = protections[i];
     *        if (protection.canEdit()) {
     *          protection.remove();
     *        }
     *      }
     * 
     *      // Removes sheet protection from the active sheet, if the user has permission to edit it.
     *      var sheet = SpreadsheetApp.getActiveSheet();
     *      var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
     *      if (protection && protection.canEdit()) {
     *        protection.remove();
     *      }
     */
    export enum ProtectionType { RANGE, SHEET }

  }
}

declare var SpreadsheetApp: GoogleAppsScript.Spreadsheet.SpreadsheetApp;