import { IonContent, IonPage, IonButton, IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import DrinkFormModal from '../components/DrinkForm/DrinkFormModal';
import Header from '../components/Header.jsx';
import { PlusCircle } from 'react-bootstrap-icons';
import { deleteDrink, getDrinks } from '../requests/drinks';
import DrinkCard from '../components/DrinckCard';

const DrinkListPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [drinkToEdit, setDrinkToEdit] = useState('');

  const fetchDrinks = async () => {
    try {
      const data = await getDrinks();
      setDrinks(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des boissons:', error);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDrink(id);
      const updatedDrinks = drinks.filter((drink) => drink._id !== id);
      setDrinks(updatedDrinks);
    } catch (error) {
      console.error('Erreur lors de la suppression de la boisson:', error);
    }
  };

  const handleEdit = (drink) => {
    setOpenModal(true);
    setDrinkToEdit(drink);
  };

  return (
    <IonPage>
      <Header />
      <IonContent>
        {drinks.map((drink) => (
          <DrinkCard key={drink._id} drink={drink} onDelete={handleDelete} onEdit={() => handleEdit(drink)} />
        ))}

        <IonButton
          onClick={() => {
            setOpenModal(true);
            setDrinkToEdit('');
          }}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            borderRadius: '50%',
          }}
        >
          <PlusCircle size={30} />
        </IonButton>
      </IonContent>

      <IonModal isOpen={openModal} onDidDismiss={() => setOpenModal(false)}>
        <DrinkFormModal
          onCancel={() => setOpenModal(false)}
          onSuccess={() => setOpenModal(false)}
          drinkToEdit={drinkToEdit}
          fetchDrinks={fetchDrinks}
        />
      </IonModal>
    </IonPage>
  );
};

export default DrinkListPage;
