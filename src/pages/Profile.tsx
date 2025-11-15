import {
    IonAlert,
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {useState} from 'react';
import {useHistory} from 'react-router';
import './Profile.css';

const Profile: React.FC = () => {
    const [showLogoutAlert, setShowLogoutAlert] = useState(false);
    const history = useHistory();

    // Get user from localStorage (mock)
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userName = user.name || user.email?.split('@')[0] || 'Student';
    const userEmail = user.email || 'student@example.com';

    const handleLogout = () => {
        localStorage.removeItem('user');
        history.push('/login');
    };

    // Mock Statistics
    const stats = {
        documentsUploaded: 12,
        flashcardsStudied: 156,
        studyStreak: 7,
        hoursStudied: 24,
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">

                {/* Profile Header */}
                <div className="profile-header">
                    <img
                        src={`https://ui-avatars.com/api/?name=${userName}&background=3880ff&color=fff&size=128`}
                        alt="Profile"
                        className="profile-avatar"
                    />
                    <h2>{userName}</h2>
                    <p>{userEmail}</p>
                </div>
                <h2 className="section-title">Study Statistics</h2>

                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>{stats.documentsUploaded}</h3>
                        <p>Documents</p>
                    </div>

                    <div className="stat-card">
                        <h3>{stats.flashcardsStudied}</h3>
                        <p>Cards Studied</p>
                    </div>

                    <div className="stat-card">
                        <h3>{stats.studyStreak}</h3>
                        <p>Study Streak</p>
                    </div>

                    <div className="stat-card">
                        <h3>{stats.hoursStudied}h</h3>
                        <p>Total Hours</p>
                    </div>
                </div>

                {/* Account Settings */}
                <h2 className="section-title">Account Settings</h2>

                <IonItem button>
                    <IonLabel>
                        <h3>Edit Profile</h3>
                        <p>Update your personal information</p>
                    </IonLabel>
                </IonItem>

                <IonItem button>
                    <IonLabel>
                        <h3>Email Settings</h3>
                        <p>Manage email preferences</p>
                    </IonLabel>
                </IonItem>

                <IonItem button>
                    <IonLabel>
                        <h3>Change Password</h3>
                        <p>Update your password</p>
                    </IonLabel>
                </IonItem>

                <IonItem button>
                    <IonLabel>
                        <h3>Notifications</h3>
                        <p>Manage notification settings</p>
                    </IonLabel>
                </IonItem>

                {/* Support */}
                <h2 className="section-title">Support</h2>

                <IonItem button>
                    <IonLabel>
                        <h3>Help & Support</h3>
                        <p>Get help with the app</p>
                    </IonLabel>
                </IonItem>

                <IonItem button>
                    <IonLabel>
                        <h3>Terms & Conditions</h3>
                        <p>Read our terms</p>
                    </IonLabel>
                </IonItem>

                <IonItem button>
                    <IonLabel>
                        <h3>Privacy Policy</h3>
                        <p>Read our privacy policy</p>
                    </IonLabel>
                </IonItem>

                {/* Logout Button */}
                <IonButton
                    expand="block"
                    color="danger"
                    className="ion-margin-top"
                    onClick={() => setShowLogoutAlert(true)}
                >
                    Logout
                </IonButton>

                <p className="ion-text-center ion-margin-top">Study App v1.0.0</p>

                {/* Logout Confirmation */}
                <IonAlert
                    isOpen={showLogoutAlert}
                    onDidDismiss={() => setShowLogoutAlert(false)}
                    header={'Logout'}
                    message={'Are you sure you want to logout?'}
                    buttons={[
                        {text: 'Cancel', role: 'cancel'},
                        {text: 'Logout', role: 'confirm', handler: handleLogout},
                    ]}
                />

            </IonContent>
        </IonPage>
    );
};

export default Profile;