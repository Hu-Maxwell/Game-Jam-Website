import styles from "./faqsmall.module.css"

const FaqSmall = () => {
    return (
        <section className={styles.faq}>
            <h2>FAQ</h2>
            <h3>Where will this take place?</h3>
            <p>In-person, at SSB in rooms 160, 130, and 120. The opening ceremony will take place at 8PM in 160.</p>
            <h3>What can we use?</h3>
            <p>Anything&mdash;Unity, Godot, Unreal, GameMaker, etc.&mdash;as long as we can play it standalone as an exe.</p>
            <h3>Should I know how to code?</h3>
            <p>No! A team can make do with less than 4 developers, and we're usually short on roles like music, SFX, and artists in general. So no, you don't need to code as long as you can contribute something to your team's game.</p>
            <h3>Do I need a team beforehand?</h3>
            <p>Nope. You can bring friends if you want, but we will have a team mixer on the opening ceremony to get you to form teams with other participants.</p>
            <h3>What will we be doing?</h3>
            <p>We'll have a team mixer, team presentations throughout the jam including a pitch meeting, and a lot of time alongside our knowledgeable officers to develop your game in SSB.</p>
            <h3>Will there be food?</h3>
            <p>Yes! We'll be serving pizza and sandwiches the whole weekend. Also cookies and snacks!</p>
            <h3>Where do we submit?</h3>
            <p>You will submit your games and set up a page at <a href={"https://itch.io/jam/uc-merced-gdc-game-jam-2025"}>itch.io</a>.</p>
            <h3>Prizes?</h3>
            <p>Yep! For all 4 team members, for games up to 3rd place.</p>
            <h3>OK...What are the prizes?</h3>
            <p>:)</p>
        </section>
    );
};

export default FaqSmall; 

// do i name it FAQSmall or FaqSmall???
