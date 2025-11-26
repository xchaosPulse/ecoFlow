import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SubsidyCalculator = () => {
  const { t } = useTranslation();
  const [rent, setRent] = useState(0);
  const [subsidy, setSubsidy] = useState(45500);

  const handleRentChange = (event) => {
    setRent(event.target.value);
  };

  const calculateSubsidy = () => {
    // This is a placeholder for the actual calculation.
    // The logic will depend on how rent affects the subsidy.
    if (rent > 0) {
      setSubsidy(subsidy * 1.2); // Increase subsidy by 20% if rent is removed
    } else {
      setSubsidy(45500);
    }
  };

  return (
    <div>
      <h2>{t('subsidy_calculator.title')}</h2>
      <label>
        {t('subsidy_calculator.rent_amount')}
        <input type="number" value={rent} onChange={handleRentChange} />
      </label>
      <button onClick={calculateSubsidy}>{t('subsidy_calculator.calculate_subsidy')}</button>
      <p>{t('subsidy_calculator.estimated_subsidy')}{subsidy}</p>
    </div>
  );
};

export default SubsidyCalculator;
