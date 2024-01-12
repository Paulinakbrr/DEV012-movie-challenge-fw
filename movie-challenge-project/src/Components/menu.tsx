function Menu() {


    return (
    <>
    <div className="menu">   

    <label htmlFor="filtrar-por">Filtrar</label>
    <select>
      <option value="nada">Selecciona una opción</option>
      <option value="director">Director</option>
      <option value="año">x</option>
      <option value="y">y</option>
      <option value="z">z</option>
    </select>

    <label htmlFor="ordenar-por">Ordenar</label>
    <select>
      <option value="nada">Selecciona una opción</option>
      <option value="x">x</option>
      <option value="y">y</option>
      <option value="z">z</option>
    </select>

    <button className="home-button">Home</button> 
    </div>
    </>)
  }

export default Menu;

/*
   <div id="menu">

      <!--Puedo filtrar por una sola opcion o mas. Debo identificar-->
      <div id="filtros">
      <label for="filtrar-por">Filtrar</label>
      <select name="filtro" id="filtrar-por">
      <option value="nada">Selecciona una opción</option>
      <option value="director">Director</option>
      <option value="año">x</option>
      <option value="y">y</option>
      <option value="z">z</option>
      </select>
      </div>

    <!--Puedo ordenar por una sola opcion o mas. Debo identificar-->
    <div id="orden">
    <label for="ordenar-por">Ordenar</label>
    <select name="alfabet" id="ordenar-por">
      <option value="nada">Selecciona una opción</option>
      <option value="x">x</option>
      <option value="y">y</option>
      <option value="z">z</option>
      </select>
      </div>

    <!--Boton para borrar los filtros y orden ejecutados-->  
    <button class="clear-button">Limpiar</button>
    </div>
*/