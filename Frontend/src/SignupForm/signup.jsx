import React from 'react';
import './signup.css';

const SignupForm = () => {
  return (
    <section className="container">
      <header>Registration Form</header>
      <form action="#" className="form">
        <div className="input-box">
          <label>First Name</label>
          <input type="text" placeholder="Enter first name" required />
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input type="text" placeholder="Enter last name" required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" required />
        </div>
        <div className="input-box">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>
        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label htmlFor="check-male">Male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label htmlFor="check-female">Female</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label htmlFor="check-other">Prefer not to say</label>
            </div>
          </div>
        </div>
        <div className="input-box">
          <label>Profile picture:</label>
          <input type="file" id="profile_picture" name="profile_picture" accept="image/*" />
        </div>
        <div className="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required />
          <input type="text" placeholder="Enter street address line 2" required />
          <div className="column">
            <div className="select-box">
              <select>
                <option hidden>Country</option>
                <option>Nigeria</option>
                <option>America</option>
                <option>Japan</option>
                <option>India</option>
                <option>Nepal</option>
              </select>
            </div>
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div className="column">
            <input type="text" placeholder="Enter your state" required />
            <input type="text" placeholder="Enter postal code" required />
          </div>
        </div>
        <div className="gender-box">
          <h3>Role</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-mentor" name="mentor" checked />
              <label htmlFor="check-mentor">Mentor</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-mentee" name="mentee" />
              <label htmlFor="check-mentee">Mentee</label>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="select-box">
            <select>
              <option hidden>Areas of Expertise/Interest:</option>
              <option>Front End Development</option>
              <option>Back End Development</option>
              <option>Data Science</option>
              <option>Virtual Machine</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default SignupForm;
