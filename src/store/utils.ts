
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

function addChildToParent(objects: any[]): any[] {
    const objectMap: Record<string, any> = {};
    const newObjects: any[] = [];
  
    // Create a map of objects using their IDs
    for (const obj of objects) {
      objectMap[obj.id] = obj;
    }
  
    // Iterate over the objects and add child to parent if it exists
    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i];
      if (obj.type === 'Child' && obj.parent && objectMap[obj.parent]) {
        const parent = objectMap[obj.parent];
        if (!parent.child) {
          parent.child = [];
        }
        // Check if child object already exists in parent's 'child' array
        const existingChild = parent.child.find((child: { id: any; }) => child.id === obj.id);
        if (!existingChild) {
          parent.child.push(obj);
        }
      } else {
        newObjects.push(obj); // Add the object to the newObjects array
      }
    }
  
    return newObjects;
  }
  

export {setDataParents, setDataChild, trimChild, findObjectById, removeIdField, searchItemsByParent, addChildToParent}
//Temp.slice(0, 4)