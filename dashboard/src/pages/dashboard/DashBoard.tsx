
import { BarraDeFerramentas } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layout';


export const DashBoard = () => {
    
  return(
    <LayoutBaseDePagina 
      titulo='Página Inicial' 
      barraDeFerramentas={(
        <BarraDeFerramentas 
          mostrarInputBusca 
        />
      )}>
        TESTE
    </LayoutBaseDePagina>
  );
};