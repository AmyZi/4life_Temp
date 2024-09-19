import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const MenteePage = ({ name }) => {
  const [showInput, setShowInput] = useState(false);
  const [aboutMe, setAboutMe] = useState('');

  const handleGetStarted = () => {
    setShowInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send this data to your backend
    console.log('About me:', aboutMe);
    // Reset the form and hide the input
    setAboutMe('');
    setShowInput(false);
  };

  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.title)}>Hi, {name}!</h1>
      <p className={css(styles.subtitle)}>
        Welcome to 4Life Mentorship.<br /> Let's get to know a little about you to find the perfect mentor for you.
      </p>
      {!showInput ? (
        <button onClick={handleGetStarted} className={css(styles.button)}>
          Get Started
        </button>
      ) : (
        <form onSubmit={handleSubmit} className={css(styles.form)}>
          <textarea
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            placeholder="Tell us a bit about yourself..."
            className={css(styles.textarea)}
          />
          <button type="submit" className={css(styles.button)}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5em',
    color: '#004c80',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#333',
    textAlign: 'center',
    maxWidth: '600px',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
  form: {
    width: '100%',
    maxWidth: '500px',
  },
  textarea: {
    width: '100%',
    minHeight: '150px',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1em',
  },
});

export default MenteePage;