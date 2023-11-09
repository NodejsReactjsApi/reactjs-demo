const API_URL = process.env.REACT_APP_API_URL;

export async function handleSaveUser (userData) {
  try {
    const response = await fetch(`${API_URL}/user/save-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      console.log('Kullanıcı başarıyla kaydedildi.');
    } else {
      console.error('Kullanıcı kaydetme başarısız.');
    }
  } catch (error) {
    console.error('Bir hata oluştu:', error);
  }
};
