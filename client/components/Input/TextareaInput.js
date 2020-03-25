import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

class TextareaInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: true
    };
  }

  handleInvalid(e) {
    e.preventDefault();
    this.setState({ valid: false });
    this.forceUpdate();
  }

  render() {
    return (
      <div className='input--cell'>
        <FormattedMessage id={this.props.placeholder}>
          { (placeholder) => (
            <textarea
              type='text'
              value={this.props.value}
              placeholder={placeholder}
              className={(this.state.valid) ? '' : 'invalid'}
              // pattern='^[a-zA-Z0-9._%+-]'
              onInvalid={(e) => this.handleInvalid(e)}
              rows='8'
              maxLength='2000'
              required
              onChange={(e) => {
                this.setState({ valid: true });
                this.props.cb({ [this.props.name]: e.target.value });
              }}
            />
          )}
        </FormattedMessage>
        <span
          style={{ gridRow: '2 / 3' }}
          className={(this.state.valid)
            ? 'invalid-message__hidden' : 'invalid-message'}
        >
          <span><FormattedMessage id='input.textarea.invalid' /></span>
        </span>
      </div>
    );
  }
}

TextareaInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default TextareaInput;
