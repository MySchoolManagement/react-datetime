// Type definitions for react-datetime
// Project: https://github.com/YouCanBookMe/react-datetime
// Definitions by: Ivan Verevkin <vereva@x-root.org>
//     Updates by: Aaron Spaulding <aaron@sachimp.com>

declare module 'react-datetime' {

  /*
   A stand-in type for Moment, this file currently has no way of guaranteeing
   the existence of those typings.
   */
  type Moment = any;

  /*
   The view mode can be any of the following strings.
   */
  type ViewMode = 'years' | 'months' | 'days' | 'time';

  interface TimeConstraint {
    min: number;
    max: number;
    step: number;
  }

  interface TimeConstraints {
    hours?: TimeConstraint;
    minutes?: TimeConstraint;
    seconds?: TimeConstraint;
    milliseconds?: TimeConstraint;
  }

  interface InputRendererComponentProps {
    readonly openCalendar?: () => void
  }

  interface DatetimepickerProps {
    /*
     Represents the selected date by the component, in order to use it as a controlled component.
     This prop is parsed by moment.js, so it is possible to use a date string or a moment.js date.
     */
    value?: Date;
    /*
     Represents the selected date for the component to use it as a uncontrolled component.
     This prop is parsed by moment.js, so it is possible to use a date string or a moment.js date.
     */
    defaultValue?: Date;
    /*
     Defines the format for the date. It accepts any moment.js date format.
     If true the date will be displayed using the defaults for the current locale.
     If false the datepicker is disabled and the component can be used as timepicker.
     */
    dateFormat?: boolean|string;
    /*
     Defines the format for the time. It accepts any moment.js time format.
     If true the time will be displayed using the defaults for the current locale.
     If false the timepicker is disabled and the component can be used as datepicker.
     */
    timeFormat?: boolean|string;
    /*
     Whether to show an input field to edit the date manually.
     */
    input?: boolean;
    /*
     Whether to open or close the picker. If not set react-datetime will open the
     datepicker on input focus and close it on click outside.
     */
    open?: boolean;
    /*
     Manually set the locale for the react-datetime instance.
     Moment.js locale needs to be loaded to be used, see i18n docs.
     */
    locale?: string;
    /*
     Whether to interpret input times as UTC or the user's local timezone.
     */
    utc?: boolean;
    /*
     Callback trigger when the date changes. The callback receives the selected `moment` object as
     only parameter, if the date in the input is valid. If the date in the input is not valid, the
     callback receives the value of the input (a string).
     */
    onChange?: (momentOrInputString: string|Moment) => void;
    /*
     Callback trigger for when the user opens the datepicker.
     */
    onFocus?: () => void;
    /*
     Callback trigger for when the user clicks outside of the input, simulating a regular onBlur.
     The callback receives the selected `moment` object as only parameter, if the date in the input
     is valid. If the date in the input is not valid, the callback receives the value of the
     input (a string).
     */
    onBlur?: (momentOrInputString : string|Moment) => void;
    /*
     The default view to display when the picker is shown. ('years', 'months', 'days', 'time')
     */
    viewMode?: ViewMode|number;
    /*
     Extra class names for the component markup.
     */
    className?: string;
    /*
     Defines additional attributes for the input renderer of the component.
     */
    inputProps?: {};
    /*
     Define the dates that can be selected. The function receives (currentDate, selectedDate)
     and should return a true or false whether the currentDate is valid or not. See selectable dates.
     */
    isValidDate?: (currentDate: any, selectedDate: any) => boolean;
    /*
     The component which will be used to render the input. The openCalendar method is passed in the props.
     */
    renderInput?: React.ComponentClass<InputRendererComponentProps> | React.StatelessComponent<InputRendererComponentProps>;

    /*
     Customize the way that the days are shown in the day picker. The accepted function has
     the selectedDate, the current date and the default calculated props for the cell,
     and must return a React component. See appearance customization
     */
    renderDay?: (props: any, currentDate: any, selectedDate: any) => JSX.Element;
    /*
     Customize the way that the months are shown in the month picker.
     The accepted function has the selectedDate, the current date and the default calculated
     props for the cell, the month and the year to be shown, and must return a
     React component. See appearance customization
     */
    renderMonth?: (props: any, month: number, year: number, selectedDate: any) => JSX.Element;
    /*
     Customize the way that the years are shown in the year picker.
     The accepted function has the selectedDate, the current date and the default calculated
     props for the cell, the year to be shown, and must return a React component.
     See appearance customization
     */
    renderYear?: (props: any, year: number, selectedDate: any) => JSX.Element;
    /*
     Whether to use moment's strict parsing when parsing input.
     */
    strictParsing?: boolean;
    /*
     When true, once the day has been selected, the react-datetime will be automatically closed.
     */
    closeOnSelect?: boolean;
    /*
     Allow to add some constraints to the time selector. It accepts an object with the format
     {hours:{ min: 9, max: 15, step:2}} so the hours can't be lower than 9 or higher than 15, and
     it will change adding or subtracting 2 hours everytime the buttons are clicked. The constraints
     can be added to the hours, minutes, seconds and milliseconds.
    */
    timeConstraints?: TimeConstraints;
    /*
     When true, keep the picker open when click event is triggered outside of component. When false,
     close it.
    */
    disableOnClickOutside?: boolean;
  }

  interface DatetimepickerState {
      updateOn: string;
      inputFormat: string;
      viewDate: Moment;
      selectedDate: Moment;
      inputValue: string;
      open: boolean;
  }

  class ReactDatetime extends React.Component<DatetimepickerProps, DatetimepickerState> {
  }

  /*
   This is a hack for cleaner imports. It augments the ReactDatetime class to
   make it a namespace which are importable using the 'import * as ...' syntax.
   */
  namespace ReactDatetime {}

  export = ReactDatetime;
}
