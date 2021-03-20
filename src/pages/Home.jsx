import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context';

const initialData = [
  'Pass first selection',
  'Tech interview to organize',
  'Tech interview organized',
  'Tech interview passed',
  'tech task assigned',
  'Tech task started',
  'Tech task completed',
  'Tech task passed',
  'You need to sign a contract now',
];

export const Home = () => {
  // context
  const { token } = useContext(Context);

  // state
  const [userId, setUserid] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState('');
  const [length, setLength] = useState('');

  const handleLength = (myStatus) => {
    switch (myStatus) {
    case '':
      setLength(1);
      break;
    case 'TI_TO_ORGANIZE':
      setLength(2);
      break;
    case 'TI_ORGANIZED':
      setLength(3);
      break;
    case 'TI_FINISHED':
      setLength(3);
      break;
    case 'TI_PASSED':
      setLength(4);
      break;
    case 'TT_ASSIGNED':
      setLength(5); /* here */
      break;
    case 'TT_COMPLETED':
      setLength(5);
      break;
    case 'TT_NOT_PASSED':
      setLength(5);
      break;
    case 'PASSED':
      setLength(1);
      break;
    case 'NOT_PASSED':
      setLength(1);
      break;
    default: setLength(1);
      break;
    }
  };

  // useeffect
  useEffect(async () => {
    if (token) {
      const id = '';
      await fetch('http://localhost:5000/auth', {
        method: 'GET',
        headers: new Headers({
          'x-auth-token': token,
          'Content-Type': 'application/json',
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
              // eslint-disable-next-line no-underscore-dangle
              setUserid(data._id);
            });
          }
        });
    }
  }, [token]);

  useEffect(async () => {
    await fetch(`http://localhost:5000/status/${userId}`, {
      method: 'GET',
      headers: new Headers({
        'x-auth-token': token,
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setStatus(data.status);
          });
        }
      });
    setLoaded(true);
  }, [userId]);

  useEffect(() => {
    console.log('....................', typeof status);
    // func that change switch here
    handleLength(status);
  }, [status]);

  return (
    <h1>
      {
        initialData[length]
      }

    </h1>
  );
};

export default Home;
