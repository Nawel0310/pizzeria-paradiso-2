import Menu from './Menu';
import menuData from '@/utils/MenuComidas.json';

const MenuOtros = () => {
  const { comidas } = menuData; // Extraemos las comidas del JSON

  return (
    <Menu 
      idModal="otraComidaModal" 
      titulo="Menú de Otras Comidas" 
      items={comidas} 
    />
  );
};

export default MenuOtros;
