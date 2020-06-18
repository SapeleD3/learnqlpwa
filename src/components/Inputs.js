import React from 'react';
import {string} from 'prop-types';
import {DetailInput} from './GeneralStyledComponents/Input';

export default function Inputs({placeholder}) {
	return <DetailInput placeholder={placeholder} />;
}

Inputs.propTypes = {
	placeholder: string.isRequired,
};
