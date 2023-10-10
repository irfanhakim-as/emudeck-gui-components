import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

function PegasusTheme({ onClick, themes }) {
  const { state } = useContext(GlobalContext);

  const { themePegasus } = state;

  return (
    <>
      <p className="lead">
        We install a curated list of themes for Pegasus, please choose your
        default theme.
      </p>
      <Main>
        <div className="cards cards--maxi">
          {themes && (
            <>
              {Object.values(themes).map((item) => {
                const author = item.autor;
                const { name } = item;
                const { screenshots } = item;
                const { url } = item;

                // eslint-disable-next-line consistent-return

                return (
                  <Card
                    css={url === themePegasus && 'is-selected'}
                    key={name}
                    onClick={() => onClick(url)}
                  >
                    <img src={screenshots[0]} alt={name} />
                    <img className="fade" src={screenshots[1]} alt={name} />
                    <span className="h6">
                      {name} by {author}
                    </span>
                  </Card>
                );
              })}
            </>
          )}
        </div>
      </Main>
    </>
  );
}

PegasusTheme.propTypes = {
  onClick: PropTypes.func,
};

PegasusTheme.defaultProps = {
  onClick: '',
};

export default PegasusTheme;
