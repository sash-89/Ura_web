import React, { useState } from 'react';
import classes from './categories.module.scss';
import Wrapper from '../../_src/components/_common/Wrapper';
import Breadcrumbs from '../../_src/components/breadcrumbs/breadcrumbs';
import demoData from '../../demoData';
import SearchInput from '../../_src/components/form/SearchInput';
import SearchNotFound from '../../_src/components/searchNotFound/searchNotFound';

const links = [{
  link: '/',
  title: 'Home ',
}, {
  link: '/categories',
  title: 'All Categories',
}];

const Index = () => {
  const [searchingValue, setSearchingValue] = useState('');

  return (
    <Wrapper>
      <div className={classes.wrapper}>

        <Breadcrumbs links={links} />

        <div className={classes.input_wrapper}>
          <SearchInput value={searchingValue} onChange={setSearchingValue} />
        </div>

        <div className={classes.categories_wrapper}>
          {false
            ? demoData.categories1.map((category) => (
              <div key={category.id} className={classes.category_wrapper}>
                <div className={classes.category_image_wrapper}>
                  <img
                    alt="category image"
                    src={category.img}
                  />
                </div>

                <p className={classes.category_title}>
                  {category.title.toLowerCase().trim().includes(searchingValue.toLowerCase().trim())
                    ? (
                      <>
                        <span>
                          {category.title.substr(
                            0, category.title.toLowerCase().indexOf(searchingValue.toLowerCase().trim()),
                          )}
                        </span>

                        <span className={classes.matchedLetters}>
                          {category.title.substr(
                            category.title.toLowerCase().indexOf(searchingValue.toLowerCase().trim()),
                            searchingValue.trim().length,
                          )}
                        </span>

                        <span>
                          {category.title.substr(
                            category.title.toLowerCase().indexOf(searchingValue.toLowerCase().trim()) + searchingValue.trim().length,
                            category.title.length,
                          )}
                        </span>
                      </>
                    )
                    : (
                      <span>
                        {category.title}
                      </span>
                    )}
                </p>
              </div>
            ))

            : <SearchNotFound value={searchingValue} />}
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
