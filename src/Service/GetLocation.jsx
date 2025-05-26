import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';
const GetLocation = () => {
  const [coords, setCoords] = useState({ latitude: '', longitude: '' });
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get user's location
  const handleGetLocation = () => {
    setError('');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setError('Location access denied or unavailable.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const handleGetAddress = async () => {
    setLoading(true);
    setError('');
    setAddress('');
    try {
      const response = await axios.post(
        `${config.BASE_URL}/sourcing/get-address`,
        // http://192.168.230.212:3000/api/v1/sourcing/get-address"

        {
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        {
          headers: {
            authorization: 'Bearer 0b45c9e7f3f25ea55fc33c1f8b6dd1d1cbb6fffbf08aa4c79a78088a7b379da2',
            'Content-Type': 'application/json'
          }
        }
      );
      setAddress(typeof response.data === 'string' ? response.data : JSON.stringify(response.data, null, 2));
    } catch {
      setError('Failed to fetch address.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <button
        onClick={handleGetLocation}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
      >
        Get My Location
      </button>
      <div className="mb-2">
        <label>Latitude:</label>
        <input
          className="border p-1 ml-2"
          type="text"
          value={coords.latitude}
          readOnly
        />
      </div>
      <div className="mb-2">
        <label>Longitude:</label>
        <input
          className="border p-1 ml-2"
          type="text"
          value={coords.longitude}
          readOnly
        />
      </div>
      <button
        onClick={handleGetAddress}
        className="px-4 py-2 bg-green-600 text-white rounded mb-4"
        disabled={!coords.latitude || !coords.longitude || loading}
      >
        {loading ? 'Fetching Address...' : 'Get Address from API'}
      </button>
      {address && (
        <div className="mt-2 p-2 bg-gray-100 border rounded">
          <strong>API Result:</strong>
          <pre className="whitespace-pre-wrap">{address}</pre>
        </div>
      )}
      {error && (
        <div className="mt-2 text-red-600">{error}</div>
      )}
    </div>
  );
};

export default GetLocation;