/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare module GoogleAppsScript {
  export module Calendar {
    /**
     * Represents a calendar that the user owns or is subscribed to.
     */
    export interface Calendar {
      createAllDayEvent(title: String, date: Date): CalendarEvent;
      createAllDayEvent(title: String, date: Date, options: Object): CalendarEvent;
      createAllDayEventSeries(title: String, startDate: Date, recurrence: EventRecurrence): CalendarEventSeries;
      createAllDayEventSeries(title: String, startDate: Date, recurrence: EventRecurrence, options: Object): CalendarEventSeries;
      createEvent(title: String, startTime: Date, endTime: Date): CalendarEvent;
      createEvent(title: String, startTime: Date, endTime: Date, options: Object): CalendarEvent;
      createEventFromDescription(description: String): CalendarEvent;
      createEventSeries(title: String, startTime: Date, endTime: Date, recurrence: EventRecurrence): CalendarEventSeries;
      createEventSeries(title: String, startTime: Date, endTime: Date, recurrence: EventRecurrence, options: Object): CalendarEventSeries;
      deleteCalendar(): void;
      getColor(): String;
      getDescription(): String;
      getEventSeriesById(iCalId: String): CalendarEventSeries;
      getEvents(startTime: Date, endTime: Date): CalendarEvent[];
      getEvents(startTime: Date, endTime: Date, options: Object): CalendarEvent[];
      getEventsForDay(date: Date): CalendarEvent[];
      getEventsForDay(date: Date, options: Object): CalendarEvent[];
      getId(): String;
      getName(): String;
      getTimeZone(): String;
      isHidden(): Boolean;
      isMyPrimaryCalendar(): Boolean;
      isOwnedByMe(): Boolean;
      isSelected(): Boolean;
      setColor(color: String): Calendar;
      setDescription(description: String): Calendar;
      setHidden(hidden: Boolean): Calendar;
      setName(name: String): Calendar;
      setSelected(selected: Boolean): Calendar;
      setTimeZone(timeZone: String): Calendar;
      unsubscribeFromCalendar(): void;
    }

    /**
     * Allows a script to read and update the user's Google Calendar. This class provides direct
     *  access to the user's default calendar, as well as the ability to retrieve additional calendars
     *  that the user owns or is subscribed to.
     */
    export interface CalendarApp {
      Color: Color
      GuestStatus: GuestStatus
      Month: Base.Month
      Visibility: Visibility
      Weekday: Base.Weekday
      createAllDayEvent(title: String, date: Date): CalendarEvent;
      createAllDayEvent(title: String, date: Date, options: Object): CalendarEvent;
      createAllDayEventSeries(title: String, startDate: Date, recurrence: EventRecurrence): CalendarEventSeries;
      createAllDayEventSeries(title: String, startDate: Date, recurrence: EventRecurrence, options: Object): CalendarEventSeries;
      createCalendar(name: String): Calendar;
      createCalendar(name: String, options: Object): Calendar;
      createEvent(title: String, startTime: Date, endTime: Date): CalendarEvent;
      createEvent(title: String, startTime: Date, endTime: Date, options: Object): CalendarEvent;
      createEventFromDescription(description: String): CalendarEvent;
      createEventSeries(title: String, startTime: Date, endTime: Date, recurrence: EventRecurrence): CalendarEventSeries;
      createEventSeries(title: String, startTime: Date, endTime: Date, recurrence: EventRecurrence, options: Object): CalendarEventSeries;
      getAllCalendars(): Calendar[];
      getAllOwnedCalendars(): Calendar[];
      getCalendarById(id: String): Calendar;
      getCalendarsByName(name: String): Calendar[];
      getColor(): String;
      getDefaultCalendar(): Calendar;
      getDescription(): String;
      getEventSeriesById(iCalId: String): CalendarEventSeries;
      getEvents(startTime: Date, endTime: Date): CalendarEvent[];
      getEvents(startTime: Date, endTime: Date, options: Object): CalendarEvent[];
      getEventsForDay(date: Date): CalendarEvent[];
      getEventsForDay(date: Date, options: Object): CalendarEvent[];
      getId(): String;
      getName(): String;
      getOwnedCalendarById(id: String): Calendar;
      getOwnedCalendarsByName(name: String): Calendar[];
      getTimeZone(): String;
      isHidden(): Boolean;
      isMyPrimaryCalendar(): Boolean;
      isOwnedByMe(): Boolean;
      isSelected(): Boolean;
      newRecurrence(): EventRecurrence;
      setColor(color: String): Calendar;
      setDescription(description: String): Calendar;
      setHidden(hidden: Boolean): Calendar;
      setName(name: String): Calendar;
      setSelected(selected: Boolean): Calendar;
      setTimeZone(timeZone: String): Calendar;
      subscribeToCalendar(id: String): Calendar;
      subscribeToCalendar(id: String, options: Object): Calendar;
    }

    /**
     * Represents a single calendar event.
     */
    export interface CalendarEvent {
      addEmailReminder(minutesBefore: Integer): CalendarEvent;
      addGuest(email: String): CalendarEvent;
      addPopupReminder(minutesBefore: Integer): CalendarEvent;
      addSmsReminder(minutesBefore: Integer): CalendarEvent;
      anyoneCanAddSelf(): Boolean;
      deleteEvent(): void;
      deleteTag(key: String): CalendarEvent;
      getAllDayEndDate(): Date;
      getAllDayStartDate(): Date;
      getAllTagKeys(): String[];
      getCreators(): String[];
      getDateCreated(): Date;
      getDescription(): String;
      getEmailReminders(): Integer[];
      getEndTime(): Date;
      getEventSeries(): CalendarEventSeries;
      getGuestByEmail(email: String): EventGuest;
      getGuestList(): EventGuest[];
      getGuestList(includeOwner: Boolean): EventGuest[];
      getId(): String;
      getLastUpdated(): Date;
      getLocation(): String;
      getMyStatus(): GuestStatus;
      getOriginalCalendarId(): String;
      getPopupReminders(): Integer[];
      getSmsReminders(): Integer[];
      getStartTime(): Date;
      getTag(key: String): String;
      getTitle(): String;
      getVisibility(): Visibility;
      guestsCanInviteOthers(): Boolean;
      guestsCanModify(): Boolean;
      guestsCanSeeGuests(): Boolean;
      isAllDayEvent(): Boolean;
      isOwnedByMe(): Boolean;
      isRecurringEvent(): Boolean;
      removeAllReminders(): CalendarEvent;
      removeGuest(email: String): CalendarEvent;
      resetRemindersToDefault(): CalendarEvent;
      setAllDayDate(date: Date): CalendarEvent;
      setAnyoneCanAddSelf(anyoneCanAddSelf: Boolean): CalendarEvent;
      setDescription(description: String): CalendarEvent;
      setGuestsCanInviteOthers(guestsCanInviteOthers: Boolean): CalendarEvent;
      setGuestsCanModify(guestsCanModify: Boolean): CalendarEvent;
      setGuestsCanSeeGuests(guestsCanSeeGuests: Boolean): CalendarEvent;
      setLocation(location: String): CalendarEvent;
      setMyStatus(status: GuestStatus): CalendarEvent;
      setTag(key: String, value: String): CalendarEvent;
      setTime(startTime: Date, endTime: Date): CalendarEvent;
      setTitle(title: String): CalendarEvent;
      setVisibility(visibility: Visibility): CalendarEvent;
    }

    /**
     * Represents a series of events (a recurring event).
     */
    export interface CalendarEventSeries {
      addEmailReminder(minutesBefore: Integer): CalendarEventSeries;
      addGuest(email: String): CalendarEventSeries;
      addPopupReminder(minutesBefore: Integer): CalendarEventSeries;
      addSmsReminder(minutesBefore: Integer): CalendarEventSeries;
      anyoneCanAddSelf(): Boolean;
      deleteEventSeries(): void;
      deleteTag(key: String): CalendarEventSeries;
      getAllTagKeys(): String[];
      getCreators(): String[];
      getDateCreated(): Date;
      getDescription(): String;
      getEmailReminders(): Integer[];
      getGuestByEmail(email: String): EventGuest;
      getGuestList(): EventGuest[];
      getGuestList(includeOwner: Boolean): EventGuest[];
      getId(): String;
      getLastUpdated(): Date;
      getLocation(): String;
      getMyStatus(): GuestStatus;
      getOriginalCalendarId(): String;
      getPopupReminders(): Integer[];
      getSmsReminders(): Integer[];
      getTag(key: String): String;
      getTitle(): String;
      getVisibility(): Visibility;
      guestsCanInviteOthers(): Boolean;
      guestsCanModify(): Boolean;
      guestsCanSeeGuests(): Boolean;
      isOwnedByMe(): Boolean;
      removeAllReminders(): CalendarEventSeries;
      removeGuest(email: String): CalendarEventSeries;
      resetRemindersToDefault(): CalendarEventSeries;
      setAnyoneCanAddSelf(anyoneCanAddSelf: Boolean): CalendarEventSeries;
      setDescription(description: String): CalendarEventSeries;
      setGuestsCanInviteOthers(guestsCanInviteOthers: Boolean): CalendarEventSeries;
      setGuestsCanModify(guestsCanModify: Boolean): CalendarEventSeries;
      setGuestsCanSeeGuests(guestsCanSeeGuests: Boolean): CalendarEventSeries;
      setLocation(location: String): CalendarEventSeries;
      setMyStatus(status: GuestStatus): CalendarEventSeries;
      setRecurrence(recurrence: EventRecurrence, startDate: Date): CalendarEventSeries;
      setRecurrence(recurrence: EventRecurrence, startTime: Date, endTime: Date): CalendarEventSeries;
      setTag(key: String, value: String): CalendarEventSeries;
      setTitle(title: String): CalendarEventSeries;
      setVisibility(visibility: Visibility): CalendarEventSeries;
    }

    /**
     * An enum representing the named colors available in the Calendar service.
     */
    export enum Color { BLUE, BROWN, CHARCOAL, CHESTNUT, GRAY, GREEN, INDIGO, LIME, MUSTARD, OLIVE, ORANGE, PINK, PLUM, PURPLE, RED, RED_ORANGE, SEA_BLUE, SLATE, TEAL, TURQOISE, YELLOW }

    /**
     * Represents a guest of an event.
     */
    export interface EventGuest {
      getAdditionalGuests(): Integer;
      getEmail(): String;
      getGuestStatus(): GuestStatus;
      getName(): String;
      getStatus(): String;
    }

    /**
     * Represents the recurrence settings for an event series.
     */
    export interface EventRecurrence {
      addDailyExclusion(): RecurrenceRule;
      addDailyRule(): RecurrenceRule;
      addDate(date: Date): EventRecurrence;
      addDateExclusion(date: Date): EventRecurrence;
      addMonthlyExclusion(): RecurrenceRule;
      addMonthlyRule(): RecurrenceRule;
      addWeeklyExclusion(): RecurrenceRule;
      addWeeklyRule(): RecurrenceRule;
      addYearlyExclusion(): RecurrenceRule;
      addYearlyRule(): RecurrenceRule;
      setTimeZone(timeZone: String): EventRecurrence;
    }

    /**
     * An enum representing the statuses a guest can have for an event.
     */
    export enum GuestStatus { INVITED, MAYBE, NO, OWNER, YES }

    /**
     * Represents a recurrence rule for an event series.
     * 
     * Note that this class also behaves like the EventRecurrence that it belongs
     *  to, allowing you to chain rule creation together like so:
     * 
     *      recurrence.addDailyRule().times(3).interval(2).addWeeklyExclusion().times(2);
     * 
     * times(times)
     * interval(interval)
     */
    export interface RecurrenceRule {
      addDailyExclusion(): RecurrenceRule;
      addDailyRule(): RecurrenceRule;
      addDate(date: Date): EventRecurrence;
      addDateExclusion(date: Date): EventRecurrence;
      addMonthlyExclusion(): RecurrenceRule;
      addMonthlyRule(): RecurrenceRule;
      addWeeklyExclusion(): RecurrenceRule;
      addWeeklyRule(): RecurrenceRule;
      addYearlyExclusion(): RecurrenceRule;
      addYearlyRule(): RecurrenceRule;
      interval(interval: Integer): RecurrenceRule;
      onlyInMonth(month: Base.Month): RecurrenceRule;
      onlyInMonths(months: Base.Month[]): RecurrenceRule;
      onlyOnMonthDay(day: Integer): RecurrenceRule;
      onlyOnMonthDays(days: Integer[]): RecurrenceRule;
      onlyOnWeek(week: Integer): RecurrenceRule;
      onlyOnWeekday(day: Base.Weekday): RecurrenceRule;
      onlyOnWeekdays(days: Base.Weekday[]): RecurrenceRule;
      onlyOnWeeks(weeks: Integer[]): RecurrenceRule;
      onlyOnYearDay(day: Integer): RecurrenceRule;
      onlyOnYearDays(days: Integer[]): RecurrenceRule;
      setTimeZone(timeZone: String): EventRecurrence;
      times(times: Integer): RecurrenceRule;
      until(endDate: Date): RecurrenceRule;
      weekStartsOn(day: Base.Weekday): RecurrenceRule;
    }

    /**
     * An enum representing the visibility of an event.
     */
    export enum Visibility { CONFIDENTIAL, DEFAULT, PRIVATE, PUBLIC }

  }
}

declare var CalendarApp: GoogleAppsScript.Calendar.CalendarApp;