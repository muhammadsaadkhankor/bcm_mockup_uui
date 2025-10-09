const initialUsers = [
  {
    id: 1,
    email: "demo@bcm.com",
    password: "demo123",
    name: "Alex Johnson",
    phone: "+1234567890",
    dailyGoal: 2000,
    createdAt: "2024-01-15"
  }
];

class AuthService {
  constructor() {
    this.users = JSON.parse(localStorage.getItem('bcm_users')) || initialUsers;
  }

  signIn(emailOrPhone, password) {
    const user = this.users.find(u => 
      (u.email === emailOrPhone || u.phone === emailOrPhone) && u.password === password
    );
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true, user };
    }
    return { success: false, error: 'Invalid credentials' };
  }

  createAccount(emailOrPhone, password, name) {
    const isEmail = emailOrPhone.includes('@');
    const isPhone = /^[+]?[0-9\s\-\(\)]+$/.test(emailOrPhone);
    
    if (this.users.find(u => u.email === emailOrPhone || u.phone === emailOrPhone)) {
      return { success: false, error: 'Email or phone already exists' };
    }
    
    const newUser = {
      id: this.users.length + 1,
      email: isEmail ? emailOrPhone : '',
      phone: isPhone ? emailOrPhone : '',
      password,
      name,
      dailyGoal: 2000,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    this.users.push(newUser);
    localStorage.setItem('bcm_users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return { success: true, user: newUser };
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  signOut() {
    localStorage.removeItem('currentUser');
  }
}

export default new AuthService();