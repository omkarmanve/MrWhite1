import React from 'react';
import bannerImage from '../assets/Small.png';
import rightImage1 from '../assets/Laptop.png';
import image2 from '../assets/LLhub2.png';
import image3 from '../assets/LL1.png';
import image4 from '../assets/LL2.png';
import './LLhub.css';
import ll5Image from '../assets/ll5.png';

const LLhubPage = () => {
  return (
    <div className="llhub-container">
      {/* Top Banner */}
      <div className="llhub-banner">
        <img src={bannerImage} alt="LLhub Banner" />
      </div>

      {/* Text + Image Section */}
      <div className="llhub-section">
        <div className="llhub-text">
          <h2 className="llhub-heading">Welcome to Legacy of Love Dog Hub</h2>
          <p className="llhub-subparagraph">
            Exclusively available to Elite Pack members, the Legacy of Love Living Hub is nothing like you’ve seen before! 
            Imagine a dynamic, AI-powered sanctuary where every cherished memory and vital detail about your companion’s life 
            is held with care, easily accessible anytime, anywhere.<br/> This isn’t just a digital journal — Mr. White is your 
            personal assistant, your memory keeper, even an aid to custom publishing your dog's life in book form and your partner 
            in ensuring your dog enjoys a long, healthy, joyful life.<br/><br/>
            With the Legacy of Love Living Hub, you’ll discover a new level of ease and confidence in managing your pup’s health, 
            milestones, and adventures — all wrapped in a space designed to grow with you and your dog. Feel proud knowing that 
            support and awareness are available 24/7, helping you make informed decisions and celebrate every step of your journey together.
          </p>
        </div>
        <div className="llhub-images">
          <img src={rightImage1} alt="Right Image" />
        </div>
      </div>

      {/* Bottom Section: Legacy of Love Dog Hub */}
      <div className="llhub-bottom">
        <h1>What Is the Legacy of Love Dog Hub?</h1>
        <div className="llhub-bottom-grid">
          <div>
            <h2>A Living, Evolving Companion Care Space</h2>
            <p>
              The Legacy of Love Living Hub is much more than a simple journal or folder of documents. It's a
              vibrant, ever-growing space that captures the full story of your dog's life. From health records and
              vet visits to daily activities and special moments, everything is thoughtfully organized in one place.
              This means you can easily track your dog's progress, celebrate milestones, and keep important
              information handy — all designed to support a long, healthy life for your companion.
            </p>
          </div>
          <div>
            <h2>Create Custom Keepsakes Anytime</h2>
            <p>
              One of the most special features of the Living Hub is the ability to turn your dog's story into a
              beautiful, personalized book. Whether you want to celebrate their first birthday, a milestone
              anniversary, or simply preserve your favorite memories and photos, you can select any section of
              the Living Hub to print as a keepsake. This tangible memento is perfect for sharing with family,
              friends, or simply treasuring for years to come.
            </p>
          </div>
          <div>
            <h2>Your Personal AI Guide</h2>
            <p>
              Mr. White isn't just a digital assistant — he's your knowledgeable partner in care. As you add stories,
              records, or questions, Mr. White learns and adapts, providing helpful reminders, tailored advice, and
              insights that make daily care simpler and more effective. Whether you're new to AI or tech-savvy, he
              guides you gently without overwhelming, helping you feel confident and connected to your dog's
              wellbeing.
            </p>
          </div>
          <div>
            <h2>Always Accessible, Always Yours</h2>
            <p>
              Your Legacy of Love Living Hub is accessible anytime and anywhere via your personal portal.
              Whether you're at home, traveling, or at the vet, you have instant access to your dog's complete
              history and care details. This exclusive feature is available only to Elite Pack members, offering
              peace of mind that your dog's story and health information are just a click away — 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Secondary Banner */}
      <div className="llhub-banner">
        <img src={image2} alt="LLhub Banner" />
      </div>

      {/* Key Areas Heading */}
      <div className="page-container">
        <h1 className="main-heading">Key Areas Organized by Mr. White</h1>

        {/* --- Third Section: Image Right, Text Left --- */}
        <div className="content-area">
          {/* Left Text */}
          <div className="text-column">
            <div className="section-block">
              <h2 className="section-title">Companion Profile Hub</h2>
              <p className="section-body">
                This is the heart of your dog's personal information. Here, Mr. White keeps important details like your dog's birthdate, breed, and veterinarian or groomer contacts neatly organized. Having this information easily accessible helps you stay on top of routine care and emergencies alike. Whether you need to quickly share health info with a new caretaker or schedule a grooming appointment, everything you need is right here.
              </p>
            </div>
            <div className="section-block">
              <h2 className="section-title">Daily and Weekly Living Log Hub</h2>
              <p className="section-body">
                Track your dog's everyday life with ease. This hub lets you log activities, moods, behaviors, and photos to capture the full picture of their wellbeing and happiness. Whether it's a playful afternoon, a change in appetite, or a special moment during a walk, you can record it all. Over time, these logs create valuable insights that help you understand patterns, celebrate joys, and address any concerns early.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="text-column">
            <img src={image3} alt="Mr. White holding a dog" className="top-image" />
            <div className="section-block">
              <h2 className="section-title">Inspirational Insights Hub</h2>
              <p className="section-body">
                Beyond practical care, this space offers thoughtful reflections, wisdom, and gentle guidance from Mr. White. Drawing on decades of experience and AI-driven understanding, it provides encouragement and ideas to deepen your bond and nurture your dog's spirit every day.
              </p>
            </div>
          </div>
        </div>

        {/* --- Fourth Section: Image Left, Text Right --- */}
        <div className="content-area reverse">
          {/* Left Image */}
          <div className="text-column">
            <img src={image4} alt="Mr. White in a golf cart with a dog" className="top-image" />
          </div>

          {/* Right Text */}
          <div className="text-column">
            <div className="section-block">
              <h2 className="section-title">End of Life Planning Hub</h2>
              <p className="section-body">
                Planning ahead with compassion, this hub supports you in preparing for your dog's final journey. It helps organize wishes, memorial ideas, and practical steps with care and sensitivity — offering peace of mind and honoring the love you share.
              </p>
            </div>
            <div className="section-block">
              <h2 className="section-title">Mr. White's AI-driven organization and updates</h2>
              <p className="section-body">
                Behind the scenes, Mr. White's intelligent system continuously organizes and updates all these hubs based on your input and ongoing data. This means your Legacy of Love Living Hub is always current, easy to navigate, and personalized — ready to support you and your dog every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
            <h1 className="story-header">Your Choice in Building Your Companion's Story</h1>

      <div className="content-wrapper">
        
        {/* Text Column */}
        <div className="text-section">
          
          <h2 className="section-title">Full Control to Customize Your Hubs</h2>
          <p className="paragraph">
            With the Legacy of Love Living Hub, you're in the driver's seat. You decide what to include, update, and highlight. Add stories that capture your dog’s personality, upload favorite photos that warm your heart, and mark important milestones—like their first steps, favorite tricks, or memorable vet visits. Every detail is yours to shape, making the Hub uniquely yours and your dog's.
          </p>
          
          <h2 className="section-title">Mr. White Adapts and Personalizes Your Journey</h2>
          <p className="paragraph">
            As you contribute, Mr. White learns from your input, tailoring the Living Hub to reflect your dog’s individuality and your relationship. He helps organize your memories and care notes into a coherent, meaningful narrative. Over time, this evolves into a unique "book" that tells the story of your companion’s life—one filled with love, growth, and shared experiences.
          </p>
          
          <h2 className="section-title">Creative Ways to Use Your Living Hub</h2>
          <p className="paragraph">
            Your hub is a versatile space that can be as simple or as rich as you like. Here are just a few ideas to inspire you:
          </p>
          
          <ul className="ideas-list">
            <li className="list-item">Travel Logs: Document your adventures together — parks visited, hikes taken, and dog-friendly destinations discovered.</li>
            <li className="list-item">Playmate Memories: Keep track of your dog’s friends, their favorite games, and funny moments shared.</li>
            <li className="list-item">Health & Behavior Journals: Record patterns in mood, appetite, or activity to help spot trends and discuss with your vet.</li>
            <li className="list-item">Training Progress: Celebrate milestones from puppy basics to advanced commands, including notes on what worked best.</li>
            <li className="list-item">Special Occasions: Capture birthdays, adoption anniversaries, holidays, and everyday celebrations with photos and stories.</li>
            <li className="list-item">Daily Moments: Jot down those small but precious moments — like the way they tilt their head or snuggle at your feet.</li>
            <li className="list-item">Seasonal Reflections: Note how your dog changes with the seasons, their favorite weather, and seasonal care tips.</li>
            <li className="list-item">Legacy Planning: Prepare thoughtful messages, wishes, or memories to share with loved ones in the future.</li>
          </ul>
        </div>
        
        {/* Image Column */}
        <div className="image-section">
          <img 
            src={ll5Image} 
            alt="Woman smiling and holding two small dogs in a cafe." 
            className="companion-image"
          />
        </div>

      </div>

   

              <h2 className="section-title">A Day with Mr. White’s Living Dog Hub</h2>
          
          <h3 className="subheading">Morning Reminder: Never Miss an Appointment</h3>
          <p className="paragraph">
            Imagine starting your day with a quick glance at your personal Legacy of Love Living Hub. Today, you have a vet appointment scheduled for your dog, Bella. Mr. White has already reminded you this morning—ensuring you won’t miss the important checkup.
          </p>

          <h3 className="subheading">Updating Health Records Made Simple</h3>
          <p className="paragraph">
            After the visit, you easily upload the vet’s notes and update Bella’s health records in the Companion Profile Hub. Mr. White automatically organizes the new information, flagging upcoming vaccinations and suggesting any needed follow-ups based on the vet’s advice.
          </p>

          <h3 className="subheading">Capturing Travel Memories</h3>
          <p className="paragraph">
            Later, during a weekend getaway, you snap a photo of Bella at her favorite dog park. You upload it to the Favorites and Travel Treasures Hub, adding a note about the fun she had chasing butterflies. Mr. White gently suggests tagging the location and friends she met there, helping you build a vivid travel log filled with joyful memories.
          </p>

          <h3 className="subheading">Timely Medication Alerts</h3>
          <p className="paragraph">
            That evening, you receive a timely medicine alert from Mr. White’s Medicine and Appointment Alerts Hub reminding you to give Bella her allergy medication. No more second-guessing or missed doses—the care stays on track effortlessly.
          </p>

          <h3 className="subheading">AI-Powered Insights Throughout Your Day</h3>
          <p className="paragraph">
            Throughout the day, Mr. White’s AI keeps learning from your entries and habits, offering personalized insights and gentle nudges to deepen your understanding of Bella’s health and happiness. By the end of the day, your Legacy of Love Living Hub feels like a true extension of your care—a smart, caring partner working alongside you every step of the way.
          </p>

        
    </div>
  );
};

export default LLhubPage;
