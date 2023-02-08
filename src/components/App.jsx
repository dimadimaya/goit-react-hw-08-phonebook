// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import styles from './App.module.css';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
import { RegisterForm } from './RegisterForm/RegisterForm';

export const App = () => {
  return (
    <div>
      <RegisterForm />
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <h2>Contacts</h2>
      {/* <Filter /> */}
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      {/* <ContactList /> */}
    </div>
  );
};
