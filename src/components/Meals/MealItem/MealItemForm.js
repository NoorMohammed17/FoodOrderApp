import React from 'react';

import styles from "./MealItemForm.module.css";
import Input from '../../UI/Input';



const MealItemForm = (props) => {



  return (
    <form className={styles.form} 
    // onSubmit={submitHandler}
    >
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {/* {!amountIsValid && <p>Please enter a valid amount (1-5).</p>} */}
    </form>
  );
};

export default MealItemForm;
