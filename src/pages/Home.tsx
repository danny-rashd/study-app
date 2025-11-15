import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonChip,
    IonContent,
    IonHeader,
    IonLabel,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import {useState} from 'react';
import {mockSuggestedNotes} from '../data/mockData';

const Home: React.FC = () => {
    const [searchText, setSearchText] = useState('');

    const filteredNotes = mockSuggestedNotes.filter((note) =>
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.subject.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Suggested Notes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonSearchbar
                    value={searchText}
                    onIonChange={(e) => setSearchText(e.detail.value!)}
                    placeholder="Search notes..."
                />

                {filteredNotes.map((note) => (
                    <IonCard key={note.id} button>
                        <IonCardHeader>
                            <IonCardTitle>{note.title}</IonCardTitle>
                            <IonCardSubtitle>
                                <IonChip color="primary">
                                    <IonLabel>{note.subject}</IonLabel>
                                </IonChip>
                            </IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>{note.description}</IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default Home;