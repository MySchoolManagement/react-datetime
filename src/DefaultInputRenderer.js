var React = require('react'),
	_ = require('lodash'),
	createClass = require('create-react-class');

var DefaultInputRenderer = createClass({
	focus: function () {
		if (this.inputRef) {
			this.inputRef.focus();
		}
	},
	onFocusHandler: function () {
		this.props.openCalendar();

		if (this.props.onFocus) {
			this.props.onFocus();
		}
	},
	onRefHandler: function (inputRef) {
		this.inputRef = inputRef;
	},
	render: function () {
		return React.createElement(
			'input',
			_.assign(
				{},
				_.omit(this.props, 'openCalendar'),
				{
					onFocus: this.onFocusHandler,
					ref: this.onRefHandler
				}
			)
		);
	}
});

module.exports = DefaultInputRenderer;
