// ErrorPage.js
import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error); // Log the error for debugging purposes

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message || 'Unknown error'}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
