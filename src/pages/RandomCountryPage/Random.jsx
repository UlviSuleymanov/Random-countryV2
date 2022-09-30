import React, { useState } from 'react';
import Content from '../../components/Content/Content';
import styles from './styles/random.module.css';

const Random = (props) => {
  const [info, setInfo] = useState([]);

  const fillInfo = () => {
    props.randomCountry();
    setInfo(props.countries[props.number]);
  };

  console.log(info);
  return (
    <div className={styles.wrapper}>
      {info !== undefined && (
        <div className={styles.wrapper_info}>
          {info.length === 0 ? (
            <Content />
          ) : (
            <div className={styles.info}>
              <div className={styles.flags}>
                <div className={styles.flags_info}>
                  {info.population && (
                    <img className={styles.country_flag} src={info.flags.png} alt="flag" />
                  )}
                  {info.population && info.coatOfArms.length !== null ? (
                    <img
                      className={styles.coat_of_arms}
                      src={info.coatOfArms.png}
                      alt="coat of arms"
                    />
                  ) : (
                    ''
                  )}
                </div>
                <div className={styles.demir_wrapper}>
                  {info.name.common === 'Azerbaijan' ? (
                    <img
                      className={styles.demir}
                      src="https://c.tenor.com/lfAgTnnaTvgAAAAC/aliyev-demir-yumruq.gif"
                      alt="Demir yumrug yerindedir"
                    />
                  ) : (
                    ''
                  )}
                  {info.name.common === 'Azerbaijan' ? (
                    <h3 className={styles.demir_slogan}>Dəmir yumruğ heç yerə getməyib!</h3>
                  ) : (
                    ''
                  )}
                </div>
                <div className={styles.country_namewrapper}>
                  <h4 className={styles.countryinfo}>
                    Rəsmi Adı : {info.population && info.name.official}
                  </h4>
                  <h4 className={styles.countryinfo}>
                    Adı : {info.population && info.name.common}
                  </h4>
                  <h4 className={styles.countryinfo}>
                    Paytaxtı : {info.population && info.capital}
                  </h4>
                  <h4 className={styles.countryinfo}>
                    Əhalisi : {info.population && info.population}
                  </h4>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <button className={styles.btn} onClick={() => fillInfo()}>
        Randomize
      </button>
    </div>
  );
};

export default Random;
