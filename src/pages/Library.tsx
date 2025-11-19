import {
    IonButton,
    IonButtons,
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
    IonModal,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToast,
    IonToolbar,
} from '@ionic/react';
import {add, close, documentText} from 'ionicons/icons';
import {useState} from 'react';
import {mockDocuments, pdfFiles} from '../data/mockData';

const Library: React.FC = () => {
    const [documents, setDocuments] = useState(mockDocuments);
    const [searchText, setSearchText] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');
    const [filter, setFilter] = useState<'all' | 'pdf' | 'doc' | 'txt'>('all');
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
    const [showPdfModal, setShowPdfModal] = useState(false);
    const [currentDocName, setCurrentDocName] = useState<string>('');

    const handleFileUpload = () => {
        setShowLoading(true);

        setTimeout(() => {
            const newDoc = {
                id: documents.length + 1,
                filename: `New_Document_${documents.length + 1}.pdf`,
                type: 'pdf' as const,
                date: new Date().toISOString().split('T')[0],
                size: '1.5 MB',
                subject: 'General',
            };

            setDocuments([newDoc, ...documents]);
            setShowLoading(false);
            setToastMessage('Document uploaded successfully!');
            setToastColor('success');
            setShowToast(true);
        }, 2000);
    };

    const handleDocumentClick = (doc: typeof documents[0]) => {
        const pdfUrl = pdfFiles[doc.filename];

        if (pdfUrl) {
            // Open PDF in a new tab / native viewer
            window.open(pdfUrl, "_blank");
        } else {
            setToastMessage(`PDF file "${doc.filename}" not found`);
            setToastColor('danger');
            setShowToast(true);
        }
    };

    const closePdfModal = () => {
        setShowPdfModal(false);
        setSelectedPdf(null);
        setCurrentDocName('');
    };

    const filteredDocs = documents.filter((doc) => {
        const matchesSearch = doc.filename.toLowerCase().includes(searchText.toLowerCase());
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
                    <IonCard key={doc.id}>
                        <IonCardHeader>
                            <IonCardTitle
                                style={{cursor: 'pointer'}} // optional: show pointer
                                onClick={() => handleDocumentClick(doc)}
                            >
                                <IonIcon icon={documentText}/> {doc.filename}
                            </IonCardTitle>
                            <IonCardSubtitle>
                                {doc.date} • {doc.size}
                            </IonCardSubtitle>
                            <IonCardSubtitle>
                                <IonChip color="primary">
                                    <IonLabel>{doc.subject}</IonLabel>
                                </IonChip>
                            </IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                ))}

                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={handleFileUpload}>
                        <IonIcon icon={add}/>
                    </IonFabButton>
                </IonFab>

                <IonLoading isOpen={showLoading} message={'Uploading document...'}/>

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    color={toastColor}
                />

                {/* Fullscreen PDF Viewer Modal */}
                <IonModal isOpen={showPdfModal} onDidDismiss={closePdfModal}>
                    <IonHeader>
                        <IonToolbar color="primary">
                            <IonTitle>{currentDocName}</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={closePdfModal}>
                                    <IonIcon icon={close}/>
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {selectedPdf && (
                            <embed
                                src={selectedPdf}
                                type="application/pdf"
                                style={{width: '100%', height: '100%'}}
                            />
                        )}
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default Library;