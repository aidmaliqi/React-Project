import { useState } from "react";

type 

export function Profile() {

  const [userData , setUserData] = useState()
  return (
    <section className="bg-section">
      <img src="/src/assets/bg-1.webp" alt="" />
      <header className="Profile-header">
        <h1>Profile</h1>
        <span>Lorem ipsum dolor sit amet.</span>
      </header>
      <main className="profile-main">
        <div className="profile-divs div1">
          <h1>Details</h1>
          <div>
            <h3>Name:</h3>
            <span>Lorem, ipsum.</span>
          </div>
          <div>
            <h3>Age:</h3>
            <span>Lorem, ipsum.</span>
          </div>

          <div>
            <h3>Location:</h3>
            <span>Lorem, ipsum.</span>
          </div>
        </div>

        <div className="profile-divs div1">
          <div>
            <h1>About Me</h1>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
        <div className="profile-picture-div profile-divs">
          <div className="round-div">
            <img src="/src/assets/pp.jpeg" alt="" />
          </div>
          <div className="divdiv">
            <h3>Orders made: 5</h3>
            <h3>Rating: 🌟🌟🌟🌟⭐</h3>
            <div>
              <h3>My experience:</h3>
              <span>
                Great food and friendly staff - loved the peking duck and
                dumplings were great. Highly recommended.
              </span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
