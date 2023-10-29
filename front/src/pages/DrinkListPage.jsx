import { IonContent, IonPage, IonButton, IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import DrinkFormModal from '../components/DrinkForm/DrinkFormModal';
import Header from '../components/Header.jsx';
import { PlusCircle } from 'react-bootstrap-icons';
import { getDrinks } from '../requests/drinks';
import DrinkCard from '../components/DrinckCard';

const DrinkListPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchDrinks() {
      try {
        const data = await getDrinks();
        setDrinks(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des boissons:', error);
      }
    }

    fetchDrinks();
  }, []);

  return (
    <IonPage>
      <Header />
      <IonContent>
        {drinks.map((drink) => (
          <DrinkCard key={drink._id} drink={drink} />
        ))}

        <IonButton
          onClick={() => setOpenModal(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            borderRadius: '50%'
          }}
        >
          <PlusCircle size={30} />
        </IonButton>
      </IonContent>

      <IonModal isOpen={openModal} onDidDismiss={() => setOpenModal(false)}>
        <DrinkFormModal onCancel={() => setOpenModal(false)} onSuccess={() => setOpenModal(false)} />
      </IonModal>
    </IonPage>
  );
};

export default DrinkListPage;
