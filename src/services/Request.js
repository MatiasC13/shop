import discos from "../utils/discsMock.js";

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(discos);
    }, 2000);
  });
};

export default getItems;
