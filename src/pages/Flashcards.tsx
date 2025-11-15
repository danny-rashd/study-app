import {
    IonButton,
    IonCard,
    IonCardContent,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import {arrowBack, arrowForward} from 'ionicons/icons';
import {useState} from 'react';
import {mockFlashcards} from '../data/mockData';
import './Flashcards.css';

const Flashcards: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const currentCard = mockFlashcards[currentIndex];

    const nextCard = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev + 1) % mockFlashcards.length);
    };

    const prevCard = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev - 1 + mockFlashcards.length) % mockFlashcards.length);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Flashcards</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <div className="flashcard-container">
                    <IonChip color="secondary">
                        <IonLabel>{currentCard.subject}</IonLabel>
                    </IonChip>

                    <IonCard className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
                        <IonCardContent>
                            <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                                <div className="card-front">
                                    <h2>Question</h2>
                                    <p>{currentCard.front}</p>
                                    <small>Tap to reveal answer</small>
                                </div>
                                <div className="card-back">
                                    <h2>Answer</h2>
                                    <p>{currentCard.back}</p>
                                </div>
                            </div>
                        </IonCardContent>
                    </IonCard>
                    <div className="navigation-buttons">
                        <IonButton onClick={prevCard} disabled={currentIndex === 0}>
                            <IonIcon icon={arrowBack}/>
                            Previous
                        </IonButton>
                        <span>
                            {currentIndex + 1} / {mockFlashcards.length}
                        </span>
                        <IonButton onClick={nextCard} disabled={currentIndex === mockFlashcards.length - 1}>
                            Next
                            <IonIcon icon={arrowForward}/>
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Flashcards;