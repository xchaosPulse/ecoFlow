import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import BudgetChart from './components/BudgetChart';
import SubsidyCalculator from './components/SubsidyCalculator';
import MoneyCycle from './components/MoneyCycle';
import HistoricalChart from './components/HistoricalChart';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fa')}>فارسی</button>
      </div>
      <h1>{t('title')}</h1>
      <BudgetChart />
      <SubsidyCalculator />
      <MoneyCycle />
      <HistoricalChart />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
