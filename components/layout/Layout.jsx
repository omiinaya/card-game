import Head from 'next/head';

/* Components */
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Layout({
  children,
  title = 'Next.js with Sequelize | A boilerplate from dyarfi.github.io',
  description = 'Next.js with Sequelize | A boilerplate Next.js and Sequelize from dyarfi.github.io',
  keywords = 'Next.js, Sequelize, ORM, JWT, Json Web Tokens, Authentication, Application',
  type = 'object',
  url = '/',
  image = '/nextjs.svg',
  origin = '',
}) {
  return (
    <div>
      {children}
    </div>
  );
}
