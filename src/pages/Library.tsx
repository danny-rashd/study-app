import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonChip,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonLabel,
    IonLoading,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToast,
    IonToolbar,
} from '@ionic/react';
import {add, documentText} from 'ionicons/icons';
import {useState} from 'react';
import {mockDocuments} from '../data/mockData';

const Library: React.FC = () => {
    const [documents, setDocuments] = useState(mockDocuments);
    const [searchText, setSearchText] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [filter, setFilter] = useState<'all' | 'pdf' | 'doc' | 'txt'>('all');

    const handleFileUpload = () => {
        // Mock file upload
        setShowLoading(true);

        setTimeout(() => {
            const newDoc = {
                id: documents.length + 1,
                name: `New_Document_${documents.length + 1}.pdf`,
                type: 'pdf' as const,
                date: new Date().toISOString().split('T')[0],
                size: '1.5 MB',
            };

            setDocuments([newDoc, ...documents]);
            setShowLoading(false);
            setShowToast(true);
        }, 2000);
    };

    const filteredDocs = documents.filter((doc) => {
        const matchesSearch = doc.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesFilter = filter === 'all' || doc.type === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>My Library</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonSearchbar
                    value={searchText}
                    onIonChange={(e) => setSearchText(e.detail.value!)}
                    placeholder="Search documents..."
                />

                <div className="ion-padding-horizontal">
                    <IonChip
                        color={filter === 'all' ? 'primary' : 'medium'}
                        onClick={() => setFilter('all')}
                    >
                        <IonLabel>All</IonLabel>
                    </IonChip>
                    <IonChip
                        color={filter === 'pdf' ? 'primary' : 'medium'}
                        onClick={() => setFilter('pdf')}
                    >
                        <IonLabel>PDFs</IonLabel>
                    </IonChip>
                    <IonChip
                        color={filter === 'doc' ? 'primary' : 'medium'}
                        onClick={() => setFilter('doc')}
                    >
                        <IonLabel>Docs</IonLabel>
                    </IonChip>
                    <IonChip
                        color={filter === 'txt' ? 'primary' : 'medium'}
                        onClick={() => setFilter('txt')}
                    >
                        <IonLabel>Text</IonLabel>
                    </IonChip>
                </div>

                {filteredDocs.map((doc) => (
                    <IonCard key={doc.id} button>
                        <IonCardHeader>
                            <IonCardTitle>
                                <IonIcon icon={documentText}/> {doc.name}
                            </IonCardTitle>
                            <IonCardSubtitle>
                                {doc.date} • {doc.size}
                            </IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                ))}

                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={handleFileUpload}>
                        <IonIcon icon={add}/>
                    </IonFabButton>
                </IonFab>

                <IonLoading
                    isOpen={showLoading}
                    message={'Uploading document...'}
                />

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message="Document uploaded successfully!"
                    duration={2000}
                    color="success"
                />
            </IonContent>
        </IonPage>
    );
};

export default Library;