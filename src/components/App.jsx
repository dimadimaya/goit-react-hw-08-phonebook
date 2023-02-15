// // import { ContactForm } from './ContactForm/ContactForm';
// // import { ContactList } from './ContactList/ContactList';
// // import { Filter } from './Filter/Filter';
// import styles from './App.module.css';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { RegisterForm } from './RegisterForm/RegisterForm';

// export const App = () => {
//   // const dispatch = useDispatch();
//   // const isLoading = useSelector(selectIsLoading);
//   // const error = useSelector(selectError);

//   // useEffect(() => {
//   //   dispatch(fetchContacts());
//   // }, [dispatch]);

//   return (
//     <div className={styles.phonebook}>
//       <RegisterForm />
//       {/* <h1>Phonebook</h1> */}
//       {/* <ContactForm /> */}
//       {/* <h2>Contacts</h2> */}
//       {/* <Filter /> */}
//       {/* {isLoading && !error && <b>Request in progress...</b>} */}
//       {/* <ContactList /> */}
//     </div>
//   );
// };
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/auth.operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  console.log(isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
