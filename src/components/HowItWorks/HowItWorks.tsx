import styles from './HowItWorks.module.scss';

const STEPS = [
  {
    number: '01',
    title: 'Κάθε θέση +1€',
    description:
      'Η πρώτη συμμετοχή ξεκίνησε από 1€. Κάθε νέα συμμετοχή κοστίζει 1€ περισσότερο από την προηγούμενη.',
  },
  {
    number: '02',
    title: 'Απευθείας στην κορυφή',
    description:
      'Με την ολοκλήρωση της πληρωμής, το όνομα και ο σύνδεσμός σου εμφανίζονται αμέσως στη #1 θέση.',
  },
  {
    number: '03',
    title: 'Μόνιμη παρουσία',
    description:
      'Όταν κάποιος σε ξεπεράσει, μετακινείσαι μία θέση πιο κάτω αλλά το προφίλ και το link σου παραμένουν ενεργά.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.header}>
        <h2>Πώς λειτουργεί</h2>
      </div>

      <div className={styles.grid}>
        {STEPS.map((step) => (
          <div key={step.number} className={styles.card}>
            <span className={styles.num}>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}