import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  auth,
  createUserProfileDocument,
} from '../../firebase/fireabase.utils';

import './sign-up.styles.scss';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const setInitialState = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Password must match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setInitialState();
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          label='Display Name'
          required
        />

        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label='Confirm Password'
          required
        />
        {error && <p className='error'>{error}</p>}
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
