import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Fino i friško',
    price: 30.00,
  },
  {
    id: 'm2',
    name: 'Šnicl',
    description: 'Njemački specijalitet!',
    price: 20.00,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'Fino i sočno',
    price: 25.00,
  },
  {
    id: 'm4',
    name: 'Čarobna zdjela',
    description: 'Samo zdravo',
    price: 18.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
