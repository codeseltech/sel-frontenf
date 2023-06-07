import Faq from 'react-faq-component';
const data = {
  title: 'Top FAQ ',
  rows: [
    {
      title: `How are the SEL online courses delivered ?`,
      content: `We offer self-paced and live courses on the SEL Online course platform. Our platform features short, well-produced videos from SEL instructors and guest experts from the business community, interactive diagrams and exercises, and case-based learning to keep you engaged.We have a very efficient chat-based response system to students' questions.`,
    },
    {
      title: 'How do I register for a course?',
      content: `For all programs, you will need to complete a short application.After you submit your application, visit the featured courses and select a course that interests you.You can begin learning through our free demos and then purchase a course to learn it fully.`,
    },
    {
      title: `What payment options do I have?`,
      content: `We accept payments via net banking, credit card, debit card, UPI and all other possible payment options.`,
    },
  ],
};

const styles = {
  bgColor: '#fff',
  titleTextColor: 'blue',
  rowTitleColor: '#2196f3',
  rowContentColor: '#0f172a',
  arrowColor: '#e91e63',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '10px',
  transitionDuration: '1s',
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
  expandIcon: '+',
  collapseIcon: '-',
};

export const TopFAQs = () => {
  return (
    <section className='topFAQs-section'>
      <section className='faq-section'>
        <div>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </section>
    </section>
  );
};
