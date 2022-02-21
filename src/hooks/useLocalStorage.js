import React, {useState,useEffect} from "react";
const defaultTodos = [
  { id: 1, text: "Bañarme", completed: true },
  { id: 2, text: "Estudiar", completed: false },
  { id: 3, text: "Comer", completed: false },
  { id: 4, text: "Dormir", completed: false },
];
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageTodos);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  const saveItem = (newTodos) => {
    const stringfiedItem = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringfiedItem);
    setItem(newTodos);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
