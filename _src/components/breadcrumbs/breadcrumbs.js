import React, { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classes from './breadcrumbs.module.scss';

const Breadcrumbs = ({ links = [] }) => (
  <div className={classes.wrapper}>
    {links.map(({ link, title }, index) => (
      <Fragment key={link}>
        <Link href={link}>
          <a className={classes.title}>
            {title}
          </a>
        </Link>

        {index !== links.length - 1 && <div className={classes.slash}>/</div>}
      </Fragment>
    ))}
  </div>
);

Breadcrumbs.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Breadcrumbs;
