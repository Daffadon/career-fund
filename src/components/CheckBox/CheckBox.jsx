import { fontType } from '../Text/text';
const CheckBox = ({ item, checked, setChecked }) => {
  const handleInputChange = (event) => {
    const { id, checked } = event.target;
    setChecked((prev) => ({ ...prev, [id]: checked }));
  };
  return (
    <div className="flex flex-col mt-4">
      {item.map((name) => {
        return (
          <div key={name} className="flex items-center mb-4">
            <input
              id={name}
              type="checkbox"
              // checked={checked[name] || false}
              onChange={handleInputChange}
              className="w-6 h-6 text-blue-600 bg-white border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className={`${fontType['h4']} text-neutral50 ml-4`}>{name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBox;
