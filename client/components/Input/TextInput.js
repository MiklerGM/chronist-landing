import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

class TextInput extends React.Component {
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
          { placeholder =>
            <input
              type='text'
              value={this.props.value}
              placeholder={placeholder}
              className={(this.state.valid) ? '' : 'invalid'}
              maxLength='80'
              // pattern='^[a-zA-Zа-яА-я0-9._%+-]'
              onInvalid={e => this.handleInvalid(e)}
              onChange={(e) => {
                this.setState({ valid: true });
                this.props.cb({ [this.props.name]: e.target.value });
              }}
              required
            />
          }
        </FormattedMessage>
        <span
          style={{ gridRow: '2 / 3' }}
          className={(this.state.valid)
            ? 'invalid-message__hidden' : 'invalid-message'}
        >
          <FormattedMessage id='input.textarea.invalid' />
        </span>
      </div>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default TextInput;
