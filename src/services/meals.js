const defaultMeals = {
  1: [ // demo user meals
    { time: '8:30 AM', name: 'Oatmeal with berries', calories: 320, type: 'Breakfast', date: new Date().toISOString().split('T')[0] },
    { time: '12:45 PM', name: 'Grilled chicken salad', calories: 450, type: 'Lunch', date: new Date().toISOString().split('T')[0] },
    { time: '3:15 PM', name: 'Apple and almonds', calories: 180, type: 'Snack', date: new Date().toISOString().split('T')[0] }
  ]
};

class MealService {
  constructor() {
    this.meals = JSON.parse(localStorage.getItem('bcm_meals')) || defaultMeals;
  }

  getUserMeals(userId) {
    return this.meals[userId] || [];
  }

  addMeal(userId, meal) {
    if (!this.meals[userId]) {
      this.meals[userId] = [];
    }
    this.meals[userId].push({
      ...meal,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    });
    localStorage.setItem('bcm_meals', JSON.stringify(this.meals));
  }

  getTodaysMeals(userId) {
    const today = new Date().toISOString().split('T')[0];
    return this.getUserMeals(userId).filter(meal => meal.date === today);
  }

  getTotalCaloriesToday(userId) {
    return this.getTodaysMeals(userId).reduce((sum, meal) => sum + meal.calories, 0);
  }
}

export default new MealService();