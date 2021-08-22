import React, { FC, FormEvent, ChangeEvent, useEffect, useState } from 'react';
import { ToggleSwitch } from '../toggleSwitch/toggleswitch';
import { IForm, IErrors } from '../../types';

const Form: FC<IForm> = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Belarus');
  const [gender, setGender] = useState(true);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<IErrors>({});

  const validate = () => {
    setErrors({});
    if (firstName === '') {
      setErrors((state) => ({ ...state, firstName }));
    }

    if (lastName === '') {
      setErrors((state) => ({ ...state, lastName }));
    }

    if (birthDate === '') {
      setErrors((state) => ({ ...state, birthDate }));
    }

    if (!agree) {
      setErrors((state) => ({ ...state, agree }));
    }
  };

  useEffect(() => {
    validate();
  }, [firstName, lastName, birthDate, agree]);

  const reset = () => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setCountry('Belarus');
    setGender(true);
    setAgree(false);
  };

  const message = () => {
    const messageElement = document.getElementById('message');
    if (messageElement) {
      messageElement.className = 'active';
    }
    setTimeout(() => {
      if (messageElement?.className) {
        messageElement.className = messageElement?.className.replace(
          'active',
          ''
        );
      }
    }, 3000);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state) => [
        ...state,
        { firstName, lastName, birthDate, country, gender, agree },
      ]);
      message();
      reset();
    }
  };

  const handleChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleChangeBirthDate = (event: ChangeEvent<HTMLInputElement>) => {
    setBirthDate(event.target.value);
  };

  const handleChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  const onGenderChange = (checked: boolean) => {
    setGender(checked);
  };

  const handleChangeAgree = () => {
    setAgree((prev) => !prev);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">Contact Form</h3>
        <h4 className="form__subtitle">Contact us for custom quote</h4>
        <label className="form__item" htmlFor="firstName">
          <p>Name</p>
          {errors.firstName === '' && (
            <span className="form__error">* Name must be filled out</span>
          )}
        </label>
        <input
          className="item"
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChangeFirstName}
        />
        <label className="form__item" htmlFor="lastName">
          <p>Surame</p>
          {errors.lastName === '' && (
            <span className="form__error">* Surame must be filled out</span>
          )}
        </label>
        <input
          className="item"
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChangeLastName}
        />
        <label className="form__item" htmlFor="birthDate">
          <p>Birth date</p>
          {errors.birthDate === '' && (
            <span className="form__error">* Birth date must be filled out</span>
          )}
        </label>
        <input
          className="item"
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={handleChangeBirthDate}
        />
        <label className="form__item" htmlFor="birthDate">
          Country
        </label>
        <select
          className="item"
          name="country"
          value={country}
          onChange={handleChangeCountry}
        >
          <option value="Poland">Poland</option>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Latvia">Latvia</option>
        </select>

        <div>
          <label className="form__item" htmlFor="gender">
            Сhoose your gender
          </label>
          <ToggleSwitch
            id="gender"
            checked={gender}
            onChange={onGenderChange}
          />
        </div>
        <input
          className="form__checkbox"
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={handleChangeAgree}
        />

        <label className="form__text" htmlFor="agree">
          {errors.agree !== undefined && (
            <span className="form__error">
              * You must agree to the terms and conditions
            </span>
          )}
          <p>
            Pursuant to Article 6 (1) (a) of the General Data Protection
            Regulation (GDPR) of 27 April 2016, I agree to the processing of my
            personal data.
            <br />
            At the same time I declare that I have been informed about the right
            to withdraw consent at any time.
          </p>
        </label>

        <div>
          <input className="form__button" type="submit" value="Send" />
        </div>
      </form>
      <div id="message">
        <p>Your information has been submitted successfully. </p>
      </div>
    </div>
  );
};

export default Form;
