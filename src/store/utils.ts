function setDataParents(data: any) {
    let Temp: any[] = []
    data.forEach((element: { type: string; }) => {
        if (element.type === "Parent") {
            Temp.push(element)
        }
    });
    return Temp
}

function findObjectById(id: any, arrayOfObjects: any[]) {
    return arrayOfObjects.find(obj => obj.id === id) || null;
}

const searchItemsByParent = (parent: string, items: any[]): any[] => {
    const filteredItems = items.filter((item) => item.parent === parent);
    return filteredItems;
  };
  

function setDataChild(data: any) {
    let Temp: any[] = []
    data.forEach((element: { type: string; }) => {
        if (element.type != "Parent") {
            Temp.push(element)
        }
    });
    return Temp
}

function trimChild(data: any){
    return data.slice(0,4)
}

function removeIdField(data: any[]): any[] {
    return data.map(obj => {
      const { $id, ...rest } = obj;
      return rest;
    });
  }
  

export {setDataParents, setDataChild, trimChild, findObjectById, removeIdField, searchItemsByParent}
//Temp.slice(0, 4)