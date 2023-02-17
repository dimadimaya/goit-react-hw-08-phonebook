import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux/';
import { addContact } from 'redux/contacts/operations';
import { useState } from 'react';
import { selectContacts } from 'redux/contacts/selectors';

import Typography from '@mui/material/Typography';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedName = name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(
      addContact({
        name: name,
        number: number,
      })
    );
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          textAlign: 'center',
          color: 'rgb(0, 128, 255)',
          fontWeight: '600',
          margin: '16px 0',
        }}
      >
        Welcome in your Phonebook
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name
          <input
            value={name}
            onChange={handleChangeName}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Tel
          <input
            value={number}
            onChange={handleChangeNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={styles.btn} type="submit">
          add contact
        </button>
      </form>
    </>
  );
};
