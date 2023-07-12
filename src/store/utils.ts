
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

function trimChild(data: any) {
  return data.slice(0, 4)
}

function removeIdField(data: any[]): any[] {
  return data.map(obj => {
    const { $id, ...rest } = obj;
    return rest;
  });
}

function sortData(jsonData: any[]): any[] {
  const typeOrder = [
    "Wires",
    "Flexible wires",
    "Hook Up Wires",
    "Multimeter Test Prod Wires",
    "Speaker Wires",
    "Cables",
    "CCTV Cables",
    "Co Axial Cables",
    "Microphone Cables",
    "Multicore Power Cables",
    "Multicore Sheilded Cables",
    "Multicore Unsheilded Cables",
    "Moulded Cords",
    "2 Pin Mains Cord",
    "2 Pin Cord With C7 Connector",
    "3 Pin Mains Cord",
    "3 Pin Cord w/C13 Connector",
    "3 Pin Cord w/C13 Connector R/A",
    "3 Pin Cord w/C5 Connector (Laptop Cord)",
    "3 Pin Cord w/C13 Connector (Earth T)",
    "3 Pin Extension Type Male- Female Moulded Cord (C14 to C13)",
    "3 Pin Mains Cord 16 amps",
    "3 Pin 16 Amps Cord With C19 Connector",
    "3 Pin 16 Amps Cord With C19 Connector R/A",
    "2 Pin Mains Cord US Type Flat Pin",
    "3 Pin Plug UK Type With Fuse",
    "3 Pin Plug UK type With Fuse W/C13 Connector",
    "DC Cord Male - Female Moulded",
    "2 RCA & 3 RCA Cords",
    "BNC Cords",
    "USB Cords",
    "Aux Wires",
    "Customised Wires",
    "Moulded gromets",
    "Gromets",
    "Wire Harness"
  ];

  // Sort the data based on the type order
  jsonData.sort((a, b) => {
    const typeA = a.name.trim();
    const typeB = b.name.trim();
    return typeOrder.indexOf(typeA) - typeOrder.indexOf(typeB);
  });

  return jsonData;
}


function addChildToParent(objects: any[]): any[] {
  try {
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
  catch (e) {
    return [];
  }
}


export { sortData, setDataParents, setDataChild, trimChild, findObjectById, removeIdField, searchItemsByParent, addChildToParent }
//Temp.slice(0, 4)