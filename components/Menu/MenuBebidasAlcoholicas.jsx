import Menu from './Menu';
import menuData from '@/utils/MenuBebidasAlcoholicas.json';

const MenuBebidasAlcoholicas = () => {
  const { bebidasAlcoholicas } = menuData; // Extraemos las bebidas del JSON

  return (
    <Menu 
      idModal="bebidasAlcoholicasModal" 
      titulo="Menú de Bebidas Alcohólicas" 
      items={bebidasAlcoholicas} 
    />
  );
};

export default MenuBebidasAlcoholicas;