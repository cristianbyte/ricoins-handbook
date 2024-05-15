import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Merit-Based Points System',
    //https://undraw.co/
    Svg: require('@site/static/img/celebration.svg').default,
    description: (
      <>
        RiCoins employs a merit-based points system to reward developers within Riwi, promoting excellence and motivation.
      </>
    ),
  },
  {
    title: 'User and Role Management',
    //https://undraw.co/
    Svg: require('@site/static/img/goals.svg').default,
    description: (
      <>
        RiCoins API offers robust user and role management capabilities, facilitating precise control over access and permissions.
      </>
    ),
  },
  {
    title: 'CRUD Operations for Core Entities',
    //https://undraw.co/
    Svg: require('@site/static/img/publish.svg').default,
    description: (
      <>
        RiCoins API enables CRUD operations on essential entities like coins, users, roles, and modules, streamlining data management and integration tasks.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
