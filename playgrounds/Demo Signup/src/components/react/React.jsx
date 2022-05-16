import { useState } from 'react';
import "agnostic-react/dist/esm/index.css";
import suite from "./suiteReact";
import styles from './React.module.css';
import { Card, Input, Button, ChoiceInput} from 'agnostic-react';

const EyeOpen = () => <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ion" width="1.125rem" height="1.125rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" data-icon="ion:md-eye"><path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z" fill="currentColor"></path></svg>
const EyeClosed = () => <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ion" width="1.125rem" height="1.125rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" data-icon="ion:md-eye-off"><path d="M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z" fill="currentColor"></path></svg>

export default function ReactAlert() {

  const [formState, setFormState] = useState({});
  let result = suite.get();

  let touchedInit = {
    tosReact: false,
    usernameReact: false,
    passwordReact: false,
    confirmReact: false,
  };
  const [touched, setTouched] = useState(touchedInit)
  const [disabled, setDisabled] = useState(true)
  const [textIsVisible, setTextIsVisible] = useState(false)
  const [textIsVisibleConfirm, setTextIsVisibleConfirm] = useState(false)

  let checked = [];

  const checkboxOptions = [{
    name: "tosReact",
    value: "tosReact",
    label: "I have read and agree to the terms of service."
  }];

  // Using `force` to circumnavigate race condition for case where we make an async
  // call to `setTouched(true)`, then immediate following call here to validate. 
  const validate = (fieldName, value, force) => {
    const nextState = { ...formState, [fieldName]: value };
    if (touched[fieldName] || force) {
      const res = suite(nextState, fieldName);
      res.done(r => {
        setDisabled(!r.isValid())
      })
    }
    setFormState(nextState);
  }

  /**
   * Blurring field makes it "touched" and candidate for validation
   */
  const handleBlur = fieldName => {
    if (!touched[fieldName]) {
      setTouched(
        {
          ...touched,
          ...{ [fieldName]: true }
        }
      );
      // First time this field is considered "touched" e.g. user just tab'd or clicked out
      // of the field. As such, we now need to validate said field for the first time!
      validate(fieldName, formState[fieldName], true);
    }
  }

  const handleCheckbox = (checkedItems) => {
    // Since often user will simply click (not TAB then SPACE select
    // checked) we consider any interaction w/checkbox as now "touched"
    setTouched(
      {
        ...touched,
        ...{ tosReact: true }
      }
    );
    checked = [];
    if (checkedItems.length) {
      checked = ["tosReact"]
    }
    validate('tosReact', !!checkedItems.length, true);
  }

  const handleChange = ({ target: { value, name } }) => {
    validate(name, value);
  };

	const toggleTextVisibility = () => {
		setTextIsVisible(!textIsVisible);
	};

	const toggleTextVisibilityConfirm = () => {
		setTextIsVisibleConfirm(!textIsVisibleConfirm);
	};

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <section>
      <div className="flex flex-column items-start">
        <div className="h4 mbe16">
          <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React
        </div>
        <p className="mbe16">This example signup form uses <a href="https://www.npmjs.com/package/agnostic-react" target="_blank">agnostic-react</a> for the UI primitives, and <a href="https://vestjs.dev/" target="_blank">Vest</a> for the form validation.</p>
      </div> 

      <Card css="card-demo" isStacked isShadow>
        <div className="h4">Signup</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            id="uname-react"
            name="usernameReact"
            label="Username"
            autoComplete="usernameReact"
            onChange={handleChange}
            onBlur={() => handleBlur('usernameReact')}
            isInvalid={result.hasErrors('usernameReact')}
            invalidText={[...result.getErrors('usernameReact')]}
          />
          <div className="mbs12"></div>
          <Input
            id="pword-react"
            name="passwordReact"
            label="Password"
            type={textIsVisible ? 'text' : 'password'}
            autoComplete="new-password"
            onChange={handleChange}
            onBlur={() => handleBlur('passwordReact')}
            isInvalid={result.hasErrors('passwordReact') || result.hasWarnings('passwordReact')}
            invalidText={[...result.getErrors('passwordReact'), ...result.getWarnings('passwordReact')]}
            hasRightAddon
            addOnRight={
              <Button
                isBlank
                onClick={toggleTextVisibility}
                aria-label="Password visibility toggle" 
                label="Password visibility toggle" 
                css={styles.passwordEyeButton}
              >
                {textIsVisible ? (
                  <EyeClosed />
                ) : (
                  <EyeOpen />
                )}
              </Button>
            }
          /> 
          <div className="mbs12"></div>
          <Input
            id="confirm-react"
            name="confirmReact"
            label="Confirm"
            type={textIsVisibleConfirm ? 'text' : 'password'}
            autoComplete="new-password-confirm"
            onChange={handleChange}
            onBlur={() => handleBlur('confirmReact')}
            isInvalid={result.hasErrors('confirmReact')}
            invalidText={[...result.getErrors('confirmReact')]}
            hasRightAddon
            addOnRight={
              <Button
                isBlank
                onClick={toggleTextVisibilityConfirm}
                label="Password visibility toggle" 
                aria-label="Password visibility toggle" 
                css={styles.passwordEyeButton}
              >
                {textIsVisibleConfirm ? (
                  <EyeClosed />
                ) : (
                  <EyeOpen />
                )}
              </Button>
            }
          />
          <div className="mbs12"></div>
          <ChoiceInput
            id="agrees"
            type="checkbox"
            checkedOptions={checked}
            isFieldset={false}
            legendLabel="agree to terms of service toggle"
            isInvalid={result.hasErrors('tosReact')}
            options={checkboxOptions}
            onChange={handleCheckbox}
          />
          <div className="mbs32"></div>
          <Button type="submit" mode="primary" isRounded isBlock isDisabled={disabled}>Submit</Button>
        </form>
      </Card>
    </section>
  );
}
