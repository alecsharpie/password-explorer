// src/components/PasswordRecommendations.js
import React from "react";

const PasswordRecommendations = () => {
  return (
    <div className="component-content">
      <section id="passwordRecommendations">
        <h2>Good Password Recommendations</h2>
      </section>
      <p>
        Strong passwords are essential for protecting your online accounts. A
        strong password should:
      </p>
      <ul>
        <li>Be at least 12 characters long</li>
        <li>Include numbers, symbols, uppercase and lowercase letters</li>
        <li>Avoid using common words or common phrases</li>
        <li>Never use personal information, like your name or birthday</li>
        <li>
          Don’t simply change e’s for 3′s, a’s for 4′s etc. These tricks are
          well-known to hackers
        </li>
      </ul>
      <p>A good password might be 3 random words put together</p>
      <p>
        For example: <strong>horsebatterystaple</strong>
      </p>
      <p>
        With added symbols: <strong>horsebatterystaplE&12</strong>
      </p>
      <p>
        Or ideally a random string of characters like:{" "}
        <strong>!@#2aBcD3$%^aglq*4</strong>
      </p>
      <p>
        If trying to remember these seems impossible, then see the next section... Password
        Managers!
      </p>
    </div>
  );
};

export default PasswordRecommendations;
