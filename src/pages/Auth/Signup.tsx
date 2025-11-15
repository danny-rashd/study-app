import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonLoading,
    IonPage,
    IonTitle,
    IonToast,
    IonToolbar
} from '@ionic/react';
import {useState} from 'react';
import {useHistory} from 'react-router';
import './Signup.css';

const Signup: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const history = useHistory();

    const handleBack = () => {
        history.push('/login');
    };

    const handleSignup = async () => {
        if (!name || !email || !password || !confirmPassword) {
            setToastMessage('Please fill in all fields');
            setShowToast(true);
            return;
        }

        if (password !== confirmPassword) {
            setToastMessage('Passwords do not match');
            setShowToast(true);
            return;
        }

        if (password.length < 6) {
            setToastMessage('Password must be at least 6 characters');
            setShowToast(true);
            return;
        }

        setShowLoading(true);

        // Mock API call
        setTimeout(() => {
            setShowLoading(false);
            localStorage.setItem('user', JSON.stringify({name, email}));
            setToastMessage('Account created successfully!');
            setShowToast(true);

            setTimeout(() => {
                history.push('/tabs/home');
            }, 1500);
        }, 1500);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" fill="clear" onClick={handleBack}>
                        Back
                    </IonButton>
                    <IonTitle>Sign Up</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>StudyApp</h1>
                <IonItem>
                    <IonLabel position="stacked">Full Name</IonLabel>
                    <IonInput
                        type="text"
                        value={name}
                        onIonChange={(e) => setName(e.detail.value!)}
                        placeholder="John Doe"
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput
                        type="email"
                        value={email}
                        onIonChange={(e) => setEmail(e.detail.value!)}
                        placeholder="your@email.com"
                    />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput
                        type="password"
                        value={password}
                        onIonChange={(e) => setPassword(e.detail.value!)}
                        placeholder="••••••••"
                    />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Confirm Password</IonLabel>
                    <IonInput
                        type="password"
                        value={confirmPassword}
                        onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                        placeholder="••••••••"
                    />
                </IonItem>

                <IonButton expand="block" className="ion-margin-top" onClick={handleSignup}>
                    Sign Up
                </IonButton>

                <p className="ion-text-center ion-margin-top">
                    Already have an account?{' '}
                    <a href="/login">Login</a>
                </p>

                <IonLoading isOpen={showLoading} message={'Creating account...'}/>

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    color={toastMessage.includes('successfully') ? 'success' : 'danger'}
                />

            </IonContent>
        </IonPage>
    );
};

export default Signup;