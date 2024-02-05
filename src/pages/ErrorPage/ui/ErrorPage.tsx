import { Link, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      {/* @ts-ignore */}
      <div style={styles.container}>
        {/* @ts-ignore */}
        <h1 style={styles.heading}>Ошибка {error.statusText} {error.message}</h1>
        <p style={styles.message}>Что-то пошло не так...</p>
        <Link to='/' >На главную</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f8f8f8',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  message: {
    fontSize: '16px',
    color: '#666',
  },
};
