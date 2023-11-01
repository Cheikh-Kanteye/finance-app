const generateID = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let generatedID = "";

  for (let i = 0; i < 8; i++) {
    generatedID += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }

  return generatedID;
};

export default generateID;
