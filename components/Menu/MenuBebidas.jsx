import Menu from './Menu';
import menuData from '@/utils/MenuBebidas.json';

const MenuBebidas = () => {
  const { bebidas } = menuData; // Extraemos las bebidas del JSON

  return (
    <Menu 
      idModal="bebidasModal" 
      titulo="Menú de Bebidas" 
      items={bebidas} 
    />
  );
};

export default MenuBebidas;