import React from 'react';
import {string} from 'prop-types';
import {Checkbox} from 'antd';
// import {GithubOutlined} from '@ant-design/icons';
import {LoginContainer} from '../../components/GeneralStyledComponents/containers';
import {LoginImage} from '../../components/GeneralStyledComponents/images';
import LoginForm from './LoginForm';
import light from '../../assets/light-boundless.png';
import dark from '../../assets/darkboundless.png';
import {
  LOGINTEXT,
  LOGINTEXT2,
} from '../../components/GeneralStyledComponents/texts';
import {
  LoginButtons,
  Lines,
} from '../../components/GeneralStyledComponents/buttons';

export default function Login({theme, device}) {
  const src = theme === 'light' ? dark : light;
  return (
    <LoginContainer>
      <LoginImage
        Mstyles={() => ({
          height: '100%',
          'margin-top': '90px',
          'margin-bottom': '40px',
        })}
        src={src}
        size={device === 'mobile' ? '60%' : '40%'}
      />
      <LOGINTEXT size="23px">LOG-IN</LOGINTEXT>
      <div style={{marginTop: 20}}>
        <LoginForm />
        <div style={{display: 'flex'}}>
          <Checkbox />
          <p style={{marginLeft: 10}}>Keep me logged in</p>
        </div>
        <LoginButtons>
          <LOGINTEXT2>LOGIN</LOGINTEXT2>
        </LoginButtons>
        <div style={{float: 'right'}}>
          <p style={{textAlign: 'right', fontFamily: 'Comfortaa'}}>
            Forgot Password
          </p>
          <Lines />
        </div>

        <LoginButtons>
          <LOGINTEXT2>Github</LOGINTEXT2>
        </LoginButtons>
      </div>
    </LoginContainer>
  );
}
Login.propTypes = {
  theme: string.isRequired,
  device: string.isRequired,
};
