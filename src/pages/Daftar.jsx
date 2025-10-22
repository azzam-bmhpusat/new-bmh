import { useState } from 'react';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';

const Daftar = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:2025/api/register', formData);
      setMessage('Registrasi berhasil! Silakan login.');
    } catch (err) {
      console.error(err);
      setMessage('Terjadi kesalahan saat registrasi.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 font-nunito">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-center">Daftar</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold">Username:</label>
            <input type="text" name="username" placeholder="Example: Alex" value={formData.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" required />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Example: &@NuB*4877"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <div className="absolute inset-y-0 flex items-center cursor-pointer right-3" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>

          <button type="submit" className="w-full py-2 text-white transition bg-orange-400 rounded-full hover:bg-orange-600 focus:outline-2 focus:outline-offset-2 focus:outline-orange-400 active:bg-orange-900">
            Daftar
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-center text-gray-600">{message}</p>}

        <p className="mt-4 text-sm text-center text-gray-600">
          Sudah punya akun?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Masuk disini
          </a>
        </p>
      </div>
    </div>
  );
};

export default Daftar;
