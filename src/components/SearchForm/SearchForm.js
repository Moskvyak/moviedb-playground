import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { DebounceInput } from 'react-debounce-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchForm.css';

class SearchForm extends PureComponent {
  getRightIcon = () => {
    return (
      <FontAwesomeIcon
        className="searchform__right-icon"
        icon={faSearch}
        color={'#01d277'}
        size="1x"
      />
    );
  };
  render() {
    const { value, onChange, placeholder } = this.props;
    return (
      <div className="searchform__wrapper primary-color">
        <DebounceInput
          value={value}
          onChange={onChange}
          debounceTimeout={300}
          placeholder={placeholder}
        />
        {this.getRightIcon()}
      </div>
    );
  }
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string
};

export default SearchForm;
