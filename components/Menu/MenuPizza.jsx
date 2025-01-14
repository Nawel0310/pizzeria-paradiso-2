import Menu from './Menu';
import menuData from '@/utils/MenuPizza.json';

const MenuPizza = () => {
  const { pizzas } = menuData; // Extraemos las pizzas del JSON

  return (
    <Menu 
      idModal="pizzaModal" 
      titulo="Menú de Pizzas" 
      items={pizzas} 
    />
  );
};

export default MenuPizza;
