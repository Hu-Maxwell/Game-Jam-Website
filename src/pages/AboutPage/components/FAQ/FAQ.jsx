import styles from "./FAQ.module.css";

const FAQ = () => {
  const faqList = [
    {
      question: "Where will this take place?",
      answer: `  In-person, at SSB in rooms 160, 130, and 120. The opening ceremony will take place at 8PM in 160.`,
    },
    {
      question: "What can we use?",
      answer: `  Anything - Unity, Godot, Unreal, GameMaker, etc. - as long as we can play it standalone as an exe.`,
    },
    {
      question: "Should I know how to code?",
      answer: `  No! A team can make do with less than 4 developers, and we're usually short on roles like music, SFX, and artists in general. 
  So no, you don't need to code as long as you can contribute something to your team's game.`,
    },
    {
      question: "Do I need a team beforehand?",
      answer: `  Nope. You can bring friends if you want, but we will have a team mixer on the opening ceremony to get you to 
  form teams with other participants.`,
    },
    {
      question: "What will we be doing?",
      answer: `  We'll have a team mixer, team presentations throughout the jam including a pitch meeting, and a lot of time 
  alongside our knowledgeable officers to develop your game in SSB.`,
    },
    {
      question: "Will there be food?",
      answer: `  Yes! We'll be serving pizza and sandwiches the whole weekend. Also cookies and snacks!`,
    },
    {
      question: "Where do we submit?",
      answer: `  You will submit your games and set up a page at ["https://itch.io/jam/uc-merced-gdc-game-jam-2025"]itch.io`,
    },
    {
      question: "Prizes?",
      answer: `  Yep! For all 4 team members, for games up to 3rd place.`,
    },
    {
      question: "OK...What are the prizes?",
      answer: `  :)`,
    },
  ];

  return (
    <div className={styles.faqContainer}>
      {faqList.map((item, index) => (
        <details key={index} className={styles.faqItem}>
          <summary className={styles.question}>{item.question}</summary>
          <div className={styles.answer} style={{ whiteSpace: "pre-wrap" }}>
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
};

export default FAQ;
