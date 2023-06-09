const MenuItem = ({ item }) => {
  const { price, image, recipe, name } = item;
  
  return (
    <div className="flex space-x-2">
      <img
        className="w-[100px] rounded-b-[120px] rounded-tr-[120px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
