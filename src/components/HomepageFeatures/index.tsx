import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h3>About me</h3>
          <p>
            This is a collection of my personal thoughts, personal logs, goals and acheivements. I have also included some blog posts which I have written over time.
            The concept of self-quantification and self-improvement is something in which I have been interested in for a long time.
            
            I would like to credit a lot to <a href="https://github.com/nikitavoloboev">Nikita</a> as his personal website gave me the idea to continue with this project.
          </p> 
          <p>Made with love using <a href="https://docusaurus.io/">Docusaurus</a> </p>
        </div>
      </div>
    </section>
  );
}
