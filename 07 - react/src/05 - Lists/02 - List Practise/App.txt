import List from "./5B - List Practise/List"
function App() {

  const drinks = [
    { id: 1, name: "coffee", calories: 5 },
    { id: 2, name: "tea", calories: 2 },
    { id: 3, name: "juice", calories: 120 },
    { id: 4, name: "milk", calories: 60 },
  ];
  const snacks = [
    { id: 5, name: "Chips", calories: 150 },
    { id: 6, name: "cookies", calories: 200 },
    { id: 7, name: "Popcorn", calories: 90 },
  ];
  const fastFood = [
    { id: 8, name: "burger", calories: 300 },
    { id: 9, name: "burger", calories: 250 },
    { id: 10, name: "pizza", calories: 400 },
  ];
  const desserts = [
    { id: 11, name: "cake", calories: "250" },
    { id: 12, name: "ice cream", calories: "180" },
    { id: 13, name: "brownie", calories: "300" },
  ];

  const indianFoods = [
    { id: 14, name: "biryani", calories: 500 },
    { id: 15, name: "masala dosa", calories: 250 },
    { id: 16, name: "paneer butter masala", calories: 450 },
  ];

  const mixed = [
    { id: 20, name: "A", calories: 100 },
    { id: 21, name: "B", calories: "150" },
    { id: 22, name: "C", calories: null },
  ];
  return (
    <>
      <List items={drinks} category="Drinks" />
      <List items={snacks} category="Snacks" />
      <List items={fastFood} category="FastFood" />
      <List items={desserts} category="Desserts" />
      <List items={indianFoods} category="IndianFoods" />
      <List items={mixed} category="Mixed" />

    </>
  )
}
export default App
