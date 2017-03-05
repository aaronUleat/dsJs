(function(){
    function List() {
        this.listSize   = 0;
        this.pos        = 0;
        this.dataStore  = [];
        this.clear      = clear;
        this.find       = find;
        this.toString   = toString;
        this.insert     = insert;
        this.append     = append;
        this.remove     = remove;
        this.front      = front;
        this.end        = end;
        this.prev       = prev;
        this.next       = next;
        this.length     = length;
        this.currPos    = currPos;
        this.moveTo     = moveTo;
        this.getElement = getElement;
        this.length     = length;
        this.contains   = contains;
    }

    // La primera funcion a implementar va ser append(). Esta funcion adjunta un nuevo elemento sobre la lista
    // en la siguiente posicion, la cual va ser igual al valor de la propiedad listSize

    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

    // Despues de que el emento sea agregado, listSize va ser incrementado a 1 ++;

    // REMOVER UN ELEMENTO DE LA LISTA
    // remove() es uno de la funciones mas dificiles de implementar. Primero tenemos que encontrar el elemento en
    // la lista y despues temenos que removerlo y ajustar el espacio en el array adyacente para llenar el hueco
    // vacio que se dijo por remover el elemento. Sin embargo, podemos simplificar el proceso utilizando el metodo
    // splice(). Para empezar vamos a definir el helper function, find(), para encontrar el elemento a borrar

    function find(element) {
        for(var i = 0; i < this.dataStore.length; ++i) {
            if(this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    // FIND: Encontrando un elemento en la lista.
    // La funcion find simplemente itera sobre dataStore buscando por el elemento especificado. Si el elemento es
    // encontrado la funcion retorna la posicion donde el elemento fue encontrado. Si el elemento no fue encontrado
    // retorna -1, el cual es un valor standard cuando no se encuentra un elemento dentro del array. Podemos utilizar
    // este valor como un error cuando se esta chequiando la funcion remove()

    // La funcion remove() utiliza la posicion que retorna la funcion find() para splice dataStore arrray en el lugar.
    // Despues de que el array es modificado, listSize es decrecido por 1 para reflejar el nuevo tamano de la lista.
    // La funcion retorna true si un elemento es removido. y false de otro modo.

    function remove(element) {
        var foundAt = this.find(element);
        if(foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    // Length: Determina el numero de elementos en la lista

    function length() {
        return this.listSize;
    }

    // toString: Recobra una lista de los elementos dentro del array.

    function toString() {
        return this.dataStore;
    }

    // Esta funcion retorna un objeto array y no un string, pero su utilidad es proveer una vista del estado
    // corriente de un objeto. y solo retonrar el array funciona adecuanamente para este proposito


    // Insertar: Insertar un elemento dentro de la lista
    // La siguiente funcion a discutir es insert(). Que pasa si, despues de remover a Raymond de la lista,
    // decidimos que necesitamos pornelo de vuelta en el indice que estaba antes. Y una funcion de insercion
    // necesita saber donde insertar un elemento, por ahora vamos a decir que la insercion ocurre despues de
    // un elemento especificado en la lista. Con esto en mente, esta es la definicion de inser()

    function insert(element, after) {
        var insertPos = this.find(after);
        if(insertPos > -1) {
            this.dataStore.splice(insertPos+1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }

    // insert() usa la funcion de ayuda find() para determinar la insercion en la posicion correcta para el
    // nuevo elemento, encontrando el elemento especificoen el argumento after. Una vez esta posicion es encontrada
    // utilizamos shift() para insertar el nuevo elemento dentro de la lista. Despues incrementamos listSize por 1
    // y retornamos true para indicar que la insercion fue realizada correctamente

    // CLEAR: Removiendo todos los elementos de la lista
    // Necesitamos una funcion para limpiar la lista y que permita que nuevos elementos sean ingresados.

    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    // La funcion clear() usa el operador delete para eleminar el array dataStore, y despues reasigna a un array
    // vacio. La ultima linea encaja los valorwes listSize y pos a 0, indicando que se esta iniciando una nueva lista

    // CONTAINS: Determinando si un valor dado esta en la lista
    // La funcion contains() es util cuando se quiere chekear si un valor es parte de la lista

    function contains(element) {
        for(var i = 0; i < this.dataStore.length; ++i) {
            if(this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

    // TRAVERSING A LIST

    // Este es final set de funciones que permiten moviento dentro de la lista, y la ultima funcion, getElement();
    // despliega el elemento current en la lista

    function front() {
        this.pos = 0;
    }
    function end() {
        this.pos = this.listSize-1;
    }

    function prev() {
        if(this.pos > 0) {
            --this.pos;
        }
    }

    function next() {
        if(this.pos < this.listSize-1) {
            ++this.pos;
        }
    }

    function currPos() {
        return this.pos;
    }

    function moveTo(position) {
        this.pos = position;
    }

    function getElement() {
        return this.dataStore[this.pos];
    }

    var names = new List();
    names.append("Clayton");
    names.append("Raymond");
    names.append("Cynthia");
    names.append("Jennifer");
    names.append("Bryan");
    names.append("Danny");

    names.front();
    console.log(getElement());

})();















