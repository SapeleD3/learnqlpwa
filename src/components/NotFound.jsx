import React from 'react';
import {Link} from 'react-router-dom';
import {string} from 'prop-types';
import {ROUTES} from '../routes/constants';
import {H2, H4, P} from './GeneralStyledComponents/texts';
import {NotFoundInner} from './GeneralStyledComponents/containers';

const {home} = ROUTES;
const NotFound = ({theme, device}) => {
  const src =
    theme === 'light'
      ? 'https://res.cloudinary.com/adevgunner/image/upload/v1592496561/accepttedprofiler_ushwp9.png'
      : 'https://res.cloudinary.com/adevgunner/image/upload/v1592497924/accepttedprofiler-light_ly2fz4.png';
  return (
    <div>
      {device === 'mobile' ? (
        <img
          style={{
            position: 'fixed',
            top: '35%',
            left: '50%',
            width: '50%',
            /* bring your own prefixes */
            transform: 'translate(-50%, -50%)',
          }}
          alt="logo"
          src={src}
        />
      ) : (
        <img
          style={{
            position: 'fixed',
            top: '35%',
            left: '50%',
            width: '20%',
            /* bring your own prefixes */
            transform: 'translate(-50%, -50%)',
          }}
          alt="logo"
          src={src}
        />
      )}
      <NotFoundInner>
        <H2 size="23px">404</H2>
        <H4 size="23px">Page not found</H4>
        <Link to={home}>
          <P>Take me home</P>
        </Link>
      </NotFoundInner>
    </div>
  );
};

NotFound.propTypes = {
  device: string.isRequired,
  theme: string.isRequired,
};

export default NotFound;
